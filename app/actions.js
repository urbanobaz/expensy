"use server"

import prisma from "@/prisma/client"

export async function createExpense(formData) {
  const description = formData.get("description")
  const amount = parseFloat(formData.get("amount"))
  const date = new Date(formData.get("date"))
  await prisma.expense.create({
    data: {
      description,
      amount,
      date,
    },
  })
}

export async function createIncome(formData) {
  const type = formData.get("type")
  const client = formData.get("client")
  const amount = parseFloat(formData.get("amount"))
  const date = new Date(formData.get("date"))
  await prisma.income.create({
    data: {
      type,
      client,
      amount,
      date,
    },
  })
}
