import Image from "next/image";
import { Play } from "lucide-react";
import YouTube from "react-youtube";
import { useState } from "react";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

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
  const [showTrailer, setShowTrailer] = useState(false);

  const { data: videoData } = useFetchDatainClient(
    `/movie/${imageData.id}/videos?language=en-US`
  );

  const trailer = videoData?.results;

  const findTrailer = trailer?.find((video: trailer) => {
    return video.type === "Trailer" && video.site === "YouTube";
  });

  console.log("ggg", findTrailer);

  const handleTrailer = () => {
    setShowTrailer(true);
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className=" mt-4 md:mt-6 flex flex-col md:flex-row relative gap-x-8">
      <Image
        width={375}
        height={211}
        className=" block w-full  md:hidden object-cover"
        alt="detailImageBackdrop_path"
        src={`https://image.tmdb.org/t/p/original${imageData.backdrop_path}`}
      />
      <div className="hidden md:block w-[290px] h-[428px] relative ">
        <Image
          fill
          alt="detailPoster_path"
          className="    object-cover"
          src={`https://image.tmdb.org/t/p/original${imageData.poster_path}`}
        />
      </div>
      <div className=" w-full   relative">
        <div className="hidden md:block w-full h-[428px] relative">
          <Image
            fill
            className="   object-cover"
            alt="detailImageBackdrop_path"
            src={`https://image.tmdb.org/t/p/original${imageData.backdrop_path}`}
          />
        </div>
        <div className="absolute  cursor-pointer top-[-50] left-5  md:top-95 md:left-10 flex items-center gap-x-3">
          <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <Play onClick={handleTrailer} className="w-4 h-4  text-black" />
          </div>
          <p className="text-white">Play trailer 2:35</p>
        </div>
      </div>
      {showTrailer && findTrailer && (
        <div className="absolute h-[240px] w-full md:w-[997px] md:h-[561px] md:left-[200px] md:top-[-65] z-10">
          <YouTube
            videoId={findTrailer.key}
            opts={opts}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};
