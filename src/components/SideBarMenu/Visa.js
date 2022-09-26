import React from 'react'
import { Dropdown, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowUpOutlined, CalculatorOutlined, CarFilled, GiftFilled, HomeFilled, NumberOutlined, PercentageOutlined, PieChartFilled, PlusCircleFilled, SaveFilled, StarFilled, UserOutlined } from '@ant-design/icons';
import { AddOutlined,  CreditCard,  CreditCardOutlined,  Diamond, Edit, Home, Percent, PhoneAndroidOutlined } from '@mui/icons-material';

const Visa = () => {
  return (
    <div className='grid  gap-3 p-1'>
  


    <div>
    <h1 className='text-md text-gray-500  underline underline-offset-8'><CreditCardOutlined className='relative  text-black' />   VISA CREDIT CARDS</h1>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Visa Signature</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Visa Platinum</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Visa Classic</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Secured Visa</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Silicon Slopes Visa</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Card Guard</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Visa Credit Card Activation</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Visa Credit Limit Increase</Link></h6>

    </div>



    <div>
    <h1 className='text-md text-gray-500  underline underline-offset-8'><CreditCard className='relative bottom-1 text-black' />  VISA DEBIT CARDS</h1>
    <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>    Visa Debit Card</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>   Fundz Visa Debit</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Official Raiders Debit Card</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Exclusive Utah Jazz Debit Card</Link></h6>

      <div className='mt-4'>
    <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><GiftFilled className='relative bottom-1 text-black' />  VISA GIFT CARDS</h1>
    <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Visa Gift Cards</Link></h6>

    </div>
    </div>

    <div>
    <h1 className='text-md text-gray-500  underline underline-offset-8'><NumberOutlined className='relative bottom-1 text-black' />   VISA DETAILS</h1>
     
    <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>     Visa Credit Card Benefits and Perks</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Visa Rewards</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Picture Perfect</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      Visa Card Security</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>      ID Theft Recovery</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>       Online Rewards Store</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>       Travel with Visa</Link></h6>
      <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>        Visa Dispute Form</Link></h6>

      <div className='mt-4'>
    <h1 className='text-md  relative left-1 text-gray-500 underline underline-offset-8'><Percent className='relative bottom-1 text-black' />   VISA RATES</h1>
    <h6 className='relative left-1'><Link to='' className='text-blueblue  text-md'>  Visa Credit Card Rates</Link></h6>

    </div>
    </div>


  </div>

  )
}

export default Visa