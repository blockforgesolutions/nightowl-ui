import { Input } from '@material-tailwind/react'
import React from 'react'
import { Company } from '../../types/company'

interface AddressInformationProps {
  company?: Company
}

const AddressInformation: React.FC<AddressInformationProps> = ({ company }) => {
  return (
    <div className='w-full flex flex-col p-4'>
      <div className='flex items-center gap-8'>
        <Input type="text" variant="standard" value={company ? company.country : ""} label={"Ülke"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.city : ""} label={"Şehir"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.district : ""} label={"İlçe"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.neighborhood : ""} label={"Mahalle"} crossOrigin={undefined} />
      </div>
      <div className='flex justify-between items-center gap-4 mt-6'>
        <Input type="text" variant="standard" value={company ? company.street : ""} label={"Sokak Adı"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.no : ""} label={"Bina No"} crossOrigin={undefined} />
      </div>
      <div className='flex justify-between items-center gap-4 mt-6'>
        <Input type="text" variant="standard" value={company ? company.address : ""} label={"Adres"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.zipCode : ""} label={"Posta Kodu"} crossOrigin={undefined} />
      </div>
    </div>
  )
}

export default AddressInformation