"use client";

import { usePathname } from "next/navigation";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useThemeMode } from "@/utils/theme"; 

export default function Navbar() {

  // to make page responsive for mobile 
  const { mode: theme, toggleTheme } = useThemeMode(); 
  const [mobileOpen, setMobileOpen] = useState(false); 
  const [isMounted, setIsMounted] = useState(false);

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const pathname = usePathname();
  // tp get title of page
  const pageTitle =
    pathname === "/"
      ? "Dashboard"
      : pathname
          .split("/")[1]
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  return (
    <>
      {/*Navbar */}
      <div className="text-gray-400 h-16 flex items-center px-4 justify-between w-full bg-white dark:bg-dark-card dark:text-white border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 shrink-0">
          {/* Menu Botton only on mobile */}
          {isMounted && isMobile && (
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="open drawer"
              className="md:hidden"
            >
              <MenuIcon className="text-gray-700 dark:text-white" />
            </IconButton>
          )}
          <h1 className="text-xl font-bold truncate max-w-[180px] md:max-w-none">
            {pageTitle}
          </h1>
        </div>

        {/* Theme toggle and profile */}
        {isMounted && (
          <div className="flex items-center gap-3 shrink-0 pr-2 min-w-fit">
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <WbSunnyIcon className="text-yellow-400" />
              ) : (
                <DarkModeIcon className="text-gray-700" />
              )}
            </button>
            <AccountCircleIcon className="text-gray-500 dark:text-white" />
          </div>
        )}
      </div>

      {/* Mobile Sidebar Drawer */}
      {isMounted && isMobile && (
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: 256,
              backgroundColor: theme === "dark" ? "#1e1e2f" : "#f3f4f6",
            },
          }}
        >
          <Sidebar mobile />
        </Drawer>
      )}
    </>
  );
}
