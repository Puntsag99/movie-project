import { fetchMovieData } from "@/lib/fetch-movie-data";
import { data } from "framer-motion/client";
import useSWR from "swr";

export const useFetchDatainClient = (endPoint: string) => {
  const { data, isLoading } = useSWR(endPoint, fetchMovieData);
  return { data, isLoading };
};
