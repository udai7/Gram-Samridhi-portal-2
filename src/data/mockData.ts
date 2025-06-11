export interface District {
  name: string;
  score: number;
  rank: number;
  status: "High" | "Medium" | "Low";
}

export interface KPIData {
  district: string;
  agriculture: number;
  education: number;
  health: number;
  ruralDev: number;
  itInfra: number;
}

export interface KPIDistrictData {
  district: string;
  value: number;
  change: number;
  status: "High" | "Medium" | "Low";
}

export interface KPIDataMap {
  [key: string]: KPIDistrictData[];
}

export interface TrendData {
  month: string;
  rank: number;
  district: string;
}

export interface ComparisonData {
  district: string;
  jan2025: number;
  feb2025: number;
  mar2025: number;
  apr2025: number;
  may2025: number;
  change: number;
  status: "High" | "Medium" | "Low";
}

export interface DepartmentData {
  department: string;
  jan2025: number;
  feb2025: number;
  mar2025: number;
  apr2025: number;
  may2025: number;
  status: "High" | "Medium" | "Low";
}

export interface AlertData {
  kpi: string;
  district: string;
  value: number;
  threshold: number;
}

// District Monthly Ranking Data
export const districtRankingData: District[] = [
  { name: "South", score: 90, rank: 1, status: "High" },
  { name: "North", score: 85, rank: 2, status: "High" },
  { name: "Khowai", score: 82, rank: 3, status: "High" },
  { name: "Unakoti", score: 77, rank: 4, status: "Medium" },
  { name: "Gomati", score: 68, rank: 5, status: "Medium" },
  { name: "West", score: 60, rank: 6, status: "Medium" },
  { name: "Dhalai", score: 49, rank: 7, status: "Low" },
  { name: "Sepahijala", score: 45, rank: 8, status: "Low" },
];

// KPI Breakdown Data
export const kpiBreakdownData: KPIData[] = [
  {
    district: "South",
    agriculture: 75,
    education: 80,
    health: 88,
    ruralDev: 35,
    itInfra: 72,
  },
  {
    district: "West",
    agriculture: 70,
    education: 80,
    health: 72,
    ruralDev: 73,
    itInfra: 77,
  },
  {
    district: "Dhalai",
    agriculture: 75,
    education: 70,
    health: 68,
    ruralDev: 65,
    itInfra: 80,
  },
  {
    district: "Unakoti",
    agriculture: 82,
    education: 78,
    health: 75,
    ruralDev: 72,
    itInfra: 85,
  },
  {
    district: "North",
    agriculture: 78,
    education: 85,
    health: 72,
    ruralDev: 78,
    itInfra: 78,
  },
  {
    district: "Gomati",
    agriculture: 78,
    education: 75,
    health: 72,
    ruralDev: 70,
    itInfra: 82,
  },
  {
    district: "Khowai",
    agriculture: 75,
    education: 82,
    health: 80,
    ruralDev: 78,
    itInfra: 75,
  },
  {
    district: "Sepahijala",
    agriculture: 72,
    education: 68,
    health: 65,
    ruralDev: 62,
    itInfra: 75,
  },
];

// Month-on-Month Comparison Data
export const comparisonData: ComparisonData[] = [
  {
    district: "West",
    jan2025: 82,
    feb2025: 84,
    mar2025: 83,
    apr2025: 85,
    may2025: 88,
    change: 3,
    status: "High",
  },
  {
    district: "North",
    jan2025: 78,
    feb2025: 79,
    mar2025: 80,
    apr2025: 81,
    may2025: 79,
    change: -2,
    status: "Medium",
  },
  {
    district: "Gomati",
    jan2025: 65,
    feb2025: 67,
    mar2025: 68,
    apr2025: 66,
    may2025: 72,
    change: 6,
    status: "Medium",
  },
  {
    district: "Dhalai",
    jan2025: 58,
    feb2025: 57,
    mar2025: 56,
    apr2025: 59,
    may2025: 54,
    change: -5,
    status: "Low",
  },
  {
    district: "South",
    jan2025: 65,
    feb2025: 64,
    mar2025: 63,
    apr2025: 64,
    may2025: 63,
    change: -1,
    status: "Low",
  },
  {
    district: "Sepahijala",
    jan2025: 72,
    feb2025: 73,
    mar2025: 74,
    apr2025: 73,
    may2025: 74,
    change: 1,
    status: "Medium",
  },
  {
    district: "Khowai",
    jan2025: 74,
    feb2025: 75,
    mar2025: 75,
    apr2025: 75,
    may2025: 76,
    change: 1,
    status: "High",
  },
  {
    district: "Unakoti",
    jan2025: 70,
    feb2025: 69,
    mar2025: 68,
    apr2025: 70,
    may2025: 68,
    change: -2,
    status: "Medium",
  },
];

