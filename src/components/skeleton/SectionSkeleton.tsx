export const SectionSkeleton = () => {
  return (
    <div className="px-20 w-full flex flex-col gap-y-8">
      <div className="flex justify-between">
        <div className="w-[250px] h-8 bg-[#f4f4f5] rounded-md animate-pulse" />
        <div className="w-[250px] h-8 bg-[#f4f4f5] rounded-md animate-pulse" />
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-[230px] h-[439px] bg-[#f4f4f5] rounded-md animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
