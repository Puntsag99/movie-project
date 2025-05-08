"use client";

import { Badge } from "../ui/badge";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

type Genre = {
  id: number;
  name: string;
};

export const SearchPanel = () => {
  const router = useRouter();

  const { data, isLoading } = useFetchDatainClient(
    "/genre/movie/list?language=en"
  );
  const genres = data?.genres || [];

  return (
    <div>
      <div className="w-[335px] md:w-[577px] p-[5px] ">
        <div className="flex flex-col gap-y-1 p-[5px]">
          <p className="text-2xl not-italic font-semibold">Genres</p>
          <p className="text-base not-italic font-normal">
            See lists of movies by gene
          </p>
        </div>
        <div className="my-4 border-t  border-[#E4E4e7]" />

        <div className="flex flex-wrap gap-4 ">
          {genres.map((genre: Genre) => {
            return (
              <Badge
                key={genre.id}
                variant="outline"
                className="px-3 py-1 text-[12px] rounded-full gap-x-2 cursor-pointer border border-[#e4e4e7] not-italic font-semibold"
              >
                {genre.name}
                <ChevronRight className="w-4 h-4" />
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};
