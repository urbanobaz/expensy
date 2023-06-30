"use client"

import { createContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { getExpenseDataByUser } from "@/app/actions"

const InfoContext = createContext()

const InfoProvider = ({ children }) => {
  const [expenseArray, setExpenseArray] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const expense = await getExpenseDataByUser(session?.user?.email)
    console.log(expense)
  }
  return (
    <InfoContext.Provider value={[expenseArray, setExpenseArray]}>
      {children}
    </InfoContext.Provider>
  )
}

export { InfoProvider, InfoContext }
