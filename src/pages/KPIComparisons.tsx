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
} from "@/data/mockData";
import { CHART_COLORS } from "@/lib/chartColors";
import { useState } from "react";

const months = [
  { value: "jan2025", label: "January 2025" },
  { value: "feb2025", label: "February 2025" },
  { value: "mar2025", label: "March 2025" },
  { value: "apr2025", label: "April 2025" },
  { value: "may2025", label: "May 2025" },
];

export default function KPIComparisons() {
  const [currentMonth, setCurrentMonth] = useState("may2025");
  const [previousMonth, setPreviousMonth] = useState("apr2025");

  return (
    <DashboardLayout
      title="KPI Comparisons"
      description="Month-on-month district KPI comparison dashboard"
    >
      <div className="space-y-6">
        {/* Heat Map */}
        <KPIHeatMap />

        {/* Institutional Deliveries Comparison */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  Current vs Previous Month Comparison - Institutional
                  Deliveries
                </CardTitle>
                <CardDescription>
                  All Districts - Single KPI Performance
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
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={comparisonData}
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
                  dataKey={previousMonth}
                  fill={CHART_COLORS.charts.trends.previous}
                  name="Previous Month"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey={currentMonth}
                  fill={CHART_COLORS.charts.trends.current}
                  name="Current Month"
                  radius={[4, 4, 0, 0]}
                />
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
