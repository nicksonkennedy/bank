import { AmazonOutlined, CarOutlined, HomeOutlined, ShoppingOutlined, WifiOutlined } from '@ant-design/icons'
import React from 'react'

const Dash = () => {
  return (
    <div className='mt-14 p-8'>
        <div> <h1 className='text-slate-700 text-2xl font-semibold'>Dashboard</h1> </div>

        <div className='grid md:grid-cols-3 gap-5'>
        <div className=' bg-indigo-500 shadow-2xl text-white px-8 py-3 rounded-md'>
            <h1 className='text-white font-semibold'>Main Account</h1>
            <div className='mb-3'><span className='font-bold'>$</span> 1144.05</div>
            <button className='bg-indigo-400 rounded-md px-3 py-1 text-white shadow-lg'>Transfer Money</button>
        </div>


        <div className=' bg-white shadow-2xl text-slate-700 px-8 py-3 rounded-md'>
            <h1 className='text-slate-600 font-semibold'>Savings Account</h1>
            <div className='mb-3'><span className='font-bold'>$</span> 132,594.00</div>
            <button className='bg-indigo-400 rounded-md px-3 py-1 text-white shadow-lg'>Transfer Money</button>
        </div>


        <div className=' bg-gray-400 shadow-2xl text-white px-8 py-3 rounded-md'>
            <h1 className='text-white font-semibold'>Currency Account</h1>
            <div className='mb-3'><span className='font-bold'>$</span> 132,000</div>
            <button className='bg-gray-300 rounded-md px-3 py-1 text-slate-900 shadow-lg'>Transfer Money</button>
        </div>
        </div>


        {/**Recent activities */}

        <div className='mt-10 p-4 bg-gray-100 w-full shadow-2xl rounded-2xl'>
            <h1 className='text-lg leading-5 font-semibold'>Recent Transactions</h1>

            <div className='mt-5 grid'>
                <div className='grid sm:grid-cols-3 gap-3 md:gap-6'>
                    <span  className='text-md font-semibold text-slate-700'><HomeOutlined  className='p-2 bg-orange-300 relative bottom-1 rounded-md'/> Electricity Bill </span>
                    <span className='text-md font-semibold text-slate-500'> 10th Jul , 2022 at 6:30 PM </span>
                    <span  className='text-md font-semibold text-slate-700'> - $ 90.00 </span>
                </div>
                        <div  className='block md:hidden mt-3 md:mt-0'><hr/></div>
                <div className='grid sm:grid-cols-3 gap-3 md:gap-6 mt-3'>
                    <span  className='text-md font-semibold text-slate-700'><CarOutlined  className='p-2 bg-green-300 relative bottom-1 rounded-md'/> Gas Station </span>
                    <span className='text-md font-semibold text-slate-500'> 02 Aug , 2022 at 8:13 AM </span>
                    <span  className='text-md font-semibold text-slate-700'> - $ 200.00 </span>
                </div>
                <div  className='block md:hidden mt-3 md:mt-0'><hr/></div>
                <div className='grid sm:grid-cols-3 gap-3 md:gap-6 mt-3'>
                    <span  className='text-md font-semibold text-slate-700'><ShoppingOutlined  className='p-2 bg-slate-300 relative bottom-1 rounded-md'/> Gucci Shoe </span>
                    <span className='text-md font-semibold text-slate-500'> 05 Aug , 2022 at 03:08 AM </span>
                    <span  className='text-md font-semibold text-slate-700'> - $ 120.00 </span>
                </div>
                <div  className='block md:hidden mt-3 md:mt-0'><hr/></div>
                <div className='grid sm:grid-cols-3 gap-3 md:gap-6 mt-3'>
                    <span  className='text-md font-semibold text-slate-700'><WifiOutlined  className='p-2 bg-blue-300 relative bottom-1 rounded-md'/> Mobile Data </span>
                    <span className='text-md font-semibold text-slate-500'> 20th Aug , 2022 at 10:41 AM </span>
                    <span  className='text-md font-semibold text-slate-700'> - $ 92.00 </span>
                </div>
                <div  className='block md:hidden mt-3 md:mt-0'><hr/></div>
                <div className='grid sm:grid-cols-3 gap-3 md:gap-6 mt-3'>
                    <span  className='text-md font-semibold text-slate-700'><AmazonOutlined  className='p-2 bg-red-300 relative bottom-1 rounded-md'/> Snikers </span>
                    <span className='text-md font-semibold text-slate-500'> 20th Sept , 2022 at 10:41 AM </span>
                    <span  className='text-md font-semibold text-slate-700'> - $ 232.00 </span>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Dash