import RecentOrderList from "./RecentOrderList";
import { RECENTORDERLIST } from "../../data";

const Orderlist = () => {
  
  return (
    <div className="h-[calc(100vh-70px)] w-[calc(100vw-400px)] fixed top-[70px] ">
      <div className="text-2xl gap-[10px] font-semibold mt-2.5">Order List</div>
      <div className="flex flex-row gap-8 overflow-x-auto overflow-y-hidden  scrollbar-hide">
        {RECENTORDERLIST.map((order) => (
          <RecentOrderList
            key={order.id}
            title = {order.title}
            totalOrder = {order.totalOrder}
            totalItems = {order.totalItems}
            tableNo = {order.tableNo}
            status = {order.status}
           />
        ))}

        {/* <RecentOrderList/>
            <RecentOrderList/>
            <RecentOrderList/>
            <RecentOrderList/> */}
      </div>
    </div>
  );
};

export default Orderlist;
