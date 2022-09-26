import React from 'react'
import { BellOutlined, CreditCardOutlined, DownOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { Divider, Dropdown ,Space} from 'antd';
import DashboardSideBar from './DashboardSideBar';

const TopDashNav = () => {
  return (
    <div className='fixed  bg-white shadow-2xl w-full p-3 z-50'>
      <span className=' relative bottom-4 block md:hidden '><DashboardSideBar /> </span>
       <div className='relative flex justify-center space-x-6'>
          <SearchOutlined className='text-xl cursor-pointer' />
          <BellOutlined className='text-xl cursor-pointer' />
          <SettingOutlined className='text-xl cursor-pointer' />
          <CreditCardOutlined className='text-xl cursor-pointer' />

          <Dropdown 
          overlay={
            <div className='bg-white p-3 w-40 mt-[18px]'>
                <div>Profile</div>
                <Divider />
                <div>Account</div>
            </div>
          } 
          trigger={['click']}
          autoFocus={true}
          >
      <div onClick={e => e.preventDefault()} className='cursor-pointer'>
      <Space>
        Emily Brown
        <DownOutlined className='relative bottom-1' />
      </Space>
    </div>
  </Dropdown>
       </div>
    </div>
  )
}

export default TopDashNav