import { useEffect, useState } from "react"
import CategorySidebar from "../../../components/product/CategorySidebar";
import ProductTopbar from "../../../components/product/ProductTopbar";
import Products from "../../../components/product/Products";
import { Category } from "../../../types/category";
import { useAuth } from "../../../hooks/useAuth";
import { ListCardSkeleton, StatCardSkeleton } from "../../../components/loading";
import { getCategoriesByClub } from "../../../api/category";
import { getProductsByCategory } from "../../../api/product";
import { Product as ProductType } from "../../../types/product";

const Product = () => {
  const { user, isLoading } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>()
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productLoading, setProductLoading] = useState(false);

  const fetchCategories = async () => {
    if (!user?.club.id) return
    const response = await getCategoriesByClub(user?.club.id || '');
    setCategories(response);
    setCurrentCategory(response[0].id);
  }

  useEffect(() => {
    fetchCategories();
  }, [isLoading])

  const fetchProduct = async () => {
    if (!currentCategory) return
    setProductLoading(true);
    const response = await getProductsByCategory(currentCategory);
    setProducts(response);
    setProductLoading(false);
  }

  useEffect(() => {
    fetchProduct();
  }, [currentCategory])

  // Yeni eklenen refresh fonksiyonları
  const refreshProducts = () => {
    fetchProduct();
  }

  const refreshCategories = () => {
    fetchCategories();
  }

  const handleProductSaved = () => {
    refreshProducts();
  }

  const handleCategorySaved = () => {
    refreshCategories();
  }

  if (isLoading) return <StatCardSkeleton />

  return (
    <div className='w-full flex'>
      <div className='w-1/4 h-auto'>
        {currentCategory && (
          <CategorySidebar 
            currentCategory={currentCategory} 
            categories={categories} 
            setCurrentCategory={setCurrentCategory} 
            user={user!} 
            onCategorySaved={handleCategorySaved}
          />
        )}
      </div>
      <div className="w-3/4 p-1 flex flex-col">
        <div className="w-full">
          <ProductTopbar 
            user={user!} 
            categories={categories} 
            onProductSaved={handleProductSaved} 
          />
        </div>
        <div className="mt-4">
          {productLoading ? (
            <ListCardSkeleton />
          ) : (
            <Products 
              products={products} 
              categories={categories} 
              onProductSaved={handleProductSaved}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Product