"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MessageSquare, AlertCircle, ShieldCheck, Map, ArrowRight } from "lucide-react";

export default function ReputationManagementService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic Reputation Management",
    "description": "Automated Google review generation and reputation monitoring for dentists.",
    "provider": {
      "@type": "Organization",
      "name": "Invictus AI",
      "url": "https://invictus-ai.in"
    },
    "areaServed": "IN",
    "offers": {
      "@type": "Offer",
      "price": "3000",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-amber-500 selection:text-white overflow-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* 1. Immersive Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md">
              Service 04
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            Automated 5-Star <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Google Reviews
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed"
          >
            Don't rely on patients to remember. Our automated system texts them right after their appointment to collect positive Google reviews and build undeniable trust.
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

      {/* 2. Bento Grid Section */}
      <section className="py-24 px-6 bg-slate-900/50 border-y border-white/5 relative z-10 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Grow your reputation on <span className="text-amber-500">autopilot</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">More 5-star reviews equals more trust, and more trust equals more booked appointments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Automated SMS (Spans 2 columns) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-amber-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/30 text-amber-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Post-Visit Automated Texts</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">We integrate with your systems to automatically send an SMS review request to patients immediately after they leave your clinic—while the great experience is fresh on their mind.</p>
              </div>
            </motion.div>

            {/* Bento 2: Map Ranking */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-yellow-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/30 text-yellow-500">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Map Ranking</h3>
                <p className="text-slate-400 leading-relaxed">Constant fresh reviews signal to Google that your clinic is popular, bumping you higher in local map pack rankings.</p>
              </div>
            </motion.div>

            {/* Bento 3: Filter Negative Feedback (Spans 3 columns) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div>
                  <div className="bg-red-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-red-500/30 text-red-400">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">Filter Negative Feedback</h3>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">Our smart review gateway asks patients to rate their experience from 1-5 first. If they select 4 or 5 stars, they are sent to Google. If they select 1-3 stars, they are directed to a private internal feedback form, giving you a chance to resolve the issue before it permanently damages your public reputation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Timeline / Deliverables */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20 tracking-tight">What's <span className="text-amber-500">Included</span></h2>
          
          <div className="space-y-12">
            {[
              { title: "Review Gateway Setup", desc: "We build the custom landing page that filters positive vs negative feedback." },
              { title: "SMS Automation Integration", desc: "We set up the automated triggers so texts go out exactly when they should, with zero manual work from your staff." },
              { title: "Google Profile Optimization", desc: "We ensure your Google Business Profile is fully optimized, verified, and structured for maximum local SEO." },
              { title: "Review Monitoring", desc: "Get alerted the moment a new review is posted so you can always stay on top of your online presence." },
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500 text-amber-500 flex items-center justify-center font-black text-xl">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 w-full max-w-2xl text-center shadow-2xl">
            <ShieldCheck className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Monthly Retainer</h2>
            <p className="text-slate-400 mb-8">Unlimited automated review requests.</p>
            
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-slate-400 text-lg mb-2 font-bold">Flat fee</span>
              <span className="text-6xl font-black text-white">₹3,000</span>
              <span className="text-slate-400 text-lg mb-2 font-bold">/mo</span>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-amber-500 text-bond-navy hover:bg-amber-400 border-none shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all">
                Add to My Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
