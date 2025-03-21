"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const SalesByCategory = () => {
  const [timeframe, setTimeframe] = useState("This Month")

  // Sales data
  const salesData = [
    { name: "Electronics", value: 50, color: "#FF928A" },
    { name: "Fashion", value: 30, color: "#537FF1" },
    { name: "Home Appliances", value: 15, color: "#8979FF" },
    { name: "Shoes", value: 5, color: "#FA1024" },
    { name: "Accessories", value: 5, color: "#7217B8" },
    { name: "Jewelries", value: 5, color: "#FFAE4C" },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      )
    }
    return null
  }

  // Custom rendering for the pie chart with labels
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value }) => {
    const RADIAN = Math.PI / 180
    // Position the label in the middle of the segment
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={value < 10 ? 10 : 12}
        fontWeight="bold"
      >
        {`${value}%`}
      </text>
    )
  }

  return (
    <div className="w-[45%] mx-auto bg-gray-50 rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Sales by Product Category</h2>
          <p className="text-gray-600 text-sm">Breaks down sales by category</p>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-gray-700"
            onClick={() => {
              /* Toggle dropdown logic */
            }}
          >
            <span className="text-sm font-medium">This Month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        {/* Donut Chart */}
        <div className="w-[300px] h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={23}
                outerRadius={70}
                paddingAngle={0}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-6 md:mt-0 md:ml-8 space-y-3 w-full max-w-xs">
          {salesData.map((item) => (
            <div key={item.name} className="flex items-center justify-between mt-8">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="ml-2 text-gray-700">{item.name}</span>
              </div>
              <span className="font-medium text-gray-800">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SalesByCategory

