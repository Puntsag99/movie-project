import Image from "next/image";
import { useFetchDatainClient } from "@/hooks/useFetchDatainClient";

interface Wrote {
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string;
}

export const Writets = ({
  write,
  detailId,
}: {
  write: Wrote;
  detailId: string;
}) => {
  const Genres = write?.genres;

  const { data, isLoading } = useFetchDatainClient(
    `/movie/${detailId}/credits?language=en-US`
  );

  const cast: { name: string }[] = data?.cast || [];
  const crew: { name: string; job: string }[] = data?.crew || [];

  console.log("bbb", crew);

  const director = crew?.find((member) => member.job === "Director");
  const writers = crew?.filter((member) => member.job === "Writer");

  const movieInfo = [
    { label: "Director", value: director?.name || "Unknown" },
    {
      label: "Writers",
      value:
        writers
          ?.slice(0, 3)
          .map((w) => w.name)
          .join(" · ") || "Unknown",
    },
    {
      label: "Stars",
      value:
        cast
          ?.slice(0, 3)
          .map((person) => person.name)
          .join(" · ") || "unkown",
    },
  ];

  // console.log("orj irj bnau uu:", data);

  console.log("ene bol cast", cast);
  console.log("ene bol crew", crew);

  return (
    <div className=" mt-8 w-full">
      <div className="px-5 md:px-0 flex flex-col gap-y-5 w-full">
        <div className="flex gap-x-[34px] w-full">
          <div className="w-full md:hidden ">
            <Image
              width={100}
              height={148}
              alt="detailPoster_path"
              className="  block md:hidden  object-cover"
              src={`https://image.tmdb.org/t/p/original${write.poster_path}`}
            />
          </div>

          <div className="flex flex-col gap-y-5 w-full ">
            <div className=" flex gap-x-3">
              {Genres.map((item) => (
                <div key={item.id}>
                  <p className="border border-[#e4e4e7] text-xs not-italic font-semibold w-[77px] h-5 flex justify-center rounded-full">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-base font-normal not-italic w-full">
              {write.overview}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          {movieInfo.map((item) => (
            <div key={item.label} className="flex flex-col gap-y-1">
              <div className="flex gap-x-[53px] ">
                <p className=" w-[64px] text-base not-italic font-bold">
                  {item.label}
                </p>
                <p className=" text-base not-italic font-normal">
                  {item.value}
                </p>
              </div>
              <div className="w-full h-[1px] border-b border-[#E4E4E7]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
