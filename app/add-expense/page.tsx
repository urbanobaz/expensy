import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function DashboardPage() {
  return (
    <div className="mx-auto mt-4 flex h-full justify-center">
      <Card className={cn("w-[380px] px-4")}>
        <CardHeader>
          <h3 className="mx-auto mb-2 flex justify-center text-lg font-semibold">
            Expense details
          </h3>
        </CardHeader>
        <Input placeholder="Description" type="text" className="mb-2" />
        <Input placeholder="Client name" type="text" className="mb-2" />
        <Input placeholder="Amount" type="number" className="mb-2" />
        <CardFooter className="px-0 pt-6">
          <Button className="w-full text-base">Add Expense</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
