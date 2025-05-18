import { Card, CardBody, IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { Area } from '../../types/area';


interface TableListProps {
  areas: Area[];
}

const TableList: React.FC<TableListProps> = ({ areas }) => {

  const [activeTab, setActiveTab] = useState(areas[0]?._id || "");

  return (
    <div className='mt-4 w-full h-screen'>
      <Tabs value={activeTab}>
        <div className=''>
          <TabsHeader
            className="bg-transparent border-b relative"
            indicatorProps={{
              className: "bg-transparent shadow-none",
            }}
          >
            <div className="relative flex">
              {areas.map((area) => (
                <Tab
                  key={area._id}
                  value={area._id}
                  onClick={() => setActiveTab(area._id)}
                  className={`lg:w-32 transition-all duration-300 ease-in-out ${activeTab === area._id ? "text-gray-800 font-bold" : "text-gray-400"
                    }`}
                >
                  <Typography
                    variant='small'
                    className="font-inter font-semibold tracking-wider"
                  >
                    {area.name}
                  </Typography>
                </Tab>
              ))}
              <div
                className=" absolute bottom-0 left-0 h-[2px] bg-red-500 transition-transform duration-300 ease-in-out"
                style={{
                  width: `${100 / areas.length}%`,
                  transform: `translateX(${areas.findIndex(area => area._id === activeTab) * 100}%)`,
                }}
              />
            </div>
          </TabsHeader>
        </div>
        <TabsBody className='w-full h-screen' >
          {areas.map((area) => (
            <TabPanel key={area._id} value={area._id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 mx-auto ">
                {activeTab && area.tables.map((table) => (
                  <Card key={table._id} className="h-36 cursor-move shadow-sm rounded-md border border-gray-200">
                    <CardBody className='flex flex-col'>
                      <div className='flex justify-end'>
                        <IconButton variant='text'>
                          <MdEdit className='text-xl text-green-600' />
                        </IconButton>
                      </div>
                      <Typography className='text-center font-inter'>
                        {table.name}
                      </Typography>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default TableList

