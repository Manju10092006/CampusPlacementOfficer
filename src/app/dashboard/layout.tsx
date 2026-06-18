"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  Users, 
  GraduationCap, 
  LayoutDashboard, 
  FileText,
  Building,
  ShieldCheck,
  Settings,
  LogOut
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hardcoding role to ADMIN for preview purposes. In real app, get from session.
  const role = "ADMIN"; 

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: "Overview", href: "/dashboard" },
    ...(role === "ADMIN" ? [
      { icon: <ShieldCheck size={20} />, label: "Approvals", href: "/dashboard/admin" },
    ] : []),
    { icon: <Building size={20} />, label: "College Profile", href: "/dashboard/college" },
    { icon: <Users size={20} />, label: "Student Roster", href: "/dashboard/students" },
    { icon: <GraduationCap size={20} />, label: "Cohorts", href: "/dashboard/cohorts" },
    { icon: <FileText size={20} />, label: "Documents", href: "/dashboard/documents" },
  ];

  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-border/60 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-border/40">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/10">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="font-heading font-semibold text-lg leading-tight">CareerOS</h1>
            <p className="text-xs text-muted-foreground">Campus Intelligence</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 mt-2 px-3">Menu</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive 
                    ? "bg-primary/5 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <div className={`${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {item.icon}
                </div>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/40">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-muted/30 border border-border/50 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium shadow-sm">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">admin@careeros.com</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut size={20} />
            <span className="text-sm font-medium">Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
