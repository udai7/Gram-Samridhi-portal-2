import { DashboardLayout } from "@/components/layout/DashboardLayout";
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
import { Badge } from "@/components/ui/badge";
import { departmentData, kpiDetailData } from "@/data/mockData";
import {
  CHART_COLORS,
  getDepartmentColor,
  getStatusColor,
} from "@/lib/chartColors";

export default function DepartmentAnalysis() {
  const topDepartments = departmentData.filter((d) => d.status === "High");
  const needsAttention = departmentData.filter((d) => d.status === "Low");

  return (
    <DashboardLayout
      title="Department Analysis"
      description="Analyze department-wise KPI performance and comparisons"
    >
      <div className="space-y-6">
        {/* Department Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Top Performing Departments
              </CardTitle>
              <CardDescription>
                Departments with high performance scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topDepartments.map((dept) => (
                  <div
                    key={dept.department}
                    className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{dept.department}</p>
                      <p className="text-sm text-gray-600">
                        Current: {dept.current}%, Previous: {dept.previous}%
                      </p>
                    </div>
                    <Badge
                      style={{
                        backgroundColor: getStatusColor(dept.status) + "20",
                        color: getStatusColor(dept.status),
                        border: `1px solid ${getStatusColor(dept.status)}40`,
                      }}
                    >
                      {dept.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Departments Needing Attention
              </CardTitle>
              <CardDescription>
                Departments requiring improvement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {needsAttention.map((dept) => (
                  <div
                    key={dept.department}
                    className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{dept.department}</p>
                      <p className="text-sm text-gray-600">
                        Current: {dept.current}%, Previous: {dept.previous}%
                      </p>
                    </div>
                    <Badge variant="destructive">Action Required</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Comparison Chart */}
        <Card>
          <CardHeader>
            <CardTitle>
              Current vs. Previous Month Department Comparison Panel
            </CardTitle>
            <CardDescription>
              (1 District - All KPIs - All Departments)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={departmentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" axisLine={true} tickLine={true} />
                <YAxis
                  label={{
                    value: "Average KPI Value (%)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  axisLine={true}
                  tickLine={true}
                />
                <Tooltip />
                <Bar
                  dataKey="previous"
                  fill={CHART_COLORS.charts.trends.previous}
                  name="Previous Month"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="current"
                  fill={CHART_COLORS.charts.trends.current}
                  name="Current Month"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
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
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded"></div>
                <span>Previous Month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed KPI Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>
              Current vs. Previous Month KPI Value Comparison Panel
            </CardTitle>
            <CardDescription>
              (1 District - All KPIs) - Detailed breakdown of individual KPI
              performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={500}>
                  <BarChart
                    data={kpiDetailData.slice(0, 12)}
                    margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="kpi"
                      angle={-45}
                      textAnchor="end"
                      height={120}
                      fontSize={10}
                    />
                    <YAxis axisLine={true} tickLine={true} />
                    <Tooltip />
                    <Bar
                      dataKey="high"
                      fill={CHART_COLORS.performance.high}
                      name="High (≥80%)"
                    />
                    <Bar
                      dataKey="medium"
                      fill={CHART_COLORS.performance.medium}
                      name="Medium (50-79%)"
                    />
                    <Bar
                      dataKey="low"
                      fill={CHART_COLORS.performance.low}
                      name="Low (<50%)"
                    />
                    <Bar
                      dataKey="previous"
                      fill="#94a3b8"
                      name="Previous Month"
                    />
                    <Bar
                      dataKey="current"
                      fill="#1e40af"
                      name="Current Month"
                    />
                  </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={500}>
                  <BarChart
                    data={kpiDetailData.slice(12)}
                    margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="kpi"
                      angle={-45}
                      textAnchor="end"
                      height={120}
                      fontSize={10}
                    />
                    <YAxis axisLine={true} tickLine={true} />
                    <Tooltip />
                    <Bar
                      dataKey="high"
                      fill={CHART_COLORS.performance.high}
                      name="High (≥80%)"
                    />
                    <Bar
                      dataKey="medium"
                      fill={CHART_COLORS.performance.medium}
                      name="Medium (50-79%)"
                    />
                    <Bar
                      dataKey="low"
                      fill={CHART_COLORS.performance.low}
                      name="Low (<50%)"
                    />
                    <Bar
                      dataKey="previous"
                      fill="#94a3b8"
                      name="Previous Month"
                    />
                    <Bar
                      dataKey="current"
                      fill="#1e40af"
                      name="Current Month"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Department Performance Summary</CardTitle>
            <CardDescription>
              Key insights from department analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  Best Performers
                </h4>
                <div className="space-y-1 text-sm text-green-700">
                  <div>Rural Development: 85%</div>
                  <div>Agriculture: 90%</div>
                  <div>Strong improvement trends</div>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Moderate Performance
                </h4>
                <div className="space-y-1 text-sm text-yellow-700">
                  <div>Health: 75%</div>
                  <div>Education: 65%</div>
                  <div>Steady but needs focus</div>
                </div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">
                  Needs Immediate Action
                </h4>
                <div className="space-y-1 text-sm text-red-700">
                  <div>Social Welfare: 45%</div>
                  <div>IT & Infrastructure: 35%</div>
                  <div>Declining performance</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
