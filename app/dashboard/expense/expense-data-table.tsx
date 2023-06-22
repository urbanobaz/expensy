import { currencyFormat, dateToString } from "@/lib/utils"
import { Expense, columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

async function getExpense() {
  const res = await fetch(`${process.env.BASE_URL}/api/get-expense`, {
    cache: "no-store",
  })
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

async function prepExpense() {
  const expense = await getExpense()
  const preppedExpense = expense.map((obj: Expense) => {
    return {
      ...obj,
      date: dateToString(new Date(obj.date)),
      amount: currencyFormat(obj.amount),
    }
  })
  return preppedExpense
}

export async function ExpenseDataTable() {
  const expense = await prepExpense()
  return <DataTable columns={columns} data={expense} />
}
