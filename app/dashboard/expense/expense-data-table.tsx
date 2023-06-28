import { getExpenseDataByUser } from "@/app/actions"
import { columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

export async function expenseData() {
  const data = await getExpenseDataByUser("ubazdevelops@gmail.com")
  return data
}

export async function ExpenseDataTable() {
  const data = await expenseData()
  return <DataTable columns={columns} data={data} />
}
