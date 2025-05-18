import { Card, CardBody, IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { areas, orders, products } from '../../mock_data';
import { SlOptionsVertical } from 'react-icons/sl';
import { calculateTotalPrice } from '../../utils/calc-total-price';
import { Link } from 'react-router-dom';



const Area = () => {
  const [activeTab, setActiveTab] = useState(areas[0]?._id || 1);

  return (
    <div>
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
                {area.tables.map((table) => {
                  const orderForTable = orders.find((order) => order.tableId === table._id);
                  const totalPrice = orderForTable ? calculateTotalPrice(orderForTable.items, products) : 0;
                  return (
                    <div>
                      {orderForTable ? (
                        <Card
                          key={table._id}
                          className={`h-36 cursor-pointer rounded-md border border-gray-500/50 shadow-gray-500/50 ${orderForTable ? "bg-red-200/80" : ""}`}
                        >
                          <Link to={`/order/${table._id}`}>
                            <CardBody className='flex flex-col'>
                              <div className='flex px-1 justify-between items-center'>
                                <div className='flex flex-col -space-y-0.5'>
                                  <Typography className='text-start font-inter text-black' variant='small'>
                                    {table.name}
                                  </Typography>
                                  <Typography className={`font-inter ${orderForTable ? "flex" : "hidden"} text-[12px]`}> User Name </Typography>
                                </div>
                                <div className='flex justify-end'>
                                  <IconButton variant='text'>
                                    <SlOptionsVertical className='text-md' />
                                  </IconButton>
                                </div>
                              </div>
                              <div className={`lg:mt-4 justify-center items-center ${orderForTable ? "flex" : "hidden"}`}>
                                <Typography className='text-black font-inter font-bold text-lg'> ₺{totalPrice.toFixed(2)} </Typography>
                              </div>
                              <div className={`${orderForTable ? "flex" : "hidden"}`}>
                                <Typography variant='small' className='font-inter text-black'> 2s 32dk </Typography>
                              </div>
                            </CardBody>
                          </Link>
                        </Card>
                      ) : (
                        <Link to={`/order/${table._id}`}>
                          <Card
                            key={table._id}
                            className={`flex justify-center items-center h-36 cursor-pointer rounded-md border border-gray-400/50 `}
                          >
                            <CardBody className='flex flex-col justify-center items-center'>
                              <div className='flex justify-center items-center'>
                                <Typography className='text-center font-inter'>
                                  {table.name}
                                </Typography>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default Area