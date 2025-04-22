import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMBD_KEY: process.env.TMDB_KEY,
    TMBD_TOKEN: process.env.TMDB_TOKEN,
  },
};

export default nextConfig;
