"use client";

import Listtile from "./Listtile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";

export default function Sidebar() {
  function handlehomeevent() {
    alert("okay");
  }
  return (
    <div className="bg-gray-100 w-64 h-screen fixed top-0 left-0 border-r border-gray-200">
      <div>
        <div className="flex flex-col items-center justify-center bg-gray-100">
          <Image src="/dashboard.svg" alt="Logo" width={150} height={150} />

          {/* <h1 className="text-black font-bold text-xs">WELCOME</h1> */}
        </div>

        <div>
          <Listtile
            title="DashBorad"
            icon={<DashboardIcon />}
            onClick={handlehomeevent}
          />
          <Listtile title="Analytics" icon={<AnalyticsIcon />} />
          <Listtile title="Sales" icon={<TrendingUpIcon />} />
          <Listtile title="Orders" icon={<ReceiptLongIcon />} />
          <Listtile title="Categories" icon={<CategoryIcon />} />
        </div>
      </div>
      <div>
        <Listtile title="Logout" icon={<LogoutIcon />} />
      </div>
    </div>
  );
}
