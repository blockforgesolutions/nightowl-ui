import { Button, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Option, Select, Typography } from '@material-tailwind/react'
import React from 'react'
// import { areas } from '../../mock_data'
import { CgClose } from 'react-icons/cg'
import { Product } from '../../types/product'
import { newProduct, updateProduct } from '../../api/product'
import { Category } from '../../types/category'

interface ProductFromProps {
    product?: Product
    handleOpen: () => void
    club?: string
    categories: Category[]
    onProductSaved?: () => void 
}

interface FormData {
    name: string,
    unit: string,
    price: number,
    club: string
    category: string
}

const ProductForm: React.FC<ProductFromProps> = ({ product, handleOpen, club, categories, onProductSaved }) => {
    const [formData, setFormData] = React.useState<FormData>({
        name: product ? product.name : '',
        unit: product ? product.unit : '',
        price: product ? product.price : 0,
        club: product ? product.club.id : club!,
        category: product ? product.category.id : '',
    });

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: field === 'price' ? Number(value) : value
        }));
    };

    const handleCategoryChange = (value: string | undefined) => {
        if (value) {
            setFormData((prev) => ({ ...prev, category: value }));
        }
    };

    const handleSubmit = async () => {
        try {
            if (!product || club) {
                const response = await newProduct(formData);
                console.log(response);
            } else {
                const response = await updateProduct(product.id, {
                    name: formData.name,
                    category: formData.category,
                    price: formData.price,
                    unit: formData.unit
                });
                console.log(response);
            }
            
            if (onProductSaved) {
                onProductSaved();
            }
            
            handleOpen();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    }

    return (
        <div className='p-2'>
            <DialogHeader className='flex justify-between items-start'>
                <div className='flex flex-col'>
                    <Typography className='font-onest' variant='h5'>  {product ? "Update Product" : "Add Product"}  </Typography>
                    <Typography className='font-onest' variant='small'> {product ? "Enter the details of the product you want to update" : "Enter the details of the new product you want to add"} </Typography>
                </div>
                <IconButton variant='text' onClick={handleOpen}>
                    <CgClose className='text-xl text-red-600' />
                </IconButton>
            </DialogHeader>
            <DialogBody className='flex flex-col'>
                <div className='flex gap-4 mt-4'>
                    <Input
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        label='Name'
                        value={formData.name}
                        type='text'
                        crossOrigin={undefined}
                    />
                    <Input
                        label='Unit'
                        value={formData.unit}
                        type='text'
                        crossOrigin={undefined}
                        onChange={(e) => handleInputChange("unit", e.target.value)}
                    />
                </div>
                <div className='flex gap-4'>
                    <div className='mt-4 w-full'>
                        <Input
                            label='Price'
                            value={formData.price.toString()}
                            type='number'
                            crossOrigin={undefined}
                            onChange={(e) => handleInputChange("price", e.target.value)}
                        />
                    </div>
                    <div className='mt-4 w-full'>
                        <Select
                            label="Select Category"
                            value={formData.category}
                            onChange={handleCategoryChange}
                        >
                            {categories.map((category) => (
                                <Option
                                    key={category.id}
                                    value={category.id}
                                    className="cursor-pointer"
                                >
                                    {category.title}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    className="mr-1 capitalize font-onest"
                    onClick={handleOpen}
                >
                    <span>Cancel</span>
                </Button>
                <Button className='font-onest capitalize bg-onBar text-gray-50' onClick={handleSubmit} >
                    <span> Save </span>
                </Button>
            </DialogFooter>
        </div>
    )
}

export default ProductForm