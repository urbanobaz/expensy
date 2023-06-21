import { currencyFormat } from "@/lib/utils"
import { Income, columns } from "@/components/income/columns"
import { DataTable } from "@/components/income/data-table"

const data: Income[] = [
  {
    id: "m5gr84i9",
    amount: currencyFormat(316),
    type: "Moving",
    clientName: "Jessica C.",
  },
  {
    id: "3u1reuv4",
    amount: currencyFormat(242),
    type: "Moving",
    clientName: "Cecille G.",
  },
  {
    id: "derv1ws0",
    amount: currencyFormat(837),
    type: "Assembly",
    clientName: "Vanessa R.",
  },
  {
    id: "5kma53ae",
    amount: currencyFormat(874),
    type: "Moving",
    clientName: "Silvia T.",
  },
  {
    id: "bhqecj4p",
    amount: currencyFormat(721),
    type: "Mounting",
    clientName: "Camila G.",
  },
]

export function IncomeDataTable() {
  return <DataTable columns={columns} data={data} />
}
