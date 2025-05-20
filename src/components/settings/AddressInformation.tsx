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
        <Input type="text" variant="standard" value={company ? company.country : ""} label={"Country"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.city : ""} label={"City"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.neighborhood : ""} label={"District"} crossOrigin={undefined} />
      </div>
      <div className='flex justify-between items-center gap-4 mt-6'>
        <Input type="text" variant="standard" value={company ? company.street : ""} label={"Street"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.no : ""} label={"No"} crossOrigin={undefined} />
      </div>
      <div className='flex justify-between items-center gap-4 mt-6'>
        <Input type="text" variant="standard" value={company ? company.address : ""} label={"Address"} crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.zipCode : ""} label={"Zip Code"} crossOrigin={undefined} />
      </div>
    </div>
  )
}

export default AddressInformation