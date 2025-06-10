import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const departments = [
  "Education",
  "Health",
  "Agriculture",
  "Infrastructure",
  "Social Welfare",
  "Rural Development",
];

const generateData = () => {
  return departments.map((dept) => ({
    current: Math.floor(Math.random() * 40) + 60,
    previous: Math.floor(Math.random() * 40) + 60,
  }));
};

export function DepartmentComparisonPanel() {
  const performanceData = generateData();

  const data = {
    labels: departments,
    datasets: [
      {
        label: "Current Month",
        data: performanceData.map((d) => d.current),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Previous Month",
        data: performanceData.map((d) => d.previous),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Department Performance Comparison",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Performance Score",
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Performance Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
