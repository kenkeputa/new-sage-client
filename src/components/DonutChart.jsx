import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ["In Stock", "Low Stock", "Out of Stock"],
  datasets: [
    {
      data: [195, 130, 325], // adjust the numbers as needed
      // Order: In Stock (purple), Low Stock (yellow), Out of Stock (red)
      backgroundColor: ["#f8c800","#fa1024","#7217b8",  ],
      borderWidth:  0,
    },
  ],
}

const options = {
  cutout: "85%",
  plugins: {
    // Hide the built-in legend since we'll create our own
    legend: {
      display: false,
    },
    tooltip: {
      // Enable or disable as you prefer
      enabled: true,
    },
  },
}

export function DonutChart() {
  return (
    <div className="w-64 p-4 h-full">
  
      {/* Donut Chart Container */}
      <div className="relative w-full flex items-center justify-center">
        <Doughnut data={data} options={options} />
        {/* Center Text (Total) */}
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-bold text-gray-900">650</span>
          <span className="text-sm text-gray-600">Total Inventory</span>
        </div>
      </div>

      {/* Custom Legend */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: "#7217b8" }}
          ></span>
          <span className="text-gray-700">In Stock</span>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: "#f8c800" }}
          ></span>
          <span className="text-gray-700">Low Stock</span>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: "#fa1024" }}
          ></span>
          <span className="text-gray-700">Out of Stock</span>
        </div>
      </div>
    </div>
  )
}

