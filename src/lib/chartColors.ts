export const CHART_COLORS = {
  // Performance colors based on KPI thresholds
  performance: {
    high: "#16a34a", // Green for ≥80%
    medium: "#eab308", // Yellow for 50-79%
    low: "#dc2626", // Red for <50%
    neutral: "#6b7280", // Gray for neutral
  },

  // Department colors
  departments: {
    agriculture: "#16a34a",
    education: "#f59e0b",
    health: "#ef4444",
    ruralDev: "#8b5cf6",
    itInfra: "#06b6d4",
  },

  // Government brand colors
  government: {
    primary: "#1e40af",
    secondary: "#075985",
    accent: "#f59e0b",
    success: "#059669",
    warning: "#d97706",
    danger: "#dc2626",
  },

  // Chart specific colors
  charts: {
    bars: ["#1e40af", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"],
    trends: {
      current: "#1e40af",
      previous: "#94a3b8",
      target: "#059669",
    },
  },
};

export const getPerformanceColor = (value: number): string => {
  if (value >= 80) return CHART_COLORS.performance.high;
  if (value >= 50) return CHART_COLORS.performance.medium;
  return CHART_COLORS.performance.low;
};

export const getStatusColor = (status: "High" | "Medium" | "Low"): string => {
  switch (status) {
    case "High":
      return CHART_COLORS.performance.high;
    case "Medium":
      return CHART_COLORS.performance.medium;
    case "Low":
      return CHART_COLORS.performance.low;
    default:
      return CHART_COLORS.performance.neutral;
  }
};

export const getDepartmentColor = (department: string): string => {
  const normalized = department.toLowerCase().replace(/[^a-z]/g, "");

  if (normalized.includes("agriculture") || normalized.includes("rural")) {
    return CHART_COLORS.departments.agriculture;
  }
  if (normalized.includes("education")) {
    return CHART_COLORS.departments.education;
  }
  if (normalized.includes("health")) {
    return CHART_COLORS.departments.health;
  }
  if (normalized.includes("social") || normalized.includes("welfare")) {
    return CHART_COLORS.departments.ruralDev;
  }
  if (normalized.includes("it") || normalized.includes("infra")) {
    return CHART_COLORS.departments.itInfra;
  }

  return CHART_COLORS.performance.neutral;
};
