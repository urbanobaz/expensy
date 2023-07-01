import { currencyFormat, dateToString } from "@/lib/utils"
import { columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

type Expense = {
  id: number
  description: string
  date: Date
  amount: number
  userEmail: string
}

interface ExpenseDataTableProps {
  data: Expense[]
}

export function ExpenseDataTable({ data }: ExpenseDataTableProps) {
  const preppedData = data.map((obj) => {
    return {
      ...obj,
      date: dateToString(obj.date),
      amount: currencyFormat(obj.amount),
    }
  })
  return <DataTable columns={columns} data={preppedData} />
}
