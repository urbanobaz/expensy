import { currencyFormat, dateToString } from "@/lib/utils"
import { Income, columns } from "@/app/dashboard/income/columns"
import { DataTable } from "@/app/dashboard/income/data-table"

const data: Income[] = [
  {
    id: "m5gr84i9",
    type: "Moving",
    client: "Jessica C.",
    amount: currencyFormat(316),
    date: dateToString(new Date("4/13/2023")),
  },
  {
    id: "3u1reuv4",
    type: "Moving",
    client: "Cecille G.",
    amount: currencyFormat(242),
    date: dateToString(new Date("4/12/2023")),
  },
  {
    id: "derv1ws0",
    type: "Assembly",
    client: "Vanessa R.",
    amount: currencyFormat(837),
    date: dateToString(new Date("4/9/2023")),
  },
  {
    id: "5kma53ae",
    type: "Moving",
    client: "Silvia T.",
    amount: currencyFormat(874),
    date: dateToString(new Date("4/5/2023")),
  },
  {
    id: "bhqecj4p",
    type: "Mounting",
    client: "Camila G.",
    amount: currencyFormat(721),
    date: dateToString(new Date("4/18/2023")),
  },
]

export function IncomeDataTable() {
  return <DataTable columns={columns} data={data} />
}
