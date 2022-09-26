import React from 'react'
import Dash from './Dash'
import SideNav from './SideNav'
import TopDashNav from './TopDashNav'

const Dashboard = () => {
  return (

      <div className='flex'>
      <div className='hidden md:block md:w-[20%]'>
      <SideNav />
      </div>
      
      <div className=' w-[100%] md:w-[80%] h-full'>
      <TopDashNav />
      <Dash />
      </div>
      </div>
        
    
  )
}

export default Dashboard