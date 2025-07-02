"use client";

import React from "react";

const Listtile = ({ title, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group h-12 w-full flex items-center px-4 cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white"
    >
      <div className="mr-3 text-gray-500 transition-colors duration-200 group-hover:text-white">
        {icon}
      </div>
      <h1 className="text-base font-medium">{title}</h1>
    </div>
  );
};

export default Listtile;
