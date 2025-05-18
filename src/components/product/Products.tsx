import React from 'react'
import { products } from '../../mock_data'
import { Card, CardBody, CardHeader, IconButton, Typography } from '@material-tailwind/react';
import { MdOutlineFavoriteBorder, MdEdit } from 'react-icons/md';
import { IoColorFillOutline } from "react-icons/io5";

interface ProductsProps {
    categoryId: number
}

const Products: React.FC<ProductsProps> = ({ categoryId }) => {

    const mockProducts = products.filter((product) => product.categoryId === categoryId)

    return (
        <div className='w-full h-screen '>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 container mx-auto px-4'>
                {mockProducts && mockProducts.map((product) => (
                    <Card key={product.id} className="cursor-pointer h-auto shadow-sm rounded-md border border-gray-200 ">
                        <CardHeader className='flex mt-4 shadow-none justify-between items-center gap-2'>
                            <IconButton variant='text'>
                                <MdOutlineFavoriteBorder className='text-2xl text-gray-600' />
                            </IconButton>
                            <IconButton variant='text'>
                                <IoColorFillOutline className='text-2xl text-gray-600' />
                            </IconButton>
                            <IconButton variant='text'>
                                <MdEdit className='text-2xl text-gray-600' />
                            </IconButton>
                        </CardHeader>
                        <div className='px-4'>
                            <hr />
                        </div>
                        <CardBody className='flex flex-col'>
                            <div className='flex flex-col justify-center items-center'>
                                <Typography className='text-center font-inter font-semibold'>
                                    {product.name}
                                </Typography>
                                <Typography variant='small' className='font-inter'> {product.unit} </Typography>
                            </div>
                            <div className='mt-2'>
                                <Typography variant='h6' className='text-green-600 font-inter'> ₺{product.price.toFixed(2)} </Typography>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Products