import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Orderlist from '../components/dashboard/Orderlist'
import Categories from '../components/dashboard/Categories'

const Dashboard = () => {
  return (
    <>
      <Orderlist/>
       <Categories/>
      <Sidebar/>
    </>
  )
}

export default Dashboard