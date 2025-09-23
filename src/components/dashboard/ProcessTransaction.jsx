import React from "react";

const ProcessTransaction = () => {
  return (
    <div className="fixed bottom-0 bg-white rounded-[15px] w-[400px] flex-1 z-[1000]">
      <div className="border-b-[3px] border-dotted border-[#E4E4E4] flex flex-col gap-[10px]">
        <span className="font-medium text-[20px] pt-[10px]">Order Summary</span>
        <div className="rounded-[16px] gap-[10px] opacity-100 pt-[15px] pb-[15px] bg-[#F2F7FA]">
          <div className="flex flex-row justify-between">
            <span className="font-medium text-[16px] text-[#8F8F8F]">
              Subtotal
            </span>
            <div className="font-medium text-[20px] ">$101.99</div>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-medium text-[16px] text-[#8F8F8F]">
              Tax (10%)
            </span>
            <div className="font-medium text-[20px] ">$34</div>
          </div>
        </div>
      </div>
      <div className=" mt-[10px] h-[50px] rounded-[15px] text-center flex flex-col justify-center  bg-blue text-white font-medium hover:cursor-pointer">
        <span className="hover:text-black">Process Transaction</span>
      </div>
    </div>
  );
};

export default ProcessTransaction;
