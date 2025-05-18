/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Breadcrumbs, Button, IconButton, Input, Menu, MenuHandler, MenuItem, MenuList, Navbar as MtNavbar, Typography } from '@material-tailwind/react'
import { Link, useLocation } from 'react-router-dom'
import routes from '../../../routes';
import { IoPersonOutline, IoShareSocial } from 'react-icons/io5';
import { users } from '../../../mock_data';
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";



const Navbar = () => {
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const route = routes.find((route) => route.layout === layout);
  const pageName = route?.pages
    .flatMap((route: any) => (route.subPaths ? route.subPaths : route))
    .find((route: any) => route.path?.slice(1) === page);


  const user = users[0]
  return (
    <MtNavbar
      className={` transition-all sticky top-0 z-40 py-3 border-b bg-white border-gray-800/50`}
      color='transparent'
      fullWidth
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all `}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {route?.title}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {pageName?.name}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {pageName?.name}
          </Typography>
        </div>
        <div className="flex items-center gap-8">
          <div className="mr-auto md:w-56">
            <Input label="Search" crossOrigin={undefined} />
          </div>
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                bell
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New message</strong> from Laur
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    clock
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          {user ? (
            <div className=''>
              <Menu>
                <MenuHandler>
                  <Button
                    variant="filled"
                    className="flex items-center capitalize gap-2 bg-green-600/70 rounded-2xl"
                  >
                    <IoPersonOutline className='text-xl' />
                    <Typography className='font-inter font-semibold' variant='small'> {user.fullName} </Typography>
                  </Button>
                </MenuHandler>
                <MenuList className='px-6 rounded-sm'>
                  <Typography className='font-inter font-semibold' variant='small'> {user.fullName} </Typography>
                  <MenuItem className='mt-1'>
                    <Link to={`/dashboard/profile`} className='flex gap-2 items-center'>
                      <IoPersonOutline className='text-lg' />
                      <Typography className='font-inter'> Profil </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/dashboard/account`} className='flex gap-2 items-center'>
                      <MdOutlineManageAccounts className='text-lg' />
                      <Typography className='font-inter'> Hesap Bilgileri </Typography>
                    </Link>
                  </MenuItem>
                  <div>
                    <hr />
                  </div>
                  <MenuItem>
                    <Menu placement='left-start'>
                      <MenuHandler>
                        <div className='flex gap-2 items-center'>
                          <IoShareSocial />
                          <Typography> Sosyal Medya </Typography>
                        </div>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem>
                          <Link to={`/`} className='flex gap-2 items-center'>
                            <MdOutlineManageAccounts className='text-lg' />
                            <Typography className='font-inter'> Linkedin </Typography>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={`/`} className='flex gap-2 items-center'>
                            <MdOutlineManageAccounts className='text-lg' />
                            <Typography className='font-inter'> Instagram </Typography>
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </MenuItem>
                  <div>
                    <hr />
                  </div>
                  <MenuItem className='flex items-center gap-2'>
                    <BiLogOut className='text-lg' />
                    <Typography className='font-inter'> Çıkış </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          ) : (
            <Link to="/auth/sign-in" className='flex items-center'>
              <Button
                variant="text"
                color="blue-gray"
                className="hidden items-center gap-1 px-4 xl:flex normal-case"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </MtNavbar >
  )
}

export default Navbar