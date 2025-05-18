import { Button, IconButton, Typography } from "@material-tailwind/react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { products } from "../../../mock_data";
import { SlOptionsVertical } from "react-icons/sl";
import React from "react";
import { Order } from "../../../types/order";

interface OrderSidenavProps {
    order: Order | undefined,
    totalAmount: number | undefined,
    tableId: string
}

const OrderSidenav: React.FC<OrderSidenavProps> = ({ order, totalAmount, tableId }) => {
    return (
        <div className="sticky h-full lg:w-[28rem] inset-0 z-50 flex flex-col border shadow-sm shadow-gray-800">
            <div className="w-full flex bg-gray-600/80">
                <div className="w-full flex gap-4 p-4 items-center ">
                    <Link to={'/dashboard/orders'}>
                        <FaAngleLeft className="text-xl text-white" />
                    </Link>
                    <Typography className="font-inter font-semibold text-white" variant="h6"> {tableId} </Typography>
                </div>
            </div>
            <div className="flex flex-col flex-grow p-2">
                <div className="flex items-center justify-between">
                    <Typography className="font-inter text-[12px] font-semibold"> Adisyon: Adisyon No </Typography>
                    <Typography className="font-inter text-[12px] flex items-center font-semibold">
                        Sipariş Durumu :
                        <Typography className="font-inter text-[12px] font-semibold text-green-600"> {order?.status} </Typography>
                    </Typography>
                </div>
                <div className="w-full flex flex-col lg:mt-4">
                    {order?.items.map((item, index) => {
                        const product = products.find((prod) => prod.id === item.productId);
                        return (
                            <Button variant="text" fullWidth key={index} className="capitalize flex flex-col lg:mt-4 border-b">
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <div className="flex justify-center items-center">
                                            <Typography className="font-inter font-semibold p-3 bg-gray-400/50 rounded-md" variant="small">
                                                {item.quantity}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="small" className="font-inter font-semibold">
                                                {product?.name || "Ürün Bulunamadı"}
                                            </Typography>
                                            <Typography className="text-[12px] font-inter"> Adet </Typography>
                                            <Typography className="text-[12px] font-inter"> username </Typography>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <Typography className="font-serif text-sm font-semibold">
                                            {product?.price ? `₺${(item.quantity * product.price).toFixed(2)}` : ""}
                                        </Typography>
                                        <IconButton variant='text'>
                                            <SlOptionsVertical className='text-md' />
                                        </IconButton>
                                    </div>
                                </div>
                            </Button>
                        );
                    })}
                </div>
            </div>
            <div className="mt-auto flex flex-col border-t">
                <div className="flex justify-between p-2">
                    <Typography className="font-serif text-gray-600 font-semibold"> Toplam Tutar </Typography>
                    <Typography className="font-serif text-gray-600 font-semibold"> ₺{totalAmount?.toFixed(2)} </Typography>
                </div>
                <div className="flex gap-2 p-2 justify-center">
                    <Button className="bg-green-600 shadow-sm shadow-gray-600 rounded-sm font-inter">
                        ÖDE ₺{totalAmount?.toFixed(2)}
                    </Button>
                    <Button className="bg-green-600 shadow-sm shadow-gray-600 rounded-sm font-inter">
                        Hızlı ÖDE ₺{totalAmount?.toFixed(2)}
                    </Button>
                    <Button className="bg-red-600 shadow-sm shadow-gray-600 rounded-sm font-inter">
                        Kaydet
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderSidenav;
