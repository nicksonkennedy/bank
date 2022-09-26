import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { CarFilled, HomeFilled, PercentageOutlined, SaveFilled, StarFilled, UserOutlined } from '@ant-design/icons';
import { AddOutlined,  Diamond, Edit, Home } from '@mui/icons-material';

const Account = () => {
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
                <h1 className='text-md text-gray-500 text-center'>BCEOME A MEMBER</h1>
                <img src='account.jpg' alt='man smiling' className='h-48 w-64' />
                <div className='mt-6 mx-auto text-center'><Link to='' className='text-slate-600 px-5 py-2  border-1 border-slate-600 text-md hover:bg-blueblue hover:text-white'>APPLY NOW</Link></div>

              </div>


              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><Edit className='relative bottom-1 text-black' /> CHECKING ACCOUNTS</h1>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'> Checking Comparison</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Premium Checking</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Classic Checking</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Money Market Checking</Link></h6>


              <div className='mt-4'>
              <h1 className='text-md  relative left-16 text-gray-500 underline underline-offset-8'><SaveFilled className='relative bottom-1 text-black' /> SAVINGS ACCOUNTS</h1>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Share Savings</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Money Market Savings</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Health Savings (HSAs)</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Dedicated Savings</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Wedding Savings</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Coverdell Education Savings</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Charitable/Memorial Account</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Youth Savings</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Student Savings Account</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Certificate Accounts</Link></h6>
              </div>


              </div>



              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><StarFilled className='relative bottom-1 text-black' />  CERTIFICATE ACCOUNTS</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  Regular</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  IRA</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Bump-Rate</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Dedicated Savings</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Flexible</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Ladder</Link></h6>

                <div className='mt-4'>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><AddOutlined className='relative bottom-1 text-black' />   MEMBERSHIP</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Become a Member</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Military Offers</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>      Select Employer Groups</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Member Deals and Discounts</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Event Pre-Sales</Link></h6>

              </div>

              
        

              </div>

              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><Diamond className='relative bottom-1 text-black' />  IRA</h1>
               
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Traditional IRA</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Roth IRA</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Accumulator (IRA Savings)</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Certificate Accounts</Link></h6>
               
                <div className='mt-4'>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><PercentageOutlined className='relative bottom-1 text-black' />    DEPOSIT ACCOUNT RATES</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Savings Account Rates</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Certificate Account Rates</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>       Checking Account Rates</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Health Savings Account Rates</Link></h6>
              </div>

              <div className='mt-4'>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><PercentageOutlined className='relative bottom-1 text-black' />     CALCULATORS</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Savings Calculators</Link></h6>
                
              </div>

              </div>


            </div>
         
        </Card>
          </div>
        }
        >
    <div onClick={(e) => e.preventDefault()} className='text-white font-semibold  text-md'>
      ACCOUNTS
    </div>
  </Dropdown>
  )
}

export default Account