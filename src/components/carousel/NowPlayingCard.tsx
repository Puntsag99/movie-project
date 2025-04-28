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
    <div>
      <div className="flex md:hidden">
        <div className="flex md:hidden flex-col ">
          <p className="text-sm font-normal not-italic">Now Playing:</p>

          <p className="text-2xl font-semibold not-italic">{movies.title}</p>
        </div>
        <Image width={28} height={28} src="/iconImg/star.png" alt="star" />
        {movies.vote_average.toFixed(1)} /10
      </div>

      <div className=" flex   flex-col text-white w-101  gap-y-4 ">
        <div className=" hidden md:flex flex-col ">
          <p className="text-base font-normal not-italic">Now Playing:</p>

          <p className="text-4xl font-bold not-italic">{movies.title}</p>
          <div className="flex ">
            <p className="flex items-center gap-x-1 text-[18px] not-italic font-semibold">
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

        <div className="hidden md:flex flex-col gap-y-4">
          <p className="w-[302px] text-3 font-normal not-italic ">
            {movies.overview}
          </p>

          {showTrailer && trailer && (
            <Trailer trailerKey={trailer.key} onClose={handleCloseTrailer} />
          )}

          <Button
            onClick={handleShowTrailer}
            className=" flex gap-x-2 text-sm not-italic font-medium text-black  w-[145px] bg-[#F4F4F5]"
          >
            <Play /> Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};