// Department Performance Data
export const departmentData: DepartmentData[] = [
  {
    department: "Rural Dev.",
    jan2025: 80,
    feb2025: 82,
    mar2025: 83,
    apr2025: 82,
    may2025: 85,
    status: "High",
  },
  {
    department: "Health",
    jan2025: 70,
    feb2025: 71,
    mar2025: 72,
    apr2025: 70,
    may2025: 75,
    status: "Medium",
  },
  {
    department: "Social Welfare",
    jan2025: 48,
    feb2025: 49,
    mar2025: 50,
    apr2025: 50,
    may2025: 45,
    status: "Low",
  },
  {
    department: "Agriculture",
    jan2025: 85,
    feb2025: 86,
    mar2025: 87,
    apr2025: 88,
    may2025: 90,
    status: "High",
  },
  {
    department: "Education",
    jan2025: 65,
    feb2025: 66,
    mar2025: 67,
    apr2025: 68,
    may2025: 65,
    status: "Medium",
  },
  {
    department: "IT & Infra",
    jan2025: 38,
    feb2025: 39,
    mar2025: 40,
    apr2025: 40,
    may2025: 35,
    status: "Low",
  },
];

// Performance Trend Data
export const trendData: TrendData[] = [
  { month: "Jan", rank: 4, district: "Dhalai" },
  { month: "Feb", rank: 3, district: "Dhalai" },
  { month: "Mar", rank: 2, district: "Dhalai" },
  { month: "Apr", rank: 2, district: "Dhalai" },
  { month: "May", rank: 1, district: "Dhalai" },
];

// All Districts Trend Data
export const allDistrictsTrendData = [
  {
    month: "Jan",
    Dhalai: 4,
    North: 2,
    South: 3.5,
    West: 3.2,
    Khowai: 3.8,
    Unakoti: 3.5,
    Sepahijala: 3,
    Gomati: 4,
  },
  {
    month: "Feb",
    Dhalai: 4,
    North: 2,
    South: 5,
    West: 3.2,
    Khowai: 3.8,
    Unakoti: 3.5,
    Sepahijala: 2,
    Gomati: 4,
  },
  {
    month: "Mar",
    Dhalai: 3,
    North: 3,
    South: 4,
    West: 3.2,
    Khowai: 3.8,
    Unakoti: 3.5,
    Sepahijala: 3,
    Gomati: 4,
  },
  {
    month: "Apr",
    Dhalai: 2,
    North: 2,
    South: 4,
    West: 3.2,
    Khowai: 3.8,
    Unakoti: 3.5,
    Sepahijala: 3,
    Gomati: 4,
  },
  {
    month: "May",
    Dhalai: 1,
    North: 1,
    South: 4,
    West: 3.2,
    Khowai: 3.8,
    Unakoti: 3.5,
    Sepahijala: 1,
    Gomati: 3,
  },
];

// Top Gainers/Decliners Data
export const gainersDeclinersData = [
  { district: "Sepahijala", change: 2, type: "Gainer" },
  { district: "Unakoti", change: 1, type: "Gainer" },
  { district: "Khowai", change: 1, type: "Gainer" },
  { district: "Dhalai", change: 0, type: "No Change" },
  { district: "North", change: -0.5, type: "Decliner" },
  { district: "South", change: -0.5, type: "Decliner" },
];

// Alert System Data
export const alertsData: AlertData[] = [
  {
    kpi: "% Institutional Deliveries",
    district: "South",
    value: 48,
    threshold: 50,
  },
  { kpi: "% Passed 10th Board", district: "Dhalai", value: 44, threshold: 50 },
  {
    kpi: "% Institutional Deliveries",
    district: "West",
    value: 40,
    threshold: 50,
  },
  { kpi: "% PM-JAY Cards Issued", district: "West", value: 40, threshold: 50 },
  {
    kpi: "% Institutional Deliveries",
    district: "North",
    value: 37,
    threshold: 50,
  },
  {
    kpi: "% PM-JAY Cards Issued",
    district: "Unakoti",
    value: 32,
    threshold: 50,
  },
  {
    kpi: "% Institutional Deliveries",
    district: "Gomati",
    value: 31,
    threshold: 50,
  },
  { kpi: "% Passed 10th Board", district: "Unakoti", value: 31, threshold: 50 },
];

