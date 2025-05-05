import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Value = () => {
  return (
    <div>
      <div className=" flex flex-col p-3 gap-y-2 w-[577px] bg-white rounded-lg  border border-[#e4e4e7]">
        <div className="flex gap-x-4">
          <Image width={67} height={100} alt="searchImage" src={``} />

          <div className="flex">
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-semibold not-italic">Movie name</h3>
              <div className="flex gap-x-1">
                <Image
                  width={16}
                  height={16}
                  alt="star"
                  src="/iconImg/star.png"
                />
                <span className="text-sm not-italic font-medium">6/10</span>{" "}
              </div>

              <p className="text-sm not-italic font-medium">2024</p>
            </div>
          </div>
          <div className="flex gap-x-2">
            <p className="text-sm not-italic font-medium">See more</p>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
