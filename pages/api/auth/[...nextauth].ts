import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { ADMIN_EMAIL } from "@/lib/constants";

import type { NextApiRequest, NextApiResponse } from "next";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 14,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  // pages: {
  //   signIn: "/join/zh/signin",
  // },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email === ADMIN_EMAIL) {
        token.userRole = "admin";
      }
      return token;
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const referer = req.headers.referer;
  console.log("referer", referer);

  const isZh = referer?.includes("/zh/") || false;
  console.log("isZh", isZh);
  process.env.ZH = isZh ? "true" : "";

  return await NextAuth(req, res, {
    ...authOptions,
    pages: {
      signIn: `/join${isZh ? "/zh" : ""}/sign-in`,
    },
  });
}
