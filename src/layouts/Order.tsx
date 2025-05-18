import { Route, Routes } from 'react-router-dom'
import OrderPage from '../pages/order/Order'

const Order = () => {
    return (
        <div className='min-h-screen w-full flex'>
            <div className='w-full'>
                <Routes>
                    <Route path='/:tableId' element={<OrderPage />} />
                </Routes>
            </div>

        </div>
    )
}

export default Order