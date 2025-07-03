"use client";

import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className="text-gray-400 h-16 flex items-center px-4 opacity-90 justify-between fixed top-0 left-64 right-0 z-50 bg-white dark:bg-dark-card dark:text-dark-text-main border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-3">
        <button onClick={toggleTheme}>
          {theme === "dark" ? <WbSunnyIcon className="text-yellow-400" /> : <DarkModeIcon className="text-gray-700" />}
        </button>
        <AccountCircleIcon className="text-gray-500 dark:text-white" />
      </div>
    </div>
  );
}
