"use client";

import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenrePanel } from "./GenrePanel";

export const GenreDropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-[10px] md:w-[97px]   ">
            <ChevronDown />
            <p className=" hidden md:block text-[14px] not-italic font-medium">
              Genre
            </p>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="bg-white dark:bg-black border border-[#E4E4E7]"
        >
          <GenrePanel />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
