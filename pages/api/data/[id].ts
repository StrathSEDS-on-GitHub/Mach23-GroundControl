// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { assert, time } from 'console'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const CurrentData = {
  missionstarttime: 0,
  acceleration: 123,
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { id } = req.query

  let value: string | number = "NO DATA";

  switch (id) {
    case "velocity":
      value = CurrentData.GetVelocity;
      break;
    case 'missiontime':
      value = Date.now() - CurrentData.missionstarttime;
      break
      
    default:
      value = "INVALID ID";
      break;
  }

  res.status(200).json({ message: value.toString() });
}