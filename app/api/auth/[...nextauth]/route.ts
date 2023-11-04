import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { ADMIN_EMAIL } from "@/lib/constants";

import type { NextApiResponse, NextApiRequest } from "next";

const getAuthOptions = (req: NextApiRequest): NextAuthOptions => {
  return {
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
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const referer = req.headers.get("referer") as string | undefined;
  console.log("referer", referer);

  const isZh = referer && referer.includes("/zh/");
  console.log("isZh", isZh);
  process.env.ZH = isZh ? "1" : "";

  const authOptions = getAuthOptions(req);

  return await NextAuth(req, res, {
    ...authOptions,
    pages: {
      signIn: `/join${isZh ? "/zh" : ""}/sign-in`,
    },
  });
};

export { handler as GET, handler as POST };
