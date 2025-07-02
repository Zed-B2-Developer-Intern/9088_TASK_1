"use client";


import Listtile from "./Listtile";
import HomeIcon from '@mui/icons-material/Home';

export default function Sidebar() {
    function handlehomeevent(){
        alert("okay");
    }
  return (
    <div className="bg-red-600 text-white flex flex-col h-screen opacity-90  py-6 w-64">
      <h1 className="text-3xl font-bold">
        <span className="text-blue-600">Dash</span>board
      </h1>

      <Listtile title="Home" icon={<HomeIcon />} onClick={handlehomeevent} />
      <Listtile title="Settings" icon={<HomeIcon />} />
    </div>
  );
}
