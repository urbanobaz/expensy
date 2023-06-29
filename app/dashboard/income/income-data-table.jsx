import { getServerSession } from "next-auth"

import { currencyFormat, dateToString } from "@/lib/utils"
import { columns } from "@/app/dashboard/income/columns"
import { DataTable } from "@/app/dashboard/income/data-table"

export function IncomeDataTable({ data }) {
  const preppedData = data.map((obj) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return <DataTable columns={columns} data={preppedData} />
}
