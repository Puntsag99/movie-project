"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

type Genre = {
  id: number;
  name: string;
};

export const GenreDropdown = () => {
  const { data, isLoading } = useFetchDatainClient(
    "/genre/movie/list?language=en"
  );

  const genres = data?.genres || [];

  // console.log(genres);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className=" bg-red-600  rounded-[10px]  md:w-[97px]   "
          >
            <ChevronDown />
            <p className=" hidden md:block text-[14px] not-italic font-medium">
              Genre
            </p>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="  bg-white border border-[#E4E4E7]"
        >
          <div className=" w-[335px]  md:w-[577px] p-[5px]  ">
            <div className="flex flex-col gap-y-1 p-[5px]">
              <p className="text-2xl not-italic font-semibold">Genres</p>
              <p className="text-base not-italic font-normal">
                See lists of movies by gene
              </p>
            </div>
            <div className="my-4 border-t border border-[#E4E4e7]" />

            <div className="flex flex-wrap gap-4 ">
              {genres.map((genre: Genre) => (
                <Badge
                  key={genre.id}
                  variant="outline"
                  className="   px-3  py-1 text-[12px]  rounded-full  gap-x-2 cursor-pointer border border-[#e4e4e7] not-italic font-semibold"
                >
                  {genre.name}
                  <ChevronRight className="w-4 h-4" />
                </Badge>
              ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
