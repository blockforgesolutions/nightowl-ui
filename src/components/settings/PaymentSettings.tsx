// import React from 'react'

import { Button, Switch, Typography } from "@material-tailwind/react"
import { paymentTypes } from "../../mock_data"

const PaymentSettings = () => {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="flex justify-between items-center">
        <Typography className="font-onest" color="black" variant="h6"> Payment Types Used </Typography>
        <Button variant="text" className="capitalize">
          <Typography variant="small" className="font-onest font-semibold text-green-600"> Edit Payment Types </Typography>
        </Button>
      </div>
      <hr />
      <div className="">
        {paymentTypes.map((payment) => (
          <div className="flex flex-col mt-6">
            <div className="flex justify-between items-center">
              <Typography className="font-onest font-semibold" variant="small"> {payment} </Typography>
              <Switch crossOrigin={undefined} />
            </div>
            <hr className="mt-4"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentSettings