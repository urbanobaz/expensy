/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client"

import React, { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { MoreVerticalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function DataTable({ columns, data, deleteIncome }) {
  const [sorting, setSorting] = useState([])
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell className="w-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVerticalIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2 rounded-sm border-[0.5px] border-slate-800 border-opacity-30 bg-white p-2 dark:border-white dark:border-opacity-20 dark:bg-slate-900">
                      <DropdownMenuItem>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            console.log("Edit")
                          }}
                        >
                          Edit
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const rowID = parseInt(row.id)
                            const selected = data[rowID]
                            deleteIncome(parseInt(selected.id))
                          }}
                        >
                          Delete
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
