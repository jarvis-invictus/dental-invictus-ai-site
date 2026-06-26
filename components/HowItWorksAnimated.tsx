"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Star, Phone, Globe, Lock, Bot, Send, CalendarDays, Check, Smartphone, BellRing, Plane } from "lucide-react";
import Image from "next/image";
import dynamic from 'next/dynamic';

const MockReceptionist = dynamic(() => import('./MockReceptionist'), { ssr: false });
const GoogleMapSequence = dynamic(() => import('./GoogleMapSequence'), { ssr: false });

// --- Scaled Desktop Iframe Component ---
function ScaledIframe({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const width = entries[0].contentRect.width;
        setScale(width / 1440);
      }
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
      <div 
        style={{ 
          width: '1440px', 
          height: `${100 / scale}%`, 
          transform: `scale(${scale})`, 
          transformOrigin: 'top left' 
        }}
      >
        <iframe src={src} title="Premium Dental Website" loading="lazy" className="w-full h-full border-0 pointer-events-auto" />
      </div>
    </div>
  );
}

export default function HowItWorksAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [shortDate, setShortDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
      setCurrentDate(now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }));
      setCurrentDay(now.toLocaleDateString('en-US', { weekday: 'long' }));
      setShortDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative py-24 max-w-6xl mx-auto flex flex-col gap-32 px-6">
      
      {/* The Central Animated Track */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {/* The Dotted Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-[3px] border-dashed border-slate-300 -translate-x-1/2 origin-top" />
        
        {/* The Solid Progress Line */}
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-bond-cyan to-bond-lime -translate-x-1/2 origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        {/* The Glowing Locator Dot */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
          style={{ 
            top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            marginTop: "-8px"
          }}
        >
          <div className="w-5 h-5 bg-white rounded-full shadow-[0_0_20px_#06b6d4] flex items-center justify-center border-[3px] border-bond-cyan">
            <div className="w-1.5 h-1.5 bg-bond-cyan rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Step 1: Google Search (Discovery) */}
      <div className="relative grid md:grid-cols-2 gap-12 md:gap-24 items-center z-10">
        {/* Connection node for desktop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden md:block shadow-[0_0_15px_#3b82f6]" />
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-right"
        >
          <span className="text-sm font-black tracking-widest uppercase text-blue-500 mb-2 block">Step 01: Discovery</span>
          <h3 className="text-3xl font-black text-bond-navy mb-4">Patient Discovers You</h3>
          <p className="text-bond-gray text-lg leading-relaxed">
            They search for a local dentist on their phone. Because our system automates reviews and local SEO, your clinic appears at the absolute top of the Google Maps pack with a glowing 5-star rating.
          </p>
        </motion.div>

        <GoogleMapSequence />
      </div>

      {/* Step 2: High-Converting Site */}
      <div className="relative grid md:grid-cols-2 gap-12 md:gap-24 items-center z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-bond-lime rounded-full hidden md:block shadow-[0_0_15px_#ccff00]" />
        
        {/* Mockup Container - MacBook Pro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 relative mx-auto w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] lg:-ml-12 z-10"
        >
          {/* Screen Bezel */}
          <div className="relative aspect-[16/10] bg-slate-900 rounded-t-xl md:rounded-t-2xl rounded-b-sm p-1.5 md:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10">
            {/* Notch / Camera */}
            <div className="absolute top-1.5 md:top-2.5 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 bg-slate-900 rounded-b-xl z-50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-[#222]" />
            </div>
            
            {/* Display / Iframe */}
            <div className="w-full h-full relative bg-white overflow-hidden rounded-sm md:rounded pointer-events-auto">
              <ScaledIframe src="https://dental-premium-site-1.vercel.app/" />
            </div>
          </div>
          
          {/* Base/Keyboard area */}
          <div className="w-[110%] -ml-[5%] h-3 md:h-4 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-sm rounded-b-xl shadow-2xl relative flex justify-center border-t border-slate-200">
            {/* Thumb indent */}
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-slate-400 rounded-b-md shadow-inner" /> 
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <span className="text-sm font-black tracking-widest uppercase text-bond-lime mb-2 block">Step 02: Conversion</span>
          <h3 className="text-3xl font-black text-bond-navy mb-4">Premium Experience</h3>
          <p className="text-bond-gray text-lg leading-relaxed">
            They click your listing and land on a hyper-fast, luxurious website. The high-end design immediately builds trust and primes them to book.
          </p>
        </motion.div>
      </div>

      {/* Step 3: AI Chatbot Interaction */}
      <div className="relative grid md:grid-cols-2 gap-12 md:gap-24 items-center z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-bond-cyan rounded-full hidden md:block shadow-[0_0_15px_#06b6d4]" />
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-right"
        >
          <span className="text-sm font-black tracking-widest uppercase text-bond-cyan mb-2 block">Step 03: Automation</span>
          <h3 className="text-3xl font-black text-bond-navy mb-4">The AI Takes Over</h3>
          <p className="text-bond-gray text-lg leading-relaxed">
            Instead of calling and getting put on hold, they tap the chat. The Invictus AI instantly answers complex dental questions and guides them to book directly in your calendar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full z-10"
        >
          <MockReceptionist />
        </motion.div>
      </div>

      {/* Step 4: The Payoff (Doctor's Phone Lock Screen) */}
      <div className="relative grid md:grid-cols-2 gap-12 md:gap-24 items-center z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full hidden md:block shadow-[0_0_15px_#10b981]" />
        
        {/* Doctor's Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-[12px] border-slate-950 shadow-2xl overflow-hidden ring-1 ring-slate-800"
        >
          {/* Background Wallpaper */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950 opacity-80" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          
          <div className="pt-16 pb-8 flex flex-col items-center justify-center text-white relative z-10">
            <div className="text-6xl font-extralight tracking-tight mb-2">{currentTime || "10:14"}</div>
            <div className="text-lg font-medium text-slate-200">{currentDay}, {currentDate}</div>
          </div>

          <div className="w-full px-4 mt-8 relative z-10 space-y-2">
            <motion.div 
              initial={{ y: 40, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 15 }}
              viewport={{ margin: "0px", once: false }}
              className="relative bg-[#1a1a1a]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-4 flex gap-4 items-start shadow-[0_0_40px_rgba(16,185,129,0.3)] overflow-visible"
            >
              {/* WA-AAA expanding ring effect */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0.8 }}
                whileInView={{ scale: 1.3, opacity: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl border-2 border-emerald-500 pointer-events-none"
              />

              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <BellRing className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-white">New Appointment</h4>
                  <span className="text-xs text-slate-400">Now</span>
                </div>
                <p className="text-sm text-slate-300">
                  <span className="font-bold text-white">Priya Sharma</span> booked an emergency consultation for Today at 2:30 PM.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 w-full flex justify-between px-10 z-10">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white rounded-full z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <span className="text-sm font-black tracking-widest uppercase text-emerald-500 mb-2 block">Step 04: The Result</span>
          <h3 className="text-3xl font-black text-bond-navy mb-4">You Wake Up Booked</h3>
          <p className="text-bond-gray text-lg leading-relaxed">
            No chasing leads. The system works 24/7. You simply get a notification on your phone that a new patient has booked and intake forms have been signed.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
