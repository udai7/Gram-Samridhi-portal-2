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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { kpiBreakdownData } from "@/data/mockData";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function KPIBreakdownChart() {
  // Sort data by total score (highest to lowest)
  const sortedData = [...kpiBreakdownData].sort((a, b) => {
    const aTotal =
      a.agriculture + a.itInfra + a.education + a.health + a.ruralDev;
    const bTotal =
      b.agriculture + b.itInfra + b.education + b.health + b.ruralDev;
    return bTotal - aTotal;
  });

  // Extract district names and create rankings
  const districts = sortedData.map((item) => item.district);
  const rankings = districts.map((_, index) => `#${index + 1}`);

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
    responsive: false, // disables auto-resizing for perfect alignment
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
        ticks: { font: { size: 16 } },
        title: { display: false },
      },
    },
    layout: {
      padding: {
        right: 50, // some space for hashes
        left: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  // Custom plugin to draw hashes beside the end of each bar, perfectly aligned
  const rankingPlugin = {
    id: "rankingLabels",
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const yAxis = chart.scales.y;
      const xAxis = chart.scales.x;
      if (!ctx || !yAxis || !xAxis) return;

      // For each bar (row)
      chartData.labels.forEach((_, index) => {
        // Sum the values for this row across all datasets
        let totalValue = 0;
        chartData.datasets.forEach((ds) => {
          totalValue += ds.data[index] || 0;
        });

        // Get the y position for this bar
        const y = yAxis.getPixelForValue(index);

        // Get the x position at the end of the stacked bar
        const x = xAxis.getPixelForValue(totalValue);

        // Draw the ranking label
        ctx.save();
        ctx.fillStyle = "#222";
        ctx.font = "bold 14px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        // Add padding to the right of the bar
        ctx.fillText(rankings[index], x + 10, y);
        ctx.restore();
      });
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          District-wise Monthly KPI Scores for March with Rankings
        </CardTitle>
        <CardDescription>
          Comprehensive view of all districts across Agriculture, DWS,
          Education, Health, and RD departments
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Horizontally scrollable chart */}
        <div style={{ overflowX: "auto", width: "100%" }}>
          <div style={{ width: 1100, minWidth: 700, height: chartHeight }}>
            <Bar
              data={chartData}
              // @ts-ignore
              options={options}
              plugins={[rankingPlugin]}
              height={chartHeight}
              width={1100}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
