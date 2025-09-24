import React from "react";
import Maincoursecontent from "./Maincoursecontent";

const Categories = () => {
  return (
    <div className="flex flex-col gap-[34px]  fixed mt-[230px] bg-white ">
      <div className="w-[calc(100vw-440px)]  flex flex-row justify-between gap-[34px] bg-categories-bg  rounded-[12px]">
        <div className="w-[271px] pt-[10px] pb-[10px] flex items-center justify-center font-medium text-[18px] rounded-[50px]">
          Appetizer
        </div>
        <div className="w-[271px] pt-[10px] pb-[10px] flex items-center justify-center font-medium text-[18px] bg-white rounded-[50px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          Main Course
        </div>
        <div className="w-[271px] pt-[10px] pb-[10px] flex items-center justify-center font-medium text-[18px] rounded-[50px]">
          Desert
        </div>
        <div className="w-[271px] pt-[10px] pb-[10px] flex items-center justify-center font-medium text-[18px] rounded-[50px]">
          Beverages
        </div>
      </div>

      <Maincoursecontent />
    </div>
  );
};

export default Categories;
