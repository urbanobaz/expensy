import moment from "moment"
import { getServerSession } from "next-auth"

import { getExpenseDataByUser } from "@/app/actions"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

async function getExpenseData() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return []
  }
  const data = await getExpenseDataByUser(session?.user?.email)
  return data
}

async function organizedExpenseData() {
  const data = await getExpenseData()
  const preppedData = data.map((obj) => {
    return {
      ...obj,
      date: moment(obj.date).add(4, "h").toDate(),
      amount: obj.amount,
    }
  })

  const januaryExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 0 && expense.date.getFullYear() === 2023
  )
  let janTotal = 0
  januaryExpenseArray.forEach((expense) => {
    janTotal += expense.amount
  })

  const februaryExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 1 && expense.date.getFullYear() === 2023
  )
  let febTotal = 0
  februaryExpenseArray.forEach((expense) => {
    febTotal += expense.amount
  })

  const marchExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 2 && expense.date.getFullYear() === 2023
  )
  let marTotal = 0
  marchExpenseArray.forEach((expense) => {
    marTotal += expense.amount
  })

  const aprilExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 3 && expense.date.getFullYear() === 2023
  )
  let aprTotal = 0
  aprilExpenseArray.forEach((expense) => {
    aprTotal += expense.amount
  })

  const mayExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 4 && expense.date.getFullYear() === 2023
  )
  let mayTotal = 0
  mayExpenseArray.forEach((expense) => {
    mayTotal += expense.amount
  })

  const juneExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 5 && expense.date.getFullYear() === 2023
  )
  let junTotal = 0
  juneExpenseArray.forEach((expense) => {
    junTotal += expense.amount
  })

  const julyExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 6 && expense.date.getFullYear() === 2023
  )
  let julTotal = 0
  julyExpenseArray.forEach((expense) => {
    julTotal += expense.amount
  })

  const augustExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 7 && expense.date.getFullYear() === 2023
  )
  let augTotal = 0
  augustExpenseArray.forEach((expense) => {
    augTotal += expense.amount
  })

  const septemberExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 8 && expense.date.getFullYear() === 2023
  )
  let sepTotal = 0
  septemberExpenseArray.forEach((expense) => {
    sepTotal += expense.amount
  })

  const octoberExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 9 && expense.date.getFullYear() === 2023
  )
  let octTotal = 0
  octoberExpenseArray.forEach((expense) => {
    octTotal += expense.amount
  })

  const novemberExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 10 && expense.date.getFullYear() === 2023
  )
  let novTotal = 0
  novemberExpenseArray.forEach((expense) => {
    novTotal += expense.amount
  })

  const decemberExpenseArray = preppedData.filter(
    (expense) =>
      expense.date.getMonth() === 11 && expense.date.getFullYear() === 2023
  )
  let decTotal = 0
  decemberExpenseArray.forEach((expense) => {
    decTotal += expense.amount
  })

  return [
    {
      name: "Jan",
      total: janTotal,
    },
    {
      name: "Feb",
      total: febTotal,
    },
    {
      name: "Mar",
      total: marTotal,
    },
    {
      name: "Apr",
      total: aprTotal,
    },
    {
      name: "May",
      total: mayTotal,
    },
    {
      name: "Jun",
      total: junTotal,
    },
    {
      name: "Jul",
      total: julTotal,
    },
    {
      name: "Aug",
      total: augTotal,
    },
    {
      name: "Sep",
      total: sepTotal,
    },
    {
      name: "Oct",
      total: octTotal,
    },
    {
      name: "Nov",
      total: novTotal,
    },
    {
      name: "Dec",
      total: decTotal,
    },
  ]
}

async function totalExpenseAmount() {
  const data = await getExpenseData()
  let expenseTotal = 0

  data.forEach((dataPoint) => {
    expenseTotal += dataPoint.amount
  })
  return expenseTotal
}

export { organizedExpenseData, totalExpenseAmount, getExpenseData }
