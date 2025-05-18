import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link, NavLink, useLocation } from 'react-router-dom'
import routes from '../../../routes'

const QrMenuSidenav = () => {
    const fullPath = useLocation();
    const path = fullPath.pathname?.split("/dashboard/");
    const currentPath = path[1];

    return (
        <div className="sticky h-full lg:w-[28rem] inset-0 z-50 flex flex-col border shadow-sm shadow-gray-800 bg-gray-200/30">
            <div className="w-full flex items-center mt-4">
                <div className="w-full flex gap-4 p-4 items-center ">
                    <Link to={'/dashboard/orders'} className='flex items-center gap-2'>
                        <FaAngleLeft className="text-xl text-gray-800" />
                        <Typography className="font-inter font-semibold text-gray-800" variant="h6"> Ana Sayfa </Typography>
                    </Link>
                </div>
            </div>
            <div className='p-3'>
                <div className=' border-b border-gray-800/30' />
            </div>
            <div className='mt-2 mx-2'>
                {routes.map(({ layout, pages }, key) => (
                    <ul key={key} className='mb-4 flex flex-col'>
                        {layout === 'qr-menu' && pages.map(({ name, path, icon }) => (
                            <li key={name}>
                                <NavLink to={`/${layout}${path}`}>
                                    {() => (
                                        <Button
                                            variant={
                                                path &&
                                                    currentPath === path.split("/")[1] &&
                                                    fullPath.pathname.startsWith(`/${layout}`)
                                                    ? "gradient"
                                                    : "text"
                                            }
                                            color={
                                                path &&
                                                    currentPath === path.split("/")[1] &&
                                                    fullPath.pathname.startsWith(`/${layout}`)
                                                    ? "green"
                                                    : "black"
                                            }
                                            className={`flex items-center gap-4 px-4 capitalize`}
                                            fullWidth
                                        >
                                            <div className="text-xl">{icon}</div>
                                            <Typography className="text-sm font-serif font-semibold">
                                                {name}
                                            </Typography>
                                        </Button>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default QrMenuSidenav