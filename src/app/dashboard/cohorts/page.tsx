"use client";

import { Users, Target, Activity } from "lucide-react";

export default function CohortsPage() {
  const cohorts = [
    { name: "CRT Level 1 (2025)", enrolled: 450, completion: 85, active: true },
    { name: "CRT Level 2 (2025)", enrolled: 320, completion: 60, active: true },
    { name: "Interview Master Pro", enrolled: 120, completion: 30, active: true },
    { name: "FDP - AI Technologies", enrolled: 45, completion: 100, active: false },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-semibold mb-2">Program Cohorts</h1>
        <p className="text-muted-foreground">Track training completion and program health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cohorts.map((cohort, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${cohort.active ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground'}`} />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {cohort.active ? "Active Cohort" : "Completed"}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold">{cohort.name}</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                <Target className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl border border-border/50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-muted-foreground">Enrolled Students</span>
                </div>
                <span className="text-lg font-semibold">{cohort.enrolled}</span>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Completion Rate</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">{cohort.completion}%</span>
                </div>
                <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${cohort.completion}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border/50 flex justify-end">
              <button className="text-sm font-medium text-primary hover:underline">View Detailed Report &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
