import { getServerSession } from "next-auth"

import { getIncomeDataByUser } from "@/app/actions"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

async function getIncomeData() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return []
  }
  const data = await getIncomeDataByUser(session?.user?.email)
  return data
}

async function organizedIncomeData() {
  const data = await getIncomeData()

  const januaryIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 0 && income.date.getFullYear() === 2023
  )
  let janTotal = 0
  januaryIncomeArray.forEach((income) => {
    janTotal += income.amount
  })

  const februaryIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 1 && income.date.getFullYear() === 2023
  )
  let febTotal = 0
  februaryIncomeArray.forEach((income) => {
    febTotal += income.amount
  })

  const marchIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 2 && income.date.getFullYear() === 2023
  )
  let marTotal = 0
  marchIncomeArray.forEach((income) => {
    marTotal += income.amount
  })

  const aprilIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 3 && income.date.getFullYear() === 2023
  )
  let aprTotal = 0
  aprilIncomeArray.forEach((income) => {
    aprTotal += income.amount
  })

  const mayIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 4 && income.date.getFullYear() === 2023
  )
  let mayTotal = 0
  mayIncomeArray.forEach((income) => {
    mayTotal += income.amount
  })

  const juneIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 5 && income.date.getFullYear() === 2023
  )
  let junTotal = 0
  juneIncomeArray.forEach((income) => {
    junTotal += income.amount
  })

  const julyIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 6 && income.date.getFullYear() === 2023
  )
  let julTotal = 0
  julyIncomeArray.forEach((income) => {
    julTotal += income.amount
  })

  const augustIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 7 && income.date.getFullYear() === 2023
  )
  let augTotal = 0
  augustIncomeArray.forEach((income) => {
    augTotal += income.amount
  })

  const septemberIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 8 && income.date.getFullYear() === 2023
  )
  let sepTotal = 0
  septemberIncomeArray.forEach((income) => {
    sepTotal += income.amount
  })

  const octoberIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 9 && income.date.getFullYear() === 2023
  )
  let octTotal = 0
  octoberIncomeArray.forEach((income) => {
    octTotal += income.amount
  })

  const novemberIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 10 && income.date.getFullYear() === 2023
  )
  let novTotal = 0
  novemberIncomeArray.forEach((income) => {
    novTotal += income.amount
  })

  const decemberIncomeArray = data.filter(
    (income) =>
      income.date.getMonth() === 11 && income.date.getFullYear() === 2023
  )
  let decTotal = 0
  decemberIncomeArray.forEach((income) => {
    decTotal += income.amount
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

async function totalIncomeAmount() {
  const data = await getIncomeData()
  let incomeTotal = 0

  data.forEach((dataPoint) => {
    incomeTotal += dataPoint.amount
  })
  return incomeTotal
}

export { organizedIncomeData, totalIncomeAmount, getIncomeData }
