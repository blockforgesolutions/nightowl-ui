import { Button, Dialog, DialogFooter, DialogHeader, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React, { useState } from "react"
import { TbCategoryPlus } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import { Category } from "../../types/category";
import CategoryForm from "./CategoryForm";
import { Employee } from "../../types/employee";
import { Pen, Trash2 } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { deleteCategory } from "../../api/category";

interface CategorySidebarProps {
    user: Employee
    categories: Category[],
    setCurrentCategory: (id: string) => void
    currentCategory: string
    onCategorySaved?: () => void
}

const   CategorySidebar: React.FC<CategorySidebarProps> = ({ categories, setCurrentCategory, currentCategory, user, onCategorySaved }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"new" | "update" | "delete">("new");

    const handleNewCategoryOpen = () => {
        setModalType("new");
        setSelectedCategory(undefined);
        setModalOpen(true);
    }

    const handleUpdateCategoryModal = (category: Category) => {
        setSelectedCategory(category);
        setModalType("update");
        setModalOpen(true);
    }

    const handleDeleteModal = (category: Category) => {
        setSelectedCategory(category);
        setModalType("delete");
        setModalOpen(true);
    }

    const handleDelete = async () => {
        try {
            const response = await deleteCategory(selectedCategory?.id || "");
            console.log(response);
            setModalOpen(false);
            if (onCategorySaved) {
                onCategorySaved();
            }
        } catch (error) {
            console.error("Delete error:", error);
        }
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedCategory(undefined);
        setModalType("new");
    }

    const renderModal = () => {
        if (!modalOpen) return null;

        switch (modalType) {
            case "new":
                return (
                    <Dialog open={modalOpen} handler={handleCloseModal}>
                        <CategoryForm handleOpen={handleCloseModal} club={user.club.id} onCategorySaved={onCategorySaved} />
                    </Dialog>
                );
            
            case "update":
                return (
                    <Dialog open={modalOpen} handler={handleCloseModal}>
                        <CategoryForm handleOpen={handleCloseModal} category={selectedCategory} onCategorySaved={onCategorySaved} />
                    </Dialog>
                );
            
            case "delete":
                return (
                    <Dialog open={modalOpen} handler={handleCloseModal}>
                        <DialogHeader className='flex justify-between items-start'>
                            <div className='flex flex-col'>
                                <Typography className='font-onest' variant='h5'>
                                    Are you sure you want to delete this category?
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
                );
            
            default:
                return null;
        }
    }

    return (
        <div className="w-full sticky h-screen flex flex-col border border-onBar/50 lg:mt-2 rounded-lg">
            <div className="w-full p-1 flex justify-between items-center">
                <Button className="flex gap-1 capitalize items-center" variant="text" onClick={handleNewCategoryOpen}>
                    <TbCategoryPlus className="text-xl" />
                    <Typography variant="h6" className="font-onest"> Add Category </Typography>
                </Button>
            </div>

            <div className="px-4">
                <hr />
            </div>

            <div className="flex flex-col mt-4">
                {categories.map((category) => (
                    <Button
                        onClick={() => setCurrentCategory(category.id)}
                        key={category.id}
                        variant="text"
                        style={{ width: 'auto', height: 'auto', padding: '0.5rem 1rem' }}
                        className={`flex m-2 justify-between items-center capitalize ${currentCategory === category.id ? "bg-gray-300 " : ""}`}
                    >
                        <div className="flex gap-2 item-center">
                            <BiCategory style={{ color: category.color }} className="text-2xl" />
                            <Typography className="font-onest mt-0.5" variant="small"> {category.title} </Typography>
                        </div>
                        <div>
                            <Menu>
                                <MenuHandler>
                                    <Button variant="text" className="w-8 h-8 p-0 flex justify-center items-center">
                                        <SlOptionsVertical />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem onClick={() => handleUpdateCategoryModal(category)} className="flex items-center">
                                        <Pen className="mr-2 text-green-600" size={16} />
                                        <Typography className="mt-1" variant="small">Update</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleDeleteModal(category)} className="flex items-center">
                                        <Trash2 className="mr-2 text-red-600" size={16} />
                                        <Typography className="mt-1" variant="small">Delete</Typography>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </Button>
                ))}
            </div>

            {renderModal()}
        </div>
    );
};

export default CategorySidebar;