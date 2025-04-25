import { axiosInstance } from "@/lib/axios-instance";
import { GenreDropdown, Header } from "@/components/header";
import { Carousel } from "@/components/carousel/Carousel";
import { data } from "framer-motion/client";

const getPopularMovies = async () => {
  const { data } = await axiosInstance("https://api.themoviedb.org/3");
  return data;
};

// console.log("ene yu yumbe:", data);

// const getGenres = async () => {
//   const { data } = await axiosInstance("/genre/movie/list?language=en");
//   return data;
// };

const Home = async () => {
  console.log("env", process.env.TMDB_BASE_URL);

  // const populars = await getPopularMovies();
  // console.log("ene yu yum be :", populars);

  // const genres = await getGenres();
  // console.log("adfafa", genres);

  return (
    <div className="w-screen h-10 md:h-14 lg:h-20">
      <Carousel />
    </div>
  );
};

export default Home;
