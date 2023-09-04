"use client"

import { useTheme } from "next-themes"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { currencyFormat } from "@/lib/utils"

const Donut = ({ income, loss }) => {
  const { theme } = useTheme()
  const data = [
    {
      type: "Profit",
      amount: income,
      color: "#22c55e",
    },
    {
      type: "Loss",
      amount: loss,
      color: "#fa491d",
    },
  ]
  return (
    <div className="py-4" style={{ width: "100%", height: 166 }}>
      <ResponsiveContainer>
        <PieChart>
          <text
            fill={theme === "light" ? "black" : "white"}
            x={"50%"}
            y={"50%"}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {currencyFormat(data[0].amount - data[1].amount)}
          </text>
          <Pie
            dataKey="amount"
            data={data}
            fill="#22c55e"
            innerRadius={"70%"}
            outerRadius={"100%"}
            blendStroke={false}
            stroke={theme === "light" ? "white" : "black"}
          >
            {data.map((dataPoint, index) => (
              <Cell key={index} fill={dataPoint.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Donut
