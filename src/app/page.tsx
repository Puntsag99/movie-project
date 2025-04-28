import { Carousel } from "@/components/carousel/Carousel";
import { Movies } from "@/components/movies/Movies";

const Home = async () => {
  console.log("env", process.env.TMDB_BASE_URL);
  return (
    <div className="w-screen">
      <Carousel />
      <Movies />
    </div>
  );
};

export default Home;
