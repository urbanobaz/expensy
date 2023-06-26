import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/prisma/client"
import { Income } from "@prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data: Income[] = await prisma.income.findMany()
      return res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
