"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

export const Carousel = () => {
  const { data, isLoading } = useFetchDatainClient(
    "/movie/upcoming?language=en-US&page=1"
  );

  console.log("now data", data);

  return (
    <div className="bg-blue-400 mt-6 h-150 px-35 py-[178px] ">
      <div className="flex flex-col text-white w-101  gap-y-4 ">
        <div className="flex flex-col">
          <p className="text-base font-normal not-italic">Now Playing:</p>
          <p className="text-4xl font-bold not-italic">Movie name</p>
          <div className="flex ">
            <p className="flex items-center gap-x-1 text-[18px] not-italic font-semibold">
              <Image
                width={28}
                height={28}
                src="/iconImg/star.png"
                alt="star"
              />
              6.9/10
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="w-[302px] text-3 font-normal not-italic ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            distinctio vel minus dignissimos excepturi, culpa quas, consequuntur
            voluptates exercitationem accusamus asperiores nisi quam? Quis ullam
            adipisci dolorem quos maxime perferendis.
          </p>
          <Button className="flex gap-x-2 text-sm not-italic font-medium bg-white w-[145px] ">
            <Play /> Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};
