import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.TMBB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
});