// Performance Summary Data
export const performanceSummaryData = [
  { name: "Positive Growth", value: 50, color: "#16a34a" },
  { name: "Declined Performance", value: 41.7, color: "#dc2626" },
  { name: "No Change", value: 8.3, color: "#6b7280" },
];

// KPI Detail Data for individual districts
export const kpiDetailData = [
  {
    kpi: "Tax Collection",
    high: 49,
    medium: 72,
    low: 96,
    previous: 48,
    current: 45,
  },
  {
    kpi: "Wages Paid",
    high: 75,
    medium: 73,
    low: 96,
    previous: 40,
    current: 38,
  },
  {
    kpi: "AWC Enrolment",
    high: 100,
    medium: 100,
    low: 96,
    previous: 45,
    current: 40,
  },
  {
    kpi: "PM-JAY Cards",
    high: 100,
    medium: 100,
    low: 96,
    previous: 45,
    current: 40,
  },
  {
    kpi: "Child Immunization",
    high: 100,
    medium: 100,
    low: 96,
    previous: 45,
    current: 44,
  },
  {
    kpi: "Institutional Deliveries",
    high: 100,
    medium: 95,
    low: 96,
    previous: 44,
    current: 46,
  },
  {
    kpi: "Skill Coverage",
    high: 100,
    medium: 95,
    low: 96,
    previous: 44,
    current: 45,
  },
  {
    kpi: "Income - Ag",
    high: 100,
    medium: 95,
    low: 96,
    previous: 55,
    current: 58,
  },
  {
    kpi: "PMGSY Construction",
    high: 95,
    medium: 94,
    low: 96,
    previous: 48,
    current: 45,
  },
  { kpi: "PM-Kisan", high: 95, medium: 94, low: 96, previous: 48, current: 49 },
  {
    kpi: "Soil Health Cards",
    high: 95,
    medium: 73,
    low: 92,
    previous: 48,
    current: 50,
  },
  {
    kpi: "KCC Access",
    high: 95,
    medium: 73,
    low: 92,
    previous: 48,
    current: 51,
  },
  {
    kpi: "Animal Vaccination",
    high: 95,
    medium: 73,
    low: 92,
    previous: 40,
    current: 42,
  },
  {
    kpi: "Livestock Registration",
    high: 95,
    medium: 73,
    low: 92,
    previous: 43,
    current: 46,
  },
  {
    kpi: "Fishery Registration",
    high: 95,
    medium: 54,
    low: 92,
    previous: 43,
    current: 46,
  },
  {
    kpi: "Electricity Bill",
    high: 95,
    medium: 54,
    low: 92,
    previous: 36,
    current: 38,
  },
  {
    kpi: "LPG Delivered",
    high: 95,
    medium: 54,
    low: 92,
    previous: 32,
    current: 35,
  },
  {
    kpi: "AWC Enrollment",
    high: 95,
    medium: 63,
    low: 92,
    previous: 85,
    current: 88,
  },
  { kpi: "Major AC", high: 75, medium: 63, low: 92, previous: 68, current: 75 },
  {
    kpi: "Disinfect",
    high: 75,
    medium: 63,
    low: 92,
    previous: 68,
    current: 75,
  },
  {
    kpi: "Libr Pass",
    high: 100,
    medium: 95,
    low: 95,
    previous: 85,
    current: 88,
  },
  {
    kpi: "School Electrify",
    high: 100,
    medium: 95,
    low: 95,
    previous: 85,
    current: 88,
  },
  {
    kpi: "Toilet Gram",
    high: 100,
    medium: 95,
    low: 95,
    previous: 78,
    current: 81,
  },
  {
    kpi: "Internet in GP",
    high: 100,
    medium: 95,
    low: 95,
    previous: 75,
    current: 78,
  },
];

