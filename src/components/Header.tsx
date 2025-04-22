import Image from "next/image";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export const Header = () => {
  return (
    <div>
      <div className="text-indigo-700">
        <Image width={20} height={20} src="/iconImg/film.png" alt="movie" />
        <h3>Movie Z</h3>
      </div>

      <div></div>
    </div>
  );
};
