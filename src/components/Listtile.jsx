"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Listtile = ({ title, icon, onClick, href }) => {
  const router = useRouter();  // router for Navigation 



  // function for handling click Events 
  function handleClick(){
    if(onClick){
      onclick();
    }
    else if (href){
      router.push(href);
    }
  }

  return (
    <div
      onClick={handleClick} // click event from side bar
      className="group h-12 w-full flex items-center px-4 cursor-pointer transition-all duration-200 
                 bg-gray-100 text-text-main dark:bg-dark-card dark:text-dark-text-main 
                 hover:bg-primary hover:text-white dark:hover:bg-primary"
    >
      <div className="mr-3 text-gray-500 transition-colors duration-200 group-hover:text-white dark:text-dark-text-sub">
        {icon}
      </div>
      <h1 className="text-base font-medium">{title}</h1>
    </div>
  );
};

export default Listtile;
