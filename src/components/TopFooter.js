import React from 'react'
import { ExclamationCircleFilled, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CalendarMonthOutlined } from '@mui/icons-material';

const TopFooter = () => {
  return (
    <div className='p-3 mt-10 relative top-44 mx-auto text-center bg-slate-900 '>

      <div className='grid md:grid-cols-3 gap-4'>
      <div className='mt-12 news mx-auto'>
            <h1 className='text-2xl font-semibold text-white mb-3'>
                <span><NotificationOutlined className='text-2xl relative bottom-1' /></span>
                 <span className='ml-3'>LATEST NEWS</span></h1>

                 <div className='feeds '>
                 <Link to=''>
                 <h4 className='text-slate-200 text-center'>America First Credit Union Now Accepting Utah and Arizona Mobile Drivers Licenses at All Branch Locations</h4>
                 </Link>
                 <h6 className='text-slate-500 font-monospace'>Aug 11, 2022 - Press Releases</h6>
                 </div>

                 <div className='feeds mt-3'>
                 <Link to=''>
                 <h4 className='text-slate-200 text-center'>America First donates $15K during DSD Child Spree Event</h4>
                 </Link>
                 <h6 className='text-slate-500 font-monospace'>Aug 5, 2022 - Press Releases</h6>
                 </div>

                 <div className='feeds mt-3'>
                 <Link to=''>
                 <h4 className='text-slate-200 text-center'>America First is Volunteering “For the Kids”</h4>
                 </Link>
                 <h6 className='text-slate-500 font-monospace'>Aug 5, 2022 - Press Releases</h6>
                 </div>

                 <div className='feeds mt-3'>
                 <Link to=''>
                 <h4 className='text-slate-200 text-center'>America First Charitable Foundation & Young Automotive Group Team Up to Fight Hunger</h4>
                 </Link>
                 <h6 className='text-slate-500 font-monospace'>Aug 1, 2022 - Press Releases</h6>
                 </div>

                 <div className=' mt-3'>
                 <Link to=''>
                 <h4 className='text-slate-200 text-center'>America First Saddles Up and Helps Out on Pioneer Day</h4>
                 </Link>
                 <h6 className='text-slate-500 font-monospace'>Jul 27, 2022 - Uncategorized</h6>
                 </div>
            </div>

            <div className='mt-12 news mx-auto'>
            <h1 className='text-2xl font-semibold text-white mb-3'>
                <span><CalendarMonthOutlined className='text-2xl relative bottom-1' /></span>
                 <span className='ml-3'> UPCOMING EVENTS</span></h1>

                 <div className='feeds '>
                 <Link to=''>
                 <h4 className='text-slate-200 text-center'>Behavioral Finance Seminar</h4>
                 </Link>
                 <h6 className='text-slate-500 font-monospace'>Aug 25, 2022 </h6>
                 </div>

                

                 

                 <div className=' mt-3'>
                 <Link to=''>
                 <h4 className='text-slate-200 text-center'>More Events</h4>
                 </Link>
                 
                 </div>
            </div>

                   {/************************************ */}
                   <div className='mt-12 news mx-auto mb-10'>
                   <h1 className='text-2xl font-semibold text-white mb-3'>
                <span><ExclamationCircleFilled className='text-2xl relative bottom-1' /></span>
                 <span className='ml-3'> INFORMATION</span></h1>

                 <div className=' text-white'>
                
                <h4 className='text-slate-200 text-center'>
                America First Credit Union <br/><br/>
                PO Box 9199 <br/><br/>
                Ogden, Utah 84409
                </h4>
                <br/>
                <h4 className='text-slate-200 font-monospace'><Link to='' className='text-white underline text-lg'>CONTACT US</Link> </h4>
                Routing & Transit Number: <br/>
               <b> 324377516</b> <br/><br/>

                 <h5 className='text-white'> Start your career at America First</h5> <br/>
                   <Link to='' className='px-4 py-2 bg-blue-600 text-white'> VIEW CURRENT OPENINGS</Link>

                </div>
                   </div>
                    </div>

            
    </div>
  )
}

export default TopFooter