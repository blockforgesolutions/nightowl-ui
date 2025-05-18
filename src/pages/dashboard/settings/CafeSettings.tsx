import { Button, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { CiSettings } from 'react-icons/ci'
import GeneralSettings from '../../../components/settings/GeneralSettings'
import PaymentSettings from '../../../components/settings/PaymentSettings'
import AddressInformation from '../../../components/settings/AddressInformation'
import { companyInfo } from '../../../mock_data'
import { FiSave } from "react-icons/fi";
import { useState } from 'react'

const CafeSettings = () => {


  const TAB_DATA = [
    {
      title: 'Genel Ayarlar',
      value: 'general-settings',
      element: <GeneralSettings company={companyInfo} />
    },
    {
      title: "Ödeme Ayaları",
      value: 'payment-settings',
      element: <PaymentSettings />
    },
    {
      title: 'Adres Bilgileri',
      value: 'address-information',
      element: <AddressInformation company={companyInfo} />
    }
  ]

  const [activeTab, setActiveTab] = useState(TAB_DATA[0]?.value || "");


  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='lg:w-11/12 border  border-gray-200 bg-white flex flex-col p-12'>
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-4">
            <div className='p-6 bg-gradient-to-tl from-green-600 to-green-300 rounded-xl'>
              <CiSettings className='text-4xl text-white' />
            </div>
            <div className='flex flex-col'>
              <Typography className='font-inter font-semibold' variant='h6'>
                Cafe Tanımlamaları
              </Typography>
              <Typography variant="small" className='font-inter'> Restaurantınız ile ilgili tanımlamaları bu alandan yapabilirsiniz.
              </Typography>
            </div>
          </div>
          <div>
            <Button
              // onClick={() => handleNewUserOpen()}
              variant="filled" fullWidth className="flex items-center capitalize bg-green-600 to-green-300 gap-2 shadow-none rounded-sm">
              <FiSave className="text-2xl" />
              <Typography className="font-inter font-semibold"> Kaydet </Typography>
            </Button>
          </div>
        </div>
        <div className='mt-4'>
          <Tabs value="general-settings">
            <TabsHeader
              className='bg-transparent border-b relative'
              indicatorProps={{
                className: "bg-transparent shadow-none",
              }}
            >
              <div className="relative flex ">
                {TAB_DATA.map((head, i) => (
                  <Tab value={head.value} key={i}
                    onClick={() => setActiveTab(head.value)}
                    className={`lg:w-32 transition-all duration-300 ease-in-out ${activeTab === head.value ? "text-gray-800 font-bold" : "text-gray-400"
                      }`}
                  >
                    <Typography
                      variant='small'
                      className="font-inter font-semibold tracking-wider"
                    >
                      {head.title}
                    </Typography>
                  </Tab>
                ))}
                <div
                  className=" absolute bottom-0 left-0 h-[2px] bg-red-500 transition-transform duration-300 ease-in-out"
                  style={{
                    width: `${100 / TAB_DATA.length}%`,
                    transform: `translateX(${TAB_DATA.findIndex(data => data.value === activeTab) * 100}%)`,
                  }}
                />
              </div>
            </TabsHeader>
            <TabsBody>
              {TAB_DATA.map((data, i) => (
                <TabPanel key={i} value={data.value}>
                  {data.element}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default CafeSettings