import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const districts = [
  "District 1",
  "District 2",
  "District 3",
  "District 4",
  "District 5",
];

const generateData = () => {
  return districts.map((district) => ({
    label: district,
    data: months.map(() => Math.floor(Math.random() * 40) + 60), // Random scores between 60-100
    borderColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
    tension: 0.4,
  }));
};

export function DistrictPerformanceTrendline() {
  const data = {
    labels: months,
    datasets: generateData(),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "All District Performance Trendline",
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
        <CardTitle>District Performance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
}
