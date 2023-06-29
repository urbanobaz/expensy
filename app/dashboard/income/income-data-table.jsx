import { getServerSession } from "next-auth"

import { currencyFormat, dateToString } from "@/lib/utils"
import { getIncomeDataByUser } from "@/app/actions"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { columns } from "@/app/dashboard/income/columns"
import { DataTable } from "@/app/dashboard/income/data-table"

export async function incomeData(email) {
  if (!email) {
    return []
  }
  const data = await getIncomeDataByUser(email)
  return data
}

export async function IncomeDataTable() {
  const session = await getServerSession(authOptions)
  const data = await incomeData(session?.user?.email)
  const preppedData = data.map((obj) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return <DataTable columns={columns} data={preppedData} />
}
