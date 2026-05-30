"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Clock, CalendarCheck, HeartHandshake, Zap, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

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
    "areaServed": "IN"
  };

  return (
    <div className="bg-bond-navy min-h-screen text-white font-sans selection:bg-bond-purple selection:text-white overflow-hidden">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-bond-purple/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-bond-purple/10 border border-bond-purple/20 text-bond-purple text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bond-purple to-pink-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              Website Chatbot
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed font-medium"
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

      {/* 2. Glassmorphism Features Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">The ultimate digital <span className="text-bond-purple">receptionist</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">It doesn't take breaks, never gives the wrong answer, and works around the clock to capture leads.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-purple/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-purple/50 group-hover:bg-bond-purple/10 transition-colors">
                <Zap className="w-7 h-7 text-slate-300 group-hover:text-bond-purple transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Instant Responses</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Trained exclusively on your clinic's data. It instantly answers questions about working hours, accepted insurance, treatments offered, and pricing.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-purple/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-purple/50 group-hover:bg-bond-purple/10 transition-colors">
                <Clock className="w-7 h-7 text-slate-300 group-hover:text-bond-purple transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">24/7 Availability</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Most patients research dentists after work hours. Your AI is ready to chat and answer questions at 2:00 AM on a Sunday without missing a beat.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-purple/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-purple/50 group-hover:bg-bond-purple/10 transition-colors">
                <HeartHandshake className="w-7 h-7 text-slate-300 group-hover:text-bond-purple transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Human Handoff</h3>
              <p className="text-slate-400 leading-relaxed font-medium">If the AI can't answer a highly complex medical question, it seamlessly captures the lead info and alerts your real staff to follow up.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-bond-purple/30 rounded-[2rem] p-10 transition-all duration-300 group shadow-2xl"
            >
              <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-bond-purple/50 group-hover:bg-bond-purple/10 transition-colors">
                <CalendarCheck className="w-7 h-7 text-slate-300 group-hover:text-bond-purple transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">Direct Calendar Booking</h3>
              <p className="text-slate-400 leading-relaxed font-medium">No need for phone tag. Patients can check available slots and schedule their own appointments directly through the chat interface.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Premium Pricing Glass Card */}
      <section className="py-24 px-6 bg-slate-900/40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bond-purple/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-14 w-full max-w-2xl text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <ShieldCheck className="w-12 h-12 text-bond-purple mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Monthly Retainer</h2>
            <p className="text-slate-400 mb-8 font-medium">Unlimited conversations. Custom trained AI.</p>
            
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-slate-400 text-lg mb-2 font-bold">Flat fee</span>
              <span className="text-6xl font-black text-white">₹3,000</span>
              <span className="text-slate-400 text-lg mb-2 font-bold">/mo</span>
            </div>

            <Link href="/#kit-builder" className="inline-block w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-16 bg-bond-purple text-white hover:bg-purple-500 border-none shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all font-bold">
                Add to My Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
