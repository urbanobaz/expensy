import { currencyFormat } from "@/lib/utils"
import { Expense, columns } from "@/components/expense/columns"
import { DataTable } from "@/components/expense/data-table"

const data: Expense[] = [
  {
    id: "m5gr84i9",
    description: "Jessica C.",
    date: new Date("6/13/2023").toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    amount: currencyFormat(316),
  },
  {
    id: "3u1reuv4",
    description: "Cecille G.",
    date: new Date("6/10/2023").toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    amount: currencyFormat(242),
  },
  {
    id: "derv1ws0",
    description: "Vanessa R.",
    date: new Date("6/09/2023").toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    amount: currencyFormat(837),
  },
  {
    id: "5kma53ae",
    description: "Silvia T.",
    date: new Date("6/11/2023").toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    amount: currencyFormat(874),
  },
  {
    id: "bhqecj4p",
    description: "Camila G.",
    date: new Date("6/19/2023").toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    amount: currencyFormat(721),
  },
]

export function ExpenseDataTable() {
  return <DataTable columns={columns} data={data} />
}
