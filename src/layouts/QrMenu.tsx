import QrMenuSidenav from '../components/layout/qr-menu/QrMenuSidenav'
import Navbar from '../components/layout/dashboard/Navbar'
import { Route, Routes } from 'react-router-dom'
import routes from '../routes'

const QrMenu = () => {
  return (
    <div className='min-h-screen bg-gray-200/30 lg:flex'>
      <div className='h-screen'>
        <QrMenuSidenav />
      </div>
      <div className='w-full p-4'>
        <Navbar />
        <Routes>
          {routes.map(({ layout, pages }) =>
            layout === 'qr-menu' &&
            pages.map(({ path, element }) => (
              <>
                <Route path={path} element={element} />
              </>
            ))
          )}
        </Routes>
      </div>
    </div>
  )
}

export default QrMenu