"use client";

import { Genre } from "./Genre";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { searchBarAnimationVariants } from "@/constants/search-bar-input-animtaion";

export const SearchInput = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchPageValue, setSearchPageValue] = useState("");

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchPageValue(newValue);
    router.push(`/search?use=${searchPageValue}`);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className=" flex flex-1 md:flex-0  gap-x-3">
      <div className="flex">
        <div className=" hidden md:flex gap-x-3">
          <Genre />
          <div className="relative ">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={searchPageValue}
              onChange={handleChange}
              type="text"
              placeholder="Search..."
              className="w-[97px] md:w-[379px] pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleSearchClick}
        className="flex md:hidden ml-auto w-9 h-9 justify-center items-center border border-[#E4E4E7] "
      >
        <SearchIcon className="w-4 h-4" />
      </Button>

      <div>
        {showSearch && (
          <AnimatePresence>
            <motion.div
              variants={searchBarAnimationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex md:hidden bg-white gap-x-3 absolute inset-x-0 px-5 py-[7.5px]"
            >
              <Genre />
              <div className="flex ">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                  <Input
                    value={searchPageValue}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search..."
                    className="w-[251px] pl-10 pr-3 py-2 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button className="w-9" onClick={handleSearchClick}>
                  <X />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
