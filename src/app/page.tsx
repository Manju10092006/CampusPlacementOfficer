"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BarChart3, Building2, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLHeadingElement[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial reveal
      tl.fromTo(
        ".reveal-text",
        { y: 100, opacity: 0, rotationX: -20 },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          stagger: 0.1, 
          duration: 1.2, 
          ease: "power4.out",
          transformOrigin: "bottom center"
        }
      ).fromTo(
        ".reveal-fade",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );

      // Scroll parallax for Hero
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Features Section pinning and horizontal scroll feeling (using stagger)
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="hero-bg absolute top-0 left-0 w-full h-[120vh] -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-emerald-50/50 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">CareerOS</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
          >
            Partner with us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 pb-20 px-8 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="reveal-fade inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Introducing Campus Intelligence
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] mb-8" style={{ perspective: "1000px" }}>
            <div className="overflow-hidden pb-2"><div className="reveal-text">The Command Center</div></div>
            <div className="overflow-hidden pb-2"><div className="reveal-text text-gradient">for Placement Intelligence</div></div>
          </h1>
          
          <p className="reveal-fade text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed">
            Giving colleges complete visibility into training effectiveness, placement readiness, and institutional performance.
          </p>
          
          <div className="reveal-fade flex items-center gap-4">
            <Link 
              href="/register" 
              className="group flex items-center gap-2 text-lg font-medium bg-primary text-primary-foreground px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features" 
              className="text-lg font-medium px-8 py-4 rounded-full border border-border hover:bg-muted transition-colors"
            >
              Explore Platform
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="reveal-fade mt-20 w-full max-w-6xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10 top-1/2" />
          <div className="glass-card rounded-2xl overflow-hidden border border-border/50 shadow-2xl relative aspect-[16/9]">
            {/* Abstract Dashboard UI */}
            <div className="absolute top-0 left-0 w-full h-12 border-b border-border/50 flex items-center px-6 gap-2 bg-white/50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="p-8 pt-20 grid grid-cols-12 gap-6 h-full bg-white/40">
              {/* Sidebar */}
              <div className="col-span-3 space-y-4">
                <div className="h-8 rounded bg-muted/80 w-3/4" />
                <div className="h-8 rounded bg-muted/50 w-full" />
                <div className="h-8 rounded bg-muted/50 w-5/6" />
                <div className="h-8 rounded bg-muted/50 w-full" />
              </div>
              {/* Main Content */}
              <div className="col-span-9 space-y-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="h-32 rounded-xl bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between">
                    <div className="h-4 w-1/2 bg-muted rounded" />
                    <div className="h-8 w-3/4 bg-primary/10 rounded" />
                  </div>
                  <div className="h-32 rounded-xl bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between">
                    <div className="h-4 w-1/2 bg-muted rounded" />
                    <div className="h-8 w-3/4 bg-success/20 rounded" />
                  </div>
                  <div className="h-32 rounded-xl bg-white shadow-sm border border-border/50 p-6 flex flex-col justify-between">
                    <div className="h-4 w-1/2 bg-muted rounded" />
                    <div className="h-8 w-3/4 bg-amber-100 rounded" />
                  </div>
                </div>
                <div className="h-64 rounded-xl bg-white shadow-sm border border-border/50 p-6">
                  <div className="h-full w-full rounded bg-gradient-to-r from-blue-50 to-emerald-50 border border-border/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-32 px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">Replace fragmented spreadsheets with total clarity.</h2>
            <p className="text-xl text-muted-foreground font-light">
              We've re-engineered how institutions track student readiness, bridging the gap between training and final placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Student Roster Management",
                desc: "Maintain a live, unified database of all students. Track their branches, details, and current program enrollment instantly.",
                bg: "bg-blue-50"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
                title: "Outcomes Dashboard",
                desc: "Visualize placement data in real-time. See who got placed, where, and at what CTC, backed by historical trends.",
                bg: "bg-emerald-50"
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
                title: "Cohort Tracking",
                desc: "Monitor training completion rates across different cohorts. Identify which programs are yielding the highest placements.",
                bg: "bg-indigo-50"
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="group p-8 rounded-3xl border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-background"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-heading font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[100px] rounded-full" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading text-5xl md:text-7xl font-medium mb-8">Ready to transform your campus?</h2>
          <p className="text-xl text-blue-100 mb-12 font-light max-w-2xl mx-auto">
            Join the forward-thinking institutions using CareerOS to drive better placement outcomes.
          </p>
          <Link 
            href="/register" 
            className="inline-flex items-center gap-2 text-lg font-medium bg-white text-primary px-8 py-4 rounded-full hover:shadow-xl hover:shadow-white/10 transition-all active:scale-95"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
