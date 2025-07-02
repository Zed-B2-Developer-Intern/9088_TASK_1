import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Navbar() {
  return (
    <div className="bg-black text-white h-16 flex items-center px-4 opacity-90 justify-between ">
      <h1 className="text-3xl font-bold">
        <span className="text-red-600">Dash</span>board
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
