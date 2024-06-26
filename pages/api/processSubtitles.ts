import { exec } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (typeof url !== "string") {
    res.status(400).json({ error: "URL must be a string" });
    return;
  }

  exec(`./process_all.sh "${url}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.status(500).json({ error: stderr });
      return;
    }
    res.status(200).json({ message: stdout });
  });
}
