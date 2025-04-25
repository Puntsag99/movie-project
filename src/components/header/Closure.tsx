import { SearchIcon } from "lucide-react";

export const Closure = () => {
  return (
    <div className="block lg:hidden">
      <button className="w-9 h-9 rounded-[10px] bg-white flex justify-center items-center border border-[#E4E4E7] ">
        <SearchIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
