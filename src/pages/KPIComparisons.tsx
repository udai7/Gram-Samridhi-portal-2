import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPIHeatMap } from "@/components/charts/KPIHeatMap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
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
import {
  comparisonData,
  districtVsTopPerformerData,
  districtVsStateData,
  kpiComparisonData,
} from "@/data/mockData";
import { CHART_COLORS } from "@/lib/chartColors";
import { useState, useMemo } from "react";

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

export default function KPIComparisons() {
  const [selectedKpi, setSelectedKpi] = useState("institutional_deliveries");
  // const [currentMonth, setCurrentMonth] = useState("may2025"); // No longer needed
  // const [previousMonth, setPreviousMonth] = useState("apr2025"); // No longer needed

  const chartData = useMemo(() => {
    const kpiData = kpiComparisonData[selectedKpi] || [];
    return kpiData.map((entry) => ({
      district: entry.district,
      currentValue: entry.value,
      previousValue: entry.value - entry.change, // Calculate previous value
      status: entry.status,
    }));
  }, [selectedKpi]);

  const getStatusColor = (value: number) => {
    if (value >= 80) {
      return "#22c55e"; // green-500
    } else if (value >= 50 && value < 80) {
      return "#eab308"; // yellow-500
    } else {
      return "#ef4444"; // red-500
    }
  };

  return (
    <DashboardLayout
      title="KPI Comparisons"
      description="Month-on-month district KPI comparison dashboard"
    >
      <div className="space-y-6">
        {/* Heat Map */}
        <KPIHeatMap />

        {/* KPI Comparison */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Current vs Previous Month Comparison</CardTitle>
                <CardDescription>
                  All Districts - Single KPI Performance
                </CardDescription>
              </div>
              <div className="flex gap-4">
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
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="district" axisLine={true} tickLine={true} />
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
                <Bar
                  dataKey="previousValue"
                  name="Previous Month"
                  radius={[4, 4, 0, 0]}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getStatusColor(entry.previousValue)}
                    />
                  ))}
                </Bar>
                <Bar
                  dataKey="currentValue"
                  name="Current Month"
                  radius={[4, 4, 0, 0]}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getStatusColor(entry.currentValue)}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* District vs Top Performer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>District vs. Top Performer Comparison</CardTitle>
              <CardDescription>Gomati vs. West (Top Performer)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={districtVsTopPerformerData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="kpi"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                  />
                  <YAxis axisLine={true} tickLine={true} />
                  <Tooltip />
                  <Bar dataKey="gomati" fill="#ff7979" name="Gomati" />
                  <Bar
                    dataKey="west"
                    fill="#00b894"
                    name="West (Top Performer)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>District vs. State Average Comparison</CardTitle>
              <CardDescription>Gomati vs. State Average</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={districtVsStateData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="kpi"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                  />
                  <YAxis axisLine={true} tickLine={true} />
                  <Tooltip />
                  <Bar dataKey="gomati" fill="#fdcb6e" name="Gomati" />
                  <Bar dataKey="state" fill="#74b9ff" name="State Average" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Month-over-Month Performance Summary</CardTitle>
            <CardDescription>
              Key insights from the comparison analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  Improved Districts
                </h4>
                <div className="space-y-1 text-sm text-green-700">
                  <div>West: +3 points</div>
                  <div>Gomati: +6 points</div>
                  <div>Khowai: +1 point</div>
                </div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">
                  Declined Districts
                </h4>
                <div className="space-y-1 text-sm text-red-700">
                  <div>North: -2 points</div>
                  <div>Dhalai: -5 points</div>
                  <div>South: -1 point</div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Key Insights
                </h4>
                <div className="space-y-1 text-sm text-blue-700">
                  <div>Gomati shows highest improvement</div>
                  <div>Dhalai needs urgent attention</div>
                  <div>West maintains top position</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
