import { useState } from "react"
import { categories } from "../../../mock_data";
import CategorySidebar from "../../../components/product/CategorySidebar";
import ProductTopbar from "../../../components/product/ProductTopbar";
import Products from "../../../components/product/Products";


const Product = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0].id || 1)
  console.log(currentCategory);

  return (
    <div className='w-full flex'>
      <div className='w-1/4 h-auto'>
        <CategorySidebar currentCategory={currentCategory} categories={categories} setCurrentCategory={setCurrentCategory} />
      </div>
      <div className="w-3/4 p-1 flex flex-col">
        <div className="w-full">
          <ProductTopbar />
        </div>
        <div className="mt-4">
          <Products categoryId={currentCategory} />
        </div>
      </div>
    </div>
  )
}

export default Product