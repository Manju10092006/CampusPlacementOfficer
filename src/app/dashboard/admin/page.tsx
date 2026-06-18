"use client";

import { useState } from "react";
import { Search, CheckCircle2, XCircle, Clock } from "lucide-react";

// Mock data for UI
const pendingApprovals = [
  { id: 1, college: "Keshav Memorial Institute of Technology", university: "JNTUH", contact: "Neil Rao", email: "neil@kmit.in", date: "2 hours ago", status: "PENDING" },
  { id: 2, college: "Chaitanya Bharathi Institute of Technology", university: "Osmania University", contact: "Ravi Kumar", email: "ravi@cbit.ac.in", date: "1 day ago", status: "PENDING" },
];

export default function AdminApprovalsPage() {
  const [approvals, setApprovals] = useState(pendingApprovals);

  const handleApprove = (id: number) => {
    setApprovals(approvals.filter(a => a.id !== id));
    // Here we would call the API to update user status
  };

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-semibold mb-2">Partner Approvals</h1>
          <p className="text-muted-foreground">Review and activate new college partnership requests.</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search institutions..." 
            className="pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/30 border-b border-border/60">
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Institution</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">University</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Contact Person</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Requested</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {approvals.map((req) => (
              <tr key={req.id} className="hover:bg-muted/20 transition-colors group">
                <td className="px-6 py-4">
                  <p className="font-medium">{req.college}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    {req.university}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium">{req.contact}</p>
                  <p className="text-xs text-muted-foreground">{req.email}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-amber-600 font-medium">
                    <Clock className="w-4 h-4" />
                    {req.date}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleApprove(req.id)}
                      className="p-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors tooltip-trigger"
                      title="Approve"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                      title="Reject"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {approvals.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500 mb-3 opacity-20" />
                  <p>No pending approvals. You're all caught up!</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
