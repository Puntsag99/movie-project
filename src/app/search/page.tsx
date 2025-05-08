import { SearchStyle } from "../_components/searchpage/SearchStyle";
import { Suspense } from "react";

const SearchPage = () => {
  return (
    <div className="w-screen ">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchStyle />
      </Suspense>
    </div>
  );
};

export default SearchPage;
