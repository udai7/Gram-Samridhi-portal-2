import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PerformanceTrendChart } from "@/components/charts/PerformanceTrendChart";
import {
  LineChart,
  Line,
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
import { Badge } from "@/components/ui/badge";
import {
  trendData,
  gainersDeclinersData,
  allDistrictsTrendData,
} from "@/data/mockData";
import { useState } from "react";

const districtColors = {
  Dhalai: "#ef4444",
  North: "#3b82f6",
  South: "#8b5cf6",
  West: "#10b981",
  Khowai: "#f59e0b",
  Unakoti: "#06b6d4",
  Sepahijala: "#16a34a",
  Gomati: "#6366f1",
};

const districts = Object.keys(districtColors);

export default function PerformanceTrends() {
  const [selectedDistrict, setSelectedDistrict] = useState("Dhalai");
  const gainers = gainersDeclinersData.filter((d) => d.type === "Gainer");
  const decliners = gainersDeclinersData.filter((d) => d.type === "Decliner");

  // Filter trend data for selected district
  const selectedDistrictData = allDistrictsTrendData.map((monthData) => ({
    month: monthData.month,
    rank: monthData[selectedDistrict as keyof typeof monthData],
  }));

  return (
    <DashboardLayout
      title="Performance Trends"
      description="Track performance trends and identify consistent performers"
    >
      <div className="space-y-6">
        {/* Single District Trend */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  District Performance Trendline: {selectedDistrict} (Jan-May
                  2025)
                </CardTitle>
                <CardDescription>
                  Individual district rank progression over time
                </CardDescription>
              </div>
              <Select
                value={selectedDistrict}
                onValueChange={setSelectedDistrict}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a district" />
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
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={selectedDistrictData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" axisLine={true} tickLine={true} />
                <YAxis
                  domain={[1, 5]}
                  label={{
                    value: "Rank (Lower is Better)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  reversed={true}
                  axisLine={true}
                  tickLine={true}
                />
                <Tooltip
                  formatter={(value) => [`Rank #${value}`, "Position"]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Line
                  type="monotone"
                  dataKey="rank"
                  stroke={
                    districtColors[
                      selectedDistrict as keyof typeof districtColors
                    ]
                  }
                  strokeWidth={3}
                  dot={{
                    r: 6,
                    fill: districtColors[
                      selectedDistrict as keyof typeof districtColors
                    ],
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-800">
                <strong>Performance Analysis:</strong> {selectedDistrict}{" "}
                district's rank progression over the 5-month period.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* All Districts Trend */}
        <PerformanceTrendChart />

        {/* Top Gainers and Decliners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Gainers</CardTitle>
              <CardDescription>
                Districts showing rank improvement (Jan-May 2025)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {gainers.map((district, index) => (
                  <div
                    key={district.district}
                    className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                        #{index + 1}
                      </div>
                      <span className="font-medium">{district.district}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      +{Math.abs(district.change)} ranks
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Decliners</CardTitle>
              <CardDescription>
                Districts showing rank decline (Jan-May 2025)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {decliners.map((district, index) => (
                  <div
                    key={district.district}
                    className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-800 rounded-full text-sm font-bold">
                        #{index + 1}
                      </div>
                      <span className="font-medium">{district.district}</span>
                    </div>
                    <Badge variant="destructive">{district.change} ranks</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trend Analysis Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Trend Analysis Summary</CardTitle>
            <CardDescription>
              Key insights from the performance trend analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-sm text-blue-700">Months Analyzed</div>
                <div className="text-xs text-blue-600 mt-1">
                  Jan 2025 - May 2025
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">4</div>
                <div className="text-sm text-green-700">Districts Improved</div>
                <div className="text-xs text-green-600 mt-1">
                  Showing upward trend
                </div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">2</div>
                <div className="text-sm text-red-700">Districts Declined</div>
                <div className="text-xs text-red-600 mt-1">
                  Requiring attention
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Key Findings:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  • Sepahijala demonstrates the most consistent performance
                  improvement
                </li>
                <li>• Dhalai shows remarkable recovery from rank #4 to #1</li>
                <li>
                  • West maintains stable top-tier performance throughout the
                  period
                </li>
                <li>
                  • North shows some volatility but overall improvement trend
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
