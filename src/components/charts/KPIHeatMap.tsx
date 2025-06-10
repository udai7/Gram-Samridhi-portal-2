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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const months = [
  { value: "jan2025", label: "January 2025" },
  { value: "feb2025", label: "February 2025" },
  { value: "mar2025", label: "March 2025" },
  { value: "apr2025", label: "April 2025" },
  { value: "may2025", label: "May 2025" },
];

interface KPIHeatMapProps {
  showDropdowns?: boolean;
}

export function KPIHeatMap({ showDropdowns = true }: KPIHeatMapProps) {
  const [currentMonth, setCurrentMonth] = useState("may2025");
  const [previousMonth, setPreviousMonth] = useState("apr2025");

  // Calculate change between selected months
  const updatedData = comparisonData.map((row) => ({
    ...row,
    currentValue: row[currentMonth as keyof typeof row] as number,
    previousValue: row[previousMonth as keyof typeof row] as number,
    change:
      (row[currentMonth as keyof typeof row] as number) -
      (row[previousMonth as keyof typeof row] as number),
  }));

  // Get month labels for display
  const getMonthLabel = (monthValue: string) => {
    const month = months.find((m) => m.value === monthValue);
    return month ? month.label : monthValue;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>
              Current vs Previous Month Comparison Panel – Heat Map
            </CardTitle>
            <CardDescription>All Districts - All KPIs</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">District</th>
                <th className="text-center p-3 font-medium">
                  <Select value={currentMonth} onValueChange={setCurrentMonth}>
                    <SelectTrigger className="h-8 bg-white border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-blue-500/20">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      {months.map((month) => (
                        <SelectItem
                          key={month.value}
                          value={month.value}
                          className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                        >
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </th>
                <th className="text-center p-3 font-medium">
                  <Select
                    value={previousMonth}
                    onValueChange={setPreviousMonth}
                  >
                    <SelectTrigger className="h-8 bg-white border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-blue-500/20">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      {months.map((month) => (
                        <SelectItem
                          key={month.value}
                          value={month.value}
                          className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                        >
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </th>
                <th className="text-center p-3 font-medium">Change</th>
                <th className="text-center p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {updatedData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{row.district}</td>
                  <td className="text-center p-3">{row.currentValue}</td>
                  <td className="text-center p-3">{row.previousValue}</td>
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
