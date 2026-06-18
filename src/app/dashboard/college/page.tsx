"use client";

import { Building2, Mail, Phone, MapPin, Save } from "lucide-react";

export default function CollegeProfilePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-semibold mb-2">College Profile</h1>
        <p className="text-muted-foreground">Manage your institution's details and partnership settings.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Cover & Avatar */}
        <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 relative">
            <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white transition-colors">
              Edit Cover
            </button>
          </div>
          <div className="px-8 pb-8 relative">
            <div className="w-24 h-24 rounded-2xl bg-white border-4 border-white shadow-lg flex items-center justify-center -mt-12 mb-6 bg-gradient-to-br from-blue-500 to-primary">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Institution Name</label>
                  <input type="text" defaultValue="Keshav Memorial Institute of Technology" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">University Affiliation</label>
                  <input type="text" defaultValue="JNTUH" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Departments (Comma separated)</label>
                <input type="text" defaultValue="CSE, IT, CSE-AIML, CSE-DS" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 flex items-center gap-2"><Mail className="w-4 h-4 text-muted-foreground"/> Email</label>
                    <input type="email" defaultValue="placements@kmit.in" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 flex items-center gap-2"><Phone className="w-4 h-4 text-muted-foreground"/> Phone</label>
                    <input type="text" defaultValue="+91 98765 43210" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1.5 flex items-center gap-2"><MapPin className="w-4 h-4 text-muted-foreground"/> Address</label>
                    <input type="text" defaultValue="Narayanguda, Hyderabad, Telangana 500029" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button type="button" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
