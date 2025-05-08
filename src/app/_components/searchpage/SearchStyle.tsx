"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { RightPanel } from "@/components/searchgenre/RightPanel";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { DynamicPagination } from "@/components/common/DynamicPagination";

type user = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
};

export const SearchStyle = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const userSearchName = searchParams.get("use");
  const genreTypes = searchParams.get("type")?.split(",").map(Number) || [];

  const page = searchParams.get("page") || 1;

  let formatted = "";
  if (userSearchName) {
    formatted =
      userSearchName.charAt(0).toUpperCase() + userSearchName.slice(1);
  }

  const { data } = useFetchDatainClient(
    `/search/movie?query=${userSearchName}&language=en-US&page=${page}`
  );

  const searchMovie: user[] = data?.results || [];

  const filteredMovies = genreTypes.length
    ? searchMovie.filter((movie) =>
        genreTypes.every((genreId) => movie.genre_ids.includes(genreId))
      )
    : searchMovie;

  const totalPage = data?.total_pages;

  return (
    <div className="flex flex-col mt-8 px-5 md:mt-13 md:px-20 gap-y-8">
      <h3 className="text-3xl not-italic font-semibold">Search results</h3>

      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col gap-y-8">
          <h3 className="text-xl not-italic font-semibold">
            {`${
              genreTypes.length > 0
                ? filteredMovies.length
                : data?.total_results ?? 0
            }
            results for "${formatted}"`}
          </h3>

          <div className="grid grid-cols-2 grid-rows-6 md:grid-rows-3 gap-5 md:grid-cols-4 md:gap-12">
            {filteredMovies?.slice(0, 12).map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="relative w-[165px] h-[244px]">
                  <Image
                    fill
                    alt="searchImage"
                    className="object-cover rounded cursor-pointer"
                    onClick={() => router.push(`detail/${item.id}`)}
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  />
                </div>
                <div className="flex flex-col bg-[#f4f4f5] gap-y-[3px] h-[87px] w-[165px] px-2 py-1">
                  <div className="flex gap-x-1">
                    <Image
                      width={16}
                      height={16}
                      alt="star"
                      src="/iconImg/star.png"
                    />
                    <span className="text-sm">
                      {item.vote_average?.toFixed(1)}/10
                    </span>
                  </div>
                  <h1 className="font-normal not-italic text-base">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <DynamicPagination totalPage={totalPage} />
          </div>
        </div>

        <div className="hidden md:block md:h-screen md:border-r  mx-[44px] border-[#E4E4e7]" />

        <RightPanel />
      </div>
    </div>
  );
};
