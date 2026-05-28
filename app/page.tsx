"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import WhoWeAre from "@/components/WhoWeAre";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import UseCases from "@/components/UseCases";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Dynamic imports to prevent SSR issues and async component conflicts
const Spline = dynamic(() => import("@splinetool/react-spline"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-50/5 animate-pulse rounded-3xl" />
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-bond-lime selection:text-bond-navy overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Abstract Blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-bond-purple/10 rounded-full blur-[80px] -z-10 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bond-cyan/10 rounded-full blur-[80px] -z-10 mix-blend-multiply" />
        <div className="absolute top-40 left-1/3 w-[300px] h-[300px] bg-bond-lime/20 rounded-full blur-[80px] -z-10 mix-blend-multiply" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ rotate: -2, scale: 1.05 }}
              className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-8 shadow-sticker transform -rotate-2"
            >
              Enterprise-Grade AI. Startup Speed.
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-bold text-bond-navy leading-[1.05] mb-8 tracking-tight">
              We Engineer <br />
              <span className="relative inline-block">
                <span className="relative z-10">Intelligent</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-bond-cyan/30 -rotate-1 rounded-sm -z-0"></span>
              </span> <br />
              Business Systems.
            </h1>

            <p className="text-xl text-bond-gray mb-10 leading-relaxed max-w-lg font-medium">
              The sweet spot between a high-end <strong>Tech Consultancy</strong> and an <strong>AI Lab</strong>. We architect AI systems while you scale revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-xl shadow-bond-navy/20 flex items-center gap-3 group">
                  Book a Strategy Call
                  <div className="bg-bond-lime text-bond-navy rounded-full p-1 group-hover:rotate-45 transition-transform">
                    <ArrowRight size={18} strokeWidth={3} />
                  </div>
                </Button>
              </a>
              <a href="#services">
                <Button variant="secondary" size="lg">
                  View Solutions
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Spline 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-bond-lime/20 via-bond-cyan/10 to-bond-purple/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            
            <div className="w-full h-full">
              <Spline
                scene="https://prod.spline.design/vWbWAuG7sTFiutvJ/scene.splinecode" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Services Section */}
      <ServiceGrid />

      {/* Use Cases Section */}
      <UseCases />

      {/* How We Work */}
      <ProcessTimeline />

      {/* Client Stories / Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}
