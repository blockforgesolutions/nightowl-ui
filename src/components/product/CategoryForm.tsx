import { Button, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Typography } from '@material-tailwind/react'
import React from 'react'
// import { areas } from '../../mock_data'
import { CgClose } from 'react-icons/cg'
import { Category } from '../../types/category'
import { newCategory, updateCategory } from '../../api/category'

interface CategoryFromProps {
    category?: Category
    handleOpen: () => void
    club?: string
    onCategorySaved?: () => void
}

interface FormData {
    title: string,
    color: string,
    club: string
}

const CategoryForm: React.FC<CategoryFromProps> = ({ category, handleOpen, club, onCategorySaved }) => {
    const [formData, setFormData] = React.useState<FormData>({
        title: category ? category.title : '',
        color: category ? category.color : '',
        club: category ? category.club : ''
    });

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        if (club) {
            await newCategory(formData.title, formData.color, club);
            if (onCategorySaved) {
                onCategorySaved();
            }
        } else {
            await updateCategory(category?.id || "", formData.title, formData.color, formData.club);
            if (onCategorySaved) {
                onCategorySaved();
            }
        }
        handleOpen();
    }

    return (
        <div className='p-2'>
            <DialogHeader className='flex justify-between items-start'>
                <div className='flex flex-col'>
                    <Typography className='font-onest' variant='h5'>  {category ? "Update Category" : "Add Category"}  </Typography>
                    <Typography className='font-onest' variant='small'> {category ? "Enter the details of the category you want to update" : "Enter the details of the new category you want to add"} </Typography>
                </div>
                <IconButton variant='text' onClick={handleOpen}>
                    <CgClose className='text-xl text-red-600' />
                </IconButton>
            </DialogHeader>
            <DialogBody className='flex flex-col'>
                <div className='flex gap-4 mt-4'>
                    <Input onChange={(e) => handleInputChange("title", e.target.value)} label='Title' defaultValue={formData ? formData.title : ""} type='text' crossOrigin={undefined} />
                    <Input label='Color' defaultValue={formData ? formData.color : ""} type='text' crossOrigin={undefined} onChange={(e) => handleInputChange("color", e.target.value)} />
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

export default CategoryForm