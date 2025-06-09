import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export function DistrictRankingChart() {
  // Data from your chart
  const districts = [
    "South",
    "North",
    "Khowai",
    "Unakoti",
    "Gomati",
    "West",
    "Dhalai",
    "Sepahijala",
  ];
  const scores = [90.0, 85.0, 82.0, 77.0, 68.0, 60.0, 49.0, 45.0];

  // Function to determine color based on score
  const getBarColor = (score) => {
    if (score >= 80) return "#4CAF50"; // Green for High
    if (score >= 50) return "#FFC107"; // Yellow for Medium
    return "#F44336"; // Red for Low
  };

  const data = {
    labels: districts,
    datasets: [
      {
        label: "Average KPI Score (%)",
        data: scores,
        backgroundColor: scores.map((score) => getBarColor(score)),
        borderColor: scores.map((score) => getBarColor(score)),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // This makes it horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false, // Disabled since we're using Card title
      },
      legend: {
        display: false, // Disabled since we're using custom legend below
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.x.toFixed(1)}%`,
        },
      },
      datalabels: {
        anchor: "end",
        align: "right",
        color: "black",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => `${value.toFixed(1)}%`,
        offset: 4,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Average KPI Score (%)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
        grid: {
          display: true,
          color: "#e0e0e0",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
    layout: {
      padding: {
        right: 50, // Extra space for labels
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>District Monthly Ranking Panel - March</CardTitle>
        <CardDescription>
          Ranks all 8 districts based on their average KPI scores across all
          departments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: "400px" }}>
          {/* @ts-ignore */}
          <Bar data={data} options={options} />
        </div>

        <div className="mt-4 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: "#4CAF50" }}
            ></div>
            <span>High (≥80%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: "#FFC107" }}
            ></div>
            <span>Medium (50-79%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: "#F44336" }}
            ></div>
            <span>Low (&lt;50%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
