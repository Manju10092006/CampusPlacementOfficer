"use client";

import { useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';
import { Filter, Download, Briefcase, TrendingUp, ArrowUpRight } from "lucide-react";

const ctcData = [
  { year: "2018-19", avgCTC: 4.5, highestCTC: 12.0 },
  { year: "2019-20", avgCTC: 5.2, highestCTC: 24.0 },
  { year: "2020-21", avgCTC: 5.8, highestCTC: 32.0 },
  { year: "2021-22", avgCTC: 6.5, highestCTC: 44.0 },
  { year: "2022-23", avgCTC: 7.2, highestCTC: 46.0 },
  { year: "2023-24", avgCTC: 7.9, highestCTC: 49.8 },
  { year: "2024-25", avgCTC: 8.1, highestCTC: 52.0 },
  { year: "2025-26", avgCTC: 8.26, highestCTC: 80.0 },
];

const topCompanies = [
  { name: "Amazon", offers: 42, highest: 80.0 },
  { name: "Google", offers: 12, highest: 52.0 },
  { name: "ServiceNow", offers: 18, highest: 42.0 },
  { name: "Salesforce", offers: 24, highest: 47.0 },
  { name: "Intuit", offers: 8, highest: 49.8 },
];

export default function PlacementsDashboard() {
  const [selectedYear, setSelectedYear] = useState("2025-26");

  return (
    <div className="p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-semibold mb-2">Placement Outcomes</h1>
          <p className="text-muted-foreground">Analyze historical trends and current placement season data.</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-border bg-white rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
          >
            <option value="2025-26">2025-26 Season</option>
            <option value="2024-25">2024-25 Season</option>
            <option value="2023-24">2023-24 Season</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-border bg-white rounded-xl text-sm font-medium hover:bg-muted transition-colors">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-primary text-primary-foreground p-6 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <p className="text-primary-foreground/80 font-medium mb-1">Total Offers ({selectedYear})</p>
          <h3 className="text-4xl font-heading font-semibold">702</h3>
          <p className="text-sm mt-4 text-emerald-300 font-medium">+15% vs last year</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-muted-foreground font-medium mb-1">Highest CTC</p>
          <h3 className="text-4xl font-heading font-semibold text-emerald-600">₹80.0<span className="text-xl text-muted-foreground ml-1">LPA</span></h3>
          <p className="text-sm mt-4 font-medium text-muted-foreground">Amazon (SDE)</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
            <BarChart className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-muted-foreground font-medium mb-1">Average CTC</p>
          <h3 className="text-4xl font-heading font-semibold text-blue-600">₹8.26<span className="text-xl text-muted-foreground ml-1">LPA</span></h3>
          <p className="text-sm mt-4 font-medium text-muted-foreground">Across 148 Companies</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* CTC Trend Chart */}
        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
          <h3 className="text-lg font-heading font-semibold mb-6">Year-on-Year CTC Trend</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ctcData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
                <Tooltip 
                  contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                  cursor={{ stroke: "#e2e8f0", strokeWidth: 2 }}
                />
                <Line type="monotone" dataKey="avgCTC" name="Average CTC (LPA)" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="highestCTC" name="Highest CTC (LPA)" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Companies */}
        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-heading font-semibold">Top Recruiters</h3>
            <button className="text-sm font-medium text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {topCompanies.map((company, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/20 border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center font-bold text-lg text-primary shadow-sm">
                    {company.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{company.name}</p>
                    <p className="text-sm text-muted-foreground">{company.offers} Offers Made</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">Highest Package</p>
                  <p className="font-semibold text-emerald-600">₹{company.highest} LPA</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
