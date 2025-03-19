"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChevronDown } from "lucide-react"

export default function App() {
  const [timeframe, setTimeframe] = useState("This Week")

  const data = [
    { id: "A", value: 100, type: "Chargeback Abuse", color: "#f0f4c3" },
    { id: "B", value: 85, type: "Transaction Reversal Fraud", color: "#f8bbd0" },
    { id: "C", value: 75, type: "Unauthorized Transactions", color: "#d1c4e9" },
    { id: "D", value: 65, type: "Card Testing Fraud", color: "#c5e1a5" },
    { id: "E", value: 50, type: "BNPL Loan Abuse", color: "#f44336" },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h1 className="text-3xl font-bold text-gray-800">Fraudulent Activity Breakdown</h1>
        <button className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700">
          {timeframe}
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
      <p className="text-gray-600 text-lg mb-8">Shows the distribution of fraud types within the system.</p>

      <div className="h-80 mb-8">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 25 }}
      barCategoryGap="0%"
    >
      <CartesianGrid 
        strokeDasharray="3 3" 
        verticalPoints={data.map((_, index) => (index * 89) + 100)} // Vertical lines between bars
        horizontal={true}
        vertical={true}

        horizontalPoints={[40, 60, 80, 100].map(v => (v * 5) + 10)} // Horizontal lines at Y values
        stroke="#e0e0e0"
      />
      <XAxis
        dataKey="id"
        axisLine={{ stroke: "#1565c0", strokeWidth: 2 }}
        tickLine={false}
        tick={{ dy: 10 }}
        padding={{ left: 0.5, right: 0.5 }} // Align with bar edges
        interval={0}
      />
      <YAxis
        type="number"
        domain={[40, 100]}
        axisLine={{ stroke: "#1565c0", strokeWidth: 2 }}
        tickLine={false}
        ticks={[40, 60, 80, 100]}
        width={40}
      />
      
      <Bar
        dataKey="value"
        radius={[10, 10, 0, 0]}
        isAnimationActive={false}
        fill={({ color }) => color}
        stroke="#1565c0"
        strokeWidth={2}
        barSize={100}
      >
      {data.map((entry, index) => (
          <Cell 
            key={`cell-${index}`}
            fill={entry.color}
          />
        ))}
     </Bar>  
     </BarChart>
  </ResponsiveContainer>
</div>

      <div className="grid grid-cols-2 gap-4">
  {data.map((item, index) => (
    <div key={index} className="w-full">
      <div className="flex items-center gap-2 w-full min-h-[40px] p-2">
        <div
          className="w-4 h-4 rounded-full shrink-0"
          style={{ backgroundColor: item.color, border: item.color === "#f44336" ? "none" : "1px solid #1565c0" }}
        />
        <span className="text-gray-700 break-words">{item.type}</span>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}
