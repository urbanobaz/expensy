"use client"

import { useContext, useEffect } from "react"
import { InfoContext } from "@/context/context"

import { columns } from "@/app/dashboard/expense/columns"
import { DataTable } from "@/app/dashboard/expense/data-table"

export function ExpenseDataTable() {
  const [expenseArray, setExpenseArray] = useContext(InfoContext)
  console.log(expenseArray)
  return <DataTable columns={columns} data={expenseArray} />
}
