import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Navbar() {
  return (
    <div className=" text-gray-400 h-16 flex items-center px-4 opacity-90 justify-between fixed top-0 left-64 right-0 z-50">
      <h1 className="text-xl font-bold">
        Dashboard
      </h1>
      <div className="flex gap-3">
        <ul>
          <DarkModeIcon />
          <WbSunnyIcon />
        </ul>
        <ul>
          <AccountCircleIcon />
        </ul>
      </div>
    </div>
  );
}
