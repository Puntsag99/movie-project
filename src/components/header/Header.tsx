"use client";

import { SearchOther, SearchPageBar, ThemeToggle } from "@/components/header";

import { Logo } from "../common";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  return (
    <div className="flex md:justify-between items-center  py-[7.5px] md:py-[11.5px]  px-5 md:px-20 ">
      <Logo />

      {pathName === "/search" ? <SearchPageBar /> : <SearchOther />}
      <ThemeToggle />
    </div>
  );
};
