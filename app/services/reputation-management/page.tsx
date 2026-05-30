"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Shield, ThumbsUp, TrendingUp, AlertTriangle, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

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
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-amber-500 selection:text-white overflow-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* Navigation */}
      <div className="absolute top-24 left-6 md:left-12 z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white backdrop-blur-md rounded-full shadow-lg">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
      </div>

      {/* 1. Immersive Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              Service 04
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            Automated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              5-Star Reviews
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed font-medium"
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
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-bond-navy border-none transition-all shadow-[0_0_40px_rgba(245,158,11,0.4)]">
                Build Your Growth Kit
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Glassmorphism Features Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Protect and grow your <span className="text-amber-500">reputation</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">A single bad review can cost you dozens of patients. We ensure that doesn't happen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-amber-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                <Star className="w-7 h-7 text-slate-300 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Automated WhatsApp Follow-ups</h3>
              <p className="text-slate-400 leading-relaxed font-medium">We automatically message patients on WhatsApp right after their appointment when they are happiest, directly asking for a Google review.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-amber-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                <AlertTriangle className="w-7 h-7 text-slate-300 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Bad Review Shield</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Our system acts as a filter. If a patient is unhappy, their feedback comes to you privately so you can resolve the issue before it ever hits Google.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-amber-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                <ThumbsUp className="w-7 h-7 text-slate-300 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Frictionless 1-Click Process</h3>
              <p className="text-slate-400 leading-relaxed font-medium">We remove all friction. Patients click the link and are taken exactly to the spot to leave the 5 stars, increasing completion rates drastically.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-amber-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                <TrendingUp className="w-7 h-7 text-slate-300 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Dominate Local Search Map</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Google heavily favors clinics with recent, high-volume 5-star reviews. As your review count explodes, you naturally rank #1 in the Local Map Pack.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Premium Pricing Glass Card */}
      <section className="py-24 px-6 bg-slate-900/40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-14 w-full max-w-2xl text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <ShieldCheck className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Monthly Retainer</h2>
            <p className="text-slate-400 mb-8 font-medium">Automated review requests via WhatsApp. Includes negative review filtering.</p>
            
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-slate-400 text-lg mb-2 font-bold">Flat fee</span>
              <span className="text-6xl font-black text-white">₹3,000</span>
              <span className="text-slate-400 text-lg mb-2 font-bold">/mo</span>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-amber-500 text-bond-navy hover:bg-amber-400 border-none shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all font-bold">
                Add to My Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
