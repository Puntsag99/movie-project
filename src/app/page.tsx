import { axiosInstance } from "@/lib/axios-instance";

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data;
};

const Home = async () => {
  const populars = await getPopularMovies();
  console.log(populars);

  return <div>Home</div>;
};

export default Home;
