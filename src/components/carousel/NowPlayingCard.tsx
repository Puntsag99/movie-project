import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";
import { Play, X } from "lucide-react";
import { Button } from "../ui/button";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

export type NowPlay = {
  id: number;
  title: string;
  name?: string;
  overview: string;
  vote_average: number;
};

export type Video = {
  id: string;
  key: string;
  site: string;
  type: string;
  name: string;
};

type Props = {
  movies: NowPlay;
  onTrailerOpen: () => void;
  onTrailerClose: () => void;
};

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

export const NowPlayingCard = ({
  movies,
  onTrailerOpen,
  onTrailerClose,
}: Props) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const { data, isLoading } = useFetchDatainClient(
    `/movie/${movies.id}/videos?language=en-US`
  );

  const trailer = data?.results?.find(
    (item: Video) => item.type === "Trailer" && item.site === "YouTube"
  );
  const handleShowTrailer = () => {
    setShowTrailer(true);
    onTrailerOpen();
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    onTrailerClose();
  };

  return (
    <div className="w-full  md:flex px-4 py-4 md:px-0 md:py-0">
      <div className="  w-full gap-y-4 flex flex-col md:text-white md:w-101  md:gap-y-4 ">
        <div className="  flex justify-between md:flex md:flex-col ">
          <div className="flex flex-col ">
            <p className=" text-sm  md:text-base font-normal not-italic">
              Now Playing:
            </p>

            <p className="text-2xl font-semibold md:text-4xl md:font-bold not-italic">
              {movies.title}
            </p>
          </div>

          <div className="flex ">
            <p className=" text-sm font-normal flex items-center gap-x-1 md:text-[18px] not-italic md:font-semibold">
              <Image
                width={28}
                height={28}
                src="/iconImg/star.png"
                alt="star"
              />
              {movies.vote_average.toFixed(1)} /10
            </p>
          </div>
        </div>

        <div className=" flex gap-y-4 md:flex flex-col md:gap-y-4">
          <p className=" w-full text-3 font-normal not-italic ">
            {movies.overview}
          </p>

          <Button
            onClick={handleShowTrailer}
            className=" text-white  bg-black flex gap-x-2 text-sm not-italic font-medium md:text-black  w-[145px] md:bg-[#F4F4F5]"
          >
            <Play /> Watch Trailer
          </Button>
        </div>
      </div>

      {showTrailer && trailer && (
        <div className="absolute h-[240px] left-0 w-full md:w-[997px] md:h-[561px] md:left-[400px] md:top-[50] z-10 ">
          <div className="relative w-full h-full">
            <YouTube
              videoId={trailer.key}
              opts={opts}
              className="w-full h-full"
            />
            <X
              onClick={handleCloseTrailer}
              className="cursor-pointer bg-white w-6 h-6 cusor-pointer absolute top-2 right-2 z-20"
            />
          </div>
        </div>
      )}
    </div>
  );
};
