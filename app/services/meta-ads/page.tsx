"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, MapPin, Users, BarChart3, Video, ShieldCheck, ArrowRight } from "lucide-react";

export default function MetaAdsService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic Meta Ads Management",
    "description": "Local Instagram and Facebook advertising paired with custom content creation for dentists.",
    "provider": {
      "@type": "Organization",
      "name": "Invictus AI",
      "url": "https://invictus-ai.in"
    },
    "areaServed": "IN",
    "offers": {
      "@type": "Offer",
      "price": "4000",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-cyan-400 selection:text-bond-navy overflow-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* 1. Immersive Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md">
              Service 02
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            Hyper-Local <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Meta Ads + Content
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed"
          >
            Dominate the 5km radius around your clinic. We create stunning Instagram reels and run high-converting ad campaigns to keep your chairs full.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/#kit-builder">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-bond-navy border-none transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)]">
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">How we drive <span className="text-cyan-400">foot traffic</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Stop posting to nobody. Reach the exact patients who need your services locally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Local Targeting (Spans 2 columns) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Targeted Local Ads</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">We don't waste budget. We target ads specifically to people living or working within a 3-5km radius of your clinic. If they're in your neighborhood, they'll know your name.</p>
              </div>
            </motion.div>

            {/* Bento 2: Reels & Carousels */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-purple-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 text-purple-400">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Reels & Content</h3>
                <p className="text-slate-400 leading-relaxed">High-quality, engaging content that educates patients and builds immense trust before they even step into your clinic.</p>
              </div>
            </motion.div>

            {/* Bento 3: Audience Building */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-blue-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 text-blue-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Retargeting</h3>
                <p className="text-slate-400 leading-relaxed">We automatically re-engage people who have visited your website or interacted with your page but haven't booked yet.</p>
              </div>
            </motion.div>

            {/* Bento 4: Tracking (Spans 2 columns) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 text-cyan-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Transparent Lead Tracking</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">No vanity metrics. We provide crystal clear reporting so you know exactly how many WhatsApp messages and calls your ad budget generated this month.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Timeline / Deliverables */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20 tracking-tight">What's <span className="text-cyan-400">Included</span></h2>
          
          <div className="space-y-12">
            {[
              { title: "Campaign Strategy", desc: "A tailored advertising approach designed specifically for your high-margin dental treatments." },
              { title: "Ad Creative Production", desc: "We design all the ad graphics, edit the reels, and write high-converting ad copy." },
              { title: "A/B Testing", desc: "Continuous testing of different creatives and audiences to lower your cost-per-patient." },
              { title: "Monthly Performance Review", desc: "A straightforward report showing exactly what we spent and how many patients it brought in." },
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 flex items-center justify-center font-black text-xl">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 w-full max-w-2xl text-center shadow-2xl">
            <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Monthly Retainer</h2>
            <p className="text-slate-400 mb-8">Plus the cost of content (posts/reels). Ad spend is separate.</p>
            
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-slate-400 text-lg mb-2 font-bold">Starts from</span>
              <span className="text-6xl font-black text-white">₹4,000</span>
              <span className="text-slate-400 text-lg mb-2 font-bold">/mo</span>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-cyan-500 text-bond-navy hover:bg-cyan-400 border-none shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all">
                Add to My Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
