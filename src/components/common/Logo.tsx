"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/`)}
      className="cursor-pointer flex gap-x-2 text-indigo-700 items-center"
    >
      <Image width={20} height={20} src="/iconImg/film.png" alt="movie" />
      <h3 className="font-inter text-base italic font-bold">Movie Z</h3>
    </div>
  );
};
