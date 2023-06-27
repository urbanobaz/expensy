import prisma from "@/prisma/client"

import { currencyFormat, dateToString } from "@/lib/utils"
import { Income, columns } from "@/app/dashboard/income/columns"
import { DataTable } from "@/app/dashboard/income/data-table"

async function getIncomeData() {
  const data = await prisma.income.findMany()
  const preppedIncome = data.map((obj: any) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return preppedIncome
}

export async function IncomeDataTable() {
  const data = await getIncomeData()
  return <DataTable columns={columns} data={data} />
}
