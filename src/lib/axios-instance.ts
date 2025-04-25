import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQ2OWMxNDY4ZmM2ODg5ZDZlNjM4NjkwNGI5OGEwNSIsIm5iZiI6MTc0NTIwNTE3Mi42ODYsInN1YiI6IjY4MDViN2I0YzNlOGU3NGI2ZGVlM2ExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HVHjU9ZE6gg2v5b6N8T9n8dLDbCT24gpxdQ40R2P_tQ`,
  },
});
