"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { DynamicPagination } from "@/components/common/DynamicPagination";

type genre = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export const GenreMovies = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genres = searchParams.get("genres");

  const page = searchParams.get("page") || 1;

  const { data, isLoading } = useFetchDatainClient(
    `/discover/movie?language=en&with_genres=${genres}&page=${page}`
  );

  const idMovies = data?.results || [];

  const totalPage = data?.total_pages;

  console.log(idMovies);

  return (
    <div className="flex flex-col mt-8 gap-y-8  w-full">
      <h3 className="text-xl not-italic font-semibold">
        {data?.total_results} titles
      </h3>
      <div className="grid gap-5 grid-cols-2 grid-rows-6 md:grid-cols-4 md:grid-rows-3 md:gap-x-12 md:gap-y-8 w-full">
        {idMovies.slice(0, 12).map((mov: genre) => {
          return (
            <div key={mov.id} className="flex flex-col">
              <Image
                width={165}
                height={244}
                alt="movie"
                onClick={() => router.push(`/detail/${mov.id}`)}
                src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
                className="rounded-lg object-cover w-full cursor-pointer"
              />
              <div className="w-full dark:bg-[#27272A] bg-[#f4f4f5] h-[95px] flex justify-center">
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
      <div className="flex justify-end">
        <DynamicPagination totalPage={totalPage} />
      </div>
    </div>
  );
};
