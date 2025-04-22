import { axiosInstance } from "@/lib/axios-instance";
import { Header } from "@/components/";

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data;
};

const Home = async () => {
  console.log("env", process.env.TMDB_BASE_URL);

  const populars = await getPopularMovies();
  console.log(populars);

  return (
    <div className="w-screen h-10 md:h-14 lg:h-20">
      <Header />
    </div>
  );
};

export default Home;
