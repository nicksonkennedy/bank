import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import{Link } from 'react-router-dom'
const TopNav = () => {
  return (
    <div className='bg-gray-200 p-2 text-right '>
        <div className='space-x-7'>
            <Link to='loan' className='font-bold text-slate-700 text-sm underline'>APPLY FOR A LOAN</Link>
            <Link to='mortgage' className='font-bold text-slate-700 text-sm underline'>APPLY FOR A MORTGAGE</Link>
            <Link to='about' className='font-bold text-slate-700 text-sm underline'>ABOUT</Link>
            <Link to='about' className='font-bold text-slate-700 text-sm underline'>LOCATIONS</Link>
            <Link to='about' className='font-bold text-slate-700 text-sm underline'>JOIN</Link>
            <Link to='about' className='font-bold text-slate-700 text-sm underline'>CONTACT</Link>
            <Link to='about' className='font-bold text-slate-700 text-sm underline'>ABOUT</Link>
            <span><SearchOutlined className='text-xl' /> <Link to='about' className='font-bold text-slate-700 text-sm underline'>SEARCH</Link></span>
        </div>
    </div>
  )
}

export default TopNav