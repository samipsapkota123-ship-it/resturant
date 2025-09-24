import React from "react";

import Menu from "./Menu";
const Maincoursecontent = () => {
  return (
    <div className="flex flex-col gap-[20px]  w-[calc(100vw-440px)] bg-white">
      <div className="flex flex-row justify-between w-[calc(100vw-420px)] fixed bg-white z-10 pr-[20px]">
        <div className="font-semibold text-[20px]">Menu</div>
        <div className="text-[#A6A6A6] font-medium text-[18px] ">
          Showing 30 Items
        </div>
      </div>
      <Menu/>
    </div>
  );
};

export default Maincoursecontent;
