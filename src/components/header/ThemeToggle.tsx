import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  return (
    <div className="flex">
      <button className="w-9 h-9 border border-[#E4E4E7] flex justify-center items-center rounded-[10px]">
        <Moon className="w-4 h-4" />
        {/* <Sun className="w-9 h-9" /> */}
      </button>
    </div>
  );
};
