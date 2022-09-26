import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const InfoSection = () => {
 
    useEffect(() => {
        AOS.init({
          startEvent: 'DOMContentLoaded',
          once: true,
        });
       
      }, [])

  return (
    <div className='container p-3 relative top-44 mx-auto text-center grid md:grid-cols-2 lg:grid-cols-4 justify-between space-x-5 gap-4'>

        <Link to=''
         className='transition-all delay-100 duration-200 hover:-translate-y-8'
         data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="150"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
         >
        <div className='card bg-white shadow-2xl '>
            <img src='info/risk.jpg' className='h-36 w-full' />

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>RISK ALERT!</h1>
                <h4 className='mt-3 text-md'>Fraud is on the rise. Beware of suspicious texts, emails & calls.</h4>
            </div>
        </div></Link>

        <Link to='' className='transition-all delay-100 duration-200 hover:-translate-y-8'>
        <div className='card bg-white shadow-2xl '>
            <img src='info/discount.jpg' className='h-36 w-full' />

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>Deals & Discounts</h1>
                <h4 className='mt-3 text-md'>Discover the many free perks of membership in America First.</h4>
            </div>
        </div></Link>

        <Link to='' 
        className='transition-all delay-100 duration-200 hover:-translate-y-8'
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        >
        <div className='card bg-white shadow-2xl h-64'>
            <img src='info/raiders.jpg' className='h-36 w-full' />

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>Raider Nation</h1>
                <h4 className='mt-3 text-md'>Get the official debit card of the Silver & Black - only from America First..</h4>
            </div>
        </div></Link>

        <Link to='' className='transition-all delay-100 duration-200 hover:-translate-y-8'>
        <div className='card bg-white shadow-2xl h-64'>
            <img src='info/premium.jpg' className='h-36 w-full'/>

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>The Future of Finances</h1>
                <h4 className='mt-3 text-md'>Discover all the benefits that come with a Premium Checking account.</h4>
            </div>
        </div></Link>

            {/*********************** */}
            <Link to='' className='transition-all delay-100 duration-200 hover:-translate-y-8'>
        <div className='card bg-white shadow-2xl h-64'>
            <img src='info/home.jpg' className='h-36 w-full'/>

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>Unlock Extra Funds</h1>
                <h4 className='mt-3 text-md'>With a home equity loan, home is where the cash is!.</h4>
            </div>
        </div></Link>

        <Link to='' 
        className='transition-all delay-100 duration-200 hover:-translate-y-8'
        data-aos="slide-up"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        >
        <div className='card bg-white shadow-2xl h-64'>
            <img src='info/july.jpg' className='h-36 w-full'/>

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>Use Your Home’s Equity</h1>
                <h4 className='mt-3 text-md'>Benefit from low introductory rates on a line of credit.</h4>
            </div>
        </div></Link>

        <Link to='' className='transition-all delay-100 duration-200 hover:-translate-y-8'>
        <div className='card bg-white shadow-2xl h-64'>
            <img src='info/july.jpg' className='h-36 w-full'/>

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>Find & Finance</h1>
                <h4 className='mt-3 text-md'>Experience a stress-free auto shopping process with AutoSMART.</h4>
            </div>
        </div></Link>

        <Link to=''
         className='transition-all delay-100 duration-200 hover:-translate-y-8'
         data-aos="flip-up"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
         >
        <div className='card bg-white shadow-2xl h-64'>
            <img src='info/privacy.jpg' className='h-36 w-full'/>

            <div className='p-3 text-center mx-auto'>
                <h1 className='font-semibold text-lg'>Our Privacy Policy</h1>
                <h4 className='mt-3 text-md'>See how we collect & protect your personal information.</h4>
            </div>
        </div></Link>
    </div>
  )
}

export default InfoSection