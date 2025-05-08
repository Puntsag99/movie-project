"use client";

import { ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSearchParams, useRouter } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

type Genre = {
  id: number;
  name: string;
};

export const RightPanel = () => {
  const { data, isLoading } = useFetchDatainClient(
    "/genre/movie/list?language=en"
  );
  const router = useRouter();

  const genres = data?.genres || [];

  const searchParams = useSearchParams();

  const typeGenreId = searchParams.get("type");
  const searchValue = searchParams.get("use");

  const selectedGenreIds = typeGenreId
    ? typeGenreId.split(",").map((id) => parseInt(id))
    : [];

  const handleClick = (id: number) => {
    let newSelectedIds: number[] = [];

    if (selectedGenreIds.includes(id)) {
      newSelectedIds = selectedGenreIds.filter((item) => item !== id);
    } else {
      newSelectedIds = [...selectedGenreIds, id];
    }

    const urlString = newSelectedIds.join(",");
    router.push(`/search?use=${searchValue}&type=${urlString}`);
  };

  console.log("aaaa", searchValue);

  return (
    <div className="flex flex-col md:w-[387px] mt-8 md:mt-0 gap-y-5">
      <div className="flex flex-col gap-y-1">
        <p className="text-2xl font-semibold">Search by Genre</p>
        <p className="text-base font-normal">See lists of movies by genre</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {genres.map((genre: Genre) => {
          // console.log("ids", genre.id);
          return (
            <Badge
              onClick={() => handleClick(genre.id)}
              key={genre.id}
              variant="outline"
              className={`px-3 py-1 text-[12px] rounded-full gap-x-2 cursor-pointer border ${
                selectedGenreIds.includes(genre.id)
                  ? "bg-black text-white"
                  : "bg-white dark:text-black"
              } font-semibold`}
            >
              {genre.name}
              {selectedGenreIds.includes(genre.id) ? (
                <X size={16} className="ml-2" />
              ) : (
                <ChevronRight size={16} className="ml-2" />
              )}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};
