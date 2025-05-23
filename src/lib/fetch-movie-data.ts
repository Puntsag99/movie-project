import { axiosInstance } from "./axios-instance";

export const fetchMovieData = async (endPoint: string) => {
  console.log(process.env.TMDB_TOKEN);
  const { data } = await axiosInstance(endPoint);
  return data;
};
