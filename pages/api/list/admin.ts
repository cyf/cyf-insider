import prisma from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const email = req.query?.email as string | undefined;
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
        },
        where: email
          ? {
              email: { contains: email },
            }
          : {},
      });
      res.status(200).json({ data: users });
    } catch (e) {
      res.status(500).json({ error: "failed to load data" });
    }
  } else {
    res
      .status(500)
      .json({ error: `unsupported request method(${req.method})!` });
  }
}
