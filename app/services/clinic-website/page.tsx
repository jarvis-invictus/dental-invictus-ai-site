"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Zap, Target, Search, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";

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
      "@type": "Offer",
      "price": "7000",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-bond-lime selection:text-bond-navy overflow-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
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
            <div className="bg-bond-lime/10 border border-bond-lime/20 text-bond-lime text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bond-lime to-green-400">
              Dental Websites
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed"
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

      {/* 2. Bento Grid Section */}
      <section className="py-24 px-6 bg-slate-900/50 border-y border-white/5 relative z-10 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Why our websites <span className="text-bond-lime">convert</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just build digital brochures. We build patient acquisition engines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Speed (Spans 2 columns on large screens) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bond-lime/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-bond-lime/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-bond-lime/30 text-bond-lime">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Lightning Fast</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">Your patients won't wait. Our modern tech stack ensures your site loads in milliseconds, drastically reducing bounce rates and keeping patients engaged.</p>
              </div>
            </motion.div>

            {/* Bento 2: Local SEO */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 text-cyan-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Local SEO Ready</h3>
                <p className="text-slate-400 leading-relaxed">Perfectly optimized for Google Maps so you show up when patients search for "dentist near me".</p>
              </div>
            </motion.div>

            {/* Bento 3: Mobile First */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-purple-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 text-purple-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Mobile First</h3>
                <p className="text-slate-400 leading-relaxed">80% of your traffic is on mobile. We design for the phone first, desktop second.</p>
              </div>
            </motion.div>

            {/* Bento 4: Direct Booking (Spans 2 columns) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bond-lime/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-bond-lime/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-bond-lime/30 text-bond-lime">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Direct Appointment Booking</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">Integrated WhatsApp, floating CTAs, and optimized appointment forms mean completely friction-free booking straight from the homepage.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Timeline / Deliverables */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20 tracking-tight">What's <span className="text-bond-lime">Included</span></h2>
          
          <div className="space-y-12">
            {[
              { title: "Custom UI/UX Design", desc: "Premium, bespoke design tailored to your clinic's brand. No generic templates." },
              { title: "Essential Pages", desc: "Home, About Doctor, Services List, Gallery, and Contact pages all included." },
              { title: "WhatsApp Integration", desc: "Floating WhatsApp button so patients can chat with your front desk instantly." },
              { title: "3 Revision Rounds", desc: "We ensure you are 100% happy with the design before we push it live." },
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-bond-lime/10 border border-bond-lime text-bond-lime flex items-center justify-center font-black text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Premium Pricing Glass Card */}
      <section className="py-24 px-6 bg-slate-900/80 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bond-lime/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 w-full max-w-2xl text-center shadow-2xl">
            <ShieldCheck className="w-12 h-12 text-bond-lime mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Transparent Pricing</h2>
            <p className="text-slate-400 mb-8">One-time project fee. No hidden costs.</p>
            
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-slate-400 text-lg mb-2 font-bold">Starts from</span>
              <span className="text-6xl font-black text-white">₹7,000</span>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="lime" size="lg" className="w-full text-lg h-16 shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_rgba(204,255,0,0.5)] transition-all">
                Add to My Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
