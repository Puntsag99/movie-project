"use client";
import { ChevronRight } from "lucide-react";
import { GenreMovies } from "./GenreMovies";
import { Badge } from "@/components/ui/badge";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

type Genre = {
  id: number;
  name: string;
};

export const Panel = () => {
  const { data, isLoading } = useFetchDatainClient(
    "/genre/movie/list?language=en"
  );

  const genres = data?.genres || [];

  return (
    <div className="flex gap-x-4 mt-8">
      <div className=" w-[335px] flex flex-col gap-y-5 md:w-[387px] ">
        <div className="flex flex-col gap-y-1 ">
          <p className="text-2xl not-italic font-semibold">Genres</p>
          <p className="text-base not-italic font-normal">
            See lists of movies by gene
          </p>
        </div>

        <div className="flex flex-wrap gap-4 w-full ">
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

      <div className=" md:w-px h-screen bg-[#E4E4e7]" />

      <div>
        <GenreMovies />
      </div>
    </div>
  );
};
