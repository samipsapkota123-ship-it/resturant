import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Orderlist from '../components/dashboard/Orderlist'

const Dashboard = () => {
  return (
    <>
      <Orderlist/>
      
      <Sidebar/>
    </>
  )
}

export default Dashboard