import { currencyFormat, dateToString } from "@/lib/utils"
import { columns } from "@/app/dashboard/income/columns"
import { DataTable } from "@/app/dashboard/income/data-table"

type Income = {
  id: number
  type: string
  client: string
  date: Date
  amount: number
  userEmail: string
}

interface IncomeDataTableProps {
  data: Income[]
  classNames?: string
}

export function IncomeDataTable({ data }: IncomeDataTableProps) {
  const preppedData = data.map((obj) => {
    return {
      ...obj,
      date: dateToString(obj.date),
      amount: currencyFormat(obj.amount),
    }
  })
  return <DataTable columns={columns} data={preppedData} />
}
