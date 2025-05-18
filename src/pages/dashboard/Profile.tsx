import { Tab, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react';
import { useMemo, useState } from 'react'
import UserInformation from '../../components/profile/UserInformation';
import ChangePassword from '../../components/profile/ChangePassword';
import LangAreaSettings from '../../components/profile/LangAreaSetting';
import AccountSettings from '../../components/profile/AccountSettings';
import { users } from '../../mock_data';


const Profile = () => {
  const [activeTab, setActiveTab] = useState('user-info');
  const user = users[0]

  const TABS_HEADER = useMemo(() => [
    {
      value: 'user-info',
      title: 'Kullanıcı Bilgileri',
      component: <UserInformation user={user} />,
    },
    {
      value: 'change-password',
      title: 'Parola Değişikliği',
      component: <ChangePassword />,
    },
    {
      value: 'lang-area-settings',
      title: 'Dil ve Bölge Ayarları',
      component: <LangAreaSettings />,
    },
    {
      value: 'account-settings',
      title: 'Hesap Ayarları',
      component: <AccountSettings />,
    },
  ], [user]);

  return (
    <div className='w-full flex flex-col lg:mt-4'>
      <Tabs value={activeTab}>
        <div className='w-2/3'>
          <TabsHeader className='bg-transparent border-b w-auto mx-auto'
            indicatorProps={{
              className: 'bg-transparent shadow-none'
            }}
          >
            <div className='relative flex'>
              {TABS_HEADER.map((tab) => (
                <Tab value={tab.value} key={tab.value} onClick={() => setActiveTab(tab.value)}>
                  <Typography className={`lg:w-48 transition-all duration-300 ease-in-out ${activeTab === tab.value ? "text-gray-800 font-bold" : "text-gray-400"
                    }`}> {tab.title} </Typography>
                </Tab>
              ))}
              <div
                className=" absolute bottom-0 left-0 h-[2px] bg-red-500 transition-transform duration-300 ease-in-out"
                style={{
                  width: `${100 / TABS_HEADER.length}%`,
                  transform: `translateX(${TABS_HEADER.findIndex(tab => tab.value === activeTab) * 100}%)`,
                }}
              />
            </div>
          </TabsHeader>
        </div>
        <TabsBody>
          {TABS_HEADER.find(tab => tab.value === activeTab)?.component}
        </TabsBody>
      </Tabs>
    </div >
  )
}

export default Profile