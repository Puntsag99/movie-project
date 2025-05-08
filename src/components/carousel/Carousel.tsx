"use client";

import { useEffect, useState } from "react";
import { NowPlayingCard } from "./NowPlayingCard";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { HomeSkel } from "@/components/skeleton/HomeSkel";

export const Carousel = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading } = useFetchDatainClient(
    "/movie/upcoming?language=en-US&page=1"
  );

  const playing = data?.results || [];
  const currentMovie = playing[currentIndex];

  const CarsoulMovies = playing[currentIndex];

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playing.length);
    console.log("afsdgsg");
  };

  const handleClickBack = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + playing.length) % playing.length
    );
    console.log("nnnnn");
  };

  useEffect(() => {
    if (playing.length) {
      const clearMovie = setInterval(() => {
        setCurrentIndex((prevMovies) => (prevMovies + 1) % playing.length);
      }, 6000);

      return () => clearInterval(clearMovie);
    }
  }, [playing]);

  if (isLoading || !currentMovie) {
    return <HomeSkel />;
  }

  return (
    <div className="md:mt-6 w-full overflow-hidden  ">
      {CarsoulMovies && (
        <div
          className="h-[246px] relative bg-cover bg-center bg-no-repeat md:h-150 md:px-35 md:py-[178px] flex items-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${CarsoulMovies.backdrop_path})`,
          }}
        >
          <ChevronLeft
            onClick={handleClickBack}
            className="w-10 h-10 bg-[#f4f4f5] rounded-full cursor-pointer absolute left-11"
          />
          <div className="hidden md:block">
            <NowPlayingCard movies={CarsoulMovies} />
          </div>

          <ChevronRight
            onClick={handleClickNext}
            className="w-10 h-10 bg-[#f4f4f5] rounded-full cursor-pointer absolute right-11 "
          />
        </div>
      )}
      {CarsoulMovies && (
        <div className="flex md:hidden">
          <NowPlayingCard movies={CarsoulMovies} />
        </div>
      )}
    </div>
  );
};
