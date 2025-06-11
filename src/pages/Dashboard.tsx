import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  Users,
  AlertTriangle,
  Building2,
  ArrowRight,
} from "lucide-react";
import { DistrictRankingChart } from "@/components/charts/DistrictRankingChart";
import { KPIHeatMap } from "@/components/charts/KPIHeatMap";
import { PerformanceTrendChart } from "@/components/charts/PerformanceTrendChart";
import { useState } from "react";
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
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { alertsData, kpiComparisonData } from "@/data/mockData";
import {
  BarChart as RechartsBarChart,
  Bar as RechartsBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
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

const kpis = [
  { value: "tax_collection", label: "Tax Collection" },
  { value: "wages_paid", label: "Wages Paid" },
  { value: "awc_enrolment", label: "AWC Enrolment" },
  { value: "pmjay_cards", label: "PM-JAY Cards" },
  { value: "child_immunization", label: "Child Immunization" },
  { value: "institutional_deliveries", label: "Institutional Deliveries" },
  { value: "skill_coverage", label: "Skill Coverage" },
  { value: "income_ag", label: "Income - Ag" },
  { value: "pmgsy_construction", label: "PMGSY Construction" },
  { value: "pm_kisan", label: "PM-Kisan" },
  { value: "soil_health_cards", label: "Soil Health Cards" },
  { value: "kcc_access", label: "KCC Access" },
];

const dashboardSections = [
  {
    title: "District Rankings",
    description:
      "View monthly district rankings and KPI scores across all departments",
    icon: BarChart3,
    href: "/dashboard/rankings",
    stats: "8 Districts Ranked",
    color: "bg-blue-500",
  },
  {
    title: "KPI Comparisons",
    description: "Compare current vs previous month performance with heat maps",
    icon: Users,
    href: "/dashboard/comparisons",
    stats: "Month-over-Month Analysis",
    color: "bg-green-500",
  },
  {
    title: "Performance Trends",
    description: "Track performance trends and identify consistent performers",
    icon: TrendingUp,
    href: "/dashboard/trends",
    stats: "5-Month Trendline",
    color: "bg-purple-500",
  },
  {
    title: "Department Analysis",
    description: "Analyze department-wise KPI performance and comparisons",
    icon: Building2,
    href: "/dashboard/departments",
    stats: "6 Departments Tracked",
    color: "bg-orange-500",
  },
  {
    title: "Alerts & Summary",
    description: "Monitor underperforming KPIs and view performance summaries",
    icon: AlertTriangle,
    href: "/dashboard/alerts",
    stats: "8 Active Alerts",
    color: "bg-red-500",
  },
];

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [selectedKpi, setSelectedKpi] = useState("institutional_deliveries");
  const availableMonths = ["January", "February", "March", "April", "May"];

  // Get the current KPI data
  const currentKpiData = kpiComparisonData[selectedKpi] || [];

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
        right: 60,
        left: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <DashboardLayout
      title="Dashboard"
      description="Overview of district performance and key metrics"
    >
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 bg-sky-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Total Districts
                  </p>
                  <p className="text-2xl font-bold text-white">8</p>
                </div>
                <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 bg-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    High Performers
                  </p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 bg-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Active Alerts
                  </p>
                  <p className="text-2xl font-bold text-white">8</p>
                </div>
                <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 bg-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Departments</p>
                  <p className="text-2xl font-bold text-white">6</p>
                </div>
                <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <DistrictRankingChart
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            availableMonths={availableMonths}
          />
          <KPIHeatMap showDropdowns={false} />
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>All District Performance Trendline</CardTitle>
              <CardDescription>
                Highlighting Best Consistent Performer - Rank tracking over time
                (Lower is Better)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceTrendChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle>Current Month KPI</CardTitle>
                  <CardDescription>
                    District-wise Performance Analysis
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <Select value={selectedKpi} onValueChange={setSelectedKpi}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select KPI" />
                    </SelectTrigger>
                    <SelectContent>
                      {kpis.map((kpi) => (
                        <SelectItem key={kpi.value} value={kpi.value}>
                          {kpi.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RechartsBarChart
                  data={currentKpiData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="district"
                    axisLine={true}
                    tickLine={true}
                    tick={{ fontSize: 10 }}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    label={{
                      value: "Value (%)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    axisLine={true}
                    tickLine={true}
                  />
                  <Tooltip />
                  <RechartsBar
                    dataKey="value"
                    name="Current Value"
                    radius={[4, 4, 0, 0]}
                  >
                    {currentKpiData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.status === "High"
                            ? "#22c55e"
                            : entry.status === "Medium"
                              ? "#eab308"
                              : "#ef4444"
                        }
                      />
                    ))}
                  </RechartsBar>
                </RechartsBarChart>
              </ResponsiveContainer>

              <div className="mt-4 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-performance-high rounded"></div>
                  <span>High (≥80%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-performance-medium rounded"></div>
                  <span>Medium (50-79%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-performance-low rounded"></div>
                  <span>Low (&lt;50%)</span>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <div className="border border-green-300 rounded-lg bg-green-50 p-4">
                <div className="text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">
                      North Tripura
                    </span>{" "}
                    has shown significant improvement in institutional
                    deliveries and child immunization rates, while{" "}
                    <span className="font-medium text-foreground">Dhalai</span>{" "}
                    leads in PM-JAY card distribution and soil health card
                    coverage.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Alert System Panel */}
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

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {dashboardSections.map((section) => (
            <Card key={section.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={`h-10 w-10 ${section.color} rounded-lg flex items-center justify-center`}
                  >
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <CardDescription>{section.stats}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4">
                  {section.description}
                </p>
                <Button
                  asChild
                  variant="default"
                  className="bg-gray-900 hover:bg-gray-800 text-white whitespace-nowrap w-full"
                >
                  <Link to={section.href}>
                    View {section.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
