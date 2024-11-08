import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BACKEND_SERVER: process.env.NEXT_PUBLIC_BACKEND_SERVER },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
