import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      res.status(200).json({ data: req.body });
    } catch (e) {
      res.status(500).json({ error: "failed to load data" });
    }
  } else {
    res
      .status(500)
      .json({ error: `unsupported request method(${req.method})!` });
  }
}
