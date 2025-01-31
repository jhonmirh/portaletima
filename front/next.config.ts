import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  



export default nextConfig;
