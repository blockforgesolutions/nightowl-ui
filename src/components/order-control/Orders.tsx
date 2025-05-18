import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import React from "react"
import { CiTimer } from "react-icons/ci";
import { MdTableBar, MdChair, MdOutlinePayment } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";
import { IoPrintSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { products } from "../../mock_data";
import { Order } from "../../types/order";


interface OrdersProps {
    orders: Order[]
}


const Orders: React.FC<OrdersProps> = ({ orders }) => {
    const orderTotals = orders.map(order => {
        const total = order.items.reduce((itemTotal, item) => {
            const product = products.find(product => product.id === item.productId);
            return itemTotal + (product ? product.price * item.quantity : 0);
        }, 0);
        return { orderId: order.id, total };
    });


    return (
        <div className="flex justify-center items-center lg:mt-8">
            <div className="lg:w-3/5 lg:flex lg:gap-4">
                <Card className="w-full h-screen flex flex-col border border-gray-400/50 rounded-lg">
                    <CardHeader className="flex justify-center items-center p-2 lg:justify-start lg:items-center lg:p-0">
                        <div className="flex gap-2 lg:p-4">
                            <div className="lg:w-12 lg:h-10 flex justify-center items-center bg-gradient-to-b from-green-600 to-green-300 rounded-md shadow-md shadow-gray-400">
                                <CiTimer className="text-white font-bold text-3xl" />
                            </div>
                            <div className="flex items-center">
                                <Typography variant="h6" className="font-serif"> Hazırlanıyor - {orders.length} </Typography>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody>
                        {orders.map((order) => (
                            <div key={order.id} className="w-full flex lg:gap-8 gap-2 lg:p-6 border border-gray-400/50 rounded-lg mt-4">
                                <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
                                    <Typography className="text-red-500 font-bold font-inter" variant="small"> 01:25:00 </Typography>
                                    <div className="flex lg:mt-4 text-green-600 text-2xl">
                                        <MdChair />
                                        <MdTableBar />
                                        <MdChair />
                                    </div>
                                    <Link to={`/order/${order.tableId}`} className="mt-4">
                                        <Typography variant="small" className="font-inter font-semibold"> Sipariş Detayı </Typography>
                                    </Link>
                                </div>
                                <div className="w-full flex flex-col gap-4">
                                    <div className="w-full flex items-center justify-between">
                                        <Typography variant="small" className="font-inter font-semibold"> {order.tableId} </Typography>
                                        <Typography variant="small" className="font-inter font-semibold"> #Order number </Typography>
                                    </div>
                                    <div className="flex items-center">
                                        {orderTotals.map((total) => (
                                            <Typography key={total.orderId} variant="h6" className="font-semibold font-inter">
                                                {order.id === total.orderId ? `₺${total.total.toFixed(2)}` : ""}
                                            </Typography>
                                        ))}
                                    </div>
                                    <div className="flex items-center">
                                        <Button variant="text">
                                            <IoPrintSharp className="text-2xl text-green-600" />
                                        </Button>
                                        <Button variant="text">
                                            <MdOutlinePayment className="text-2xl text-green-600" />
                                        </Button>
                                        <Button variant="text" className="lg:mb-2">
                                            <GiHotMeal className="text-2xl text-green-600" />
                                        </Button>
                                        <Button variant="text">
                                            <SlOptions className="text-xl text-green-600" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardBody>
                </Card>
                <Card className="w-full h-screen flex flex-col border border-gray-400/50 rounded-lg">
                    <CardHeader>
                        <div className="flex gap-2 lg:p-4">
                            <div className="lg:w-12 lg:h-10 flex justify-center items-center bg-gradient-to-b from-green-600 to-green-300 rounded-md shadow-md shadow-gray-400">
                                <GiHotMeal className="text-white font-bold text-3xl" />
                            </div>
                            <div className="flex items-center">
                                <Typography variant="h6" className="font-serif"> Açık Siparişler </Typography>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div >
    )
}

export default Orders