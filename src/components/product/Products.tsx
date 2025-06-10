import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Dialog, DialogFooter, DialogHeader, IconButton, Typography } from '@material-tailwind/react';
import { IoColorFillOutline } from "react-icons/io5";
import { Product } from '../../types/product';
import { Pen, Trash2 } from 'lucide-react';
import { deleteProduct } from '../../api/product';
import ProductForm from './ProductForm';
import { Category } from '../../types/category';
import { CgClose } from 'react-icons/cg';

interface ProductsProps {
    products: Product[]
    categories: Category[]
    onProductSaved?: () => void
}

const Products: React.FC<ProductsProps> = ({ products, categories, onProductSaved }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"delete" | "update">("update");
    const [selectedProduct, setSelectedProduct] = useState<Product>();

    const handleUpdateProductModel = (product: Product) => {
        setSelectedProduct(product);
        setModalType("update");
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalType("update");
    }

    const handleDeleteProductModal = (product: Product) => {
        setSelectedProduct(product);
        setModalType("delete");
        setModalOpen(true);
    }

    const handleDelete = async () => {
        if (!selectedProduct) return
        await deleteProduct(selectedProduct?.id);
        if (onProductSaved) {
            onProductSaved();
        }
    }

    const renderModal = () => {
        if (!modalOpen) return null;

        switch (modalType) {
            case "update":
                return (
                    <Dialog open={modalOpen} handler={handleCloseModal}>
                        <ProductForm handleOpen={handleCloseModal} product={selectedProduct} categories={categories} onProductSaved={onProductSaved} />
                    </Dialog>
                );
            case "delete":
                return (
                    <Dialog open={modalOpen} handler={handleCloseModal}>
                        <DialogHeader className='flex justify-between items-start'>
                            <div className='flex flex-col'>
                                <Typography className='font-onest' variant='h5'>
                                    Are you sure you want to delete this product?
                                </Typography>
                            </div>
                            <IconButton variant='text' onClick={handleCloseModal}>
                                <CgClose className='text-xl text-red-600' />
                            </IconButton>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                className="mr-1 capitalize font-onest"
                                onClick={handleCloseModal}
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button
                                className='font-onest capitalize bg-onBar text-gray-50'
                                onClick={handleDelete}
                            >
                                <span>Delete</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                )
            default:
                return null;
        }
    }

    return (
        <div className='w-full h-screen '>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 container mx-auto px-4'>
                {products && products.map((product) => (
                    <Card key={product.id} className="cursor-pointer h-auto shadow-sm rounded-md border border-gray-200 ">
                        <CardHeader className='flex mt-4 shadow-none justify-between items-center gap-2'>
                            <IconButton variant='text' onClick={() => handleUpdateProductModel(product)}>
                                <Pen className='text-gray-600' size={16} />
                            </IconButton>
                            <IconButton variant='text'>
                                <IoColorFillOutline className='text-xl text-gray-600' />
                            </IconButton>
                            <IconButton variant='text' onClick={() => handleDeleteProductModal(product)}>
                                <Trash2 className='text-gray-600' size={16} />
                            </IconButton>
                        </CardHeader>
                        <div className='px-4'>
                            <hr />
                        </div>
                        <CardBody className='flex flex-col'>
                            <div className='flex flex-col justify-center items-center'>
                                <Typography className='text-center font-onest font-semibold'>
                                    {product.name}
                                </Typography>
                                <Typography variant='small' className='font-onest'> {product.unit} </Typography>
                            </div>
                            <div className='mt-2'>
                                <Typography variant='h6' className='text-green-600 font-onest'> ₺{product.price.toFixed(2)} </Typography>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
            {renderModal()}
        </div>
    )
}

export default Products