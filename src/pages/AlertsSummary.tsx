import React, { useState } from "react";
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
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPIHeatMap } from "@/components/charts/KPIHeatMap";
import { PieChartSummary } from "@/components/charts/PieChartSummary";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  alertsData,
  gainersDeclinersData,
  comparisonData,
  districtVsTopPerformerData,
  districtVsStateData,
} from "@/data/mockData";
import { CHART_COLORS } from "@/lib/chartColors";

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

const districts = [
  "All Districts",
  "West",
  "North",
  "Gomati",
  "Dhalai",
  "South",
  "Sepahijala",
  "Khowai",
  "Unakoti",
];

const months = [
  { value: "jan2025", label: "January 2025" },
  { value: "feb2025", label: "February 2025" },
  { value: "mar2025", label: "March 2025" },
  { value: "apr2025", label: "April 2025" },
  { value: "may2025", label: "May 2025" },
];

export function GainersDeclinersChart() {
  const [currentMonth, setCurrentMonth] = useState("may2025");
  const [previousMonth, setPreviousMonth] = useState("apr2025");

  // Calculate rank changes between selected months
  const calculateRankChanges = () => {
    const currentMonthData = comparisonData.map((district) => ({
      district: district.district,
      rank: district[currentMonth as keyof typeof district],
    }));

    const previousMonthData = comparisonData.map((district) => ({
      district: district.district,
      rank: district[previousMonth as keyof typeof district],
    }));

    // Sort by rank for both months
    currentMonthData.sort((a, b) => a.rank - b.rank);
    previousMonthData.sort((a, b) => a.rank - b.rank);

    // Calculate rank changes
    return currentMonthData
      .map((current) => {
        const previous = previousMonthData.find(
          (p) => p.district === current.district,
        );
        const previousRank = previousMonthData.indexOf(previous!);
        const currentRank = currentMonthData.indexOf(current);
        const change = previousRank - currentRank;

        return {
          district: current.district,
          change,
          type: change > 0 ? "Gainer" : change < 0 ? "Decliner" : "No Change",
        };
      })
      .sort((a, b) => b.change - a.change); // Sort by change in descending order
  };

  const rankChanges = calculateRankChanges();

  const chartData = {
    labels: rankChanges.map((item) => item.district),
    datasets: [
      {
        label: "Rank Change",
        data: rankChanges.map((item) => item.change),
        backgroundColor: rankChanges.map((item) =>
          item.change > 0 ? "#22c55e" : item.change < 0 ? "#ef4444" : "#d1d5db",
        ),
        borderRadius: 0,
        barPercentage: 1,
        categoryPercentage: 1,
        barThickness: 44,
        maxBarThickness: 60,
        minBarLength: 2,
      },
    ],
  };

  const minChange = Math.min(0, ...rankChanges.map((d) => d.change));
  const maxChange = Math.max(0, ...rankChanges.map((d) => d.change));

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) =>
            `Rank Change: ${context.parsed.x > 0 ? "+" : ""}${context.parsed.x}`,
        },
      },
      datalabels: {
        anchor: "end",
        align: (context) =>
          context.dataset.data[context.dataIndex] > 0 ? "right" : "left",
        color: (context) =>
          context.dataset.data[context.dataIndex] > 0
            ? "#22c55e"
            : context.dataset.data[context.dataIndex] < 0
              ? "#ef4444"
              : "#111827",
        font: { weight: "bold", size: 20 },
        formatter: (value) =>
          value > 0
            ? "\u25B2" + value // ▲
            : value < 0
              ? "\u25BC" + Math.abs(value) // ▼
              : "0",
        offset: 16,
        clip: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        min: minChange - 0.5,
        max: maxChange + 0.5,
        grid: {
          display: true,
          color: "#e5e7eb",
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
        title: {
          display: true,
          text: "Rank Change",
          font: { size: 16, weight: "bold" },
        },
        ticks: { stepSize: 1, font: { size: 14 } },
      },
      y: {
        grid: { display: false },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
        },
      },
    },
    layout: {
      padding: {
        left: 30,
        right: 60,
        top: 10,
        bottom: 10,
      },
    },
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
  };

  // Draw a bold zero line (vertical) using a plugin
  const zeroLinePlugin = {
    id: "zeroLine",
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const xAxis = chart.scales.x;
      const yAxis = chart.scales.y;
      if (!xAxis || !yAxis) return;
      const zeroX = xAxis.getPixelForValue(0);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(zeroX, yAxis.top);
      ctx.lineTo(zeroX, yAxis.bottom);
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#222";
      ctx.stroke();
      ctx.restore();
    },
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Top Gainers / Decliners (All Districts)</CardTitle>
            <CardDescription>
              District rank changes between selected months
            </CardDescription>
          </div>
          <div className="flex gap-4">
            <Select value={previousMonth} onValueChange={setPreviousMonth}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select previous month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={currentMonth} onValueChange={setCurrentMonth}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select current month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: "400px" }}>
          <Bar data={chartData} options={options} plugins={[zeroLinePlugin]} />
        </div>

        <div className="mt-4 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Gainers (↑)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Decliners (↓)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span>No Change</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AlertsSummary() {
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");

  const filteredAlerts =
    selectedDistrict === "All Districts"
      ? alertsData
      : alertsData.filter((alert) => alert.district === selectedDistrict);

  const criticalAlerts = filteredAlerts.filter((alert) => alert.value < 40);
  const warningAlerts = filteredAlerts.filter(
    (alert) => alert.value >= 40 && alert.value < alert.threshold,
  );

  // Prepare data for Chart.js Alert System Panel
  const alertChartData = {
    labels: filteredAlerts.map((item) => item.kpi),
    datasets: [
      {
        label: "Performance (%)",
        data: filteredAlerts.map((item) => item.value),
        backgroundColor: filteredAlerts.map((item) =>
          item.value < 40 ? "#dc2626" : "#eab308",
        ),
        borderColor: filteredAlerts.map((item) =>
          item.value < 40 ? "#dc2626" : "#eab308",
        ),
        borderWidth: 1,
      },
    ],
  };

  const alertChartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => context.label,
          label: (context) => `Performance: ${context.parsed.x}%`,
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
        formatter: (value) => `${value}%`,
        offset: 8,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Value (%)",
          font: {
            size: 12,
            weight: "bold",
          },
        },
        grid: {
          display: true,
          color: "#e0e0e0",
        },
        ticks: {
          stepSize: 20,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          maxRotation: 0,
        },
      },
    },
    layout: {
      padding: {
        right: 60, // Space for percentage labels
        left: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <DashboardLayout
      title="Alerts & Summary"
      description="Monitor underperforming KPIs and view performance summaries"
    >
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600">
                    Critical Alerts
                  </p>
                  <p className="text-2xl font-bold text-red-700">
                    {criticalAlerts.length}
                  </p>
                  <p className="text-xs text-red-600">Below 40% threshold</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-600">
                    Warning Alerts
                  </p>
                  <p className="text-2xl font-bold text-yellow-700">
                    {warningAlerts.length}
                  </p>
                  <p className="text-xs text-yellow-600">
                    Between 40-49% threshold
                  </p>
                </div>
                <TrendingDown className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">
                    Total KPIs Monitored
                  </p>
                  <p className="text-2xl font-bold text-green-700">
                    {filteredAlerts.length}
                  </p>
                  <p className="text-xs text-green-600">
                    {selectedDistrict === "All Districts"
                      ? "Across all districts"
                      : `In ${selectedDistrict} district`}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Alerts */}
        {criticalAlerts.length > 0 && (
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Critical Alert:</strong> {criticalAlerts.length} KPIs are
              performing below 40% threshold and require immediate attention.
            </AlertDescription>
          </Alert>
        )}

        {/* Alert System Panel with Chart.js */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  🚨 Alert System Panel – Underperforming KPIs by District
                  (Threshold &lt; 50%)
                </CardTitle>
                <CardDescription>
                  KPIs below 50% threshold requiring attention
                </CardDescription>
              </div>
              <Select
                value={selectedDistrict}
                onValueChange={setSelectedDistrict}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div style={{ width: "100%", height: "400px" }}>
              <Bar data={alertChartData} options={alertChartOptions} />
            </div>

            <div className="mt-4 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded"></div>
                <span>Critical (&lt;40%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span>Warning (40-49%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Gainers/Decliners - Chart.js implementation */}
        <GainersDeclinersChart />

        {/* Performance Summary Pie Chart */}
        <PieChartSummary />

        {/* Detailed Alert List */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Alert Information</CardTitle>
            <CardDescription>
              Complete list of underperforming KPIs requiring attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    alert.value < 40
                      ? "bg-red-50 border-red-200"
                      : "bg-yellow-50 border-yellow-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle
                      className={`h-5 w-5 ${
                        alert.value < 40 ? "text-red-600" : "text-yellow-600"
                      }`}
                    />
                    <div>
                      <p className="font-medium">{alert.kpi}</p>
                      <p className="text-sm text-gray-600">
                        {alert.district} District
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-lg font-bold ${
                          alert.value < 40 ? "text-red-700" : "text-yellow-700"
                        }`}
                      >
                        {alert.value}%
                      </span>
                      <Badge
                        variant={alert.value < 40 ? "destructive" : "secondary"}
                        className={
                          alert.value < 40
                            ? ""
                            : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {alert.value < 40 ? "Critical" : "Warning"}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">
                      Threshold: {alert.threshold}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
