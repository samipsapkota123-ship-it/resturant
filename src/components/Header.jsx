import React from 'react'
import logoImage from "../assets/images/logo.jpg"
import profileImage from"../assets/images/profileimg.jpg"
import { LayoutDashboard,ClipboardList,History,ReceiptText, Bell } from 'lucide-react'
import MenuItems from './MenuItems'
import '../components/Header.css'


const Header = () => {
  const menuItems=[
    {
      id: 1,
      label: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      id: 2,
      label: "Order list",
      icon: <ClipboardList />,
    },
    {
      id: 3,
      label: "History",
      icon: <History/>,
    },
    {
       id: 4,
      label: "Bills",
      icon: <ReceiptText />,
    }
  ]
  return (
  <header className="flex justify-between items-center auto-container">
    <div className="flex items-center gap-[10px]">
      <div className='h-12 w-12 rounded-full' >
        <img src={logoImage} alt="" className='h-full w-full rounded-full' />
      </div>
      <span className='text-2xl font-semibold'>Logo here</span>
    </div>
    <nav>
       <ul className="flex items-center gap-10">
        {menuItems.map((item)=>(
          <MenuItems key={item.id} itemIcon={item.icon} itemLabel={item.label}/>
        ))}
       </ul>
    </nav>
    <div className="flex items-center gap-[20px]">
      <Bell size={"30px"} strokeWidth={"2px"}/>
      <div className='h-12 w-12 rounded-full'>
        <img src={profileImage} alt=""className='h-full w-full rounded-full' />
      </div>
    </div>
  </header>
  )
}

export default Header