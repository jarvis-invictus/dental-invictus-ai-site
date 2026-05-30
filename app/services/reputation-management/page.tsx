"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, AlertTriangle, ThumbsUp, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";

export default function ReputationManagementService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic Reputation Management",
    "description": "Automated Google Review generation and bad review mitigation for dental clinics.",
    "provider": {
      "@type": "Organization",
      "name": "Invictus AI",
      "url": "https://invictus-ai.in"
    },
    "areaServed": "IN"
  };

  return (
    <div className="bg-white min-h-screen text-bond-navy font-sans selection:bg-[#f59e0b] selection:text-white overflow-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* Navigation */}
      <div className="pt-24 px-6 md:px-12 relative z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white border-bond-gray/20 hover:bg-slate-50 text-bond-navy rounded-full shadow-sm font-bold">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
      </div>

      {/* 1. Hero Section (Sticker Theme) */}
      <section className="relative pt-12 pb-32 px-6">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-[#f59e0b]/20 border-2 border-[#f59e0b] text-[#f59e0b] font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(245,158,11,0.5)]">
              Service 04
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-[1.1] tracking-tight text-bond-navy"
          >
            Automated <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-4 py-1 bg-[#f59e0b] text-white border-4 border-bond-navy transform rotate-2 inline-block shadow-[8px_8px_0px_0px_#0f172a]">
                5-Star Reviews
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-bond-gray max-w-2xl mx-auto text-center mb-12 leading-relaxed font-bold"
          >
            Your Google rating is the #1 deciding factor for new patients. We automate your review collection process to bury negative reviews and skyrocket your local ranking.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/#kit-builder">
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover:-translate-y-1 transition-transform border-2 border-bond-navy bg-[#f59e0b] hover:bg-amber-400 text-white shadow-[4px_4px_0px_0px_#0f172a] font-black text-lg">
                Build Your Growth Kit
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Features Section (bond-card style) */}
      <section className="py-24 px-6 relative z-10 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-bond-navy">Protect and grow your <span className="text-[#f59e0b] underline decoration-wavy decoration-bond-lime underline-offset-8">reputation</span></h2>
            <p className="text-bond-gray max-w-2xl mx-auto font-bold">A single bad review can cost you dozens of patients. We ensure that doesn't happen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#f59e0b]"
            >
              <div className="bg-[#f59e0b]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-[#f59e0b]">
                <Star className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Automated Follow-ups</h3>
              <p className="text-bond-gray font-medium leading-relaxed">We automatically message patients on WhatsApp right after their appointment when they are happiest, directly asking for a Google review.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#f59e0b]"
            >
              <div className="bg-[#f59e0b]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-[#f59e0b]">
                <AlertTriangle className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Bad Review Shield</h3>
              <p className="text-bond-gray font-medium leading-relaxed">Our system acts as a filter. If a patient is unhappy, their feedback comes to you privately so you can resolve the issue before it ever hits Google.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#f59e0b]"
            >
              <div className="bg-[#f59e0b]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-[#f59e0b]">
                <ThumbsUp className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Frictionless 1-Click Process</h3>
              <p className="text-bond-gray font-medium leading-relaxed">We remove all friction. Patients click the link and are taken exactly to the spot to leave the 5 stars, increasing completion rates drastically.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#f59e0b]"
            >
              <div className="bg-[#f59e0b]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-[#f59e0b]">
                <TrendingUp className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Dominate Local Search</h3>
              <p className="text-bond-gray font-medium leading-relaxed">Google heavily favors clinics with recent, high-volume 5-star reviews. As your review count explodes, you naturally rank #1 in the Local Map Pack.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Card */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bond-card border-4 border-bond-navy rounded-[3rem] p-8 md:p-14 w-full max-w-2xl text-center shadow-[12px_12px_0px_0px_#f59e0b] bg-slate-50">
            <h2 className="text-3xl font-black mb-4 text-bond-navy uppercase tracking-tight">Monthly Retainer</h2>
            <p className="text-bond-gray mb-8 font-bold text-lg">Automated review requests. Includes negative review filtering.</p>
            
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-bond-gray text-lg mb-2 font-black uppercase">Flat fee</span>
              <span className="text-6xl font-black text-bond-navy">₹3,000</span>
              <span className="text-bond-gray text-lg mb-2 font-black">/mo</span>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-[#f59e0b] text-white hover:bg-amber-400 border-2 border-bond-navy shadow-[4px_4px_0px_0px_#0f172a] hover:shadow-[6px_6px_0px_0px_#0f172a] hover:-translate-y-1 transition-all font-black">
                Add to My Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