// District vs Top Performer Data
export const districtVsTopPerformerData = [
  { kpi: "% Institutional Deliveries", gomati: 72, west: 88, difference: -16 },
  { kpi: "% Immunized Children", gomati: 76, west: 94, difference: -18 },
  { kpi: "% PM-JAY Card Coverage", gomati: 63, west: 88, difference: -25 },
];

// District vs State Average Data
export const districtVsStateData = [
  { kpi: "% Institutional Deliveries", gomati: 72, state: 75, difference: -3 },
  { kpi: "% Immunized Children", gomati: 76, state: 79, difference: -3 },
  { kpi: "% PM-JAY Card Coverage", gomati: 63, state: 68, difference: -5 },
];

export const monthlyDistrictRankingData = [
  {
    month: "January",
    data: [
      { name: "South", score: 88, rank: 1, status: "High" },
      { name: "North", score: 82, rank: 2, status: "High" },
      { name: "Khowai", score: 78, rank: 3, status: "Medium" },
      { name: "Unakoti", score: 75, rank: 4, status: "Medium" },
      { name: "Gomati", score: 65, rank: 5, status: "Medium" },
      { name: "West", score: 58, rank: 6, status: "Medium" },
      { name: "Dhalai", score: 48, rank: 7, status: "Low" },
      { name: "Sepahijala", score: 42, rank: 8, status: "Low" },
    ],
  },
  {
    month: "February",
    data: [
      { name: "South", score: 89, rank: 1, status: "High" },
      { name: "Khowai", score: 83, rank: 2, status: "High" },
      { name: "North", score: 80, rank: 3, status: "High" },
      { name: "Unakoti", score: 76, rank: 4, status: "Medium" },
      { name: "Gomati", score: 67, rank: 5, status: "Medium" },
      { name: "West", score: 60, rank: 6, status: "Medium" },
      { name: "Dhalai", score: 50, rank: 7, status: "Medium" },
      { name: "Sepahijala", score: 44, rank: 8, status: "Low" },
    ],
  },
  {
    month: "March",
    data: [
      { name: "South", score: 90, rank: 1, status: "High" },
      { name: "North", score: 85, rank: 2, status: "High" },
      { name: "Khowai", score: 82, rank: 3, status: "High" },
      { name: "Unakoti", score: 77, rank: 4, status: "Medium" },
      { name: "Gomati", score: 68, rank: 5, status: "Medium" },
      { name: "West", score: 60, rank: 6, status: "Medium" },
      { name: "Dhalai", score: 49, rank: 7, status: "Low" },
      { name: "Sepahijala", score: 45, rank: 8, status: "Low" },
    ],
  },
  {
    month: "April",
    data: [
      { name: "South", score: 91, rank: 1, status: "High" },
      { name: "North", score: 86, rank: 2, status: "High" },
      { name: "Khowai", score: 83, rank: 3, status: "High" },
      { name: "Unakoti", score: 78, rank: 4, status: "Medium" },
      { name: "Gomati", score: 69, rank: 5, status: "Medium" },
      { name: "West", score: 61, rank: 6, status: "Medium" },
      { name: "Dhalai", score: 50, rank: 7, status: "Medium" },
      { name: "Sepahijala", score: 46, rank: 8, status: "Low" },
    ],
  },
  {
    month: "May",
    data: [
      { name: "South", score: 92, rank: 1, status: "High" },
      { name: "North", score: 87, rank: 2, status: "High" },
      { name: "Khowai", score: 84, rank: 3, status: "High" },
      { name: "Unakoti", score: 79, rank: 4, status: "Medium" },
      { name: "Gomati", score: 70, rank: 5, status: "Medium" },
      { name: "West", score: 62, rank: 6, status: "Medium" },
      { name: "Dhalai", score: 51, rank: 7, status: "Medium" },
      { name: "Sepahijala", score: 47, rank: 8, status: "Low" },
    ],
  },
];

