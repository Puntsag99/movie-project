"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

type genre = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export const GenreMovies = () => {
  const params = useSearchParams();
  const genres = params.get("genres");

  // console.log(genres);

  const { data, isLoading } = useFetchDatainClient(
    `/discover/movie?language=en&with_genres=${genres}&page=1`
  );

  const idMovies = data?.results || [];
  console.log(idMovies);

  return (
    <div className="flex flex-col mt-8 gap-y-8  w-full">
      <h3 className="text-xl not-italic font-semibold">
        81 titles in “Animation”
      </h3>
      <div className="grid gap-5 grid-cols-2 grid-rows-6 md:grid-cols-4 md:grid-rows-3 md:gap-x-12 md:gap-y-8 w-full">
        {idMovies.slice(0, 12).map((mov: genre) => {
          return (
            <div key={mov.id} className="flex flex-col">
              <Image
                width={165}
                height={244}
                alt="movie"
                src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
                className="rounded-lg object-cover w-full"
              />
              <div className="w-full bg-[#f4f4f5] h-[95px] flex justify-center">
                <div className="w-full">
                  <div className="flex gap-x-[2px] items-center mt-2">
                    <Image
                      width={16}
                      height={16}
                      src="/iconimg/star.png"
                      alt="star"
                    />
                    <span className="text-sm">
                      {mov.vote_average.toFixed(1)}/10
                    </span>
                  </div>
                  <p className="text-[18px] not-italic font-normal mt-1">
                    {mov.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
