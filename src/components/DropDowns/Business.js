import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { CarFilled, DollarCircleOutlined, FilePdfOutlined, HomeFilled, PercentageOutlined, SaveFilled, StarFilled, UserOutlined } from '@ant-design/icons';
import { AddOutlined,  CreditCard,  Diamond, Edit, Home, Money, Percent, Sms } from '@mui/icons-material';


const Business = () => {
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
            <h1 className='text-md text-gray-500 text-center'>HELPING BUSINESSES IN NEED</h1>
            <img src='business.jpg' alt='man smiling' className='h-48 w-64' />
            <div className='mt-6 mx-auto text-center'><Link to='' className='text-slate-600 px-5 py-2  border-1 border-slate-600 text-md hover:bg-blueblue hover:text-white'>SBA PPP FORGIVENESS INFO</Link></div><br />
            <div className='mt-6 mx-auto text-center'><Link to='' className='text-slate-600 px-5 py-2  border-1 border-slate-600 text-md hover:bg-blueblue hover:text-white'>APPLY FOR MEMBERSHIP</Link></div>

          </div>


          <div>
          <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><Edit className='relative bottom-1 text-black' /> BUSINESS CHECKING</h1>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'> Basic</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Primier</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  High-Yield</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Non-Profit</Link></h6>


          <div className='mt-4'>
          <h1 className='text-md  relative left-16 text-gray-500 underline underline-offset-8'><SaveFilled className='relative bottom-1 text-black' />  BUSINESS SAVINGS</h1>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Share Savings</Link></h6>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Money Market Savings</Link></h6>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Dedicated Savings</Link></h6>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Health Savings (HSAs)</Link></h6>

          </div>

          <div className='mt-4'>
          <h1 className='text-md  relative left-16 text-gray-500 underline underline-offset-8'><StarFilled className='relative bottom-1 text-black' />   BUSINESS CERTIFICATES</h1>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Regular</Link></h6>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Bump</Link></h6>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Flexible</Link></h6>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Ladder</Link></h6>
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Dedicated Savings</Link></h6>
          </div>
          </div>



          <div>
          <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><CreditCard className='relative bottom-1 text-black' />  BUSINESS VISA CARDS</h1>
          <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Business Visa Credit Card</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Business Visa Debit Card</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Visa Business Reporting</Link></h6>
            
            <div className='mt-4'>
          <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><Money className='relative bottom-1 text-black' />   BUSINESS LOANS</h1>
          <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Business Loan Request</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Lines of Credit</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>       Vehicle Loans</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Equipment & Machinery</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Unsecured - Capital Loans</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Business Acquisition Loans</Link></h6>
            <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>      Commercial Real Estate</Link></h6>
          </div>

          <div className='mt-4'>
          <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><Percent className='relative bottom-1 text-black' />   BUSINESS RATES</h1>
          <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'><FilePdfOutlined />  Business Rates</Link></h6>

          </div>
    

          </div>

          <div>
          <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><Sms className='relative  text-black' />  BUSINESS SERVICES</h1>
           
          <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Online Banking</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Roth IRA</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Business Bill Pay </Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Business Remote Deposit</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Online Statements</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Business ACH</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Merchant Services</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Intuit QuickBooks®</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'> Speech Access</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Wire Transfers</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Payroll Services</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Business Resources</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Business Planning</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Business Registration Services</Link></h6>
            <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Zelle Business</Link></h6>


          <div className='mt-4'>
          <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><DollarCircleOutlined className='relative bottom-1 text-black' /> BUSINESS SPOTLIGHT</h1>
          <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Spotlights</Link></h6>
            
          </div>

          </div>


        </div>
     
    </Card>
      </div>
    }
    >
<div onClick={(e) => e.preventDefault()} className='text-white font-semibold  text-md'>
  BUSINESS
</div>
</Dropdown>
  )
}

export default Business