import { GenreMovies } from "./GenreMovies";
import { Panel } from "./Panel";

export const GenreFilre = () => {
  return (
    <div className=" mt-8 px-4 md:mt-13 md:px-20">
      <h3 className="text-3xl not-italic font-semibold ">Search filter</h3>
      <div className="flex flex-col  md:flex-row md:gap-x-10">
        <div className="flex gap-x-1">
          <Panel />

          <div className="  md:h-screen md:border-r  border-[#E4E4e7]" />
        </div>

        <GenreMovies />
      </div>
    </div>
  );
};
