"use client";

import { Users, GraduationCap, Building2, TrendingUp, ArrowUpRight } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-semibold mb-2">Platform Overview</h1>
        <p className="text-muted-foreground">High-level insights across all your campus intelligence metrics.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Students", value: "3,248", icon: <Users />, trend: "+12%" },
          { label: "Active Cohorts", value: "14", icon: <GraduationCap />, trend: "Ongoing" },
          { label: "Partner Companies", value: "148", icon: <Building2 />, trend: "2025-26" },
          { label: "Avg. CTC (LPA)", value: "8.26L", icon: <TrendingUp />, trend: "Highest: 80L" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-border shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4">
              {kpi.icon}
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{kpi.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-heading font-semibold">{kpi.value}</h3>
              <span className="text-xs font-medium text-emerald-600 flex items-center bg-emerald-50 px-2 py-1 rounded-md">
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Placements Activity */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-border shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-heading font-semibold">Recent Top Placements</h3>
            <button className="text-sm font-medium text-primary flex items-center gap-1 hover:underline">
              View All <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { company: "Amazon", role: "SDE", student: "Aarav Sharma", ctc: "80.0 LPA", branch: "CSE" },
              { company: "Google", role: "Software Engineer", student: "Priya Patel", ctc: "52.0 LPA", branch: "IT" },
              { company: "Intuit", role: "SDE 1", student: "Rahul Verma", ctc: "49.8 LPA", branch: "CSE-AIML" },
              { company: "Salesforce", role: "MTS", student: "Ananya Singh", ctc: "47.0 LPA", branch: "CSE" },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-border/50 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xl">
                    {p.company[0]}
                  </div>
                  <div>
                    <p className="font-medium">{p.student}</p>
                    <p className="text-sm text-muted-foreground">{p.company} • {p.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-emerald-600">{p.ctc}</p>
                  <span className="text-xs px-2 py-1 bg-muted rounded-md font-medium text-muted-foreground">{p.branch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
          <h3 className="text-lg font-heading font-semibold mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <h4 className="font-medium mb-1 group-hover:text-primary">Add New Student</h4>
              <p className="text-xs text-muted-foreground">Import via CSV or manually.</p>
            </button>
            <button className="w-full text-left p-4 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <h4 className="font-medium mb-1 group-hover:text-primary">Log Placement</h4>
              <p className="text-xs text-muted-foreground">Record a new job offer.</p>
            </button>
            <button className="w-full text-left p-4 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <h4 className="font-medium mb-1 group-hover:text-primary">Upload MOU</h4>
              <p className="text-xs text-muted-foreground">Update partnership documents.</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
