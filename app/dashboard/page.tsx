import Link from "next/link"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExpenseBarChart } from "@/components/expense/expense-bar-chart"
import { ExpenseDataTable } from "@/components/expense/expense-data-table"
import { IncomeBarChart } from "@/components/income/income-bar-chart"
import { IncomeDataTable } from "@/components/income/income-data-table"

export default function DashboardPage() {
  return (
    <div className="container flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2"></div>
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
              <div className="text-2xl font-bold">$45,231.89</div>
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
              <div className="text-2xl font-bold">$15,231.89</div>
              <Button className="mt-3">Add expense</Button>
            </CardContent>
          </Card>
        </div>

        <TabsContent value="income" className="space-y-4">
          <div className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Monthly Income</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <IncomeBarChart />
              </CardContent>
            </Card>
          </div>

          <div className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Income Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <IncomeDataTable />
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
              <CardContent className="pl-2">
                <ExpenseBarChart />
              </CardContent>
            </Card>
          </div>

          <div className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ExpenseDataTable />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
