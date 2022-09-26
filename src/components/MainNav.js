import React,{useState} from 'react'
import{Link, useLocation } from 'react-router-dom'
import { SearchOutlined ,LockOutlined} from '@ant-design/icons';
import 'animate.css';
import SideBar from './SideBar';
import Loans from './DropDowns/Loans';
import Account from './DropDowns/Account';
import Services from './DropDowns/Services';
import Visas from './DropDowns/Visas';
import Business from './DropDowns/Business';
import About from './DropDowns/About';
import Learn from './DropDowns/Learn';
import Search from './DropDowns/Search';

const MainNav = () => {
  const [changeLogo, setChangeLogo] = useState(false)

  //useLocation
  const location = useLocation()

  
      //scroll nav
const brandLogo = () =>{
  if(window.scrollY >=10){
    setChangeLogo(true)
  }else{
    setChangeLogo(false)
  }
  
  } 
  window.addEventListener('scroll', brandLogo)
  return (
    <div className='bg-blueblue p-3  shadow-md flex justify-between items-center content-center w-full fixed z-50'>
        <div className='brand animate__animated animate__zoomIn animate__delay-1s '>
         {changeLogo ?  <Link to='/'>  <img src='logo_scroll.png' alt='Brand logo' className='w-48 h-8'/></Link> : <Link to='/'>  <img src='logo.png' alt='Brand logo' className='w-48 h-12'/></Link>}
        </div>

               {location.pathname ==='/' && <div className='relative right-16'>
               <div className=' hidden mdd:flex mdd:space-x-7 '>
              
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><Loans /></span>
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><Account /></span>
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><Services /></span>
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><Visas /></span>
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><Business /></span>
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><About /></span>
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><Learn /></span>
                <span className='cursor-pointer hover:underline hover:underline-offset-20 text-white'><Search /></span>
             </div>
               {/**display only when screen size reduces */}
              <span className='block  mdd:hidden '><SideBar /></span>
          
             
                </div>}

           
               
    </div>
  )
}

export default MainNav