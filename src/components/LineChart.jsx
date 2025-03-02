import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        padding: 20,
        generateLabels: (chart) => {
          return chart.data.datasets.map((dataset, i) => ({
            text: dataset.label,
            fillStyle: dataset.borderColor,
            strokeStyle: dataset.borderColor,
            lineWidth: dataset.pointBorderWidth || 2,
            hidden: !chart.isDatasetVisible(i),
            index: i,
            pointStyle: "circle",
          }));
        },
      },
    },
    tooltip: {
      backgroundColor: "#2d2d2d",
      titleColor: "#fff",
      bodyColor: "#fff",
      cornerRadius: 6,
      padding: 12,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#f0f0f0",
      },
      ticks: {
        color: "#6b7280",
        padding: 10,
        stepSize: 20,
        suggestedMin: 0,
        suggestedMax: 80,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "Dec 11",
  "Dec 12",
  "Dec 13",
  "Dec 14",
  "Dec 15",
  "Dec 16",
  "Dec 17",
];

const initialData = {
  labels,
  datasets: [
    {
      label: "Approvals",
      data: [20, 35, 25, 69, 35, 25, 15],
      borderColor: "#831AD3",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(221, 4, 23, 0.15)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        return gradient;
      },
      pointBorderColor: "#831AD3",
      pointBackgroundColor: "#831AD3",
      pointRadius: 2,
      pointHoverRadius: 7,
      fill: true,
      tension: 0.4,
    },
    {
      label: "Rejections",
      data: [30, 25, 35, 25, 35, 40, 49],
      borderColor: "#DD0417",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(114, 23, 184, 0.2)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        return gradient;
      },
      pointBorderColor: "#DD0417",
      pointBackgroundColor: "#DD0417",
      pointRadius: 1,
      pointHoverRadius: 7,
      fill: true,
      tension: 0.4,
    },
  ],
};

export const LineChart = () => {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    const handleResize = () => {
      setChartData({ ...initialData });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-80"> 
      <Line options={options} data={chartData} />
    </div>
  );
};
