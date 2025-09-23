import React from "react";
import samarMatal from "../../assets/images/samar-matal.png";
import ProcessTransaction from "./ProcessTransaction";
const Sidebar = () => {
  return (
    <aside className="flex flex-col border-l-1 border-l-[#F1F1F1] w-[400px] fixed right-0 top-[70px] h-[calc(100vh-70px)] bg-white ">
      <div className="flex flex-col flex-1 gap-4 px-2.5 fixed bg-white w-[400px] ">
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

      <div className="flex flex-col flex-1 gap-[24px] overflow-y-auto scrollbar-hide mt-[200px] px-2.5 ">
        <span className="font-medium text-[20px] ">Order Detials</span>
        <div className="flex flex-1 flex-col pr-[5px] overflow-x-hidden overflow-y-auto scrollbar-hide rounded-[15px]">
          <div className="flex flex-row gap-[10px] w-[100%]">
            <div className="w-[110px] h-[115px] rounded-[17px]">
              <img src={samarMatal} alt="" />
            </div>
            <div className="w-[270px] flex flex-col justify-between">
              <div className="font-semibold text-[1.1rem]">
                Crispy Dolly Samar Matal
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center w-[135px]">
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-categories-bg font-medium text-[25px] flex justify-center items-center">
                    -
                  </div>
                  <span className="font-medium text-[1.3rem]">2</span>
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-blue font-medium text-[25px] flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="font-medium text-[1.3rem]">$101.99</div>
              </div>
            </div>
          </div>
          <div className="w-[387px] h-[1.5px] bg-[#E4E4E4] opacity-100 mt-2 mb-2"></div>
<div className="flex flex-row gap-[18px] w-[100%]">
            <div className="w-[110px] h-[115px] rounded-[17px]">
              <img src={samarMatal} alt="" />
            </div>
            <div className="w-[270px] flex flex-col justify-between">
              <div className="font-semibold text-[1.1rem]">
                Crispy Dolly Samar Matal
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center w-[135px]">
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-categories-bg font-medium text-[25px] flex justify-center items-center">
                    -
                  </div>
                  <span className="font-medium text-[1.3rem]">2</span>
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-blue font-medium text-[25px] flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="font-medium text-[1.3rem]">$101.99</div>
              </div>
            </div>
          </div>
          <div className="w-[387px] h-[1.5px] bg-[#E4E4E4] opacity-100 mt-2 mb-2"></div>

          <div className="flex flex-row gap-[18px] w-[100%]">
            <div className="w-[110px] h-[115px] rounded-[17px]">
              <img src={samarMatal} alt="" />
            </div>
            <div className="w-[270px] flex flex-col justify-between">
              <div className="font-semibold text-[1.1rem]">
                Crispy Dolly Samar Matal
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center w-[135px]">
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-categories-bg font-medium text-[25px] flex justify-center items-center">
                    -
                  </div>
                  <span className="font-medium text-[1.3rem]">2</span>
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-blue font-medium text-[25px] flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="font-medium text-[1.3rem]">$101.99</div>
              </div>
            </div>
          </div>
          <div className="w-[387px] h-[1.5px] bg-[#E4E4E4] opacity-100 mt-2 mb-2"></div>
          <div className="flex flex-row gap-[18px] w-[100%]">
            <div className="w-[110px] h-[115px] rounded-[17px]">
              <img src={samarMatal} alt="" />
            </div>
            <div className="w-[270px] flex flex-col justify-between">
              <div className="font-semibold text-[1.1rem]">
                Crispy Dolly Samar Matal
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center w-[135px]">
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-categories-bg font-medium text-[25px] flex justify-center items-center">
                    -
                  </div>
                  <span className="font-medium text-[1.3rem]">2</span>
                  <div className="w-[28px] h-[28px] rounded-[50%] bg-blue font-medium text-[25px] flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="font-medium text-[1.3rem]">$101.99</div>
              </div>
            </div>
          </div>
          <div className="w-[387px] h-[1.5px] bg-[#E4E4E4] opacity-100 mt-2 mb-2"></div>
          
        </div>
      </div>
    <ProcessTransaction/>
    </aside>
  );
};

export default Sidebar;
