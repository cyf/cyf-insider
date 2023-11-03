const { withContentlayer } = require("next-contentlayer");
const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/join",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  i18n,
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
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    VERCEL_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
  },
};

module.exports = withContentlayer(nextConfig);
