import React from "react"
import { Company, WorkType } from "../../types/company"
import { Button, Input, Option, Select } from "@material-tailwind/react"

interface GeneralSettingsProps {
  company?: Company
}

const WORK_TYPES: WorkType[] = [WorkType.TABLE_ORDER, WorkType.PACKET_ORDER, WorkType.COME_AND_TAKE_ORDER]

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ company }) => {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="">
        <Input type="text" variant="standard" value={company ? company.title : ""} label={"Cafe Adı"} crossOrigin={undefined} />
      </div>
      <div className="flex mt-6 gap-4">
        <Input type="text" variant="standard" value={company ? company.dayStart : ""} label="Gün Başlangıcı" crossOrigin={undefined} />
        <Input type="text" variant="standard" value={company ? company.dayEnd : ""} label="Gün Bitişi" crossOrigin={undefined} />
      </div>
      <div className="mt-6">
        <Select label="Bildirim Sesi" value="" variant="standard">
          {company?.notificationSound.map((sound) => (
            <Option> {sound} </Option>
          ))}
        </Select>
      </div>
      <div className="mt-6">
        <Input type="text" variant="standard" value={company ? company.socketAdress : ""} label={"Soket Adresi"} crossOrigin={undefined} />
      </div>
      <div className="flex mt-6 gap-4">
        <Input type="text" variant="standard" value={company ? company.screenLockTime : ""} label="Ekran Kilit Süresi" crossOrigin={undefined} />
        <Select label="Çalışma Tipi" value="" variant="standard">
          {WORK_TYPES.map((type) => (
            <Option> {type} </Option>
          ))}
        </Select>
      </div>
      <div className="mt-6">
        <Input type="text" variant="standard" value={company ? company.changeTableTime : ""} label={"Masa renk değiştirme süresi"} crossOrigin={undefined} />
      </div>
      <div className="mt-6">
          <Button variant="text" className="capitalize font-inter font-semibold text-gray-800"> Cafe Konumunu Düzenle </Button>
      </div>
    </div>
  )
}

export default GeneralSettings