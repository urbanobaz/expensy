"use server"

import prisma from "@/prisma/client"

import { currencyFormat, dateToString } from "@/lib/utils"

export async function getExpense() {
  const expense = await prisma.expense.findMany()
  return expense
}

export async function createExpense(formData, email) {
  const description = formData.get("description")
  const amount = parseFloat(formData.get("amount"))
  const date = new Date(formData.get("date"))
  const userEmail = email
  await prisma.expense.create({
    data: {
      description,
      amount,
      date,
      userEmail,
    },
  })
}

export async function createIncome(formData, email) {
  const type = formData.get("type")
  const client = formData.get("client")
  const amount = parseFloat(formData.get("amount"))
  const date = new Date(formData.get("date"))
  const userEmail = email
  await prisma.income.create({
    data: {
      type,
      client,
      amount,
      date,
      userEmail,
    },
  })
}

export async function getIncomeDataByUser(email) {
  const data = await prisma.income.findMany({
    where: {
      userEmail: email,
    },
  })
  const preppedIncome = data.map((obj) => {
    return {
      ...obj,
      date: new Date(obj.date),
      amount: obj.amount,
    }
  })
  return preppedIncome
}

export async function getExpenseDataByUser(email) {
  const data = await prisma.expense.findMany({
    where: {
      userEmail: email,
    },
  })
  const preppedExpense = data.map((obj) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: obj.amount,
    }
  })
  return preppedExpense
}
