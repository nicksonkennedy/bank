import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


const DashboardSideBar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  return (
    <>
       
        <MenuOutlined className='text-xl cursor-pointer'  onClick={showDrawer} />
      
      <Drawer
       title="Basic Drawer" 
       placement="left"
        onClose={onClose}
         visible={visible}
         width='300'
         >

        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default DashboardSideBar