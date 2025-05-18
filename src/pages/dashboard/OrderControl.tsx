import { Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Area from "../../components/order-control/Area";
import Orders from "../../components/order-control/Orders";
import { orders } from "../../mock_data";

const OrderControl = () => {
  const [activeTab, setActiveTab] = useState('area');


  return (
    <div className='w-full flex flex-col lg:mt-4'>
      <Tabs value={activeTab}>
        <div className="w-1/3">
          <TabsHeader className="bg-transparent border-b w-auto mx-auto"
            indicatorProps={{
              className: "bg-green-900/50 shadow-none",
            }}>
            <Tab value={"area"} onClick={() => setActiveTab('area')}>
              <Typography className={`font-inter font-semibold ${activeTab === 'area' ? "text-white" : "text-gray-600"} tracking-wider`}> Bölgeler </Typography>
            </Tab>
            <Tab value={"orders"} onClick={() => setActiveTab('orders')}>
              <Typography className={`font-inter font-semibold ${activeTab === 'orders' ? "text-white" : "text-gray-600"} tracking-wider`}> Siparişler </Typography>
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
