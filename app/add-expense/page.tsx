"use client"

import { cn } from "@/lib/utils"
import { Card, CardHeader } from "@/components/ui/card"

import AddExpenseForm from "./AddExpenseForm"

export default function DashboardPage() {
  return (
    <div className="mx-auto mt-4 flex h-full justify-center">
      <Card className={cn("w-[380px] px-4")}>
        <CardHeader>
          <h3 className="mx-auto mb-2 flex justify-center text-lg font-semibold">
            Expense details
          </h3>
        </CardHeader>
        <AddExpenseForm />
      </Card>
    </div>
  )
}
