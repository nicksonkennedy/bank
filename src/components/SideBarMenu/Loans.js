import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { CarFilled, HomeFilled, PercentageOutlined, UserOutlined } from '@ant-design/icons';
import { CalculateOutlined, Home } from '@mui/icons-material';

const Loans = () => {
  return (
    <div>
         <div className='grid  gap-3 p-1'>
              


              <div>
              <h1 className='text-md text-gray-500  underline underline-offset-8'><CarFilled className='relative bottom-1 text-black' /> VEHICLE LOANS</h1>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>Auto Loans</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'> Proof of Insurance Submission</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'> NADA guides Vehicle Pricing</Link></h6>


              <div className='mt-4'>
              <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><CarFilled className='relative bottom-1 text-black' /> RV LOANS</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Motorhome Loans</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'> Trailer Loans</Link></h6>
              </div>

              <div className='mt-4'>
              <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><CarFilled className='relative bottom-1 text-black' /> POWERSPORT LOANS</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Motorcycle Loans</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'> Watercraft & Boat Loans</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  ATV & Four Wheeler Loans</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'> Side-by-Side & UTV Loans</Link></h6>
              </div>

              <div className='mt-4'>
              <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><UserOutlined className='relative bottom-1 text-black' />  PERSONAL LOANS</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Certificate Secured Loans</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Consolidation Loans</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Line of Credit</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Personal Loans</Link></h6>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Share Secured Loans</Link></h6>
              </div>


              </div>



              <div>
              <h1 className='text-md text-gray-500   underline underline-offset-8'><HomeFilled className='relative bottom-1 text-black' /> HOME EQUITY LOANS</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'> Home Equity Line of Credit</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Home Equity Loans</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Investment Property Loans</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Home Equity (First Mortgage) – No</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Closing Cost</Link></h6>

                <div className='mt-4'>
              <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><HomeFilled className='relative bottom-1 text-black' />   MORTGAGE / HOME LOANS</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Mortgage Loans</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Construction/Lot Loans</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     First Time Homebuyer's Guide</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Mortgage Refinancing</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Reverse Mortgages</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Mortgage Resources</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Purchase Specialists</Link></h6>
              </div>

              
              <div className='mt-4'>
              <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><CalculateOutlined className='relative bottom-1 text-black' />    CALCULATORS</h1>
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Mortgage Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Auto Loan Calculators</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Credit Calculators</Link></h6>
               

              </div>

              </div>

              <div>
              <h1 className='text-md text-gray-500   underline underline-offset-8'><PercentageOutlined className='relative bottom-1 text-black' /> LOAN RATES</h1>
               
              <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Auto Loan Rates</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   RV Loan Rates</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Motorcycle Loan Rates</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Watercraft Loan Rates</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Off-Road Loan Rates</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Home Equity Loan Rates</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Home Equity Line of Credit </Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     No Closing Cost First Mortgage </Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>       Construction/Lot Loan Rates</Link></h6>
                <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Personal Loan Rates</Link></h6>
              </div>


            </div>
         
    </div>
  )
}

export default Loans