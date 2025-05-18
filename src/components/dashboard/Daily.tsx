import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'
import { HiFire } from "react-icons/hi";
import { IoPersonOutline } from 'react-icons/io5';
import { FaChartSimple } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CgArrowsExchangeAltV } from "react-icons/cg";

interface DailyProps {
    stats: {
        totalSales: number,
        totalOrders: number,
        totalOpenedTables: number,
        totalExpenses: number
    }
}

const Daily: React.FC<DailyProps> = ({ stats }) => {
    return (
        <div className='w-full flex items-start justify-between gap-4 p-4'>
            <Card className='w-full rounded-md lg:h-36 flex bg-white'>
                <CardBody className='w-full flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='p-2 flex justify-center rounded-lg items-center bg-gradient-to-bl from-orange-600 to-orange-300'>
                            <HiFire className='text-white text-4xl' />
                        </div>
                        <div>
                            <Typography className='font-serif font-semibold' variant='small'> Bugünkü toplam satış tutarı </Typography>
                            <Typography className='font-serif text-end' variant='h4'> ₺{stats.totalSales.toFixed(2)} </Typography>
                        </div>
                    </div>
                    <div className='p-2'>
                        <hr />
                    </div>
                    <div className='flex justify-end'>
                        <Link to={'/'} className='hover:underline hover:underline-offset-2'>
                            <Typography variant='small' className='font-inter'> Gün Sonu Raporu </Typography>
                        </Link>
                    </div>
                </CardBody>
            </Card>
            <Card className='w-full rounded-md lg:h-36 flex bg-white'>
                <CardBody className='w-full flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='p-2 flex justify-center rounded-lg items-center bg-gradient-to-bl from-blue-600 to-blue-300'>
                            <IoPersonOutline className='text-white text-4xl' />
                        </div>
                        <div>
                            <Typography className='font-serif font-semibold' variant='small'> Bugün ağırlanan misafir sayısı </Typography>
                            <Typography className='font-serif text-end' variant='h4'> {stats.totalOpenedTables} </Typography>
                        </div>
                    </div>
                    <div className='p-2'>
                        <hr />
                    </div>
                </CardBody>
            </Card>
            <Card className='w-full rounded-md lg:h-36 flex bg-white'>
                <CardBody className='w-full flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='p-2 flex justify-center rounded-lg items-center bg-gradient-to-bl from-green-600 to-green-300'>
                            <FaChartSimple className='text-white text-4xl' />
                        </div>
                        <div>
                            <Typography className='font-serif font-semibold' variant='small'> Bugünkü açık satış tutarı </Typography>
                            <Typography className='font-serif text-end' variant='h4'> ₺{stats.totalOrders.toFixed(2)} </Typography>
                        </div>
                    </div>
                    <div className='p-2'>
                        <hr />
                    </div>
                </CardBody>
            </Card>
            <Card className='w-full rounded-md lg:h-36 flex bg-white'>
                <CardBody className='w-full flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='p-2 flex justify-center rounded-lg items-center bg-gradient-to-bl from-orange-600 to-orange-300'>
                            <CgArrowsExchangeAltV className='text-white text-4xl' />
                        </div>
                        <div>
                            <Typography className='font-serif font-semibold' variant='small'> Bugünkü toplam gider tutarı </Typography>
                            <Typography className='font-serif text-end' variant='h4'> ₺{stats.totalExpenses.toFixed(2)} </Typography>
                        </div>
                    </div>
                    <div className='p-2'>
                        <hr />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Daily