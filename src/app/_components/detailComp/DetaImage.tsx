import { Play } from "lucide-react";
import Image from "next/image";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { useState } from "react";

interface MovieDetail {
  poster_path: string;
  backdrop_path: string;
  id: number;
}

interface trailer {
  type: string;
  site: string;
  key: string;
}

export const DetaImage = ({ imageData }: { imageData: MovieDetail }) => {
  const { data: videoData, isLoading } = useFetchDatainClient(
    `/movie/${imageData.id}/videos?language=en-US`
  );

  const trailer = videoData?.results;

  const findTrailer = trailer?.find((video: trailer) => {
    return video.type === "Trailer" && video.site === "YouTube";
  });

  console.log("ggg", findTrailer);

  return (
    <div className=" mt-4 md:mt-6 flex flex-col md:flex-row relative    gap-x-8">
      <Image
        width={375}
        height={211}
        className=" block w-full  md:hidden object-cover"
        alt="detailImageBackdrop_path"
        src={`https://image.tmdb.org/t/p/original${imageData.backdrop_path}`}
      />

      <Image
        width={290}
        height={428}
        alt="detailPoster_path"
        className="  hidden md:block w-full object-cover"
        src={`https://image.tmdb.org/t/p/original${imageData.poster_path}`}
      />

      <Image
        width={760}
        height={428}
        className=" hidden md:block w-full  object-cover"
        alt="detailImageBackdrop_path"
        src={`https://image.tmdb.org/t/p/original${imageData.backdrop_path}`}
      />
      <div className="absolute left-4 top-45  md:top-120 md:left-100 flex items-center gap-x-3">
        <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
          <Play className="w-4 h-4  text-black" />
        </div>
        <p className="text-white">Play trailer 2:35</p>
      </div>
    </div>
  );
};
