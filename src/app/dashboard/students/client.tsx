"use client";

import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, FileSpreadsheet } from "lucide-react";

export function StudentClient({ initialStudents }: { initialStudents: any[] }) {
  const [students] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-semibold mb-2">Student Roster</h1>
          <p className="text-muted-foreground">Manage your college's student database and program enrollments.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-border bg-white text-foreground rounded-xl hover:bg-muted transition-colors font-medium text-sm">
            <FileSpreadsheet className="w-4 h-4" /> Import CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all font-medium text-sm">
            <Plus className="w-4 h-4" /> Add Student
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-[600px]">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-muted/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search by name or roll no..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-80"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-border bg-white rounded-xl text-sm font-medium hover:bg-muted transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-white z-10 shadow-sm">
              <tr className="border-b border-border/60">
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Roll No</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Branch</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Enrolled Program</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-sm">{student.roll}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium">{student.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                      {student.branch}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{student.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.program === 'None' 
                        ? 'bg-red-50 text-red-700' 
                        : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {student.program}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
