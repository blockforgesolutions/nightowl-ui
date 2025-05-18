import { Button, Card, Checkbox, Typography } from '@material-tailwind/react';
import { IoAddOutline, IoPersonOutline } from 'react-icons/io5';
import { Roles } from '../../../types/user';
import { userAuthorizations } from '../../../types/user-authorizations';

const ROLES: Roles[] = [Roles.CHECKOUT, Roles.KITCHEN, Roles.MANAGER, Roles.WAITER]


const UserAuthorize = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center mt-">
        <div className=" lg:w-11/12  bg-white p-12 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="p-6 bg-gradient-to-b from-green-600 to-green-300 rounded-xl">
                <IoPersonOutline className="text-4xl text-white" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h6" className="font-inter font-semibold"> Yetkilendirme </Typography>
                <Typography variant="small" className="font-inter"> Kullanıcılarınızın yetkilerini/izinlerini buradan güncelleyebilirsiniz</Typography>
              </div>
            </div>
            <div className="">
              <Button
                variant="filled" fullWidth className="flex items-center capitalize bg-green-600 to-green-300 gap-2 shadow-none rounded-sm">
                <IoAddOutline className="text-2xl" />
                <Typography className="font-inter font-semibold"> Kaydet </Typography>
              </Button>
            </div>
          </div>
          <div className="w-full lg:mt-4 space-y-0">
            {userAuthorizations.map((userAuthorization) => {
              return (
                <Card className="w-full mt-2 rounded-none   p-0">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        <th className='w-2/4 p-4'>
                          <Typography className='font-inter font-semibold'> {userAuthorization.title} </Typography>
                        </th>
                        {ROLES.map((head) => (
                          <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {userAuthorization.authorizations.map((name, index) => {
                        return (
                          <tr key={index}>
                            <td className='p-4'>
                              <Typography> {name} </Typography>
                            </td>
                            <td>
                              <Checkbox crossOrigin={undefined}></Checkbox>
                            </td>
                            <td>
                              <Checkbox crossOrigin={undefined}></Checkbox>
                            </td>
                            <td>
                              <Checkbox crossOrigin={undefined}></Checkbox>
                            </td>
                            <td>
                              <Checkbox crossOrigin={undefined}></Checkbox>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <hr />
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAuthorize