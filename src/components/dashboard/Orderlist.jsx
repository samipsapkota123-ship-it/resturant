import RecentOrderList from "./RecentOrderList";
import { RECENTORDERLIST } from "../../data";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Orderlist = () => {
  // fixed top-[70px]

  return (
    <div className=" w-[calc(100vw-440px)]  mt-[40px]">
      <div className="flex flex-row justify-between items-center">
        <div className="text-2xl gap-[10px] font-semibold mt-2.5">
          Order List
        </div>
        <Link
          to="/SeeAll"
          className="text-[18px] text-[#A6A6A6] gap-[10px] font-semibold mt-2.5 hover:text-blue"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-row gap-8 overflow-x-auto overflow-y-hidden  scrollbar-hide">
        {RECENTORDERLIST.map((order) => (
          <RecentOrderList
            key={order.id}
            title={order.title}
            totalOrder={order.totalOrder}
            totalItems={order.totalItems}
            tableNo={order.tableNo}
            status={order.status}
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
