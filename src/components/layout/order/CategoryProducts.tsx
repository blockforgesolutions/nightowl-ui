import { Card, CardBody, IconButton, Typography } from "@material-tailwind/react"
import React from "react"
import { products } from "../../../mock_data"
import { Order } from "../../../types/order"
import { FiPlus, FiMinus } from "react-icons/fi";

interface CategoryProductsProps {
    categoryId: number
    order: Order | undefined
    setOrder: React.Dispatch<React.SetStateAction<Order | undefined>>;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ categoryId, order, setOrder }) => {
    const mockProducts = products.filter((product) => product.categoryId === categoryId)

    const handleCardClick = (e: React.MouseEvent, productId: number) => {
        e.preventDefault();
        if (order) {
            const productIndex = order.items.findIndex((item) => item.productId === productId);
            if (productIndex === -1) {
                const updatedOrder = { ...order, items: [...order.items, { productId, quantity: 1 }] };
                setOrder(updatedOrder);
            }
        }
    };

    const handleAddProduct = (e: React.MouseEvent, productId: number) => {
        e.preventDefault()
        if (order) {
            const productIndex = order.items.findIndex((item) => item.productId === productId);
            if (productIndex !== -1) {
                const updatedOrder = { ...order };
                updatedOrder.items[productIndex].quantity += 1;
                setOrder(updatedOrder);
            } else {
                const updatedOrder = { ...order, items: [...order.items, { productId, quantity: 1 }] };
                setOrder(updatedOrder);
            }
        }
    };

    const handleRemoveProduct = (e: React.MouseEvent, productId: number) => {
        e.preventDefault()

        if (order) {
            const updatedOrder = { ...order };
            const productIndex = updatedOrder.items.findIndex((item) => item.productId === productId);

            if (productIndex !== -1 && updatedOrder.items[productIndex].quantity > 1) {
                updatedOrder.items[productIndex].quantity -= 1;
                setOrder(updatedOrder);
            } else {
                updatedOrder.items = updatedOrder.items.filter((item) => item.productId !== productId);
                setOrder(updatedOrder);
            }
        }
    };

    return (
        <div className="w-full ">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4  mx-auto px-4'>
                {mockProducts && mockProducts.map((product) => (
                    <Card key={product.id} className="cursor-pointer h-auto flex" onClick={(e) => handleCardClick(e,product.id) }>
                        <CardBody className="flex justify-between items-center">
                            <div className="flex flex-col lg:space-y-8">
                                <Typography className="font-inter mt-2 font-semibold"> {product.name} </Typography>
                                <Typography className="font-inter mt-2 font-semibold"> ₺{product.price.toFixed(2)} </Typography>
                            </div>
                            {order && (
                                <div className="flex flex-col items-center shadow-sm rounded-xl shadow-gray-600">
                                    {order.items.map((item) => (
                                        <div className="flex flex-col items-center">
                                            <IconButton variant="text" className={`${product.id === item.productId ? "flex" : "hidden"}`} onClick={(e) => handleAddProduct(e, product.id)}>
                                                <FiPlus className="text-lg" />
                                            </IconButton>
                                            <div key={item.productId} className="bg-green-600 w-full flex items-center justify-center">
                                                <Typography className="font-inter text-white"> {product.id === item.productId ? item.quantity : ""} </Typography>
                                            </div>
                                            <IconButton variant="text" className={`${product.id === item.productId ? "flex" : "hidden"}`} onClick={(e) => handleRemoveProduct(e, product.id)}>
                                                <FiMinus className="text-lg" />
                                            </IconButton>
                                        </div>

                                    ))}
                                </div>
                            )}
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div >
    )
}

export default CategoryProducts