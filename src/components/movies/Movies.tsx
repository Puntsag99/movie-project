"use client";

import { ArrowBigRight } from "lucide-react";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import Image from "next/image";

export type Mov = {
  id: number;
  title: string;
  name?: string;
  vote_average: number;
  poster_path: string;
};

type MoviesProps = {
  title: string;
  apiUrl: string;
};

export const Movies = ({ title, apiUrl }: MoviesProps) => {
  const { data, isLoading } = useFetchDatainClient(apiUrl);

  const upMovie = data?.results || [];
  // console.log("ene yu we :", upMovie);

  return (
    <div className="px-5 mt-8 flex flex-col md:mt-[52px] md:px-20 ">
      <div className="flex items-center justify-between">
        <p className="text-2xl not-italic font-semibold">{title}</p>
        <div className="flex items-center gap-x-2 ">
          <p className="text-sm not-italic font-medium">See more</p>
          <ArrowBigRight className="w-4 h-4" />
        </div>
      </div>

      <div className=" grid gap-5 grid-cols-2 grid-rows-5 md:grid-rows-2 md:grid-cols-5 mt-8 md:gap-8 ">
        {upMovie.slice(0, 10).map((movie: Mov) => (
          <div key={movie.id} className="  flex flex-col  ">
            <Image
              width={230}
              height={340}
              alt="movie"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className="rounded-lg  object-cover w-full"
            />
            <div className=" w-full bg-[#f4f4f5] h-[95px] flex justify-center">
              <div className="w-full">
                <div className="flex gap-x-[2px] items-center mt-2">
                  <Image
                    width={16}
                    height={16}
                    src="/iconimg/star.png"
                    alt="star"
                  />
                  <span className="text-sm">
                    {movie.vote_average.toFixed(1)}/10
                  </span>
                </div>
                <p className="text-[18px] not-italic font-normal mt-1">
                  {movie.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
