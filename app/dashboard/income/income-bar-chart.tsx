"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type BarChartInfo = {
  name: string
  total: number
}

interface IncomeBarChartProps {
  data: BarChartInfo[]
  classNames?: string
}

export function IncomeBarChart({ data, classNames }: IncomeBarChartProps) {
  return (
    <ResponsiveContainer className={classNames} width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={true}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#22c55e" radius={[10, 10, 10, 10]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
