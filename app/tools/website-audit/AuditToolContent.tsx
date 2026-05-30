"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, CheckCircle2, XCircle, AlertTriangle, ArrowRight, Globe, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface AuditCheck {
  name: string;
  passed: boolean;
  impact: "high" | "medium" | "low";
  description: string;
  recommendation: string;
}

interface AuditResult {
  url: string;
  score: number;
  maxScore: number;
  grade: string;
  checks: AuditCheck[];
}

export default function AuditToolContent() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");

  const handleAudit = async () => {
    if (!url.trim() || !name.trim() || !phone.trim()) return;
    setIsAuditing(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), name: name.trim(), phone: phone.trim() }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Audit failed");
      setResult(data.result);

      // GTM event
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_captured",
          lead_source: "audit-tool",
          audit_score: data.result.score,
          audit_grade: data.result.grade,
        });
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsAuditing(false);
    }
  };

  const gradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-500";
    if (grade === "B") return "text-bond-lime";
    if (grade === "C") return "text-yellow-500";
    return "text-red-500";
  };

  const impactBadge = (impact: string) => {
    if (impact === "high") return "bg-red-100 text-red-700 border-red-200";
    if (impact === "medium") return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-slate-100 text-slate-600 border-slate-200";
  };

  return (
    <div className="bg-white min-h-screen text-bond-navy font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
            <div className="bg-bond-purple/10 border-2 border-bond-purple/30 text-bond-purple font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]">
              Free Tool
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight">
            Is Your Dental Website{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1 bg-bond-lime text-bond-navy border-3 border-bond-navy transform -rotate-1 inline-block shadow-[6px_6px_0px_0px_#0f172a]">
                Losing Patients?
              </span>
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-bond-gray font-bold max-w-xl mx-auto mb-12 leading-relaxed">
            Enter your website URL and get an instant audit across 10 critical checkpoints
            that determine whether your site converts visitors into booked patients.
          </motion.p>
        </div>
      </section>

      {/* Audit Form */}
      {!result && (
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bond-card rounded-3xl border-2 border-bond-gray/10 p-8 shadow-[8px_8px_0px_0px_#ccff00]">

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-bond-gray mb-2 block">Website URL</label>
                  <div className="flex items-center bg-slate-50 border-2 border-bond-gray/20 rounded-xl px-4 focus-within:border-bond-navy transition-colors">
                    <Globe className="w-5 h-5 text-bond-gray/40 shrink-0" />
                    <input type="url" placeholder="www.yourclinic.com" value={url} onChange={(e) => setUrl(e.target.value)}
                      className="w-full bg-transparent py-4 px-3 text-bond-navy font-medium text-sm focus:outline-none placeholder:text-bond-gray/40" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-bond-gray mb-2 block">Your Name</label>
                    <input type="text" placeholder="Dr. Name" value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-bond-gray/20 rounded-xl px-4 py-3.5 text-bond-navy font-medium text-sm focus:outline-none focus:border-bond-navy placeholder:text-bond-gray/40 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-bond-gray mb-2 block">Phone</label>
                    <input type="tel" placeholder="10 digits" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10}
                      className="w-full bg-slate-50 border-2 border-bond-gray/20 rounded-xl px-4 py-3.5 text-bond-navy font-medium text-sm focus:outline-none focus:border-bond-navy placeholder:text-bond-gray/40 transition-colors" />
                  </div>
                </div>
              </div>

              <button onClick={handleAudit}
                disabled={!url.trim() || !name.trim() || !phone.trim() || isAuditing}
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all ${
                  url.trim() && name.trim() && phone.trim() && !isAuditing
                    ? "bg-bond-navy text-white hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}>
                {isAuditing ? (
                  <span className="inline-flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Auditing your site...</span>
                ) : (
                  <span className="inline-flex items-center gap-2"><Search className="w-4 h-4" /> Run Free Audit</span>
                )}
              </button>

              {error && <p className="text-red-500 text-sm font-medium mt-3 text-center">{error}</p>}

              <p className="text-xs text-bond-gray/60 text-center mt-4">
                We&apos;ll send your detailed report via WhatsApp. No spam, ever.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="px-6 pb-24">
            <div className="container mx-auto max-w-3xl">

              {/* Score Card */}
              <div className="bond-card rounded-3xl border-2 border-bond-gray/10 p-8 mb-8 text-center shadow-[8px_8px_0px_0px_#ccff00]">
                <p className="text-xs font-black uppercase tracking-wider text-bond-gray mb-4">Your Website Score</p>
                <div className={`text-7xl md:text-8xl font-black mb-2 ${gradeColor(result.grade)}`}>
                  {result.grade}
                </div>
                <p className="text-2xl font-black text-bond-navy mb-1">
                  {result.score}/{result.maxScore} Checks Passed
                </p>
                <p className="text-bond-gray font-medium text-sm">{result.url}</p>

                <div className="mt-6 flex justify-center">
                  <button onClick={() => { setResult(null); setUrl(""); setName(""); setPhone(""); }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-bond-gray hover:text-bond-navy transition-colors">
                    <RotateCcw className="w-4 h-4" /> Audit Another Site
                  </button>
                </div>
              </div>

              {/* Checks List */}
              <div className="space-y-4 mb-12">
                {result.checks.map((check, i) => (
                  <motion.div key={check.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className={`bond-card rounded-2xl border-2 p-6 transition-all ${
                      check.passed ? "border-green-200 bg-green-50/50" : "border-red-200 bg-red-50/50"
                    }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        check.passed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}>
                        {check.passed ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-black text-bond-navy">{check.name}</h3>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${impactBadge(check.impact)}`}>
                            {check.impact} impact
                          </span>
                        </div>
                        <p className="text-sm text-bond-gray font-medium mb-2">{check.description}</p>
                        {!check.passed && (
                          <div className="flex items-start gap-2 bg-white rounded-lg p-3 border border-bond-gray/10">
                            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-bond-navy font-bold">{check.recommendation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="bond-card border-4 border-bond-navy rounded-3xl p-8 md:p-12 text-center bg-slate-50 shadow-[8px_8px_0px_0px_#ccff00]">
                <h2 className="text-2xl md:text-3xl font-black mb-4 text-bond-navy">
                  Want Us to Fix These Issues?
                </h2>
                <p className="text-bond-gray font-bold mb-8 max-w-lg mx-auto">
                  We build high-converting dental websites that pass all 10 checks. Starts at ₹7,000.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href={`https://wa.me/919699577641?text=${encodeURIComponent(`Hi Sahil, I just ran your website audit tool and scored ${result.grade} (${result.score}/${result.maxScore}). I'd like help fixing my dental clinic website: ${result.url}`)}`}
                    target="_blank" rel="noopener noreferrer">
                    <Button variant="lime" size="lg" className="border-2 border-bond-navy shadow-[4px_4px_0px_0px_#0f172a] font-black hover:-translate-y-1 transition-transform">
                      Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                  <Link href="/services/clinic-website">
                    <Button variant="outline" size="lg" className="border-2 border-bond-navy text-bond-navy font-black hover:bg-slate-100 shadow-[4px_4px_0px_0px_#0f172a]">
                      View Website Packages
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
