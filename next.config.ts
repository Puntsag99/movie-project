import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMBD_KEY: process.env.TMDB_KEY,
    TMBD_TOKEN: process.env.TMDB_TOKEN,
    TMDB_BASE_URL: process.env.TMDB_BASE_URL,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
