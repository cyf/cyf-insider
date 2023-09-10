import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.query.email;
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      image: true,
    },
    where: email
      ? typeof email === "string"
        ? { email: { contains: email } }
        : { email: { in: email } }
      : {},
  });
  return res.status(200).json({ data: users });
}
