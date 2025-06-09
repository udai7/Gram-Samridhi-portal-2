import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DistrictRankings from "./pages/DistrictRankings";
import KPIComparisons from "./pages/KPIComparisons";
import PerformanceTrends from "./pages/PerformanceTrends";
import DepartmentAnalysis from "./pages/DepartmentAnalysis";
import AlertsSummary from "./pages/AlertsSummary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/rankings" element={<DistrictRankings />} />
          <Route path="/dashboard/comparisons" element={<KPIComparisons />} />
          <Route path="/dashboard/trends" element={<PerformanceTrends />} />
          <Route
            path="/dashboard/departments"
            element={<DepartmentAnalysis />}
          />
          <Route path="/dashboard/alerts" element={<AlertsSummary />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
