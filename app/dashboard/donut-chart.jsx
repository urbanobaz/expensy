"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const Donut = ({ income, loss }) => {
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
          <Pie
            dataKey="amount"
            data={data}
            fill="#22c55e"
            innerRadius={"70%"}
            outerRadius={"100%"}
            blendStroke={false}
            stroke="black"
          >
            {data.map((dataPoint, index) => (
              <Cell key={index} fill={dataPoint.color} />
            ))}
            <p className="text-white">500</p>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Donut
