import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-x-2 text-indigo-700 items-center">
      <Image width={20} height={20} src="/iconImg/film.png" alt="movie" />
      <h3 className="font-inter text-base italic font-bold">Movie Z</h3>
    </div>
  );
};
