import { axiosInstance } from "@/lib/axios-instance";
import { GenreDropdown, Header } from "@/components/header";

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data;
};

// const getGenres = async () => {
//   const { data } = await axiosInstance("/genre/movie/list?language=en");
//   return data;
// };

const Home = async () => {
  console.log("env", process.env.TMDB_BASE_URL);

  // const populars = await getPopularMovies();
  // console.log(populars);

  // const genres = await getGenres();
  // console.log("adfafa", genres);

  return <div className="w-screen h-10 md:h-14 lg:h-20"></div>;
};

export default Home;
