"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, MapPin, Users, BarChart3, Video, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

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
    "areaServed": "IN"
  };

  return (
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-cyan-400 selection:text-bond-navy overflow-hidden">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Meta Ads + Content
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed font-medium"
          >
            Dominate the 5km radius around your clinic. We create stunning Instagram reels and run high-converting ad campaigns to keep your chairs full month after month.
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

      {/* 2. Glassmorphism Features Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">How we drive <span className="text-cyan-400">foot traffic</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Stop posting to nobody. Reach the exact patients who need your services locally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                <MapPin className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Targeted Local Ads</h3>
              <p className="text-slate-400 leading-relaxed font-medium">We don't waste budget. We target ads specifically to people living or working within a 3-5km radius of your clinic. If they're in your neighborhood, they'll know your name.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                <Video className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Reels & Content Production</h3>
              <p className="text-slate-400 leading-relaxed font-medium">High-quality, engaging content that educates patients and builds immense trust before they even step into your clinic. We handle the scripting and editing.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                <Users className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Smart Retargeting</h3>
              <p className="text-slate-400 leading-relaxed font-medium">We automatically re-engage people who have visited your website or interacted with your page but haven't booked yet, staying top-of-mind.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                <BarChart3 className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Transparent Lead Tracking</h3>
              <p className="text-slate-400 leading-relaxed font-medium">No vanity metrics. We provide crystal clear reporting so you know exactly how many WhatsApp messages and calls your ad budget generated this month.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Premium Pricing Glass Card */}
      <section className="py-24 px-6 bg-slate-900/40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-14 w-full max-w-2xl text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Monthly Ads & Content Retainer</h2>
            <p className="text-slate-400 mb-8 font-medium">Customizable monthly plans based on your content needs. Ad spend is separate.</p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
              <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-3">All Retainers Include:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  Full Meta Ads Campaign Strategy & Setup
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  Ad Copywriting & Graphic Design
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  Continuous A/B Testing & Optimization
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  Monthly Transparent ROI Reporting
                </li>
              </ul>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-cyan-500 text-bond-navy hover:bg-cyan-400 border-none shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all font-bold">
                Build Your Package <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
