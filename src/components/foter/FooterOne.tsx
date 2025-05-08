"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const FooterOne = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/`)}
      className=" h-full  md:w-[50%] cursor-pointer "
    >
      <div className="flex mb-[8px] items-center gap-x-2">
        <Image width={20} height={20} alt="moive" src="/iconImg/vecWh.png" />

        <p className="text-[16px]  font-bold italic text-white"> Movie Z</p>
      </div>

      <p className=" text-[#FAFAFA] text-[14px] ">
        © 2999 Movie Z. All Rights Reserved. Xgold.inc 🇲🇳
      </p>
    </div>
  );
};
