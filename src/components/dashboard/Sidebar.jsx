import React from "react";

import ProcessTransaction from "./ProcessTransaction";
import OrderDetials from "./OrderDetials";
import CoustomerInformation from "./CoustomerInformation";
const Sidebar = () => {
  return (
    <aside className=" border-l-1 border-l-[#F1F1F1] w-[400px]  h-[calc(100vh-70px)] bg-white grid grid-col-[3fr] mt-[40px] ">
      <CoustomerInformation />
      <OrderDetials />
      <ProcessTransaction />
    </aside>
  );
};

export default Sidebar;
