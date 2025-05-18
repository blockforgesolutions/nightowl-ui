import { Typography } from '@material-tailwind/react'
import { IoPersonOutline } from 'react-icons/io5'

const Header = () => {
    return (
        <div className='p-4 flex gap-2 items-center'>
            <div className='p-2 rounded-md bg-gradient-to-bl from-green-600 to-green-300'>
                <IoPersonOutline className='text-4xl text-white' />
            </div>
            <div className='flex flex-col'>
                <Typography variant='h5' className='font-inter'> Profil </Typography>
                <Typography className='font-inter text-[12px]'> Kullanıcı bilgilerinizi güncelleyebilirsiniz.</Typography>
            </div>
        </div>
    )
}

export default Header