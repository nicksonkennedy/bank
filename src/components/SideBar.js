import React,{useState} from 'react'
import { Drawer } from 'antd';
import {  } from '@mui/icons-material';
import { CloseOutlined, MenuOutlined, SearchOutlined ,LockOutlined } from '@ant-design/icons';
import{Link } from 'react-router-dom'
import { Collapse } from 'antd';
import Loans from './SideBarMenu/Loans';
import Accounts from './SideBarMenu/Accounts';
import Services from './SideBarMenu/Services';
import Visa from './SideBarMenu/Visa';
const { Panel } = Collapse;

const SideBar = () => {
  const onChange = (key) => {
    console.log(key);
  };
    const [visible, setVisible] = useState(false);
    const [PanelClick, setPanelClick] = useState(false)
    const [PanelClick1, setPanelClick1] = useState(false)
    const [PanelClick2, setPanelClick2] = useState(false)
    const [PanelClick3, setPanelClick3] = useState(false)

    const panelHandler = (e) =>{
      e.preventDefault()
       setPanelClick(!PanelClick)
     
    }
    const panelHandler1 = (e) =>{
      e.preventDefault()
       setPanelClick1(!PanelClick1)
     
    }

    const panelHandler2 = (e) =>{
      e.preventDefault()
       setPanelClick2(!PanelClick2)
     
    }
    const panelHandler3 = (e) =>{
      e.preventDefault()
       setPanelClick3(!PanelClick3)
     
    }



    const showDrawer = () => {
      setVisible(!visible);
    };
  
    const onClose = () => {
      setVisible(!visible);
    };
  return (
    <div>
        <span className='font-semibold text-white shadow-2xl cursor-pointer' onClick={showDrawer}>
    {!visible ? <MenuOutlined className='text-2xl relative ' /> :  ''}
      </span>
      <Drawer 
      title={<Link to='/'>  <img src='login.png' alt='Brand logo' className='w-48 h-10 relative -left-10'/></Link>}
       placement="left" 
       onClose={onClose} 
       visible={visible} 
       className='block mdd:hidden '
       closeIcon={<CloseOutlined  className='text-xl  text-white p-1 bg-orange-400 shadow-6xl rounded-full relative closeBtn'/>}
       width='300'
       >
        
       <div className='relative -left-5'>
        <div className='relative left-5 mb-2'><Link to='/login' className='text-white bg-orange-600 py-2 px-3'> Login</Link></div><br/><hr/>
       <Collapse  
       onChange={onChange} 
       bordered={false}
       ghost={false}
       className='pan'
       >

      <Panel 
        key="1" 
      header={
      <div 
      onClick={panelHandler}
       className={PanelClick ? `font-semibold font-monospace  text-white text-lg bg-blueblue px-4 py-1 ` : `font-semibold font-monospace text-slate-700 px-2 relative bottom-1 py-1 text-xl`}>
        <span className=''>LOANS</span>
        </div>} 
      showArrow={false}
      
      >
       <div ><Loans /></div>
      </Panel>
      <Panel 
      header={
        <div 
        onClick={panelHandler1}
         className={PanelClick1 ? `font-semibold font-monospace  text-white text-lg bg-blueblue px-4 py-1 ` : `font-semibold font-monospace text-slate-700 px-1 relative bottom-1 py-1 text-xl `}>
          <span className=''>ACCOUNTS</span>
          </div>} 
        showArrow={false}
        key="2"
        >

       <div ><Accounts /></div>
      </Panel>

      <Panel
      key="3"
      header={
        <div 
        onClick={panelHandler2}
         className={PanelClick2 ? `font-semibold font-monospace  text-white text-lg bg-blueblue px-4 py-1 ` : `font-semibold font-monospace text-slate-700 px-1 relative bottom-1 py-1 text-xl  `}>
          <span className=''>SERVICES</span>
          </div>} 
        showArrow={false}
      >
       <div ><Services /></div>
      </Panel>

      <Panel
      key="4"
      header={
        <div 
        onClick={panelHandler3}
         className={PanelClick3 ? `font-semibold font-monospace  text-white text-lg bg-blueblue px-4 py-1 ` : `font-semibold font-monospace text-slate-700 px-1 relative bottom-1 py-1 text-xl  `}>
          <span className=''>VISAS</span>
          </div>} 
        showArrow={false}
      >
       <div ><Visa /></div>
      </Panel>
    </Collapse>
       
       </div>
      </Drawer>
    </div>
  )
}

export default SideBar