import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { performanceSummaryData } from "@/data/mockData";

export function PieChartSummary() {
  const renderCustomLabel = (entry: any) => {
    return `${entry.value}%`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Quick Visual Summary Of Overall Performance Movement
        </CardTitle>
        <CardDescription>(1 District - All KPIs)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={performanceSummaryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {performanceSummaryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-performance-high rounded"></div>
            <span className="text-sm font-medium text-performance-high">
              Green:
            </span>
            <span className="text-sm">KPIs that showed positive growth</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-performance-low rounded"></div>
            <span className="text-sm font-medium text-performance-low">
              Red:
            </span>
            <span className="text-sm">KPIs that dropped in performance</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
            <span className="text-sm font-medium text-gray-600">
              No Change:
            </span>
            <span className="text-sm">KPIs that remained constant</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
