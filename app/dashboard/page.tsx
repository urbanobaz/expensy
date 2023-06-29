import Link from "next/link"
import { Minus, Plus } from "lucide-react"

import { cn, currencyFormat } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getExpenseData,
  organizedExpenseData,
  totalExpenseAmount,
} from "@/app/dashboard/expense/data"
import { ExpenseBarChart } from "@/app/dashboard/expense/expense-bar-chart"
import { ExpenseDataTable } from "@/app/dashboard/expense/expense-data-table"
import {
  getIncomeData,
  organizedIncomeData,
  totalIncomeAmount,
} from "@/app/dashboard/income/data"
import { IncomeBarChart } from "@/app/dashboard/income/income-bar-chart"
import { IncomeDataTable } from "@/app/dashboard/income/income-data-table"

export default async function DashboardPage() {
  const incomeTableData = await getIncomeData()
  const expenseTableData = await getExpenseData()
  const incomeBarChartInfo = await organizedIncomeData()
  const expenseBarChartInfo = await organizedExpenseData()
  const totalIncome = await totalIncomeAmount()
  const totalExpense = await totalExpenseAmount()
  return (
    <div className="container flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="income" className="space-y-4">
        <TabsList>
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expense">Expenses</TabsTrigger>
        </TabsList>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium">Total Income</CardTitle>
              <Plus className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {currencyFormat(totalIncome)}
              </div>
              <Link href="/add-income" className={cn(buttonVariants(), "mt-3")}>
                Add income
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium">Total Expense</CardTitle>
              <Minus className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {currencyFormat(totalExpense)}
              </div>
              <Link
                href="/add-expense"
                className={cn(buttonVariants(), "mt-3")}
              >
                Add expense
              </Link>
            </CardContent>
          </Card>
        </div>

        <TabsContent value="income" className="space-y-4">
          <div className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Monthly Income</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <IncomeBarChart data={incomeBarChartInfo} />
              </CardContent>
            </Card>
          </div>

          <div className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Income Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-6">
                <IncomeDataTable data={incomeTableData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="expense" className="space-y-4">
          <div className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Monthly Expense</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <ExpenseBarChart data={expenseBarChartInfo} />
              </CardContent>
            </Card>
          </div>

          <div className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-6">
                <ExpenseDataTable data={expenseTableData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
