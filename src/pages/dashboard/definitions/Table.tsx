import { Typography } from '@material-tailwind/react'
import { HiOutlineTableCells } from 'react-icons/hi2'
import { areas } from '../../../mock_data'
import TableList from '../../../components/table/TableList'
import RegionTableOpr from '../../../components/table/RegionTableOpr'


const Table = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full p-4 flex justify-between items-center border-b-2 border-green-600 rounded-sm'>
        <div className='flex gap-4'>
          <HiOutlineTableCells className='text-4xl' />
          <div className='flex flex-col'>
            <Typography variant='h6' className='font-serif'> Masa / Bölgeler </Typography>
            <Typography variant='small' className='font-inter'> İşletmenize ait masa ve bölgeleri bu ekrandan düzenleyebilirsiniz. </Typography>
          </div>
        </div>
        <RegionTableOpr />
      </div>
      <TableList areas={areas} />
    </div>
  )
}

export default Table