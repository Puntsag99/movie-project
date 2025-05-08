import { Carousel } from "@/components/carousel/Carousel";
import { MoviesList } from "@/components/movies/MoviesList";

const Home = async () => {
  console.log("env", process.env.TMDB_BASE_URL);
  return (
    <div className="w-screen ">
      <Carousel />
      <MoviesList />
    </div>
  );
};

export default Home;
