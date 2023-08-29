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

import styles from "./Dashboard.module.css"
import Donut from "./donut-chart"

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
          <Card className="">
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
          <Card>
            <Donut income={totalIncome} loss={totalExpense} />
          </Card>
        </div>

        <TabsContent value="income" className="space-y-4">
          <div className="hidden sm:block">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-medium">Monthly Income</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <IncomeBarChart data={incomeBarChartInfo} />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:hidden">
            <p className="py-4 text-lg font-medium">Monthly Income</p>
            <IncomeBarChart
              data={incomeBarChartInfo}
              classNames={styles.smallIncomeBarChart}
            />
          </div>

          <div className="hidden sm:block">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-medium">Income Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-6">
                <IncomeDataTable data={incomeTableData} />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:hidden">
            <p className="py-4 text-lg">Income Breakdown</p>
            <IncomeDataTable data={incomeTableData} />
          </div>
        </TabsContent>
        <TabsContent value="expense" className="space-y-4">
          <div className="hidden sm:block">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-medium">Monthly Expense</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <ExpenseBarChart data={expenseBarChartInfo} />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:hidden">
            <p className="py-4 text-lg font-medium">Monthly Expense</p>
            <ExpenseBarChart
              data={expenseBarChartInfo}
              classNames={styles.smallExpenseBarChart}
            />
          </div>

          <div className="hidden sm:block">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-medium">Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-6">
                <ExpenseDataTable data={expenseTableData} />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:hidden">
            <p className="py-4 text-lg font-medium">Expense Breakdown</p>
            <ExpenseDataTable data={expenseTableData} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
