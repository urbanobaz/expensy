import { getServerSession } from "next-auth"

import { currencyFormat, dateToString } from "@/lib/utils"
import { getExpenseDataByUser } from "@/app/actions"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

export async function expenseData(email) {
  if (!email) {
    return []
  }
  const data = await getExpenseDataByUser(email)
  return data
}

export async function ExpenseDataTable() {
  const session = await getServerSession(authOptions)
  const data = await expenseData(session?.user?.email)
  const preppedData = data.map((obj) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return <DataTable columns={columns} data={preppedData} />
}
