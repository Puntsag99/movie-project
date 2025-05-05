"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { DetaImage } from "./DetaImage";
import { Writets } from "./Writets";
import { More } from "./More";

interface MovieDetail {
  id: number;
  runtime: number;
  vote_average: number;
  release_date: string;
  original_title: string;
}

const formatRuntime = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};

export const Info_det = () => {
  const { detailId } = useParams();

  // console.log("aaaa", detailId);

  const { data, isLoading } = useFetchDatainClient(
    `/movie/${detailId}?language=en-US`
  );

  console.log("yum bna uuuuu:", data);

  return (
    <div className="">
      {data && (
        <div className="mt-8  flex flex-col md:mt-13 md:px-45 w-full">
          <div className="flex px-5 justify-between md:px-0 ">
            <div className="flex flex-col text-4xl not-italic font-bold">
              <h2 className="">{data.original_title}</h2>
              <p className="text-lg not-italic font-normal">
                {data.release_date} · PG · {formatRuntime(data.runtime)}
              </p>
            </div>

            <div className="flex items-end  md:items-start md:flex-col  md:gap-y-[2px]">
              <p className="hidden md:block text-xs font-medium not-italic">
                Rating
              </p>

              <div className="flex  items-center gap-x-1">
                <Image
                  width={28}
                  height={28}
                  alt="star"
                  src="/iconImg/star.png"
                />
                <div className="flex flex-col">
                  <div className="flex text-lg font-semibold">
                    {data.vote_average.toFixed(1)}/10
                  </div>
                  <p className="text-xs font-normal not-italic text-[#71717a]">
                    37k
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DetaImage imageData={data} />

          <Writets write={data} detailId={detailId} />

          <More moreId={detailId} />
        </div>
      )}
    </div>
  );
};
