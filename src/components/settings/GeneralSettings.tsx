import React from "react"
import { Company } from "../../types/company"
import { Button, Input } from "@material-tailwind/react"

interface GeneralSettingsProps {
  company?: Company
}


const GeneralSettings: React.FC<GeneralSettingsProps> = ({ company }) => {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="">
        <Input type="text" variant="standard" value={company ? company.title : ""} label={"Club Name"} crossOrigin={undefined} />
      </div>
      <div className="flex mt-6 gap-4">
        <Input type="text" variant="standard" value={company ? company.dayStart : ""} label="Day Start" crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.dayEnd : ""} label="Day End" crossOrigin={undefined} />
      </div>
      <div className="flex mt-6 gap-4">
        <Input type="text" variant="standard" value={"€50"} label="Entry Price" crossOrigin={undefined} />
      </div>
      <div className="mt-6">
          <Button className="capitalize font-onest font-semibold text-white bg-sidebar"> Save </Button>
      </div>
    </div>
  )
}

export default GeneralSettings