"use client";

import { useState } from "react";
import { UploadCloud, FileText, Download, Trash2, Calendar } from "lucide-react";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([
    { id: 1, name: "KMIT_SkillTank_MOU_2025.pdf", type: "Partnership MOU", uploadDate: "Oct 12, 2024", expiryDate: "Oct 12, 2026", size: "2.4 MB" },
    { id: 2, name: "CRT_Program_Syllabus.pdf", type: "Training Material", uploadDate: "Nov 05, 2024", expiryDate: "-", size: "1.1 MB" },
  ]);

  return (
    <div className="p-8 max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-semibold mb-2">Documents & Agreements</h1>
        <p className="text-muted-foreground">Manage your MOUs, partnership agreements, and official documents securely.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Upload Section */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-3xl border border-border shadow-sm p-6 sticky top-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <UploadCloud className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">Upload Document</h3>
            <p className="text-sm text-muted-foreground mb-6">Supported formats: PDF, DOCX (Max 10MB)</p>
            
            <div className="border-2 border-dashed border-border/60 rounded-2xl p-8 text-center hover:bg-muted/30 hover:border-primary/50 transition-colors cursor-pointer group mb-6">
              <UploadCloud className="w-8 h-8 text-muted-foreground mx-auto mb-3 group-hover:text-primary transition-colors" />
              <p className="text-sm font-medium">Click to browse or drag & drop</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Document Type</label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option>Partnership MOU</option>
                  <option>Financial Agreement</option>
                  <option>Syllabus/Curriculum</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
                Upload File
              </button>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-heading font-semibold mb-4">Your Documents</h3>
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center justify-between group hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{doc.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium px-2 py-0.5 rounded-md bg-muted">{doc.type}</span>
                    <span>{doc.size}</span>
                    <span>Uploaded: {doc.uploadDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {doc.expiryDate !== "-" && (
                  <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg mr-4 border border-amber-100">
                    <Calendar className="w-3.5 h-3.5" />
                    Expires: {doc.expiryDate}
                  </div>
                )}
                <button className="p-2 text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
