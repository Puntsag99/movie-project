import { Tops } from "../_components/popoo/Tops";
import { Suspense } from "react";

const TopNowPop = () => {
  return (
    <div className="w-screen">
      <Suspense fallback={<div>Loading search results...</div>}>
        <Tops />
      </Suspense>
    </div>
  );
};

export default TopNowPop;
