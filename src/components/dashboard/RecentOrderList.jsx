import React from "react";
import { checkStatus } from "../../../logic/helper-function";

const RecentOrderList = (props) => {
  const [colorClass, statusText] = checkStatus(props.status);

  return (
    <div className="w-[260px] lists rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] mt-[10px]">
      <div className="flex flex-row justify-between w-[200px]">
        <div className="flex flex-col gap-[21px]">
          <div className="flex flex-col">
            <div className="font-medium text-[18px] text-black">{props.title}</div>
            <div className="font-medium text-[10px] text-text-gray">
              {props.totalItems} items . Table {props.tableNo}
            </div>
          </div>
          <div
            className={`font-medium text-[14px] text-white ${colorClass} rounded-[9px] text-center operation`}
          >
            {statusText}
          </div>
        </div>
        <div className="font-medium text-[12px] text-text-gray">
          #{props.totalOrder}
        </div>
      </div>
    </div>
  );
};

export default RecentOrderList;