export const monthlyKpiBreakdownData = [
  {
    month: "January",
    data: [
      {
        district: "South",
        agriculture: 70,
        education: 75,
        health: 85,
        ruralDev: 30,
        itInfra: 68,
      },
      {
        district: "West",
        agriculture: 65,
        education: 75,
        health: 68,
        ruralDev: 70,
        itInfra: 73,
      },
      {
        district: "Dhalai",
        agriculture: 70,
        education: 65,
        health: 65,
        ruralDev: 60,
        itInfra: 75,
      },
      {
        district: "Unakoti",
        agriculture: 78,
        education: 74,
        health: 70,
        ruralDev: 68,
        itInfra: 80,
      },
      {
        district: "North",
        agriculture: 75,
        education: 80,
        health: 68,
        ruralDev: 75,
        itInfra: 74,
      },
      {
        district: "Gomati",
        agriculture: 75,
        education: 70,
        health: 68,
        ruralDev: 65,
        itInfra: 78,
      },
      {
        district: "Khowai",
        agriculture: 70,
        education: 78,
        health: 75,
        ruralDev: 75,
        itInfra: 70,
      },
      {
        district: "Sepahijala",
        agriculture: 68,
        education: 65,
        health: 60,
        ruralDev: 58,
        itInfra: 70,
      },
    ],
  },
  {
    month: "February",
    data: [
      {
        district: "South",
        agriculture: 72,
        education: 78,
        health: 87,
        ruralDev: 32,
        itInfra: 70,
      },
      {
        district: "West",
        agriculture: 68,
        education: 78,
        health: 70,
        ruralDev: 71,
        itInfra: 75,
      },
      {
        district: "Dhalai",
        agriculture: 72,
        education: 68,
        health: 67,
        ruralDev: 62,
        itInfra: 77,
      },
      {
        district: "Unakoti",
        agriculture: 80,
        education: 76,
        health: 72,
        ruralDev: 70,
        itInfra: 82,
      },
      {
        district: "North",
        agriculture: 77,
        education: 82,
        health: 70,
        ruralDev: 76,
        itInfra: 76,
      },
      {
        district: "Gomati",
        agriculture: 77,
        education: 72,
        health: 70,
        ruralDev: 67,
        itInfra: 80,
      },
      {
        district: "Khowai",
        agriculture: 72,
        education: 80,
        health: 77,
        ruralDev: 76,
        itInfra: 72,
      },
      {
        district: "Sepahijala",
        agriculture: 70,
        education: 67,
        health: 62,
        ruralDev: 60,
        itInfra: 72,
      },
    ],
  },
  {
    month: "March",
    data: [
      {
        district: "South",
        agriculture: 75,
        education: 80,
        health: 88,
        ruralDev: 35,
        itInfra: 72,
      },
      {
        district: "West",
        agriculture: 70,
        education: 80,
        health: 72,
        ruralDev: 73,
        itInfra: 77,
      },
      {
        district: "Dhalai",
        agriculture: 75,
        education: 70,
        health: 68,
        ruralDev: 65,
        itInfra: 80,
      },
      {
        district: "Unakoti",
        agriculture: 82,
        education: 78,
        health: 75,
        ruralDev: 72,
        itInfra: 85,
      },
      {
        district: "North",
        agriculture: 78,
        education: 85,
        health: 72,
        ruralDev: 78,
        itInfra: 78,
      },
      {
        district: "Gomati",
        agriculture: 78,
        education: 75,
        health: 72,
        ruralDev: 70,
        itInfra: 82,
      },
      {
        district: "Khowai",
        agriculture: 75,
        education: 82,
        health: 80,
        ruralDev: 78,
        itInfra: 75,
      },
      {
        district: "Sepahijala",
        agriculture: 72,
        education: 68,
        health: 65,
        ruralDev: 62,
        itInfra: 75,
      },
    ],
  },
  {
    month: "April",
    data: [
      {
        district: "South",
        agriculture: 78,
        education: 83,
        health: 90,
        ruralDev: 38,
        itInfra: 75,
      },
      {
        district: "West",
        agriculture: 73,
        education: 83,
        health: 75,
        ruralDev: 76,
        itInfra: 80,
      },
      {
        district: "Dhalai",
        agriculture: 78,
        education: 73,
        health: 71,
        ruralDev: 68,
        itInfra: 83,
      },
      {
        district: "Unakoti",
        agriculture: 85,
        education: 81,
        health: 78,
        ruralDev: 75,
        itInfra: 88,
      },
      {
        district: "North",
        agriculture: 81,
        education: 88,
        health: 75,
        ruralDev: 81,
        itInfra: 81,
      },
      {
        district: "Gomati",
        agriculture: 81,
        education: 78,
        health: 75,
        ruralDev: 73,
        itInfra: 85,
      },
      {
        district: "Khowai",
        agriculture: 78,
        education: 85,
        health: 83,
        ruralDev: 81,
        itInfra: 78,
      },
      {
        district: "Sepahijala",
        agriculture: 75,
        education: 71,
        health: 68,
        ruralDev: 65,
        itInfra: 78,
      },
    ],
  },
  {
    month: "May",
    data: [
      {
        district: "South",
        agriculture: 80,
        education: 85,
        health: 92,
        ruralDev: 40,
        itInfra: 78,
      },
      {
        district: "West",
        agriculture: 75,
        education: 85,
        health: 78,
        ruralDev: 79,
        itInfra: 83,
      },
      {
        district: "Dhalai",
        agriculture: 80,
        education: 75,
        health: 74,
        ruralDev: 70,
        itInfra: 85,
      },
      {
        district: "Unakoti",
        agriculture: 87,
        education: 83,
        health: 80,
        ruralDev: 77,
        itInfra: 90,
      },
      {
        district: "North",
        agriculture: 83,
        education: 90,
        health: 78,
        ruralDev: 83,
        itInfra: 83,
      },
      {
        district: "Gomati",
        agriculture: 83,
        education: 80,
        health: 78,
        ruralDev: 75,
        itInfra: 87,
      },
      {
        district: "Khowai",
        agriculture: 80,
        education: 87,
        health: 85,
        ruralDev: 83,
        itInfra: 80,
      },
      {
        district: "Sepahijala",
        agriculture: 77,
        education: 73,
        health: 70,
        ruralDev: 67,
        itInfra: 80,
      },
    ],
  },
];

