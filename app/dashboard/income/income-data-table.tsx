import { getIncomeDataByUser } from "@/app/actions"
import { columns } from "@/app/dashboard/income/columns"
import { DataTable } from "@/app/dashboard/income/data-table"

export async function IncomeDataTable() {
  const data = await getIncomeDataByUser("ubazdevelops@gmail.com")
  return <DataTable columns={columns} data={data} />
}
