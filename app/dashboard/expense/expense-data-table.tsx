import { currencyFormat, dateToString } from "@/lib/utils"
import { Expense, columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

const data: Expense[] = [
  {
    id: "m5gr84i9",
    description: "Food",
    date: dateToString(new Date("6/13/2023")),
    amount: currencyFormat(316),
  },
  {
    id: "3u1reuv4",
    description: "Bestbuy",
    date: dateToString(new Date("6/10/2023")),
    amount: currencyFormat(242),
  },
  {
    id: "derv1ws0",
    description: "Food",
    date: dateToString(new Date("6/09/2023")),
    amount: currencyFormat(837),
  },
  {
    id: "5kma53ae",
    description: "Misc",
    date: dateToString(new Date("6/11/2023")),
    amount: currencyFormat(874),
  },
  {
    id: "bhqecj4p",
    description: "Card payment",
    date: dateToString(new Date("6/19/2023")),
    amount: currencyFormat(721),
  },
]

export function ExpenseDataTable() {
  return <DataTable columns={columns} data={data} />
}
