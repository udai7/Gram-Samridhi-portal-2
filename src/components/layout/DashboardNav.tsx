import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Users,
  AlertTriangle,
  LayoutDashboard,
  Building2,
} from "lucide-react";

const navItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "District Rankings",
    href: "/dashboard/rankings",
    icon: BarChart3,
  },
  {
    title: "KPI Comparisons",
    href: "/dashboard/comparisons",
    icon: Users,
  },
  {
    title: "Performance Trends",
    href: "/dashboard/trends",
    icon: TrendingUp,
  },
  {
    title: "Department Analysis",
    href: "/dashboard/departments",
    icon: Building2,
  },
  {
    title: "Alerts & Summary",
    href: "/dashboard/alerts",
    icon: AlertTriangle,
  },
];

export function DashboardNav() {
  const location = useLocation();

  return (
    <nav className="flex flex-col gap-2 p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gov-primary">
          Gram Samridhi Portal
        </h1>
        <p className="text-sm text-muted-foreground">
          District Performance Monitoring System
        </p>
      </div>

      {navItems.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Button
            key={item.href}
            asChild
            variant={isActive ? "default" : "ghost"}
            className={cn(
              "justify-start gap-3 h-11",
              isActive && "bg-gov-primary text-white hover:bg-gov-secondary",
            )}
          >
            <Link to={item.href}>
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
