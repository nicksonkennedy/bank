import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { BookOutlined, CarFilled, ExclamationCircleOutlined, HomeFilled, NotificationOutlined, PercentageOutlined, SmileOutlined, TeamOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { CalculateOutlined, Home, Shield, Sms } from '@mui/icons-material';


const About = () => {
  const dropCard = {
     top:21 ,
     left:'3%' , 
    
  };
  return (
    
      <Dropdown
        trigger={['click']} 
        overlay={
          <div className=''>
            <Card 
           style={dropCard}
           className='drop hidden mdd:block overflow-hidden '
           >

            <div className='grid grid-cols-4 gap-3 p-1'>
              <div className=''>
                <h1 className='text-md text-gray-500 text-center'>FIND A BRANCH</h1>
                <img src='about.jpg' alt='man smiling' className='h-48 w-64' />
                <div className='mt-6 mx-auto text-center'><Link to='' className='text-slate-600 px-5 py-2  border-1 border-slate-600 text-md hover:bg-blueblue hover:text-white'>BRANCH LOCATOR</Link></div>

              </div>


              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><ExclamationCircleOutlined className='relative bottom-1 text-black' />  COMPANY PROFILE</h1>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'> Volunteer Leadership</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Mission Statement</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  The Credit Union Difference</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Facts and Financials</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   History</Link></h6>

              <div className='mt-4'>
              <h1 className='text-md  relative left-16 text-gray-500 underline underline-offset-8'><NotificationOutlined className='relative bottom-1 text-black' /> NEWS</h1>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   News and Press Releases</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Events and Seminars</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Memberline</Link></h6>
              </div>

              <div className='mt-4'>
              <h1 className='text-md  relative left-16 text-gray-500 underline underline-offset-8'><UsergroupAddOutlined className='relative bottom-1 text-black' />  COMMUNITY ASSISTANCE PROGRAM</h1>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    America First Charitable Foundation</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Charitable Outreach Programs</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Community Events & Sponsorship Forms</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Volunteer Opportunities</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Member Advocate Group</Link></h6>
              </div>

              </div>



              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><TeamOutlined className='relative bottom-1 text-black' /> CAREERS</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  America First Careers</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Volunteer Opportunities</Link></h6>

                <div className='mt-4'>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><SmileOutlined className='relative bottom-1 text-black' />   HELP + RESOURCES</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Frequently Asked Questions (FAQs)</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Holiday Hours</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>      Disclosures</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Forms</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Privacy</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Co-Browsing Support</Link></h6>

              </div>

              
              <div className='mt-4'>
              <h1 className='text-md  relative left-20 text-gray-500 underline underline-offset-8'><Sms className='relative text-black' />    CONTACT</h1>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Contact Us</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Branches</Link></h6>
               

              </div>

              </div>

              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><Shield className='relative bottom-1 text-black' /> SECURITY</h1>
               
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Security Overview</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Security Awareness</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Online</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Mobile</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      ATM</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Account</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Visa Card </Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Card Guard </Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>        Travel</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Identity Theft Protection</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>        Fraud Text Alerts</Link></h6>


                <div className='mt-4'>
              <h1 className='text-md  relative left-20 text-gray-500 underline underline-offset-8'><BookOutlined className='relative text-black' />    FRAUD MANAGEMENT</h1>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>        Risk Alerts</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Types of Fraud</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Tips to Avoid Fraud</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Reporting Fraud</Link></h6>
              </div>
              </div>


            </div>
         
        </Card>
          </div>
        }
        >
    <div onClick={(e) => e.preventDefault()} className='text-white font-semibold  text-md'>
      ABOUT
    </div>
  </Dropdown>
   
  )
}

export default About