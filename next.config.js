const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/join",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "www.chenyifaer.com",
      "chenyifaer.com",
      "visitor-badge.laobi.icu",
      "vercel.com",
      "www.kjxbyz.com",
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  env: {
    VERCEL: 0,
    VERCEL_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
  },
};

module.exports = withContentlayer(nextConfig);
