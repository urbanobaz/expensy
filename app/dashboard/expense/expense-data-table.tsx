import prisma from "@/prisma/client"

import { currencyFormat, dateToString } from "@/lib/utils"
import { Expense, columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

async function getExpenseData() {
  const data = await prisma.expense.findMany()
  const preppedExpense = data.map((obj: any) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return preppedExpense
}

export async function ExpenseDataTable() {
  const data = await getExpenseData()
  return <DataTable columns={columns} data={data} />
}
