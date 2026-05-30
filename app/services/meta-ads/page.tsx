"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Users, BarChart3, Video, ArrowRight, ArrowLeft } from "lucide-react";

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
    <div className="bg-white min-h-screen text-bond-navy font-sans selection:bg-bond-cyan selection:text-white overflow-hidden">
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
            <div className="bg-bond-cyan/20 border-2 border-bond-cyan text-bond-cyan font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(6,182,212,0.5)]">
              Service 02
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-[1.1] tracking-tight text-bond-navy"
          >
            Hyper-Local <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-4 py-1 bg-bond-cyan text-white border-4 border-bond-navy transform rotate-1 inline-block shadow-[8px_8px_0px_0px_#0f172a]">
                Meta Ads + Content
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-bond-gray max-w-2xl mx-auto text-center mb-12 leading-relaxed font-bold"
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
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover:-translate-y-1 transition-transform border-2 border-bond-navy bg-bond-cyan hover:bg-cyan-400 text-white shadow-[4px_4px_0px_0px_#0f172a] font-black text-lg">
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-bond-navy">How we drive <span className="text-bond-cyan underline decoration-wavy decoration-bond-lime underline-offset-8">foot traffic</span></h2>
            <p className="text-bond-gray max-w-2xl mx-auto font-bold">Stop posting to nobody. Reach the exact patients who need your services locally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#06b6d4]"
            >
              <div className="bg-bond-cyan/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-cyan">
                <MapPin className="w-8 h-8 text-bond-cyan" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Targeted Local Ads</h3>
              <p className="text-bond-gray font-medium leading-relaxed">We don't waste budget. We target ads specifically to people living or working within a 3-5km radius of your clinic. If they're in your neighborhood, they'll know your name.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#06b6d4]"
            >
              <div className="bg-bond-cyan/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-cyan">
                <Video className="w-8 h-8 text-bond-cyan" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Reels & Content Production</h3>
              <p className="text-bond-gray font-medium leading-relaxed">High-quality, engaging content that educates patients and builds immense trust before they even step into your clinic. We handle the scripting and editing.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#06b6d4]"
            >
              <div className="bg-bond-cyan/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-cyan">
                <Users className="w-8 h-8 text-bond-cyan" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Smart Retargeting</h3>
              <p className="text-bond-gray font-medium leading-relaxed">We automatically re-engage people who have visited your website or interacted with your page but haven't booked yet, staying top-of-mind.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#06b6d4]"
            >
              <div className="bg-bond-cyan/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-cyan">
                <BarChart3 className="w-8 h-8 text-bond-cyan" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Transparent Lead Tracking</h3>
              <p className="text-bond-gray font-medium leading-relaxed">No vanity metrics. We provide crystal clear reporting so you know exactly how many WhatsApp messages and calls your ad budget generated this month.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Retainer Package */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bond-card border-4 border-bond-navy rounded-[3rem] p-8 md:p-14 w-full max-w-2xl text-center shadow-[12px_12px_0px_0px_#06b6d4] bg-slate-50">
            <h2 className="text-3xl font-black mb-4 text-bond-navy uppercase tracking-tight">Monthly Ads Retainer</h2>
            <p className="text-bond-gray mb-8 font-bold text-lg">Customizable monthly plans based on your content needs.</p>
            
            <div className="bg-white border-2 border-bond-gray/20 rounded-2xl p-6 mb-8 text-left shadow-sm">
              <h4 className="text-lg font-black text-bond-navy mb-4 border-b-2 border-bond-gray/10 pb-3">All Retainers Include:</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-bond-navy font-bold">
                  <span className="w-2 h-2 bg-bond-cyan rounded-full mr-3"></span>
                  Full Meta Ads Campaign Strategy & Setup
                </li>
                <li className="flex items-center text-bond-navy font-bold">
                  <span className="w-2 h-2 bg-bond-cyan rounded-full mr-3"></span>
                  Ad Copywriting & Graphic Design
                </li>
                <li className="flex items-center text-bond-navy font-bold">
                  <span className="w-2 h-2 bg-bond-cyan rounded-full mr-3"></span>
                  Continuous A/B Testing & Optimization
                </li>
                <li className="flex items-center text-bond-navy font-bold">
                  <span className="w-2 h-2 bg-bond-cyan rounded-full mr-3"></span>
                  Monthly Transparent ROI Reporting
                </li>
              </ul>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-bond-cyan text-white hover:bg-cyan-400 border-2 border-bond-navy shadow-[4px_4px_0px_0px_#0f172a] hover:shadow-[6px_6px_0px_0px_#0f172a] hover:-translate-y-1 transition-all font-black">
                Build Your Package <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
