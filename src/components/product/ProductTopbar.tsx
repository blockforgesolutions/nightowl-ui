import { Button, Dialog, Input, Typography } from '@material-tailwind/react'
import { useState } from 'react';
import { MdLibraryAdd } from "react-icons/md";
import { Employee } from '../../types/employee';
import ProductForm from './ProductForm';
import { Category } from '../../types/category';

interface ProductTopbarProps {
    user: Employee,
    categories: Category[]
    onProductSaved?: () => void
}

const ProductTopbar = ({ user,categories, onProductSaved }: ProductTopbarProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"new" | "update">("new");

    // const handleUpdatePeroductModal = (product: Product) => {
    //     setSelectedProduct(product);
    //     setModalType("update");
    //     setModalOpen(true);
    // }

    const handleNewProductOpen = () => {
        setModalType("new");
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalType("new");
    }

    const renderModal = () => {
        if (!modalOpen) return null;

        switch (modalType) {
            case "new":
                return (
                    <Dialog open={modalOpen} handler={handleCloseModal}>
                        <ProductForm handleOpen={handleCloseModal} club={user.club.id} categories={categories} onProductSaved={onProductSaved} />
                    </Dialog>
                );
            default:
                return null;
        }
    }

    return (
        <div className='w-full p-2 flex justify-between items-center'>
            <div>
                <div className="ml-2 md:w-96">
                    <Input
                        type="text"
                        placeholder="Search product..."
                        className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 "
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "border-none" }}
                        crossOrigin={undefined}
                    />
                </div>
            </div>
            <div>
                <Button className="lg:mr-4 flex fonti gap-1 items-center justify-center capitalize bg-transparent text-gray-700 shadow-none"
                    onClick={handleNewProductOpen}
                >
                    <MdLibraryAdd className="text-2xl text-green-600" />
                    <Typography className="font-semibold font-serif" variant="small"> New Product </Typography>
                </Button>
            </div>

            {renderModal()}
        </div>
    )
}

export default ProductTopbar