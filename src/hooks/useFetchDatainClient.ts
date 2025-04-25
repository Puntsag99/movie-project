import { fetchMovieData } from "@/lib/fetch-movie-data";
import useSWR from "swr";

export const useFetchDatainClient = (endPoint: string) => {
  const { data, isLoading } = useSWR(endPoint, fetchMovieData);
  return { data, isLoading };
};
