import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "books.google.com",
        pathname: "/books/content",
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
