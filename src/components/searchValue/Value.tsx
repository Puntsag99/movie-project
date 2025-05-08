import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type sea = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

export const Value = ({
  searchData,
  searchValue,
  setSearchValue,
}: {
  searchData: sea[];
  searchValue: string;
  setSearchValue: (value: string) => void;
}) => {
  const capitalized =
    searchValue.charAt(0).toUpperCase() + searchValue.slice(1);

  const router = useRouter();

  const handleClear = (id: number) => {
    router.push(`/detail/${id}`);
    setSearchValue("");
  };

  const resultClear = () => {
    router.push(`/search?use=${searchValue}`);
    setSearchValue("");
  };

  return (
    <div className="  flex flex-col gap-[10px] p-3 w-[335px] md:w-[577px] bg-white dark:bg-black rounded-lg  border border-[#e4e4e7]">
      <div className="flex  flex-col  gap-y-[17px]">
        {searchData.slice(0, 5).map((movie: sea) => {
          return (
            <div key={movie.id} className="flex gap-y-2 flex-col">
              <div className="flex gap-x-4 w-full ">
                <div>
                  <Image
                    width={67}
                    height={100}
                    alt="searchImage"
                    className="rounded-lg object-cover w-full "
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                </div>

                <div className="flex w-full  justify-between">
                  <div className="flex flex-col gap-y-3">
                    <h3 className="text-xl font-semibold not-italic">
                      {movie.title}
                    </h3>
                    <div className="flex gap-x-1">
                      <Image
                        width={16}
                        height={16}
                        alt="star"
                        src="/iconImg/star.png"
                      />
                      <span className="text-sm not-italic font-medium">
                        {movie.vote_average.toFixed(1)}/10
                      </span>
                    </div>

                    <p className="text-sm not-italic font-medium">
                      {movie.release_date}
                    </p>
                  </div>

                  <div className="flex   items-end  ">
                    <div className=" flex items-center gap-x-2 ">
                      <p
                        onClick={() => {
                          handleClear(movie.id);
                        }}
                        className="text-sm not-italic font-medium cursor-pointer"
                      >
                        See more
                      </p>
                      <ArrowRight className="w-4 h-4 " />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" border-t mt-2 border-[#E4E4e7]" />
            </div>
          );
        })}
      </div>
      <p
        onClick={resultClear}
        className="text-sm not-italic font-medium px-7 cursor-pointer"
      >
        See all results for {`"${capitalized}"`}
      </p>
    </div>
  );
};
