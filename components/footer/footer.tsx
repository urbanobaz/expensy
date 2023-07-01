import React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <div className="mt-4 flex w-full flex-col justify-center self-center border-t py-8">
      <div className="flex flex-col justify-center pb-4">
        <Link
          href="/dashboard"
          className="flex items-center self-center px-2 text-sm"
        >
          <ChevronRight />
          Dashboard
          <ChevronLeft />
        </Link>
        <Link
          href="/add-income"
          className="flex items-center self-center px-2 text-sm"
        >
          <ChevronRight />
          Add Income
          <ChevronLeft />
        </Link>
        <Link
          href="/add-expense"
          className="flex items-center self-center px-2 text-sm"
        >
          <ChevronRight />
          Add Expense
          <ChevronLeft />
        </Link>
      </div>
      <p className="self-center">&copy; {year} Expensy. All rights reserved.</p>
    </div>
  )
}
