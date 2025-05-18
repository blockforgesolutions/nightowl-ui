import React from "react"
import { Category } from "../../../types/category"
import { Button, Typography } from "@material-tailwind/react"

interface CategorybarProps {
    categories: Category[]
    currentCategory: number,
    setCurrentCategory: (id: number) => void
}

const Categorybar: React.FC<CategorybarProps> = ({ categories, currentCategory, setCurrentCategory }) => {
    return (
        <div className="w-full p-2">
            <div className="grid lg:grid-cols-6 mx-auto">
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        className={`w-full mt-1 rounded-none ${category.id === currentCategory ? "border-b-4 border-green-600":""}`}
                        style={{backgroundColor: (currentCategory === category.id ? "white" : category.color)}}
                        onClick={() => setCurrentCategory(category.id)}
                    >
                        <Typography color={currentCategory === category.id ? "gray" : "white"} className="font-serif font-semibold"> {category.title} </Typography>
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default Categorybar