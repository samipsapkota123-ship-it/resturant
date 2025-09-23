import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Orderlist from '../components/dashboard/Orderlist'
import Categories from '../components/dashboard/Categories'

const Dashboard = () => {
  return (
    <>
    <div className='flex flex-row'>
        <div>
        <Orderlist/>
       <Categories/>
      </div>
       <div className='fixed right-0'>
        <Sidebar/>
       </div>
    </div>
      
    </>
  )
}

export default Dashboard