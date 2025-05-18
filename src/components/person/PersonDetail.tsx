import React from 'react'
import { User } from '../../types/user'
import { Dialog, } from '@material-tailwind/react'
import NewUserForm from './UserForm'

interface PersonDetailProps {
  user?: User,
  open: boolean,
  handleOpen: () => void
  isNewUser: boolean
}

const PersonDetail: React.FC<PersonDetailProps> = ({ user, open, handleOpen, isNewUser }) => {
  return (
    <div className=''>
      {isNewUser ? (
        <Dialog open={open} handler={handleOpen} size='sm'>
          <NewUserForm handleOpen={handleOpen} />
        </Dialog >
      ) : (
        <Dialog open={open} handler={handleOpen} size='sm'>
          <NewUserForm handleOpen={handleOpen} user={user} />
        </Dialog >
      )}

    </div >
  )
}

export default PersonDetail