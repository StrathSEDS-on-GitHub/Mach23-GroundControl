// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { assert, time } from 'console'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const CurrentData = {
  acceleration: 0,
  velocity: 0,
  altitude: 0,
  time: 0,
  GPS: null,

  set SetAcceleration(value: number) {
    this.acceleration = value
  },

  set SetVelocity(value: number) {
    assert(value >= 0, 'velocity cannot be negative');
    this.velocity = value
  },

  get GetAcceleration(): number {
    return this.acceleration
  },

  get GetVelocity(): number {
    return this.velocity
  }
}
const now = Date.now()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { id } = req.query
  let currenttime: number = Math.floor((Date.now() - now)/10)/100;

  let value = "NO DATA";

  switch (id) {
    case "velocity":
      value = CurrentData.GetVelocity.toString();
      break;
  default:
    value = "INVALID ID";
    break;
  }

  res.status(200).json({ message: `(${currenttime}) ${id}: ${value}` });
}