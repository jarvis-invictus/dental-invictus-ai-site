"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Smartphone, Search, Zap, CheckCircle2 } from "lucide-react";

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
    <div className="bg-white min-h-screen text-bond-navy font-sans selection:bg-bond-lime selection:text-bond-navy overflow-hidden">
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
            <div className="bg-bond-lime/20 border-2 border-bond-lime text-bond-navy text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(204,255,0,0.5)]">
              Service 01
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 leading-[1.1] tracking-tight text-bond-navy"
          >
            Patient-Acquiring <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-4 py-1 bg-bond-lime text-bond-navy border-4 border-bond-navy transform -rotate-2 inline-block shadow-[8px_8px_0px_0px_#0f172a]">
                Dental Websites
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-bond-gray max-w-2xl mx-auto text-center mb-12 leading-relaxed font-bold"
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
              <Button variant="lime" size="lg" className="w-full sm:w-auto hover:-translate-y-1 transition-transform border-2 border-bond-navy shadow-[4px_4px_0px_0px_#0f172a] text-bond-navy font-black text-lg">
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
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-bond-navy">Why our websites <span className="text-bond-purple underline decoration-wavy decoration-bond-lime underline-offset-8">convert</span></h2>
            <p className="text-bond-gray max-w-2xl mx-auto font-bold">We don't just build digital brochures. We build patient acquisition engines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#ccff00]"
            >
              <div className="bg-bond-lime/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-lime">
                <Target className="w-8 h-8 text-bond-navy" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Direct Appointment Booking</h3>
              <p className="text-bond-gray font-medium leading-relaxed">Integrated WhatsApp, floating CTAs, and optimized appointment forms mean completely friction-free booking straight from the homepage.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#ccff00]"
            >
              <div className="bg-bond-lime/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-lime">
                <Smartphone className="w-8 h-8 text-bond-navy" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Mobile First</h3>
              <p className="text-bond-gray font-medium leading-relaxed">80% of your traffic is on mobile. We design for the phone first, desktop second, ensuring a flawless experience on any device.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#ccff00]"
            >
              <div className="bg-bond-lime/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-lime">
                <Search className="w-8 h-8 text-bond-navy" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Local SEO Ready</h3>
              <p className="text-bond-gray font-medium leading-relaxed">Perfectly optimized technical SEO and structured data so you show up instantly when patients search for "dentist near me".</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card rounded-3xl p-10 hover:shadow-[8px_8px_0px_0px_#ccff00]"
            >
              <div className="bg-bond-lime/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-bond-lime">
                <Zap className="w-8 h-8 text-bond-navy" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-bond-navy">Lightning Fast</h3>
              <p className="text-bond-gray font-medium leading-relaxed">Your patients won't wait. Our modern tech stack ensures your site loads in milliseconds, drastically reducing bounce rates.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Packages */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-bond-navy">Our <span className="bg-bond-lime px-2 pb-1 border-2 border-bond-navy rounded-lg shadow-[4px_4px_0px_0px_#0f172a]">Packages</span></h2>
            <p className="text-bond-gray max-w-2xl mx-auto font-bold">Two distinct packages tailored to your clinic's requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Standard Package */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bond-card border-2 border-bond-gray/20 rounded-[2rem] p-10 flex flex-col relative overflow-hidden bg-slate-50"
            >
              <div className="mb-8 border-b-2 border-bond-gray/10 pb-6">
                <h3 className="text-3xl font-black mb-2 text-bond-navy">Standard</h3>
                <p className="text-bond-gray font-bold">A powerful digital foundation for your practice.</p>
              </div>
              
              <div className="mb-10">
                <span className="text-bond-gray text-lg mr-2 font-black uppercase tracking-wider">Starts at</span>
                <span className="text-4xl font-black text-bond-navy">₹7,000</span>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-start gap-3 text-bond-navy font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>Custom UI/UX Design</span>
                </li>
                <li className="flex items-start gap-3 text-bond-navy font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <div className="flex flex-col">
                    <span>Up to 5 Essential Sections</span>
                    <span className="text-sm font-medium text-bond-gray mt-1 leading-snug">Hero, About Us, Core Services (One-Page), Testimonial, Call-to-Action.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-bond-navy font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>WhatsApp Chat Integration</span>
                </li>
                <li className="flex items-start gap-3 text-bond-navy font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>Basic Local SEO Optimization</span>
                </li>
                <li className="flex items-start gap-3 text-bond-navy font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>Up to 3 Revision Rounds</span>
                </li>
              </ul>

              <Link href="/#kit-builder" className="w-full mt-auto">
                <Button variant="outline" size="lg" className="w-full text-lg font-black h-14 border-2 border-bond-navy text-bond-navy hover:bg-slate-100 transition-all shadow-[4px_4px_0px_0px_#0f172a]">
                  Select Standard
                </Button>
              </Link>
            </motion.div>

            {/* Premium Package */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-bond-navy border-2 border-bond-navy rounded-[2rem] p-10 flex flex-col relative overflow-hidden shadow-[12px_12px_0px_0px_#ccff00]"
            >
              <div className="absolute top-6 right-6 bg-bond-lime text-bond-navy text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border-2 border-bond-navy">
                Premium
              </div>

              <div className="mb-8 border-b-2 border-white/10 pb-6">
                <h3 className="text-3xl font-black mb-2 text-white">Premium</h3>
                <p className="text-slate-400 font-bold">For high-growth clinics wanting a comprehensive ecosystem.</p>
              </div>
              
              <div className="mb-10">
                <span className="text-slate-400 text-lg mr-2 font-black uppercase tracking-wider">Starts at</span>
                <span className="text-4xl font-black text-bond-lime">₹13,000</span>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-start gap-3 text-white font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>Advanced Premium Animations</span>
                </li>
                <li className="flex items-start gap-3 text-white font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <div className="flex flex-col">
                    <span>Dedicated Inner Pages</span>
                    <span className="text-sm font-medium text-slate-400 mt-1 leading-snug">Separate pages for individual Treatments, Blogs, Dedicated About/Team, Detailed Testimonials.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-white font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>Advanced Appointment System</span>
                </li>
                <li className="flex items-start gap-3 text-white font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>Comprehensive Technical SEO</span>
                </li>
                <li className="flex items-start gap-3 text-white font-bold">
                  <CheckCircle2 className="w-6 h-6 text-bond-lime shrink-0" />
                  <span>Up to 5 Revision Rounds</span>
                </li>
              </ul>

              <Link href="/#kit-builder" className="w-full mt-auto">
                <Button variant="lime" size="lg" className="w-full text-lg font-black h-14 hover:-translate-y-1 transition-transform border-2 border-white shadow-[4px_4px_0px_0px_#ffffff]">
                  Select Premium
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
