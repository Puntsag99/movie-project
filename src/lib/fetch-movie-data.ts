import { axiosInstance } from "./axios-instance";

export const fetchMovieData = async (endPoint: string) => {
  try {
    console.log("Fetching from endpoint:", endPoint);
    console.log("Base URL:", axiosInstance.defaults.baseURL);
    const { data } = await axiosInstance(endPoint);
    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};
