"use client";

import { ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSearchParams, useRouter } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

type Genre = {
  id: number;
  name: string;
};

export const Panel = () => {
  const router = useRouter();

  const params = useSearchParams();
  const urlGenreId = params.get("genres");

  // console.log("ggggggggggggg", urlGenreId); //home ees orj irsen genre iin id

  const selectedGenreIds = urlGenreId
    ? urlGenreId.split(",").map((id) => parseInt(id))
    : [];

  // console.log("end yu bna:", selectedGenreIds);

  const handleClick = (id: number) => {
    let newSelectedIds: number[] = [];

    if (selectedGenreIds.includes(id)) {
      newSelectedIds = selectedGenreIds.filter((item) => item !== id);
    } else {
      newSelectedIds = [...selectedGenreIds, id];
    }

    const urlString = newSelectedIds.join(",");
    router.push(`/genresResults?genres=${urlString}`);
  };

  const { data, isLoading } = useFetchDatainClient(
    "/genre/movie/list?language=en"
  );

  const genres = data?.genres || [];
  // console.log(genres);

  return (
    <div className="flex flex-col md:w-[387px]  mt-8 gap-y-5">
      <div className="flex flex-col gap-y-1">
        <p className="text-2xl font-semibold">Search by Genre</p>
        <p className="text-base font-normal">See lists of movies by genre</p>
      </div>

      <div className="flex flex-wrap gap-4 dark-bg-[#09090B]">
        {genres.map((genre: Genre) => (
          <Badge
            key={genre.id}
            onClick={() => handleClick(genre.id)}
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
        ))}
      </div>
    </div>
  );
};
