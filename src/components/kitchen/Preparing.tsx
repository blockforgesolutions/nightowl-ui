import React from 'react'
import { Order } from '../../types/order'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import { MdChair, MdTableBar } from 'react-icons/md'
import { areas, products } from '../../mock_data'

interface PreparingProps {
    orders: Order[]
}

const Preparing: React.FC<PreparingProps> = ({ orders }) => {
    return (
        <div>
            {orders ? (
                <div className="grid lg:grid-cols-3 mx-auto gap-4">
                    {orders.map((order) => {
                        const area = areas.find((area) => area._id === order.areaId)
                        const table = area?.tables.find((table) => table._id === order.tableId)
                        return (
                            <Card className="gap-2 rounded-md">
                                <CardBody className="flex flex-col">
                                    <div className="flex justify-between items-center ">
                                        <div className="flex gap-4">
                                            <div className="flex lg:mt-4 text-green-600 text-2xl">
                                                <MdChair />
                                                <MdTableBar />
                                                <MdChair />
                                            </div>
                                            <div className="flex flex-col">
                                                <Typography className="font-inter font-semibold" variant='small'> username </Typography>
                                                <Typography className="font-inter" variant='small'> {area?.name} / {table?.name} </Typography>
                                            </div>
                                        </div>
                                        <div className="">
                                            <Button className="flex gap-2 items-center border h-10 capitalize rounded-md shadow-none bg-gray-200 text-gray-800" variant="filled">
                                                <Typography className="font-inter font-semibold" variant='small'> Tümü Hazır </Typography>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <hr />
                                    </div>
                                    <div className="mt-2 flex flex-col">
                                        {order.items.map((item) => {
                                            const product = products.find((prod) => prod.id === item.productId)
                                            return (
                                                <div className='flex flex-col'>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <div className="flex gap-4">
                                                            <div className="flex flex-col">
                                                                <Typography variant="small" className="text-inter font-semibold text-red-600"> Hazırlanıyor </Typography>
                                                                <div className="p-2 mt-1 rounded-sm bg-red-600 flex justify-center">
                                                                    <Typography className="font-inter font-semibold text-white" variant="small"> Timer </Typography>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col mt-5">
                                                                <Typography className="text-[12px] font-inter"> username </Typography>
                                                                <Typography className="font-inter semibold"> {item.quantity} {product?.unit} - {product?.name} </Typography>
                                                            </div>
                                                        </div>
                                                        <div className="mt-5">
                                                            <Button className="flex gap-2 items-center border h-10 capitalize rounded-md shadow-none bg-gray-200 text-gray-800" variant="filled">
                                                                <Typography className="font-inter font-semibold" variant='small'> Hazır </Typography>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <hr />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <Typography className="font-inter font-semibold" variant="h5"> Hazırlanan sipariş bulunmuyor </Typography>
                </div>
            )}
        </div>
    )
}

export default Preparing