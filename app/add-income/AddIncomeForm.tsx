"use client"

import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { createIncome, getIncomeDataByUser } from "@/app/actions"

export default function AddIncomeForm() {
  const { data: session } = useSession()
  const router = useRouter()
  async function action(formData: FormData) {
    if (!session) {
      console.log("Need to have an account to add income or expense.")
      return
    }
    await createIncome(formData, session.user?.email)
    const expenses = getIncomeDataByUser(session?.user?.email)
    router.push("/dashboard")
  }
  return (
    <form action={action}>
      <Input name="type" placeholder="Type" type="text" className="mb-2" />
      <Input
        name="client"
        placeholder="Client name"
        type="text"
        className="mb-2"
      />
      <Input
        name="amount"
        placeholder="Amount"
        type="number"
        step="0.01"
        className="mb-2"
      />
      <Input name="date" type="date" className="mb-2" />
      <CardFooter className="px-0 pt-6">
        <Button
          type="submit"
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
    </form>
  )
}
