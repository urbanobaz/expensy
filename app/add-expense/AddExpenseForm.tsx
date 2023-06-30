"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import { InfoContext } from "@/context/context"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { createExpense, getExpenseDataByUser } from "@/app/actions"

import { getExpenseData } from "../dashboard/expense/data"

export default function AddExpenseForm() {
  const [expenseArray, setExpenseArray] = useContext(InfoContext)
  const { data: session } = useSession()
  const router = useRouter()
  async function action(formData: FormData) {
    if (!session) {
      console.log("Need to have an account to add income or expense.")
      return
    }
    await createExpense(formData, session?.user?.email)
    router.push("/dashboard")
  }
  return (
    <form action={action}>
      <Input
        name="description"
        placeholder="Description"
        type="text"
        className="mb-2"
      />
      <Input
        name="amount"
        placeholder="Amount"
        type="number"
        className="mb-2"
        step="0.01"
      />
      <Input name="date" type="date" className="mb-2" />
      <CardFooter className="px-0 pt-6">
        <Button type="submit" className="w-full text-base">
          Add Expense
        </Button>
      </CardFooter>
    </form>
  )
}
