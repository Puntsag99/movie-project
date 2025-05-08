"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams, useSearchParams } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { DynamicPagination } from "@/components/common/DynamicPagination";

type See = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

export const More = () => {
  const { seeId } = useParams();
  const searchParams = useSearchParams();

  const router = useRouter();

  const page = searchParams.get("page") || 1;

  const { data, isLoading } = useFetchDatainClient(
    `/movie/${seeId}/similar?language=en-US&page=${page}`
  );

  const totalPage = data?.total_pages;

  const seeData = data?.results;

  console.log("Semoreee", seeData);

  return (
    <div className="w-full px-5 md:px-20 flex  gap-y-9 mt-8 md:mt-13">
      <div className="flex w-full flex-col gap-y-8 ">
        <h3 className="text-2xl not-italic font-semibold">More like this</h3>

        <div className=" grid grid-rows-5 grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-5 md:gap-8  ">
          {seeData?.slice(0, 8).map((movie: See) => (
            <div key={movie.id} className="w-full">
              <Image
                width={190}
                height={281}
                alt="moreLikeMovies"
                onClick={() => router.push(`/detail/${movie.id}`)}
                className="rounded-lg object-cover w-full cursor-pointer"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />

              <div className="w-full flex flex-col h-[87px] dark:bg-[#27272A] bg-[#f4f4f5] p-1 ">
                <div className="flex items-center gap-x-1">
                  <Image
                    width={16}
                    height={16}
                    alt="star"
                    src="/iconImg/star.png"
                  />
                  <span className="text-sm not-italic font-medium text-[#71717A]">
                    {movie.vote_average.toFixed(1)}/10
                  </span>
                </div>

                <p className="text-lg not-italic font-normal">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <DynamicPagination totalPage={totalPage} />
        </div>
      </div>
    </div>
  );
};
