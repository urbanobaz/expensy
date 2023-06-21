"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function DashboardPage() {
  const { toast } = useToast()
  return (
    <div className="mx-auto mt-4 flex h-full justify-center">
      <Card className={cn("w-[380px] px-4")}>
        <CardHeader>
          <h3 className="mx-auto mb-2 flex justify-center text-lg font-semibold">
            Income details
          </h3>
        </CardHeader>
        <Input placeholder="Type" type="text" className="mb-2" />
        <Input placeholder="Client name" type="text" className="mb-2" />
        <Input placeholder="Amount" type="number" className="mb-2" />
        <Input type="date" className="mb-2" />
        <CardFooter className="px-0 pt-6">
          <Button
            className="w-full text-base"
            onClick={() => {
              toast({
                description: "Income added!",
              })
            }}
          >
            Add Income
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
