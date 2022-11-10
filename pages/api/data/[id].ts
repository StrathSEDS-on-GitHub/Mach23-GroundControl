// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { assert, time } from 'console'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const CurrentData = {
  acceleration: 0,
  speed: 0,
  altitude: 0,
  time: 0,
  GPS: null,

  set SetAcceleration(value: number): void {
    assert
    this.acceleration = value
  },

  set SetSpeed(value: number): void {
    assert(value >= 0, 'Speed cannot be negative');
    this.speed = value
  }
}

const DataKey = ["velocity", "acceleration"];

const now = Date.now()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { id } = req.query
  let currenttime: number = Math.floor((Date.now() - now)/100)/10;

  let value = "NO DATA";

  switch (id) {
    case "velocity":

  res.status(200).json({ message: `(${currenttime}) ${id}: ${value}` });
}