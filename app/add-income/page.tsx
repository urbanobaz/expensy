import { cn } from "@/lib/utils"
import { Card, CardHeader } from "@/components/ui/card"

import styles from "./AddIncome.module.css"
import AddIncomeForm from "./AddIncomeForm"

export default function DashboardPage() {
  return (
    <div className="mx-auto mt-4 flex h-full justify-center">
      <Card className={cn(styles.card, "max-w-[380px] px-4")}>
        <CardHeader>
          <h3 className="mx-auto mb-2 flex justify-center text-lg font-semibold">
            Income details
          </h3>
          <AddIncomeForm />
        </CardHeader>
      </Card>
    </div>
  )
}
