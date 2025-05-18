import { Button, Input } from "@material-tailwind/react"
import { Order } from "../../../types/order"
import React from "react"
import { TbBasketCancel, TbNote } from "react-icons/tb";

interface OrderNavbarProps {
  order?: Order
}

const OrderNavbar: React.FC<OrderNavbarProps> = ({ order }) => {
  return (
    <div className='w-full flex'>
      <div className="mr-auto md:w-full ">
        <Input
          type="text"
          placeholder="Ürün Adı ile Arama"
          className="rounded-none  text-xl ring-4 ring-transparent placeholder:text-gray-800 placeholder:opacity-100 placeholder:text-xl placeholder:font-inter"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "lg:h-[60px]" }} crossOrigin={undefined} />
      </div>
      <div className="flex relative">
        <div className="group relative flex justify-center items-center">
          <Button variant="text" className="bg-gray-600/80 flex justify-center items-center rounded-none">
            <TbNote className="text-white text-4xl" />
          </Button>
          <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Not Ekle
          </span>
        </div>

        {order && (
          <div className="group relative flex justify-center items-center">
            <Button variant="text" className="bg-gray-600/80 flex justify-center items-center rounded-none">
              <TbBasketCancel className="text-white text-4xl" />
            </Button>
            <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Sipariş İptal
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderNavbar