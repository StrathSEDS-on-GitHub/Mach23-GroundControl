// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { time } from 'console'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

let data = {"velocity": 200, "acceleration": 9}
const now = Date.now()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query

  let toreturn: number = (Date.now() - now)/1000;

  res.status(200).json({ message: `data ${toreturn}` });
}