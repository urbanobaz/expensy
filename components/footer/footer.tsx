import React from "react"

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <div className="mt-4 flex w-full flex-col justify-center self-center border-t py-8">
      <p className="self-center">&copy; {year} Expensy. All rights reserved.</p>
    </div>
  )
}
