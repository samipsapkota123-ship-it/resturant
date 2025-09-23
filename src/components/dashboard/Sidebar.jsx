import React from "react";

import ProcessTransaction from "./ProcessTransaction";
import OrderDetials from "./OrderDetials";
import CoustomerInformation from "./CoustomerInformation";
const Sidebar = () => {
  return (
    <aside className="flex flex-col border-l-1 border-l-[#F1F1F1] w-[400px] fixed right-0 top-[70px] h-[calc(100vh-70px)] bg-white ">
      <CoustomerInformation/>

     <OrderDetials/>
    <ProcessTransaction/>
    </aside>
  );
};

export default Sidebar;
