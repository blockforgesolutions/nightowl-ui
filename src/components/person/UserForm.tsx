import { Button, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Menu, MenuHandler, MenuItem, MenuList, Option, Select, Typography } from '@material-tailwind/react'
import React from 'react'
import { Roles, User } from '../../types/user'
// import { areas } from '../../mock_data'
import { CgClose } from 'react-icons/cg'

interface UserFromProps {
    user?: User
    handleOpen: () => void

}

interface FormData {
    role: string,
    fullName: string,
    email: string,
    password?: string,
    phoneNumber: string,
    areas?: string[]
}

const roles: Roles[] = [Roles.CHECKOUT,   Roles.MANAGER, Roles.WAITER]
const CODES = ["+90", "+49", "+34", "+1"];


const UserForm: React.FC<UserFromProps> = ({ user, handleOpen }) => {
    const [formData, setFormData] = React.useState<FormData>({
        role: user?.role || "",
        fullName: user?.fullName || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
    });
    // const [selectedAreas, setSelectedAreas] = React.useState<string[]>([]);

    // const handleAreaToggle = (areaName: string) => {
    //     if (selectedAreas.includes(areaName)) {
    //         setSelectedAreas(selectedAreas.filter((area) => area !== areaName));
    //     } else {
    //         setSelectedAreas([...selectedAreas, areaName]);
    //     }
    // };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };


    return (
        <div className='p-2'>
            <DialogHeader className='flex justify-between items-start'>
                <div className='flex flex-col'>
                    <Typography className='font-onest' variant='h5'>  {user ? "Update User" : "Add User"}  </Typography>
                    <Typography className='font-onest' variant='small'> {user ? "Enter the details of the user you want to update" : "Enter the details of the new user you want to add"} </Typography>
                </div>
                <IconButton variant='text' onClick={handleOpen}>
                    <CgClose className='text-xl text-red-600' />
                </IconButton>
            </DialogHeader>
            <DialogBody className='flex flex-col'>
                <Select label='Select Role' value={formData ? formData.role : ""}>
                    {roles.map((role) => (
                        <Option> {role} </Option>
                    ))}
                </Select>
                <div className='flex gap-4 mt-4'>
                    <Input onChange={(e) => handleInputChange("role", e.target.value)} label='Full Name' defaultValue={formData ? formData.fullName : ""} type='text' crossOrigin={undefined} />
                    <Input label='Email' defaultValue={formData ? formData.email : ""} type='email' crossOrigin={undefined} />
                </div>
                <div className='flex gap-4 mt-4'>
                    <div className="relative flex w-full">
                        <Menu placement="bottom-start">
                            <MenuHandler>
                                <Button
                                    ripple={false}
                                    variant="text"
                                    color="blue-gray"
                                    className="h-10 w-14 shrink-0 rounded-r-none border border-r-0 border-blue-gray-200 bg-transparent px-3"
                                >
                                    {CODES[0]}
                                </Button>
                            </MenuHandler>
                            <MenuList className="max-h-[20rem] max-w-[18rem]">
                                <MenuItem
                                // key={CODES[0]}
                                // value={CODES[0]}
                                >
                                    {CODES[0]}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <Input
                            type="tel"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={12}
                            placeholder="5552223311"
                            className="appearance-none rounded-l-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            containerProps={{
                                className: "min-w-0",
                            }} crossOrigin={undefined}
                            defaultValue={formData ? formData.phoneNumber : ""}
                        />
                    </div>
                </div>
                {/* <div className='mt-4'>
                    <Select
                        label="Bölge Seçiniz"
                        value={selectedAreas.join(', ')}
                        onChange={() => { }}
                    >
                        {areas.map((area) => (
                            <Option
                                key={area._id}
                                onClick={() => handleAreaToggle(area.name)}
                                className={`cursor-pointer ${selectedAreas.includes(area.name) ? 'bg-blue-200' : ''}`}
                            >
                                {area.name}
                            </Option>
                        ))}
                    </Select>
                </div> */}
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    className="mr-1 capitalize font-onest"
                    onClick={handleOpen}
                >
                    <span>Cancel</span>
                </Button>
                <Button  className='font-onest capitalize bg-onBar text-gray-50' >
                    <span> Save </span>
                </Button>
            </DialogFooter>
        </div>
    )
}

export default UserForm