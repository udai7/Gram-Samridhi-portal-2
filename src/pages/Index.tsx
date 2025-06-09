import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  TrendingUp,
  Users,
  AlertTriangle,
  Building2,
  ArrowRight,
  Activity,
  Target,
  Award,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gov-primary to-gov-secondary">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Gram Samridhi Portal
                </h1>
                <p className="text-sm text-white/80">
                  District Performance Monitoring System
                </p>
              </div>
            </div>
            <Button
              asChild
              className="bg-white text-gov-primary hover:bg-gray-100"
            >
              <Link to="/dashboard">
                Access Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Government KPI
            <br />
            <span className="text-yellow-300">Performance Dashboard</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive district performance monitoring system tracking KPIs
            across 8 districts, 6 departments, and multiple performance
            indicators for data-driven governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            >
              <Link to="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-gov-primary hover:text-blue-800 hover:bg-white"
            >
              <Link to="/dashboard/rankings">
                <Award className="mr-2 h-5 w-5" />
                District Rankings
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-sm text-white/80">Districts Monitored</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-sm text-white/80">Key Departments</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">24+</div>
              <div className="text-sm text-white/80">KPIs Tracked</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm text-white/80">Months of Data</div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle>District Rankings</CardTitle>
                  <CardDescription>
                    Monthly performance rankings
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Track district performance with comprehensive ranking systems
                based on KPI scores across all departments with color-coded
                performance indicators.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard/rankings">
                  View Rankings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Historical trend analysis</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Analyze performance trends over time with detailed trendlines,
                identify top gainers and decliners, and track consistent
                performers.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard/trends">
                  View Trends
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <CardTitle>Alert System</CardTitle>
                  <CardDescription>
                    Real-time performance alerts
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Monitor underperforming KPIs with automated alert system, track
                critical thresholds, and get actionable insights for
                improvement.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard/alerts">
                  View Alerts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Ready to Explore Government Performance Data?
              </h2>
              <p className="text-white/90 mb-6">
                Access comprehensive analytics, district comparisons, department
                performance metrics, and real-time alerts in our full-featured
                dashboard.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
              >
                <Link to="/dashboard">
                  Launch Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
