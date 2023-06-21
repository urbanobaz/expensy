export const expense = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 1500) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 1500) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 1500) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 1500) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 1500) + 500,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 1500) + 500,
  },
  {
    name: "Jul",
    total: 0,
  },
  {
    name: "Aug",
    total: 0,
  },
  {
    name: "Sep",
    total: 0,
  },
  {
    name: "Oct",
    total: 0,
  },
  {
    name: "Nov",
    total: 0,
  },
  {
    name: "Dec",
    total: 0,
  },
]

let expenseTotal = 0

expense.forEach((dataPoint) => {
  expenseTotal += dataPoint.total
})

export { expenseTotal }
