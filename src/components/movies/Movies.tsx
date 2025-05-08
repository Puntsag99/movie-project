"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowBigRight } from "lucide-react";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

export type Mov = {
  id: string;
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
  const { data } = useFetchDatainClient(apiUrl);

  const router = useRouter();

  const moviesData = data?.results || [];
  console.log("ene yu we :", moviesData);

  return (
    <div className="px-5 mt-8 flex flex-col md:mt-[52px] md:px-20 ">
      <div className="flex items-center justify-between">
        <p className="text-2xl not-italic font-semibold">{title}</p>
        <div className="flex items-center gap-x-2 ">
          <p
            onClick={() =>
              router.push(`/topPopNowsee?cate=${title.toLowerCase()}`)
            }
            className="text-sm not-italic font-medium cursor-pointer"
          >
            See more
          </p>
          <ArrowBigRight className="w-4 h-4" />
        </div>
      </div>

      <div className=" grid gap-5 grid-cols-2 grid-rows-5 md:grid-rows-2 md:grid-cols-5 mt-8 md:gap-8 ">
        {moviesData.slice(0, 10).map((movie: Mov) => (
          <div key={movie.id} className="  flex flex-col  ">
            <Image
              alt="movie"
              width={230}
              height={340}
              onClick={() => router.push(`/detail/${movie.id}`)}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className="rounded-lg cursor-pointer object-cover w-full"
            />
            <div className=" w-full bg-[#f4f4f5] dark:bg-[#27272A] h-[95px] flex justify-center">
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
