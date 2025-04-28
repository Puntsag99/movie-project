import { ArrowBigRight } from "lucide-react";

export const Movies = () => {
  return (
    <div className=" flex flex-col w-full md:px-20">
      <div className="flex mt-[52px] items-center justify-between">
        <p className="text-2xl font-semibold not-italic">Upcoming</p>
        <p className="flex gap-x-2 text-sm not-italic font-medium items-center">
          See more
          <ArrowBigRight className="w-4 h-4" />
        </p>
      </div>
    </div>
  );
};
