"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Clock, CalendarCheck, HeartHandshake, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export default function AIChatbotService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic AI Chatbot",
    "description": "24/7 automated patient support and appointment booking AI chatbot.",
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
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-bond-purple selection:text-white overflow-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* 1. Immersive Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-bond-purple/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-bond-purple/10 border border-bond-purple/20 text-bond-purple text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md">
              Service 03
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            24/7 Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bond-purple to-pink-400">
              Website Chatbot
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed"
          >
            Never miss a patient inquiry again. Your custom-trained AI receptionist lives on your website, answering complex questions and booking appointments while you sleep.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/#kit-builder">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-bond-purple hover:bg-purple-500 text-white border-none transition-all shadow-[0_0_40px_rgba(168,85,247,0.4)]">
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">The ultimate digital <span className="text-bond-purple">receptionist</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">It doesn't take breaks, never gives the wrong answer, and works around the clock to capture leads.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Instant Answers (Spans 2 columns) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bond-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-bond-purple/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-bond-purple/30 text-bond-purple">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Instant Responses</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">Trained exclusively on your clinic's data. It instantly answers questions about working hours, accepted insurance, treatments offered, and pricing.</p>
              </div>
            </motion.div>

            {/* Bento 2: Always on */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-pink-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/30 text-pink-400">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">24/7 Availability</h3>
                <p className="text-slate-400 leading-relaxed">Most patients research dentists after work hours. Your AI is ready to chat at 2:00 AM on a Sunday.</p>
              </div>
            </motion.div>

            {/* Bento 3: Human Handoff */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-indigo-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 text-indigo-400">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Human Handoff</h3>
                <p className="text-slate-400 leading-relaxed">If the AI can't answer a complex medical question, it seamlessly captures the lead info and alerts your real staff.</p>
              </div>
            </motion.div>

            {/* Bento 4: Auto Booking (Spans 2 columns) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bond-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-bond-purple/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-bond-purple/30 text-bond-purple">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3">Direct Calendar Booking</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">No need for phone tag. Patients can check available slots and schedule their own appointments directly through the chat interface.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Timeline / Deliverables */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20 tracking-tight">What's <span className="text-bond-purple">Included</span></h2>
          
          <div className="space-y-12">
            {[
              { title: "Custom AI Training", desc: "We ingest your website, service lists, and internal FAQs so the bot sounds exactly like your staff." },
              { title: "Website Integration", desc: "We install the chat widget smoothly onto your site with custom branding to match your colors." },
              { title: "Lead Capture Setup", desc: "Automated routing so when a patient leaves their email or phone number, it gets sent directly to your inbox." },
              { title: "Unlimited Conversations", desc: "No artificial limits. Whether you get 10 visitors or 10,000, the AI handles them all." },
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-bond-purple/10 border border-bond-purple text-bond-purple flex items-center justify-center font-black text-xl">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bond-purple/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 w-full max-w-2xl text-center shadow-2xl">
            <ShieldCheck className="w-12 h-12 text-bond-purple mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Monthly Retainer</h2>
            <p className="text-slate-400 mb-8">Unlimited conversations. Fixed price.</p>
            
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-slate-400 text-lg mb-2 font-bold">Flat fee</span>
              <span className="text-6xl font-black text-white">₹3,000</span>
              <span className="text-slate-400 text-lg mb-2 font-bold">/mo</span>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-bond-purple text-white hover:bg-purple-500 border-none shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all">
                Add to My Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
