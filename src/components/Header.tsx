import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex">
      <div className="text-indigo-700 flex gap-x-2 items-center">
        <Image width={20} height={20} src="/iconImg/film.png" alt="movie" />
        <h3>Movie Z</h3>
      </div>

      <div className="flex gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">
              <ChevronDown />
              Genre
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
