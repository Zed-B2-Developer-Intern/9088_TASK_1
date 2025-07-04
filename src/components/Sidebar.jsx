"use client";
import Listtile from "./Listtile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";

export default function Sidebar({ mobile = false }) {
  function handlehomeevent() {
    alert("You Logged Out");
  }
  return (
    <div
      className={`${
        mobile ? "flex" : "hidden md:flex"
      } bg-gray-100 dark:bg-dark-card w-64 h-screen fixed top-0 left-0 border-r border-gray-200 dark:border-gray-700 flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-center">
          <img
            src="/dashboard.svg"
            alt="Dashboard Logo"
            className="w-[150px] h-[150px] dark:invert"
          />
        </div>
        {/* ListTiles */}
        <div className="flex flex-col">
          <Listtile
            title="Dashboard"
            icon={<DashboardIcon />}
            href={"/dashboard"}
          />
          <Listtile
            title="Analytics"
            icon={<AnalyticsIcon />}
            href={"/analytics"}
          />
          <Listtile title="Sales" icon={<TrendingUpIcon />} href={"/sales"} />
          <Listtile
            title="Orders"
            icon={<ReceiptLongIcon />}
            href={"/orders"}
          />
          <Listtile
            title="Categories"
            icon={<CategoryIcon />}
            href={"/categories"}
          />
        </div>
      </div>
      {/* Logout Listtile */}
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
