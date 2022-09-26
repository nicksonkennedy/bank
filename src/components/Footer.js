import React from 'react'
import {  } from '@mui/icons-material'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='p-3 mt-10 relative top-32 mx-auto text-center bg-black '>
        <div className='max-w-sm  mx-auto text-center text-white  grid grid-cols-5'>
           <Link to='' className='text-white' > <FacebookOutlined className='text-4xl'/></Link>
           <Link to='' className='text-white' > <InstagramOutlined className='text-4xl'/></Link>
           <Link to='' className='text-white' > <TwitterOutlined className='text-4xl'/></Link>
           <Link to='' className='text-white' > <WhatsAppOutlined className='text-4xl'/></Link>
           <Link to='' className='text-white' > <YoutubeOutlined className='text-4xl'/></Link>
        </div>
    </div>
  )
}

export default Footer