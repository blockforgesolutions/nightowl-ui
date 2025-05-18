import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React from "react"
import { TbCategoryPlus } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import { Category } from "../../types/category";


interface CategorySidebarProps {
    categories: Category[],
    setCurrentCategory: (id:number) => void
    currentCategory: number
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ categories, setCurrentCategory, currentCategory }) => {
    return (
        <div className="w-full h-screen flex flex-col border lg:mt-2 rounded-sm">
            <div className="w-full p-1 flex justify-between items-center">
                <Button className="flex gap-1 capitalize items-center" variant="text">
                    <TbCategoryPlus className="text-xl" />
                    <Typography variant="h6" className="font-inter"> Kategori Ekle </Typography>
                </Button>
                <div className="lg:mr-2">
                    <Menu>
                        <MenuHandler>
                            <Button variant="text">
                                <SlOptionsVertical />
                            </Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Menu Item 1</MenuItem>
                            <MenuItem>Menu Item 2</MenuItem>
                            <MenuItem>Menu Item 3</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
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
                        <div className="flex gap-1">
                            <BiCategory style={{ color: category.color }} className="text-2xl" />
                            <Typography className="font-inter font-semibold" variant="small"> {category.title} </Typography>
                        </div>
                        <div>
                            <Menu>
                                <MenuHandler>
                                    <Button variant="text" className="w-8 h-8 p-0 flex justify-center items-center">
                                        <SlOptionsVertical />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Menu Item 1</MenuItem>
                                    <MenuItem>Menu Item 2</MenuItem>
                                    <MenuItem>Menu Item 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CategorySidebar;
