import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-full w-full grid grid-cols-[3fr_1fr] gap-[10px]'>
      <div >
         <div className='text-2xl gap-[10px] font-semibold'>Order List</div>
          <div className="flex flex-row justify-between">
            <div className="w-[260px] lists rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="flex flex-row justify-between w-[200px] ">
                <div className="flex flex-col gap-[21px]">
                  <div className="flex flex-col">
                    <div className="font-medium text-[18px] text-black">Loreom</div>
                    <div className="font-medium text-[10px] text-text-gray">3 items . Table 3</div>
                  </div>
                  <div className="font-medium text-[14px] text-white bg-red rounded-[9px] text-center operation">Canceled</div>
                </div>
                <div className="font-mediumtext-[12px] text-text-gray"> #12532</div>
              </div>
            </div>

            <div className="w-[260px] lists rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="flex flex-row justify-between w-[200px] ">
                <div className="flex flex-col gap-[21px]">
                  <div className="flex flex-col">
                    <div className="font-medium text-[18px] text-black">Loreom</div>
                    <div className="font-medium text-[10px] text-text-gray">3 items . Table 3</div>
                  </div>
                  <div className="font-medium text-[14px] text-white bg-green rounded-[9px] text-center operation">Redy to Serve</div>
                </div>
                <div className="font-mediumtext-[12px] text-text-gray"> #12532</div>
              </div>
            </div>
            <div className="w-[260px] lists rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="flex flex-row justify-between w-[200px] ">
                <div className="flex flex-col gap-[21px]">
                  <div className="flex flex-col">
                    <div className="font-medium text-[18px] text-black">Loreom</div>
                    <div className="font-medium text-[10px] text-text-gray">3 items . Table 3</div>
                  </div>
                  <div className="font-medium text-[14px] text-white bg-orange rounded-[9px] text-center operation">Waiting</div>
                </div>
                <div className="font-mediumtext-[12px] text-text-gray"> #12532</div>
              </div>
            </div>
            <div className="w-[260px] lists rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="flex flex-row justify-between w-[200px] ">
                <div className="flex flex-col gap-[21px]">
                  <div className="flex flex-col">
                    <div className="font-medium text-[18px] text-black">Loreom</div>
                    <div className="font-medium text-[10px] text-text-gray">3 items . Table 3</div>
                  </div>
                  <div className="font-medium text-[14px] text-white bg-blue rounded-[9px] text-center operation">Completed</div>
                </div>
                <div className="font-mediumtext-[12px] text-text-gray"> #12532</div>
              </div>
            </div>
          </div>
      </div>
      <aside className="flex flex-col border-l-1 border-l-[#F1F1F1] ">
        <div className="flex flex-col gap-4">
          <span className='font-medium text-[20px] '>Coustomer Information</span>
          <div className="w-full flex flex-col gap-[17px]">
            <div className='w-full b border-[1.5px] border-[#E4E4E4] rounded-[15px]'><input type="text" placeholder="Customer name" className='w-full font-medium text-[16px] focus:border-0 focus:outline-0 name'/></div>
            <div className="w-full b border-[1.5px] border-[#E4E4E4] rounded-[15px]"><input type="number" placeholder="Select Table" className='w-full font-medium text-[16px] focus:border-0 focus:outline-0 table'/></div>
          </div>
        </div>
    </aside>
    </div>
  )
}

export default Dashboard