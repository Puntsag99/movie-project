"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { DynamicPagination } from "@/components/common/DynamicPagination";

type pops = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export const Tops = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlGenre = searchParams.get("cate");

  const page = searchParams.get("page") || 1;

  let apiUrl = "";

  if (urlGenre === "upcoming") {
    apiUrl = `/movie/upcoming?language=en-US&page=${page}`;
  } else if (urlGenre === "top_rated") {
    apiUrl = `/movie/top_rated?language=en-US&page=${page}`;
  } else {
    apiUrl = `/movie/popular?language=en-US&page=${page}`;
  }

  const { data } = useFetchDatainClient(apiUrl);

  const moviesData = data?.results;

  const totalPage = data?.total_pages;
  console.log("total page", totalPage);

  let formattedGenre = "";

  if (urlGenre) {
    formattedGenre = urlGenre.charAt(0).toLocaleUpperCase() + urlGenre.slice(1);
  }

  return (
    <div className="px-5 mt-8 md:px-20 md:mt-13 flex flex-col gap-y-8">
      <h1 className="text-3xl not-italic font-semibold">{formattedGenre}</h1>

      <div className="grid gap-5 grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 md:gap-8">
        {moviesData?.slice(0, 8).map((item: pops) => (
          <div key={item.id} className=" flex flex-col">
            <div>
              <Image
                width={230}
                height={340}
                alt="genres"
                onClick={() => router.push(`/detail/${item.id}`)}
                className="object-cover w-full cursor-pointer"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
            </div>

            <div className=" p-2 w-full flex flex-col gap-y-[3px] bg-[#f4f4f5]">
              <div className="flex gap-x-1 items-center">
                <Image
                  width={16}
                  height={16}
                  alt="star"
                  src="/iconImg/star.png"
                />
                <span className="text-sm not-italic font-medium">
                  {item.vote_average.toFixed(1)}/10
                </span>
              </div>
              <p className="text-lg font-normal not-italic">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex md:justify-end">
        <DynamicPagination totalPage={totalPage} />
      </div>
    </div>
  );
};
