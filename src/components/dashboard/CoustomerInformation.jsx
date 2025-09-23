import React from "react";

const CoustomerInformation = () => {
  return (
    <div className="flex flex-col flex-1 gap-4 px-2.5  bg-white w-[400px] ">
      <span className="font-medium text-[20px] mt-3">
        Coustomer Information
      </span>
      <div className="w-full flex flex-col gap-[17px]">
        <div className="w-full b border-[1.5px] border-[#E4E4E4] rounded-[15px]">
          <input
            type="text"
            placeholder="Customer name"
            className="w-full font-medium text-[16px] focus:border-0 focus:outline-0 name"
          />
        </div>
        <div className="w-full b border-[1.5px] border-[#E4E4E4] rounded-[15px]">
          <input
            type="number"
            placeholder="Select Table"
            className="w-full font-medium text-[16px] focus:border-0 focus:outline-0 table"
          />
        </div>
      </div>
    </div>
  );
};

export default CoustomerInformation;
