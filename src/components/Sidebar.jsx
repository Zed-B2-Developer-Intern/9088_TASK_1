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
    alert("You Logged Out");
  }

  return (
    <div className="bg-gray-100 dark:bg-dark-card w-64 h-screen fixed top-0 left-0 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between">
      {/* Logo Section */}
      <div>
        <div className="flex flex-col items-center justify-center pt-6 pb-4">
          <Image src="/dashboard.svg" alt="Logo" width={100} height={100} />
          {/* <h1 className="text-black font-bold text-xs">WELCOME</h1> */}
        </div>

        {/* Navigation Items and Routing */}
        <div className="flex flex-col">
          <Listtile title="Dashboard" icon={<DashboardIcon />} href={'/dashboard'} />
          <Listtile title="Analytics" icon={<AnalyticsIcon />} href={'/analytics'}/>
          <Listtile title="Sales" icon={<TrendingUpIcon />} href={'/sales'}/>
          <Listtile title="Orders" icon={<ReceiptLongIcon />} href={'/orders'}/>
          <Listtile title="Categories" icon={<CategoryIcon />} href={'/categories'}/>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mb-4">
        <Listtile
          title="Logout"
          icon={<LogoutIcon />}
          onClick={handlehomeevent}
        />
      </div>
    </div>
  );
}
