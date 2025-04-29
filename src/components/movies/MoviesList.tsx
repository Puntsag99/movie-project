import { Movies } from "./Movies";

export const MoviesList = () => {
  return (
    <div>
      <Movies title="Upcoming" apiUrl="/movie/upcoming?language=en-US&page=1" />
      <Movies
        title="Top Rated"
        apiUrl="/movie/top_rated?language=en-US&page=1"
      />
      <Movies title="Popular" apiUrl="/movie/popular?language=en-US&page=1" />
    </div>
  );
};
