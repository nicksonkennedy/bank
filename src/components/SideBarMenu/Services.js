import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowUpOutlined, CalculatorOutlined, CarFilled, HomeFilled, PercentageOutlined, PieChartFilled, PlusCircleFilled, SaveFilled, StarFilled, UserOutlined } from '@ant-design/icons';
import { AddOutlined,  Diamond, Edit, Home, PhoneAndroidOutlined } from '@mui/icons-material';

const Services = () => {
  return (
    <div className='grid  gap-3 p-1'>
              


              <div>
              <h1 className='text-md text-gray-500  underline underline-offset-8'><ArrowUpOutlined className='relative bottom-1 text-black' />  DIGITAL BANKING SERVICES</h1>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Digital Banking Services</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Online Banking</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Bill Pay</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     ABC Deals</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Alert</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Money Manager</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    FICO Score</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Zelle</Link></h6>


              <div className='mt-4'>
              <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><PhoneAndroidOutlined className='relative bottom-1 text-black' /> MOBILE SERVICES</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Mobile Banking</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Mobile Payments</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Card Guard</Link></h6>
              </div>


              </div>



              <div>
              <h1 className='text-md text-gray-500  underline underline-offset-8'><CalculatorOutlined className='relative bottom-1 text-black' />  FINANCIAL TOOLS</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Mortgage Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Auto Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Savings Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Cash Flow Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Credit Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Retirement Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     College Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Small Business Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      NADA guides Vehicle Pricing</Link></h6>

                <div className='mt-4'>
              <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><PieChartFilled className='relative bottom-1 text-black' />    INVESTMENTS & INSURANCE</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     CUSO Financial Services</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Self Directed Online Trading</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Insurance Services</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Proof of Insurance Submission</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Trust Services</Link></h6>

              </div>

              
        

              </div>

              <div>
              <h1 className='text-md text-gray-500  underline underline-offset-8'><PlusCircleFilled className='relative bottom-1 text-black' />  OTHER SERVICES</h1>
               
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Account Switching</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     ATMs</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Direct Deposit</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Financial Counseling Services</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Foreign Currency Exchange</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Identity Theft Recovery</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Mechanical Breakdown Protection</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>       New Account Loan Hub</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>       Repossession Sales</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>       Routing Number</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>        Speech Access</Link></h6>
              </div>


            </div>
  )
}

export default Services