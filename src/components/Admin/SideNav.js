import { ContactsOutlined, CreditCardOutlined, DashboardOutlined, DollarCircleOutlined, PhoneOutlined, SafetyOutlined, StockOutlined, ToolOutlined } from '@ant-design/icons';
import React from 'react'
import { Link } from 'react-router-dom';
const SideNav = () => {
  return (
    <div className='fixed bg-blueblue h-full w-[20%] '>
      <div className='grid gap-6 text-white p-1  '>
        <div className='brand mb-1 p-1 ml-3'>
        <Link to='/'>  <img src='logo_scroll.png' alt='Brand logo' className='w-48 h-8'/></Link>
        </div>
        <hr />
  <div className='ml-3 mt-6 grid gap-7'>
  <Link to='' className='text-gray-200 text-lg'><DashboardOutlined className='relative text-xl bottom-1 ' /> <span className='ml-2 font-semibold'>Dashboard</span></Link>
  <Link to='' className='text-gray-200 text-lg'><CreditCardOutlined className='relative text-xl bottom-1 ' /> <span className='ml-2 font-semibold'>My Cards</span></Link>
  <Link to='' className='text-gray-200 text-lg'><DollarCircleOutlined className='relative text-xl bottom-1' /> <span className='ml-2 font-semibold'>Payments</span></Link>
  <Link to='' className='text-gray-200 text-lg'><SafetyOutlined className='relative text-xl bottom-1' /> <span className='ml-2 font-semibold'>Insurances</span></Link>
  <Link to='' className='text-gray-200 text-lg'><ContactsOutlined className='relative text-xl bottom-1' /> <span className='ml-2 font-semibold'>Community</span></Link>
  <Link to='' className='text-gray-200 text-lg'><StockOutlined className='relative text-xl bottom-1 ' /> <span className='ml-2 font-semibold'>Analytics</span></Link>
  <hr className='w-36 text-center  mt-2'/>

  <Link to='' className='text-gray-200 text-sm'><PhoneOutlined className='relative text-xl bottom-1 ' /> <span className='ml-2 font-semibold'>Help & Support</span></Link>
  <Link to='' className='text-gray-200 text-sm'><ToolOutlined className='relative text-xl bottom-1 ' /> <span className='ml-2 font-semibold'>Settings</span></Link>
  </div>
    
      </div>
    </div>
  )
}

export default SideNav