import React from "react";
import samarMatal from "../../assets/images/samar-matal.png";
const OrderDetials = () => {
  return (
    <>
      <div className="flex flex-col flex-1 gap-[24px] overflow-y-auto scrollbar-hide  px-2.5 mt-[10px]">
        <span className="font-medium text-[20px] ">Order Detials</span>
        <div className="flex flex-1 flex-col pr-[5px] overflow-x-hidden overflow-y-auto scrollbar-hide rounded-[15px] ">
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
    </>
  );
};

export default OrderDetials;
