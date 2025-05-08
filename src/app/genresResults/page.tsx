import { GenreFilre } from "../_components/GenreFilre";
import { Suspense } from "react";

const GenreHome = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenreFilre />
    </Suspense>
  );
};

export default GenreHome;
