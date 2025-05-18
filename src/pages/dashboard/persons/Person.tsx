import { Button, Card, Typography } from "@material-tailwind/react"
import { IoPersonOutline, IoAddOutline } from "react-icons/io5"
import { users } from "../../../mock_data"
import { useState } from "react";
import { User } from "../../../types/user";
import PersonDetail from "../../../components/person/PersonDetail";

const TABLE_HEAD = ["No", "Ad Soyad", "Email", "Telefon Numarası", "Rol"];

const Person = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newUserModalOpen, setNewUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User>();

  const handleRowClick = (user: User | undefined) => {
    setSelectedUser(user);
  };

  const handleOpen = () => setModalOpen(!modalOpen);
  const handleNewUserOpen = () => setNewUserModalOpen(!newUserModalOpen);

  return (
    <div className="w-full h-screen flex justify-center ">
      <div className=" lg:w-11/12 border rounded-md border-gray-200 bg-white p-12 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-6 bg-gradient-to-b from-green-600 to-green-300 rounded-xl">
              <IoPersonOutline className="text-4xl text-white" />
            </div>
            <div className="flex flex-col">
              <Typography variant="h6" className="font-inter font-semibold"> Kullanıcılar </Typography>
              <Typography variant="small" className="font-inter"> Kullanıcı Sayısı : <strong> {users.length} </strong> </Typography>
            </div>
          </div>
          <div className="">
            <Button
              onClick={() => handleNewUserOpen()}
              variant="filled" fullWidth className="flex items-center capitalize bg-green-600 to-green-300 gap-2 shadow-none rounded-sm">
              <IoAddOutline className="text-2xl" />
              <Typography className="font-inter font-semibold"> Ekle </Typography>
            </Button>
          </div>
        </div>
        <div className="w-full lg:mt-4">
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead onClick={() => handleRowClick(selectedUser)}>
                <tr>
                  {TABLE_HEAD.map((head) => (
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
                {users.map((user, index) => {
                  const isLast = index === users.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={user.id} onClick={() => { handleRowClick(user); handleOpen() }} className="cursor-pointer">
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.no}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.fullName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.phoneNumber}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.role}
                        </Typography>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
      {selectedUser && (
        <PersonDetail
          open={modalOpen}
          user={selectedUser}
          handleOpen={handleOpen}
          isNewUser={false}
        />
      )}
      {newUserModalOpen && (
        <PersonDetail
          open={newUserModalOpen}
          handleOpen={handleNewUserOpen}
          isNewUser={true}
        />
      )}
    </div>
  )
}

export default Person