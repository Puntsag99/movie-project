import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";
import { useRouter } from "next/navigation";

type More = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export const More = ({ moreId }: { moreId: any }) => {
  const router = useRouter();

  const { data, isLoading } = useFetchDatainClient(
    `/movie/${moreId}/similar?language=en-US&page=1`
  );

  const moreMovies = data?.results;
  console.log("more", moreMovies);

  return (
    <div className="w-full px-5 md:px-0 flex flex-col gap-y-9 mt-8">
      <div className="flex w-full justify-between ">
        <h3 className="text-2xl not-italic font-semibold">More like this</h3>
        <div className="flex gap-x-2 items-center">
          <p
            onClick={() => router.push(`/SeeMore/${moreId}`)}
            className="text-sm not-italic font-medium cursor-pointer"
          >
            See more
          </p>
          <ArrowBigRight className="w-4 h-4" />
        </div>
      </div>

      <div className="flex gap-x-5 md:gap-x-8 ">
        {moreMovies?.slice(0, 4).map((more: More, index: number) => (
          <div
            key={more.id}
            className={`w-full ${index > 1 ? "hidden md:block" : ""}`}
          >
            <Image
              width={190}
              height={281}
              alt="moreLikeMovies"
              onClick={() => router.push(`/detail/${more.id}`)}
              className="rounded-lg object-cover w-full cursor-pointer"
              src={`https://image.tmdb.org/t/p/original${more.poster_path}`}
            />

            <div className="w-full flex flex-col h-[87px] bg-[#f4f4f5] p-1 gap-y-[3px]">
              <div className="flex items-center gap-x-1">
                <Image
                  width={16}
                  height={16}
                  alt="star"
                  src="/iconImg/star.png"
                />
                <span className="text-sm not-italic font-medium text-[#71717A]">
                  {more.vote_average.toFixed(1)}/10
                </span>
              </div>

              <p className="text-lg not-italic font-normal">{more.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
