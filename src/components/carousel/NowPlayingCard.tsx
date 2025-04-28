import Image from "next/image";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { useState } from "react";
import { Trailer } from "./Trailer";

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
};

export const NowPlayingCard = ({ movies }: Props) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const { data, isLoading } = useFetchDatainClient(
    `/movie/${movies.id}/videos?language=en-US`
  );

  const trailer = data?.results?.find(
    (item: Video) => item.type === "Trailer" && item.site === "YouTube"
  );

  const handleShowTrailer = () => setShowTrailer(true);

  const handleCloseTrailer = () => setShowTrailer(false);

  // console.log("трэйлэр байна уу:", trailer.key);

  return (
    <div className="w-full flex px-4 py-4   md:px-0 md:py-0">
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

          {showTrailer && trailer && (
            <Trailer trailerKey={trailer.key} onClose={handleCloseTrailer} />
          )}

          <Button
            onClick={handleShowTrailer}
            className=" text-white  bg-black flex gap-x-2 text-sm not-italic font-medium md:text-black  w-[145px] md:bg-[#F4F4F5]"
          >
            <Play /> Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};
