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
import { useState } from "react";

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
  const availableMonths = ["January", "February", "March", "April", "May"];

  return (
    <DashboardLayout
      title="Dashboard"
      description="Overview of district performance and key metrics"
    >
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Districts
                  </p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    High Performers
                  </p>
                  <p className="text-2xl font-bold text-green-600">3</p>
                </div>
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Alerts
                  </p>
                  <p className="text-2xl font-bold text-red-600">8</p>
                </div>
                <div className="h-8 w-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Departments
                  </p>
                  <p className="text-2xl font-bold text-orange-600">6</p>
                </div>
                <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-orange-600" />
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
