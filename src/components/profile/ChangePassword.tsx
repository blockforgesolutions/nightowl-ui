import { Button, Card, Input, Typography } from '@material-tailwind/react'
import { useState } from 'react';
import { FaEye } from 'react-icons/fa6';
import Header from './Header';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [showRePassword, setShowRePassword] = useState(false);
  const handleClickReShowPassword = () => setShowRePassword(!showRePassword);

  return (
    <div className='w-full flex flex-col items-center mt-4 rounded-xl'>
      <Card className='w-1/2 flex flex-col bg-white p-4 justify-center rounded-sm'>
        <Header />
        <div className='flex flex-col px-8 mt-2 lg:space-y-6'>
          <Input type={showPassword ? "text" : 'password'} icon={<a className='cursor-pointer' onClick={handleClickShowPassword}> <FaEye /> </a>} variant="standard" label="Mecvut Parola" required crossOrigin={undefined} />
          <Input type={showRePassword ? "text" : 'password'} variant="standard" icon={<a className='cursor-pointer' onClick={handleClickReShowPassword}> <FaEye /> </a>} label="Yeni Parola" required crossOrigin={undefined} />
          <Input type={showRePassword ? "text" : 'password'} variant="standard" label="Yeni Parola Tekrar" required crossOrigin={undefined} />
        </div>
        <div className='flex justify-end mt-6 mr-6'>
          <Button className='px-8 py-2 capitalize bg-green-600 rounded-md'>
            <Typography variant='h6' className='font-inter text-white'> Kaydet </Typography>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default ChangePassword