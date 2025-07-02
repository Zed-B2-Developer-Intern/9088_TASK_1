"use client";


import React from "react";

const Listtile = ({ title, icon, onClick }) => {
  return (
    <div
      className="h-12 w-full bg-white text-black flex items-center px-4 cursor-pointer hover:bg-gray-200 transition"
      onClick={onClick} 
    >
      <div className="mr-3">{icon}</div>
      <h1 className="text-lg font-medium">{title}</h1>
    </div>
  );
};

export default Listtile;
