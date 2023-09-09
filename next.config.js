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
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/cyf/cyf-insider",
        permanent: false,
      },
    ];
  },
  env: {
    VERCEL: 0,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
  },
};

module.exports = nextConfig;
