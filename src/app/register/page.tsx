"use client";

import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[100px] -z-10" />
      
      <div className="w-full max-w-2xl bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-border/50">
        <div className="mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-heading font-semibold">Partner Application</h1>
            <p className="text-muted-foreground">Join the Campus Intelligence network.</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-10">
          <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); if (step < 3) setStep(step + 1); }}>
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-xl font-medium mb-4">Institution Details</h2>
              <div>
                <label className="block text-sm font-medium mb-1.5">College Name</label>
                <input required type="text" placeholder="e.g. KMIT" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">University Affiliation</label>
                <input required type="text" placeholder="e.g. JNTUH" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-xl font-medium mb-4">Your Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">First Name</label>
                  <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Last Name</label>
                  <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Official Email</label>
                <input required type="email" placeholder="tpo@college.edu" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Role / Title</label>
                <input required type="text" placeholder="e.g. Head of Placements" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500 text-center py-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-medium mb-2">Application Submitted</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Your partnership application has been sent to our team. We will review your details and activate your command center shortly.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Return to home <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {step < 3 && (
            <div className="pt-6 flex items-center justify-between">
              <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Already a partner?
              </Link>
              <button type="submit" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                {step === 2 ? "Submit Application" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
