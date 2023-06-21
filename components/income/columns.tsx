"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Income = {
  id: string
  amount: string
  type: string
  clientName: string
}

export const columns: ColumnDef<Income>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "clientName",
    header: "Client",
  },

  {
    accessorKey: "amount",
    header: "Amount",
  },
]
