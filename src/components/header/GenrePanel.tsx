"use client";

import { Badge } from "../ui/badge";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

type Genre = {
  id: number;
  name: string;
};

export const GenrePanel = () => {
  const router = useRouter();

  const { data } = useFetchDatainClient("/genre/movie/list?language=en");
  // if (isLoading) return <p>Loading genres...</p>;
  const genres = data?.genres || [];

  console.log("afa", genres);

  return (
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
          // console.log("ids", genre.id);

          return (
            <Badge
              onClick={() => router.push(`/genresResults?genres=${genre.id}`)}
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
  );
};
