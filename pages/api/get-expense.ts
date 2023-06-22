import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/prisma/client"
import { Expense } from "@prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data: Expense[] = await prisma.expense.findMany()
      return res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
