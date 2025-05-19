import { Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Area from "../../components/order-control/Area";
import Orders from "../../components/order-control/Orders";
import { orders } from "../../mock_data";

const OrderControl = () => {
  const [activeTab, setActiveTab] = useState('orders');


  return (
    <div className='w-full flex flex-col lg:mt-4'>
      <Tabs value={activeTab}>
        <div className="w-full">
          <TabsHeader className="bg-transparent w-auto mx-auto"
            indicatorProps={{
              className: "bg-onBar shadow-none",
            }}
          >
            <Tab value={"orders"} onClick={() => setActiveTab('orders')}>
              <Typography className={`font-onest font-semibold ${activeTab === 'orders' ? "text-white" : "text-gray-600"} tracking-wider`}> Orders </Typography>
            </Tab>
          </TabsHeader>
        </div>
        <TabsBody>
          <TabPanel value={activeTab}>
            {activeTab === "area" ? (
              <Area />
            ) : (
              <Orders orders={orders} />
            )}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default OrderControl;
