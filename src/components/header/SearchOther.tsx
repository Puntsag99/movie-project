"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Value } from "../searchValue/Value";
import { SearchIcon, X } from "lucide-react";
import { GenreDropdown } from "./GenreDropdown";
import { AnimatePresence, motion } from "framer-motion";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { searchBarAnimationVariants } from "@/constants/search-bar-input-animtaion";

export const SearchOther = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { data } = useFetchDatainClient(
    `/search/movie?query=${searchValue}&language=en-US&page=1`
  );

  const searchData = data?.results;
  console.log("sea", searchData);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className=" flex flex-1 md:flex-0  gap-x-3">
      <div className=" flex ">
        <div className=" hidden md:flex gap-x-3">
          <GenreDropdown />
          <div className="relative ">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={searchValue}
              onChange={handleChange}
              type="text"
              placeholder="Search..."
              className="w-[97px] md:w-[379px] pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {searchData?.length > 0 && (
          <div className=" absolute top-13 left-145 z-10">
            <Value
              searchData={searchData}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        )}
      </div>

      <Button
        onClick={handleSearchClick}
        className="flex md:hidden ml-auto w-9 h-9   justify-center items-center border border-[#E4E4E7] "
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
              <GenreDropdown />
              <div className="flex ">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                  <Input
                    type="text"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search..."
                    className="w-[251px] pl-10 pr-3 py-2 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {searchData?.length > 0 && (
                  <div className=" absolute top-13 left-5 z-10">
                    <Value
                      searchData={searchData}
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                  </div>
                )}

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
