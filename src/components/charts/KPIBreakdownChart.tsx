import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { monthlyKpiBreakdownData } from "@/data/mockData";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export function KPIBreakdownChart({
  selectedMonth,
  setSelectedMonth,
  availableMonths,
}: {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  availableMonths: string[];
}) {
  const currentMonthData = monthlyKpiBreakdownData.find(
    (data) => data.month === selectedMonth,
  );

  // Sort data by total score (highest to lowest)
  const sortedData = currentMonthData
    ? [...currentMonthData.data].sort((a, b) => {
        const aTotal =
          a.agriculture + a.itInfra + a.education + a.health + a.ruralDev;
        const bTotal =
          b.agriculture + b.itInfra + b.education + b.health + b.ruralDev;
        return bTotal - aTotal;
      })
    : [];

  // Extract district names
  const districts = sortedData.map((item) => item.district);

  // Prepare data for Chart.js
  const chartData = {
    labels: districts,
    datasets: [
      {
        label: "Agriculture",
        data: sortedData.map((item) => item.agriculture || 0),
        backgroundColor: "#22c55e",
        stack: "stack1",
      },
      {
        label: "DWS",
        data: sortedData.map((item) => item.itInfra || 0),
        backgroundColor: "#60a5fa",
        stack: "stack1",
      },
      {
        label: "Education",
        data: sortedData.map((item) => item.education || 0),
        backgroundColor: "#fbbf24",
        stack: "stack1",
      },
      {
        label: "Health",
        data: sortedData.map((item) => item.health || 0),
        backgroundColor: "#ef4444",
        stack: "stack1",
      },
      {
        label: "RD",
        data: sortedData.map((item) => item.ruralDev || 0),
        backgroundColor: "#a78bfa",
        stack: "stack1",
      },
    ],
  };

  const chartHeight = 500;

  const options = {
    indexAxis: "y",
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          padding: 16,
          font: { size: 16 },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (context) => `District: ${context[0].label}`,
          label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
        },
      },
      datalabels: {
        display: true,
        color: "#222",
        anchor: "end",
        align: "right",
        offset: 10,
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value, context) => {
          // Only show total for the last dataset in the stack
          if (context.datasetIndex === chartData.datasets.length - 1) {
            const total = chartData.datasets.reduce((sum, dataset) => {
              return sum + (dataset.data[context.dataIndex] || 0);
            }, 0);
            return `${total.toFixed(1)}%`;
          }
          return "";
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 400,
        title: {
          display: true,
          text: "Total KPI Score (%)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          display: true,
          color: "#e0e0e0",
        },
        ticks: {
          stepSize: 50,
          font: { size: 14 },
        },
      },
      y: {
        stacked: true,
        grid: { display: false },
        ticks: {
          font: { size: 16 },
          callback: (value, index) => districts[index], // Show district names
        },
        title: { display: false },
      },
    },
    layout: {
      padding: {
        right: 50,
        left: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>
              District-wise Monthly KPI Scores for {selectedMonth}
            </CardTitle>
            <CardDescription>
              Comprehensive view of all districts across Agriculture, DWS,
              Education, Health, and RD departments
            </CardDescription>
          </div>
          <div className="w-[200px]">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="h-9 bg-white border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-blue-500/20">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                {availableMonths.map((month) => (
                  <SelectItem
                    key={month}
                    value={month}
                    className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                  >
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Horizontally scrollable chart */}
        <div style={{ overflowX: "auto", width: "100%" }}>
          <div style={{ width: 1100, minWidth: 700, height: chartHeight }}>
            <Bar
              data={chartData}
              // @ts-ignore
              options={options}
              plugins={[ChartDataLabels]}
              height={chartHeight}
              width={1100}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
