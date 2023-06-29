import { currencyFormat, dateToString } from "@/lib/utils"
import { columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

export function ExpenseDataTable({ data }) {
  const preppedData = data.map((obj) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return <DataTable columns={columns} data={preppedData} />
}
