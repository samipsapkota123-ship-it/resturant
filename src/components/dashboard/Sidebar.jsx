import React from 'react'

const Sidebar = () => {
  return (
    <aside className="flex flex-col border-l-1 border-l-[#F1F1F1] w-[400px] fixed right-0 top-[70px] h-[calc(100vh-70px)] bg-white ">
        <div className="flex flex-col gap-4 px-2.5">
          <span className='font-medium text-[20px] mt-3'>Coustomer Information</span>
          <div className="w-full flex flex-col gap-[17px]">
            <div className='w-full b border-[1.5px] border-[#E4E4E4] rounded-[15px]'><input type="text" placeholder="Customer name" className='w-full font-medium text-[16px] focus:border-0 focus:outline-0 name'/></div>
            <div className="w-full b border-[1.5px] border-[#E4E4E4] rounded-[15px]"><input type="number" placeholder="Select Table" className='w-full font-medium text-[16px] focus:border-0 focus:outline-0 table'/></div>
          </div>
        </div>
    </aside>
  )
}

export default Sidebar