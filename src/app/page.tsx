import { Carousel } from "@/components/carousel/Carousel";

const Home = async () => {
  console.log("env", process.env.TMDB_BASE_URL);
  return (
    <div className="w-screen  bg-amber-300">
      <Carousel />
    </div>
  );
};

export default Home;
