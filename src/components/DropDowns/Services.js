import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowUpOutlined, CalculatorOutlined, CarFilled, HomeFilled, PercentageOutlined, PieChartFilled, PlusCircleFilled, SaveFilled, StarFilled, UserOutlined } from '@ant-design/icons';
import { AddOutlined,  Diamond, Edit, Home, PhoneAndroidOutlined } from '@mui/icons-material';

const Services = () => {
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
                <h1 className='text-md text-gray-500 text-center'>CARD GUARD</h1>
                <img src='services.jpg' alt='man smiling' className='h-48 w-64' />
                <div className='mt-6 mx-auto text-center'><Link to='' className='text-slate-600 px-5 py-2  border-1 border-slate-600 text-md hover:bg-blueblue hover:text-white'>LEARN MORE</Link></div>

              </div>


              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><ArrowUpOutlined className='relative bottom-1 text-black' />  DIGITAL BANKING SERVICES</h1>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>  Digital Banking Services</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Online Banking</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Bill Pay</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     ABC Deals</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Alert</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Money Manager</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    FICO Score</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Zelle</Link></h6>


              <div className='mt-4'>
              <h1 className='text-md  relative left-16 text-gray-500 underline underline-offset-8'><PhoneAndroidOutlined className='relative bottom-1 text-black' /> MOBILE SERVICES</h1>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Mobile Banking</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>   Mobile Payments</Link></h6>
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Card Guard</Link></h6>
              </div>


              </div>



              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><CalculatorOutlined className='relative bottom-1 text-black' />  FINANCIAL TOOLS</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Mortgage Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Auto Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Savings Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Cash Flow Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Credit Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Retirement Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     College Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>      Small Business Calculators</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>      NADA guides Vehicle Pricing</Link></h6>

                <div className='mt-4'>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><PieChartFilled className='relative bottom-1 text-black' />    INVESTMENTS & INSURANCE</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     CUSO Financial Services</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Self Directed Online Trading</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>      Insurance Services</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Proof of Insurance Submission</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Trust Services</Link></h6>

              </div>

              
        

              </div>

              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><PlusCircleFilled className='relative bottom-1 text-black' />  OTHER SERVICES</h1>
               
              <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Account Switching</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     ATMs</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Direct Deposit</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Financial Counseling Services</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Foreign Currency Exchange</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Identity Theft Recovery</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Mechanical Breakdown Protection</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       New Account Loan Hub</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Repossession Sales</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>       Routing Number</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>        Speech Access</Link></h6>
              </div>


            </div>
         
        </Card>
          </div>
        }
        >
    <div onClick={(e) => e.preventDefault()} className='text-white font-semibold  text-md'>
      SERVICES
    </div>
  </Dropdown>
  )
}

export default Services