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

const districts = [
  "District 1",
  "District 2",
  "District 3",
  "District 4",
  "District 5",
];
const kpis = ["Education", "Health", "Agriculture", "Infrastructure"];

const generateData = () => {
  return districts.map((district) => ({
    district,
    kpis: kpis.map(() => Math.floor(Math.random() * 50)), // Random scores between 0-50
  }));
};

export function AlertSystemPanel() {
  const performanceData = generateData();

  const data = {
    labels: districts,
    datasets: kpis.map((kpi, index) => ({
      label: kpi,
      data: performanceData.map((d) => d.kpis[index]),
      backgroundColor: `hsla(${index * 90}, 70%, 50%, 0.5)`,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Underperforming KPIs by District (Threshold < 50%)",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 50,
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
        <CardTitle>Underperforming KPIs Alert</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
