"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TabType = "standard" | "premium" | "custom";

export default function TemplateShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("premium");

  const standardFeatures = [
    "Mobile-first responsive design",
    "WhatsApp booking button",
    "Google Maps integration",
  ];

  const premiumFeatures = [
    "Individual pages per service with SEO",
    "Full appointment booking form",
    "Clinic gallery + doctor profiles",
  ];

  return (
    <section id="templates" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-bond-navy text-center tracking-tight mb-4"
          >
            Websites That Make Patients Stop Scrolling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-lg text-bond-gray font-medium max-w-2xl mx-auto"
          >
            See exactly what your clinic could look like. All templates are live — explore them right now.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 flex relative w-full max-w-2xl">
            <button
              onClick={() => setActiveTab("standard")}
              className={cn(
                "relative z-10 flex-1 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300",
                activeTab === "standard" ? "text-bond-navy" : "text-bond-gray hover:text-bond-navy"
              )}
            >
              Standard (₹7k)
            </button>
            <button
              onClick={() => setActiveTab("premium")}
              className={cn(
                "relative z-10 flex-1 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300",
                activeTab === "premium" ? "text-white" : "text-bond-gray hover:text-bond-navy"
              )}
            >
              Premium (₹13k)
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={cn(
                "relative z-10 flex-1 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300",
                activeTab === "custom" ? "text-white" : "text-bond-gray hover:text-bond-navy"
              )}
            >
              Custom (₹25k+)
            </button>

            {/* Active Pill Background */}
            <div
              className={cn(
                "absolute top-1.5 bottom-1.5 w-[calc(33.333%-4px)] rounded-full transition-all duration-300 ease-in-out shadow-sm",
                activeTab === "standard" ? "left-1.5 bg-bond-lime" : activeTab === "premium" ? "left-[33.333%] bg-bond-navy" : "left-[calc(66.666%-1.5px)] bg-[#0f172a]"
              )}
            />
          </div>
        </div>

        {/* Templates Grid */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === "standard" && (
              <motion.div
                key="standard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-stretch mb-16"
              >
                {/* Standard 1 */}
                <TemplateCard 
                  title="Standard Layout A"
                  price="₹7,000"
                  features={standardFeatures}
                  imageSrc="/templates/standard-1-v2.jpg"
                  demoLink="https://dental-standard-site-1.vercel.app/"
                  theme="light"
                />
                {/* Standard 2 */}
                <TemplateCard 
                  title="Standard Layout B"
                  price="₹7,000"
                  features={standardFeatures}
                  imageSrc="/templates/standard-2.jpg"
                  demoLink="https://dental-standard-site-2.vercel.app/"
                  theme="light"
                />
              </motion.div>
            )}

            {activeTab === "premium" && (
              <motion.div
                key="premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-stretch mb-16"
              >
                {/* Premium 1 */}
                <TemplateCard 
                  title="Premium Layout A"
                  price="₹13,000"
                  features={premiumFeatures}
                  imageSrc="/templates/premium-1.jpg"
                  demoLink="https://dental-premium-site-1.vercel.app/"
                  theme="dark"
                  badge="Most Popular"
                />
                {/* Premium 2 */}
                <TemplateCard 
                  title="Premium Layout B"
                  price="₹13,000"
                  features={premiumFeatures}
                  imageSrc="/templates/premium-2.jpg"
                  demoLink="https://dental-premium-site-2.vercel.app/"
                  theme="dark"
                />
              </motion.div>
            )}

            {activeTab === "custom" && (
              <motion.div
                key="custom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center mb-16"
              >
                <div className="w-full max-w-4xl bg-bond-navy border border-bond-navy/50 rounded-[2rem] shadow-sticker p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row gap-10">
                  {/* Blueprint Graphic Background */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                  />
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-bond-lime/10 rounded-full blur-[80px]" />

                  {/* Left: Info */}
                  <div className="flex-1 relative z-10 flex flex-col">
                    <div className="inline-block bg-bond-lime text-bond-navy text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sticker self-start mb-6">
                      Ultimate Choice
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-2 tracking-tight">Fully Bespoke<br/>Website</h3>
                    <p className="text-bond-lime font-bold text-lg mb-8">Starts from ₹25,000 onwards</p>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                      {[
                        "Bespoke UI/UX design (No templates)",
                        "Custom requirements (Patient Portals, Dashboards)",
                        "Advanced SEO & Performance optimization",
                        "Monthly maintenance & dedicated support"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-medium text-white/90">
                          <CheckCircle2 className="w-5 h-5 text-bond-lime shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a href="https://wa.me/919699577641?text=Hi,%20I'm%20interested%20in%20a%20Custom%20Website%20for%20my%20clinic." target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto mt-auto">
                      <Button variant="lime" size="lg" className="h-14 px-8 text-base font-bold text-bond-navy w-full">
                        Discuss Your Vision <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </div>

                  {/* Right: Wireframe Visual */}
                  <div className="flex-1 relative z-10 flex items-center justify-center">
                    <div className="w-full aspect-[4/3] rounded-2xl border border-dashed border-slate-500/50 bg-[#0f172a]/50 p-6 flex flex-col gap-4 relative overflow-hidden backdrop-blur-sm">
                      <div className="w-full flex items-center justify-between border-b border-slate-500/30 pb-4">
                        <div className="w-1/3 h-4 bg-slate-500/30 rounded-full" />
                        <div className="flex gap-2">
                          <div className="w-8 h-4 bg-slate-500/20 rounded-sm" />
                          <div className="w-8 h-4 bg-slate-500/20 rounded-sm" />
                          <div className="w-8 h-4 bg-slate-500/20 rounded-sm" />
                        </div>
                      </div>
                      <div className="flex-1 flex gap-4 mt-2">
                        <div className="w-1/2 h-full bg-slate-500/20 rounded-xl" />
                        <div className="w-1/2 flex flex-col gap-4">
                          <div className="w-full h-1/3 bg-slate-500/20 rounded-xl" />
                          <div className="w-full flex-1 bg-bond-lime/10 border border-bond-lime/20 rounded-xl flex items-center justify-center">
                            <span className="text-bond-lime/40 text-sm font-black tracking-widest uppercase rotate-[-5deg]">Your Vision</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating tag */}
                      <div className="absolute bottom-6 right-6 bg-bond-navy border border-bond-lime/30 px-3 py-1.5 rounded text-[10px] text-bond-lime font-mono shadow-lg">
                        {'<CustomBuild />'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-10 text-center shadow-sticker border border-slate-100 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-black text-bond-navy mb-6">Liked what you saw? We can have your clinic live in 10 days.</h3>
          <a
            href="https://wa.me/919699577641?text=Hi,%20I%20saw%20your%20demo%20sites%20and%20I'm%20interested%20in%20getting%20a%20website%20for%20my%20dental%20clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="lime" size="lg" className="h-14 px-8 text-base font-bold text-bond-navy">
              WhatsApp Us to Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function TemplateCard({
  title,
  price,
  features,
  imageSrc,
  demoLink,
  theme,
  badge,
}: {
  title: string;
  price: string;
  features: string[];
  imageSrc: string;
  demoLink: string;
  theme: "light" | "dark";
  badge?: string;
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "rounded-[2rem] shadow-sticker p-8 flex flex-col group hover:-translate-y-2 transition-all duration-200 relative",
        isDark 
          ? "bg-bond-navy border border-bond-navy/50" 
          : "bg-white border border-slate-100"
      )}
    >
      {badge && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-bond-navy text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sticker bg-bond-lime whitespace-nowrap z-10">
          {badge}
        </div>
      )}

      <div className={cn("flex justify-between items-start mb-6", badge ? "mt-4" : "")}>
        <span className={cn(
          "text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shrink-0",
          isDark ? "bg-bond-lime text-bond-navy" : "bg-bond-navy/10 text-bond-navy"
        )}>
          {title}
        </span>
        <div className="text-right">
          <div className={cn("text-3xl font-black", isDark ? "text-white" : "text-bond-navy")}>{price}</div>
          <div className={cn("text-xs font-medium uppercase tracking-wider", isDark ? "text-slate-300" : "text-bond-gray")}>one-time</div>
        </div>
      </div>

      {/* Preview Image */}
      <a href={demoLink} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/10] bg-slate-100 rounded-2xl mb-8 overflow-hidden border border-slate-200 group-hover:shadow-lg transition-all duration-300">
        <Image 
          src={imageSrc} 
          alt={`${title} Preview`} 
          fill 
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-bond-navy/0 group-hover:bg-bond-navy/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-bond-navy font-bold px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Live Demo
          </div>
        </div>
      </a>

      <ul className="space-y-3 mb-10 flex-1">
        {features.map((item) => (
          <li key={item} className={cn("flex items-start gap-3 text-sm font-medium", isDark ? "text-white/90" : "text-bond-navy")}>
            <CheckCircle2 className="w-5 h-5 text-bond-lime shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button 
            variant="lime" 
            size="lg" 
            className={cn(
              "w-full h-14 text-base font-bold text-bond-navy",
              isDark ? "shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300" : ""
            )}
          >
            Explore Design <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </a>
      </div>
    </div>
  );
}
