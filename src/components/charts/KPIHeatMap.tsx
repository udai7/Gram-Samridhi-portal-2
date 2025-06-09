import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { comparisonData } from "@/data/mockData";
import { getStatusColor } from "@/lib/chartColors";

export function KPIHeatMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Current vs Previous Month Comparison Panel – Heat Map
        </CardTitle>
        <CardDescription>All Districts - All KPIs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">District</th>
                <th className="text-center p-3 font-medium">May 2025 (%)</th>
                <th className="text-center p-3 font-medium">April 2025 (%)</th>
                <th className="text-center p-3 font-medium">Change</th>
                <th className="text-center p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{row.district}</td>
                  <td className="text-center p-3">{row.may2025}</td>
                  <td className="text-center p-3">{row.april2025}</td>
                  <td className="text-center p-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium ${
                        row.change > 0
                          ? "bg-green-100 text-green-800"
                          : row.change < 0
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {row.change > 0 ? "+" : ""}
                      {row.change}
                    </span>
                  </td>
                  <td className="text-center p-3">
                    <Badge
                      style={{
                        backgroundColor: getStatusColor(row.status) + "20",
                        color: getStatusColor(row.status),
                        border: `1px solid ${getStatusColor(row.status)}40`,
                      }}
                    >
                      {row.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
