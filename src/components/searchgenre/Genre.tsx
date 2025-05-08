import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchPanel } from "./SearchPanel";

export const Genre = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-[10px] md:w-[97px]">
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
          <SearchPanel />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