// KPI-specific Comparison Data
export const kpiComparisonData: KPIDataMap = {
  tax_collection: [
    { district: "West", value: 88, change: 3, status: "High" },
    { district: "North", value: 79, change: -2, status: "Medium" },
    { district: "Gomati", value: 72, change: 6, status: "Medium" },
    { district: "Dhalai", value: 54, change: -5, status: "Low" },
    { district: "South", value: 63, change: -1, status: "Low" },
    { district: "Sepahijala", value: 74, change: 1, status: "Medium" },
    { district: "Khowai", value: 76, change: 1, status: "High" },
    { district: "Unakoti", value: 68, change: -2, status: "Medium" },
  ],
  wages_paid: [
    { district: "West", value: 92, change: 4, status: "High" },
    { district: "North", value: 85, change: 2, status: "High" },
    { district: "Gomati", value: 78, change: 5, status: "Medium" },
    { district: "Dhalai", value: 62, change: -3, status: "Medium" },
    { district: "South", value: 68, change: 2, status: "Medium" },
    { district: "Sepahijala", value: 72, change: 0, status: "Medium" },
    { district: "Khowai", value: 82, change: 3, status: "High" },
    { district: "Unakoti", value: 75, change: -1, status: "Medium" },
  ],
  awc_enrolment: [
    { district: "West", value: 85, change: 2, status: "High" },
    { district: "North", value: 82, change: 1, status: "High" },
    { district: "Gomati", value: 75, change: 4, status: "Medium" },
    { district: "Dhalai", value: 58, change: -4, status: "Low" },
    { district: "South", value: 65, change: 0, status: "Medium" },
    { district: "Sepahijala", value: 70, change: 2, status: "Medium" },
    { district: "Khowai", value: 78, change: 2, status: "Medium" },
    { district: "Unakoti", value: 72, change: -1, status: "Medium" },
  ],
  pmjay_cards: [
    { district: "West", value: 90, change: 5, status: "High" },
    { district: "North", value: 88, change: 3, status: "High" },
    { district: "Gomati", value: 82, change: 7, status: "High" },
    { district: "Dhalai", value: 65, change: -2, status: "Medium" },
    { district: "South", value: 70, change: 3, status: "Medium" },
    { district: "Sepahijala", value: 75, change: 2, status: "Medium" },
    { district: "Khowai", value: 85, change: 4, status: "High" },
    { district: "Unakoti", value: 78, change: 1, status: "Medium" },
  ],
  child_immunization: [
    { district: "West", value: 95, change: 2, status: "High" },
    { district: "North", value: 92, change: 1, status: "High" },
    { district: "Gomati", value: 88, change: 3, status: "High" },
    { district: "Dhalai", value: 75, change: -2, status: "Medium" },
    { district: "South", value: 82, change: 2, status: "High" },
    { district: "Sepahijala", value: 80, change: 1, status: "High" },
    { district: "Khowai", value: 90, change: 3, status: "High" },
    { district: "Unakoti", value: 85, change: 0, status: "High" },
  ],
  institutional_deliveries: [
    { district: "West", value: 88, change: 3, status: "High" },
    { district: "North", value: 79, change: -2, status: "Medium" },
    { district: "Gomati", value: 72, change: 6, status: "Medium" },
    { district: "Dhalai", value: 54, change: -5, status: "Low" },
    { district: "South", value: 63, change: -1, status: "Low" },
    { district: "Sepahijala", value: 74, change: 1, status: "Medium" },
    { district: "Khowai", value: 76, change: 1, status: "High" },
    { district: "Unakoti", value: 68, change: -2, status: "Medium" },
  ],
  skill_coverage: [
    { district: "West", value: 82, change: 4, status: "High" },
    { district: "North", value: 78, change: 2, status: "Medium" },
    { district: "Gomati", value: 75, change: 5, status: "Medium" },
    { district: "Dhalai", value: 58, change: -3, status: "Low" },
    { district: "South", value: 65, change: 2, status: "Medium" },
    { district: "Sepahijala", value: 70, change: 0, status: "Medium" },
    { district: "Khowai", value: 80, change: 3, status: "High" },
    { district: "Unakoti", value: 72, change: -1, status: "Medium" },
  ],
  income_ag: [
    { district: "West", value: 85, change: 2, status: "High" },
    { district: "North", value: 82, change: 1, status: "High" },
    { district: "Gomati", value: 75, change: 4, status: "Medium" },
    { district: "Dhalai", value: 58, change: -4, status: "Low" },
    { district: "South", value: 65, change: 0, status: "Medium" },
    { district: "Sepahijala", value: 70, change: 2, status: "Medium" },
    { district: "Khowai", value: 78, change: 2, status: "Medium" },
    { district: "Unakoti", value: 72, change: -1, status: "Medium" },
  ],
  pmgsy_construction: [
    { district: "West", value: 90, change: 5, status: "High" },
    { district: "North", value: 88, change: 3, status: "High" },
    { district: "Gomati", value: 82, change: 7, status: "High" },
    { district: "Dhalai", value: 65, change: -2, status: "Medium" },
    { district: "South", value: 70, change: 3, status: "Medium" },
    { district: "Sepahijala", value: 75, change: 2, status: "Medium" },
    { district: "Khowai", value: 85, change: 4, status: "High" },
    { district: "Unakoti", value: 78, change: 1, status: "Medium" },
  ],
  pm_kisan: [
    { district: "West", value: 95, change: 2, status: "High" },
    { district: "North", value: 92, change: 1, status: "High" },
    { district: "Gomati", value: 88, change: 3, status: "High" },
    { district: "Dhalai", value: 75, change: -2, status: "Medium" },
    { district: "South", value: 82, change: 2, status: "High" },
    { district: "Sepahijala", value: 80, change: 1, status: "High" },
    { district: "Khowai", value: 90, change: 3, status: "High" },
    { district: "Unakoti", value: 85, change: 0, status: "High" },
  ],
  soil_health_cards: [
    { district: "West", value: 88, change: 3, status: "High" },
    { district: "North", value: 79, change: -2, status: "Medium" },
    { district: "Gomati", value: 72, change: 6, status: "Medium" },
    { district: "Dhalai", value: 54, change: -5, status: "Low" },
    { district: "South", value: 63, change: -1, status: "Low" },
    { district: "Sepahijala", value: 74, change: 1, status: "Medium" },
    { district: "Khowai", value: 76, change: 1, status: "High" },
    { district: "Unakoti", value: 68, change: -2, status: "Medium" },
  ],
  kcc_access: [
    { district: "West", value: 92, change: 4, status: "High" },
    { district: "North", value: 85, change: 2, status: "High" },
    { district: "Gomati", value: 78, change: 5, status: "Medium" },
    { district: "Dhalai", value: 62, change: -3, status: "Medium" },
    { district: "South", value: 68, change: 2, status: "Medium" },
    { district: "Sepahijala", value: 72, change: 0, status: "Medium" },
    { district: "Khowai", value: 82, change: 3, status: "High" },
    { district: "Unakoti", value: 75, change: -1, status: "Medium" },
  ],
};
