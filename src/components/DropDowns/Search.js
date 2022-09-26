import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowUpOutlined, CalculatorOutlined, CarFilled, GiftFilled, HomeFilled, NumberOutlined, PercentageOutlined, PieChartFilled, PlusCircleFilled, QuestionCircleOutlined, SaveFilled, SearchOutlined, SolutionOutlined, StarFilled, UserOutlined } from '@ant-design/icons';
import { AddOutlined,  ArrowUpwardOutlined,  CreditCard,  CreditCardOutlined,  Diamond, Edit, Home, Percent, PhoneAndroidOutlined, QuestionAnswerOutlined } from '@mui/icons-material';

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
<div className='p-1'>
        <h1 className='text-center text-2xl '>Search Our Site</h1>
        <div className='space-x-1 mx-auto text-center'>
            <input type='text' placeholder='Enter Any Key Word To Search.....' className='mx-auto text-center px-48 py-2 outline-none border-1 border-slate-400' />
            <button className='py-2 px-4 bg-gray-600 text-white'> <SearchOutlined className='relative bottom-1 text-md'/> </button>
         </div>

         <div className='mt-16 grid grid-cols-3 gap-3'>
         <div className=''>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><QuestionCircleOutlined className='relative bottom-1 text-black' />  POPULAR QUESTIONS</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  What is America First Credit Union's <br/>routing and transit number?</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    How do I reorder checks?</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    How can I find branch locations and <br/> hours of operation?</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Where can I find repos for sale?</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  Where can I find COVD-19 related <br/> branch hours?</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>    Where can I find COVID-19 Information & Updates?</Link></h6>

              </div>

              <div className=''>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'><QuestionAnswerOutlined className='relative bottom-1 text-black' />   FAQS BY CATEGORY</h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'> ABC Deals</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  Direct Deposit</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  Mobile Banking</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'> Quicken / Money</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'> Speech Access</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   Online Banking</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>   COVID-19</Link></h6>
              </div>

              <div className=''>
              <h1 className='text-md  relative left-14 text-gray-500 underline underline-offset-8'></h1>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'> Bill Pay</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  Online Statements</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  Health Savings</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'> Picture Perfect</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'> Visa</Link></h6>
              <h6 className='relative left-16'><Link to='' className='text-blueblue  text-md'>  Apple Pay</Link></h6>
            
              </div>
         </div>

</div>
            
        </Card>
          </div>
        }
        >
    <div onClick={(e) => e.preventDefault()} className='text-white font-bold text-xl cursor-pointer'>
    <SearchOutlined className='relative bottom-2'/>
    </div>
  </Dropdown>
  )
}

export default Learn