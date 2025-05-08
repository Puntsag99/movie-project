import { More } from "@/app/_components/detailSeeMore/More";
import { Suspense } from "react";

const detailSee = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <More />
      </Suspense>
    </div>
  );
};

export default detailSee;
