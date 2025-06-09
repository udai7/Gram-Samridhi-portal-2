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
import { allDistrictsTrendData } from "@/data/mockData";

export function PerformanceTrendChart() {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>All District Performance Trendline (Jan-May 2025)</CardTitle>
        <CardDescription>
          Highlighting Best Consistent Performer - Rank tracking over time
          (Lower is Better)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={allDistrictsTrendData}
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
              formatter={(value, name) => [`Rank #${value}`, name]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            {Object.keys(districtColors).map((district) => (
              <Line
                key={district}
                type="monotone"
                dataKey={district}
                stroke={districtColors[district as keyof typeof districtColors]}
                strokeWidth={district === "Sepahijala" ? 4 : 2}
                dot={{ r: 4 }}
                name={district}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-4 grid grid-cols-4 gap-2 text-sm">
          {Object.entries(districtColors).map(([district, color]) => (
            <div key={district} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span
                className={district === "Sepahijala" ? "font-semibold" : ""}
              >
                {district}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-sm text-green-800">
            <strong>Sepahijala</strong> shows the best consistent performance
            improvement, moving from rank #3 to #1 over the 5-month period.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
