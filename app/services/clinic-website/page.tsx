"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Zap, Target, Search, Smartphone, ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ClinicWebsiteService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic Website Design",
    "description": "High-converting, SEO-optimized website design specifically for dental clinics.",
    "provider": {
      "@type": "Organization",
      "name": "Invictus AI",
      "url": "https://invictus-ai.in"
    },
    "areaServed": "IN",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "7000",
      "highPrice": "13000",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-bond-lime selection:text-bond-navy overflow-hidden">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-bond-lime/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-bond-lime/10 border border-bond-lime/20 text-bond-lime text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(204,255,0,0.15)]">
              Service 01
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            Patient-Acquiring <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bond-lime to-green-400 drop-shadow-[0_0_30px_rgba(204,255,0,0.3)]">
              Dental Websites
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed font-medium"
          >
            Stop losing patients to clinics with better websites. We build lightning-fast, highly-optimized websites engineered to turn local Google searches into booked appointments.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/#kit-builder">
              <Button variant="lime" size="lg" className="w-full sm:w-auto hover:scale-105 transition-all text-bond-navy shadow-[0_0_40px_rgba(204,255,0,0.4)]">
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Why our websites <span className="text-bond-lime">convert</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">We don't just build digital brochures. We build patient acquisition engines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-lime/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-lime/50 group-hover:bg-bond-lime/10 transition-colors">
                <Target className="w-7 h-7 text-slate-300 group-hover:text-bond-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Direct Appointment Booking</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Integrated WhatsApp, floating CTAs, and optimized appointment forms mean completely friction-free booking straight from the homepage.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-lime/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-lime/50 group-hover:bg-bond-lime/10 transition-colors">
                <Smartphone className="w-7 h-7 text-slate-300 group-hover:text-bond-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Mobile First</h3>
              <p className="text-slate-400 leading-relaxed font-medium">80% of your traffic is on mobile. We design for the phone first, desktop second, ensuring a flawless experience on any device.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-lime/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-lime/50 group-hover:bg-bond-lime/10 transition-colors">
                <Search className="w-7 h-7 text-slate-300 group-hover:text-bond-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Local SEO Ready</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Perfectly optimized technical SEO and structured data so you show up instantly when patients search for "dentist near me".</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-lime/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-lime/50 group-hover:bg-bond-lime/10 transition-colors">
                <Zap className="w-7 h-7 text-slate-300 group-hover:text-bond-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Lightning Fast</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Your patients won't wait. Our modern tech stack ensures your site loads in milliseconds, drastically reducing bounce rates.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Packages */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900/40 border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bond-lime/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Transparent <span className="text-bond-lime">Pricing</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Two distinct packages tailored to your clinic's scale. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Standard Package */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2 text-white">Standard Website</h3>
                <p className="text-slate-400 text-sm font-medium">Perfect for new or independent clinics.</p>
              </div>
              
              <div className="mb-10">
                <span className="text-5xl font-black text-white">₹7,000</span>
                <span className="text-slate-400 text-lg ml-2 font-bold">One-time</span>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {[
                  "Custom UI/UX Design",
                  "Up to 5 Essential Pages",
                  "WhatsApp Chat Integration",
                  "Basic Local SEO Optimization",
                  "3 Revision Rounds Included",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-slate-400 text-sm italic mt-6">
                  <span className="block p-1 bg-white/5 rounded">*Additional revisions charged separately based on requirements.</span>
                </li>
              </ul>

              <Link href="/#kit-builder" className="w-full mt-auto">
                <Button variant="outline" size="lg" className="w-full text-base font-bold h-14 border-white/20 text-white hover:bg-white hover:text-bond-navy transition-all">
                  Select Standard Plan
                </Button>
              </Link>
            </motion.div>

            {/* Premium Package */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-bond-navy backdrop-blur-2xl border-2 border-bond-lime/50 rounded-[2rem] p-10 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(204,255,0,0.1)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(204,255,0,0.2)]"
            >
              <div className="absolute top-6 right-6 bg-bond-lime/20 text-bond-lime text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                Most Popular
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2 text-white">Premium Website</h3>
                <p className="text-slate-400 text-sm font-medium">For established clinics demanding the best.</p>
              </div>
              
              <div className="mb-10">
                <span className="text-slate-400 text-lg mr-2 font-bold">Starts at</span>
                <span className="text-5xl font-black text-bond-lime">₹13,000</span>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {[
                  "Advanced Premium UI/UX Animations",
                  "Unlimited Pages & Treatments",
                  "Advanced Appointment Booking System",
                  "Comprehensive Technical SEO",
                  "Unlimited Revisions until Launch",
                  "Priority Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-bond-lime shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/#kit-builder" className="w-full mt-auto">
                <Button variant="lime" size="lg" className="w-full text-base font-bold h-14 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all">
                  Select Premium Plan
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
