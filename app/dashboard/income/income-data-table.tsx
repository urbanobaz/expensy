import { currencyFormat, dateToString } from "@/lib/utils"
import { Income, columns } from "@/app/dashboard/income/columns"
import { DataTable } from "@/app/dashboard/income/data-table"

async function getIncomeData() {
  const res = await fetch(`${process.env.BASE_URL}/api/get-income`, {
    cache: "no-store",
  })
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

async function prepIncome() {
  const income = await getIncomeData()
  const preppedIncome = income.map((obj: Income) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return preppedIncome
}

export async function IncomeDataTable() {
  const income = await prepIncome()
  return <DataTable columns={columns} data={income} />
}
