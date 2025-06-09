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

export interface TrendData {
  month: string;
  rank: number;
  district: string;
}

export interface ComparisonData {
  district: string;
  may2025: number;
  april2025: number;
  change: number;
  status: "High" | "Medium" | "Low";
}

export interface DepartmentData {
  department: string;
  current: number;
  previous: number;
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
  { district: "West", may2025: 88, april2025: 85, change: 3, status: "High" },
  {
    district: "North",
    may2025: 79,
    april2025: 81,
    change: -2,
    status: "Medium",
  },
  {
    district: "Gomati",
    may2025: 72,
    april2025: 66,
    change: 6,
    status: "Medium",
  },
  { district: "Dhalai", may2025: 54, april2025: 59, change: -5, status: "Low" },
  { district: "South", may2025: 63, april2025: 64, change: -1, status: "Low" },
  {
    district: "Sepahijala",
    may2025: 74,
    april2025: 73,
    change: 1,
    status: "Medium",
  },
  { district: "Khowai", may2025: 76, april2025: 75, change: 1, status: "High" },
  {
    district: "Unakoti",
    may2025: 68,
    april2025: 70,
    change: -2,
    status: "Medium",
  },
];

// Department Performance Data
export const departmentData: DepartmentData[] = [
  { department: "Rural Dev.", current: 85, previous: 82, status: "High" },
  { department: "Health", current: 75, previous: 70, status: "Medium" },
  { department: "Social Welfare", current: 45, previous: 50, status: "Low" },
  { department: "Agriculture", current: 90, previous: 88, status: "High" },
  { department: "Education", current: 65, previous: 68, status: "Medium" },
  { department: "IT & Infra", current: 35, previous: 40, status: "Low" },
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
