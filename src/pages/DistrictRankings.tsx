import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DistrictRankingChart } from "@/components/charts/DistrictRankingChart";
import { KPIBreakdownChart } from "@/components/charts/KPIBreakdownChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { districtRankingData } from "@/data/mockData";
import { getStatusColor } from "@/lib/chartColors";

export default function DistrictRankings() {
  const topPerformers = districtRankingData.slice(0, 3);
  const needsAttention = districtRankingData.filter((d) => d.status === "Low");

  return (
    <DashboardLayout
      title="District Rankings"
      description="Monthly district rankings and KPI scores across all departments"
    >
      <div className="space-y-6">
        {/* Top Performers Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Performers</CardTitle>
              <CardDescription>
                Districts with highest KPI scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPerformers.map((district, index) => (
                  <div
                    key={district.name}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">
                        #{district.rank}
                      </div>
                      <div>
                        <p className="font-medium">{district.name}</p>
                        <p className="text-sm text-gray-600">
                          {district.score}% Average Score
                        </p>
                      </div>
                    </div>
                    <Badge
                      style={{
                        backgroundColor: getStatusColor(district.status) + "20",
                        color: getStatusColor(district.status),
                        border: `1px solid ${getStatusColor(district.status)}40`,
                      }}
                    >
                      {district.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Needs Attention</CardTitle>
              <CardDescription>Districts requiring improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {needsAttention.map((district) => (
                  <div
                    key={district.name}
                    className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-800 rounded-full text-sm font-bold">
                        #{district.rank}
                      </div>
                      <div>
                        <p className="font-medium">{district.name}</p>
                        <p className="text-sm text-gray-600">
                          {district.score}% Average Score
                        </p>
                      </div>
                    </div>
                    <Badge variant="destructive">Action Required</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
          <DistrictRankingChart />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
          <KPIBreakdownChart />
        </div>

        {/* Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
            <CardDescription>
              Overview of district performance levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">3</div>
                <div className="text-sm text-green-700">
                  High Performance Districts
                </div>
                <div className="text-xs text-green-600 mt-1">
                  ≥80% KPI Score
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-sm text-yellow-700">
                  Medium Performance Districts
                </div>
                <div className="text-xs text-yellow-600 mt-1">
                  50-79% KPI Score
                </div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">2</div>
                <div className="text-sm text-red-700">
                  Low Performance Districts
                </div>
                <div className="text-xs text-red-600 mt-1">
                  &lt;50% KPI Score
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
