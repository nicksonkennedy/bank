import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowUpOutlined, CalculatorOutlined, CarFilled, GiftFilled, HomeFilled, NumberOutlined, PercentageOutlined, PieChartFilled, PlusCircleFilled, SaveFilled, SolutionOutlined, StarFilled, UserOutlined } from '@ant-design/icons';
import { AddOutlined,  ArrowUpwardOutlined,  CreditCard,  CreditCardOutlined,  Diamond, Edit, Home, Percent, PhoneAndroidOutlined } from '@mui/icons-material';

const Learn = () => {
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
                <h1 className='text-md text-gray-500 text-center'>FUNDamentals FOR MEMBERS</h1>
                <img src='learn.jpg' alt='man smiling' className='h-48 w-64' />
                <div className='mt-6 mx-auto text-center'><Link to='' className='text-slate-600 px-5 py-2  border-1 border-slate-600 text-md hover:bg-blueblue hover:text-white'>FUNDamentals HOME</Link></div>

              </div>


              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><UserOutlined className='relative bottom-1 text-black' />   EDUCATOR RESOURCES</h1>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Register for Curriculum</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>    Utah State Requirements</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>     Request A Presentation</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Common Core Standards</Link></h6>
                <h6 className='relative left-20'><Link to='' className='text-blueblue  text-md'>      Classroom Grant Nomination</Link></h6>
               
                <div className='mt-4'>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><SolutionOutlined className='relative bottom-1 text-black' />  INTRO TO INDEPENDENCE</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Financial Institution Tutorial</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Checking Accounts 101</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Budgeting Basics</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Good vs Bad Spending</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Living on Your Own</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Organizing Your Finances</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Intro to Insurance</Link></h6>
              </div>
              
              </div>



              <div>
              <h1 className='text-md text-gray-500 text-center underline underline-offset-8'><ArrowUpwardOutlined className='relative bottom-1 text-black' />   LEARNING ABOUT LOANS</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>     Loan Basics</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Comparing Cards</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>      Credit Score Breakdown</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>       Student Loans</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>       Buying a Used Car</Link></h6>
                <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>        Demystifying Mortgages</Link></h6>
              </div>

              


            </div>
         
        </Card>
          </div>
        }
        >
    <div onClick={(e) => e.preventDefault()} className='text-white font-semibold  text-md'>
      LEARN
    </div>
  </Dropdown>
  )
}

export default Learn