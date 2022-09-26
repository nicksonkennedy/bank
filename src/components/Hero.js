import React from 'react'
import { ExclamationCircleFilled, WarningOutlined , FacebookFilled, InstagramOutlined, TwitterOutlined, YoutubeOutlined, WhatsAppOutlined, UsergroupAddOutlined, EditOutlined, GlobalOutlined, UserAddOutlined, LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons';
import { Carousel } from 'antd';
import{Link } from 'react-router-dom'

const Hero = () => {
  const contentStyle = {
    height: 'auto',
    width: '100%'
  };
  return (
    <>
   <div className='relative max-w-full w-full bg-white shadow-md top-20'>
    
    <div className=' bg-red-700 p-1  text-center text-gray-400 text-lg font-semibold '>
      <WarningOutlined className='text-4xl relative bottom-1'/> RISK ALERTS & NOTIFICATIONS</div>

      <div className='notice bg-slate-900 p-3 '>
     <div className=' max-w-6xl p-1'>
     <h1 className=' text-white text-xl font-semibold'><ExclamationCircleFilled className='text-xl relative bottom-1'/>  Beware of Phishing & Fraud</h1>
      <span className='text-gray-50 text-lg'>We have recently seen an increase in fraudulent activity through 
      phishing scams via text message, email and phone. In order to safeguard your identity and protect your 
      finances, never click unsolicited links or respond to suspicious texts, emails or calls. For more information 
      click here.If you receive a suspicious email or text message we encourage you to report it by emailing us
       at phishing@americafirst.com</span>
     </div>
      </div>

     {/**Carousel */}
     <div className='relative'>
     <Carousel autoplay dotPosition='top' >
    <div>
      <div style={contentStyle}>
      <img src='samp2.jpg' className='w-full object-cover brightness-50'/>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img src='samp1.jpg' className='w-full object-cover'/>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img src='samp3.jpg' className='w-full object-cover'/>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img src='samp4.jpg' className='w-full object-cover'/>
      </div>
    </div>
  </Carousel>

  <div className='max-w-lg bg-white shadow-6xl p-3 absolute nick rounded-lg hidden mdmd:block animate__animated animate__slideInUp animate__delay-1s '>
            <img  src='login.png' alt='logo for' className='h-12 w-full'/>
            <form className='space-y-3'>
             
             <div className='mt-2 font-bold p-2 text-center bg-orange-500 rounded-md w-full'><Link to='/login' className=' text-white '>Login</Link></div>
              
             <div className='mt-5 text-center block'>
             <h4 className='text-center text-gray-500 '>First time using online banking?</h4>
             <Link to='/register' className='text-center font-bold text-blue-900 brightness-50'>Enroll Now</Link>

            <div className='mt-1'>
            <Link to='' className='text-center font-bold text-blue-900 brightness-50'>Forgot password?</Link>
            </div>

            <div className='mt-3'>
                <img src='connect.png'/>

                <div className='social text-center mx-auto space-x-2'>
                  <span> <FacebookFilled className='text-lg'/> </span>
                  <span> <InstagramOutlined className='text-lg' /> </span>
                  <span> <TwitterOutlined className='text-lg'/> </span>
                  <span> <YoutubeOutlined className='text-lg'/> </span>
                  <span> <WhatsAppOutlined className='text-lg'/> </span>
                </div>
            </div>

             </div>
            </form>
          </div>
     </div>

     <div className='bg-white shadow-2xl  mt-10'>
              <div className='max-w-4xl gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto text-center'>
                  <div className=''>
                  <Link to='' className='text-orange-700'>
                  <UserAddOutlined className='text-4xl'  />
                  <h1 className=' text-lg text-slate-700'>BECOME A MEMBER</h1>
                  </Link>
                  </div>

                  <div className=''>
                  <Link to='' className='text-orange-700'>
                  <EditOutlined className='text-4xl'  />
                  <h1 className=' text-lg text-slate-700'>APPLY FOR LOAN</h1>
                  </Link>
                  </div>

                  <div className=''>
                  <Link to='' className='text-orange-700'>
                  <GlobalOutlined className='text-4xl'  />
                  <h1 className=' text-lg text-slate-700'>FIND LOCATION</h1>
                  </Link>
                  </div>

                  <div className=''>
                  <Link to='' className='text-orange-700'>
                  <UsergroupAddOutlined className='text-4xl'  />
                  <h1 className=' text-lg text-slate-700'>CARRER</h1>
                  </Link>
                  </div>
              </div>
          </div>
   </div>
   </>
  )
}

export default Hero