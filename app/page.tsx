"use client";


import Navbar from "@/components/Navbar";
import PremiumKitBuilder from "@/components/PremiumKitBuilder";
import Link from "next/link";
import Footer from "@/components/Footer";


import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp, EyeOff, Clock, Globe, Megaphone, Bot, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Count-up animation component for the dashboard card
function CountUpNumber({ from, to, delay, className }: { from: number; to: number; delay: number; className?: string }) {
  const [count, setCount] = useState(from);
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const duration = 1200;
      const steps = to - from;
      const stepTime = duration / steps;
      let current = from;
      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= to) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [from, to, delay]);
  return <div className={className}>{count}</div>;
}



const testimonials = [
  {
    quote: "Before Invictus AI, I had maybe 8–10 new patients a month, mostly from referrals. Within 60 days of running their Meta ads campaign, I was getting 30+ new enquiries a month. The WhatsApp messages were constant. I had to hire a second receptionist.",
    name: "Dr. P.K.",
    clinic: "Dental Clinic Owner, Pune",
    service: "Meta Ads + Content",
    rating: 5,
    initials: "PK",
    accent: "lime",
    stat: "30+ leads in 60 days",
  },
  {
    quote: "My Google rating went from 3.8 stars with 12 reviews to 4.9 stars with 80+ reviews in 4 months. I did not do anything — they set up the automated system and patients started leaving reviews on their own. Now I rank above the clinic that has been around for 20 years.",
    name: "Dr. A.D.",
    clinic: "Dental Clinic Owner, Nashik",
    service: "Reputation Management",
    rating: 5,
    initials: "AD",
    accent: "navy",
    stat: "3.8★ → 4.9★ in 4 months",
  },
  {
    quote: "My old website was built by a cousin. It looked terrible on mobile and had no booking option. Sahil rebuilt everything in 10 days — clean design, Google Maps integrated, WhatsApp button. Within the first week the site was live, I got 3 appointment inquiries from Google search.",
    name: "Dr. S.P.",
    clinic: "Dental Clinic Owner, Aurangabad",
    service: "Clinic Website",
    rating: 5,
    initials: "SP",
    accent: "purple",
    stat: "3 bookings in first week",
  },
];

const FAQ_ITEMS = [
  {
    q: "How do I get more patients for my dental clinic?",
    a: "The most effective way is installing a complete patient growth system — a high-converting website, targeted hyper-local Meta Ads (Instagram and Facebook), and automated Google review generation. All three work together to fill your schedule predictably every month.",
  },
  {
    q: "How much does dental clinic marketing cost in India?",
    a: "At Invictus AI, services start from ₹8,000 for a custom clinic website, ₹8,000/month for hyper-local Meta Ads, and ₹3,000/month for automated Google reputation management. All plans are fully transparent with no lock-in contracts.",
  },
  {
    q: "How do I get more Google reviews for my dental clinic?",
    a: "Our automated reputation management system sends review requests directly to happy patients via WhatsApp or SMS right after their visit — so you collect genuine 5-star reviews without any manual work from your staff.",
  },
  {
    q: "What is the best way to advertise a dental clinic on Instagram?",
    a: "Run hyper-local Instagram and Facebook campaigns targeting a 5km radius around your clinic. Feature real patient results, treatment-specific offers, and before/after visuals — this brings in highly qualified local enquiries rather than random clicks.",
  },
  {
    q: "How long does it take to see results from dental clinic marketing?",
    a: "Our system is fully live in under 2 weeks. Most clinics see enquiries in their first month. We back this with a 60-day guarantee — if you don't hit your target, we keep working free until you do.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50/80 transition-colors group"
            aria-expanded={open === i}
          >
            <span className="font-bold text-bond-navy text-base leading-snug">{item.q}</span>
            <span className={`shrink-0 w-7 h-7 rounded-full border-2 border-bond-lime flex items-center justify-center transition-transform duration-300 ${open === i ? "rotate-45 bg-bond-lime" : "bg-white"}`}>
              <svg className={`w-3.5 h-3.5 ${open === i ? "text-bond-navy" : "text-bond-lime"}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-1 text-bond-gray text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setShowBackToTop(window.scrollY / scrollHeight > 0.5);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans selection:bg-bond-lime selection:text-bond-navy overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bond-lime/8 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bond-cyan/8 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center min-h-[620px]">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 self-start mb-7"
            >
              <span className="bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-black shadow-sticker transform -rotate-1 tracking-tight">
                🦷 Dental Clinics Only
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-[3.75rem] font-black text-bond-navy leading-[1.08] mb-6 tracking-tight"
            >
              15 New Patients.<br />
              <span className="relative inline-block">
                <span className="relative z-10">Every Month.</span>
                <span className="absolute bottom-1 left-0 w-full h-[10px] bg-bond-lime -rotate-1 rounded-sm -z-0 opacity-60" />
              </span>
              <br />
              Guaranteed.
            </motion.h1>

            {/* Sub — 1 line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-lg text-bond-gray leading-relaxed max-w-lg mb-3 font-medium"
            >
              We run your Meta ads, website &amp; Google reviews — fully managed. You focus on dentistry.
            </motion.p>

            {/* Guarantee line + inline disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mb-8"
            >
              <p className="text-sm font-bold text-bond-navy flex items-center gap-2 mb-1">
                <span className="inline-block w-4 h-4 rounded-full bg-bond-lime text-bond-navy text-[10px] flex items-center justify-center font-black shrink-0">✓</span>
                Results in 60 days — or we keep working, free.
              </p>
              <p className="text-[10px] text-bond-gray/45 pl-6 font-normal leading-relaxed">
                *Requires min. ₹5,000/month ads budget. Free continuation covers same scope, up to 30 days.
              </p>
            </motion.div>

            {/* Proof strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 mb-9 pb-9 border-b border-slate-100"
            >
              {[
                { num: "30+", label: "New patients/month" },
                { num: "4.5★", label: "Avg. Google rating" },
                { num: "14d", label: "Go-live speed" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-bond-navy leading-none">{stat.num}</span>
                  <span className="text-[11px] text-bond-gray font-semibold mt-0.5 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 items-start"
            >
              <a href="https://wa.me/919699577641?text=Hi%20Sahil,%20I'd%20like%20to%20book%20a%20free%20patient%20growth%20audit%20for%20my%20dental%20clinic." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-xl shadow-bond-navy/20 flex items-center gap-3 group animate-whatsapp-pulse">
                  Book Free Audit
                  <div className="bg-bond-lime text-bond-navy rounded-full p-1 group-hover:rotate-45 transition-transform">
                    <ArrowRight size={16} strokeWidth={3} />
                  </div>
                </Button>
              </a>
              <a href="#services">
                <Button variant="secondary" size="lg">
                  See Our Services
                </Button>
              </a>
            </motion.div>

            {/* Trust micro-line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="mt-4 text-xs text-bond-gray/60 font-medium"
            >
              Free 20-min call · No commitment · Response within 2 hours
            </motion.p>

            {/* Mobile-only proof pills — the dashboard card above is desktop-only */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-5 flex lg:hidden items-center gap-2 flex-wrap"
            >
              {[
                { val: "16", label: "leads this month", cls: "bg-bond-navy text-white" },
                { val: "4.8★", label: "Google rating", cls: "bg-bond-lime text-bond-navy" },
                { val: "↑ 8%", label: "growth", cls: "bg-emerald-500/10 text-emerald-700 border border-emerald-300/40" },
              ].map((p, i) => (
                <span key={i} className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${p.cls}`}>
                  <span className="font-black">{p.val}</span>
                  <span className="opacity-70 font-medium">{p.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Premium Dashboard Card — animated ── */}
          <motion.div
            initial={{ opacity: 0, x: 48, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            {/* Float wrapper */}
            <div className="animate-float">
              <div className="relative">

                {/* Animated glow halo */}
                <div className="absolute -inset-6 bg-gradient-to-br from-bond-lime/25 via-bond-cyan/10 to-bond-purple/20 rounded-[3rem] blur-3xl animate-glow-pulse" />

                {/* Decorative orbit ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-bond-lime/10 pointer-events-none"
                />

                {/* Main card */}
                <div className="relative bg-bond-navy rounded-3xl p-8 border border-white/10 overflow-hidden animate-glow-pulse">

                  {/* Top-right corner accent glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-bond-lime/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-bond-cyan/8 rounded-full blur-2xl pointer-events-none" />

                  {/* Card header */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-between mb-7"
                  >
                    <div>
                      <p className="text-bond-lime text-[11px] font-black uppercase tracking-widest mb-1">Patient Growth</p>
                      <p className="text-white text-xl font-black">This Month</p>
                    </div>

                  </motion.div>

                  {/* Count-up big number */}
                  <div className="mb-7">
                    <CountUpNumber from={0} to={16} delay={0.9} className="text-7xl font-black text-white leading-none mb-2" />
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="text-slate-400 text-sm font-medium"
                    >New patient enquiries</motion.p>
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex items-center gap-2 mt-1.5"
                    >
                      <span className="text-emerald-400 text-sm font-bold">↑ 8%</span>
                       <span className="text-slate-500 text-xs">This month</span>
                    </motion.div>
                  </div>

                  {/* Animated bar chart */}
                  <div className="mb-7">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3"
                    >Weekly breakdown</motion.p>
                    <div className="flex items-end gap-1.5 h-14">
                      {[5, 8, 6, 11, 9, 13, 10].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{ delay: 1.05 + i * 0.07, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                          style={{
                            height: `${(h / 13) * 100}%`,
                            transformOrigin: "bottom",
                            background: i === 5
                              ? "linear-gradient(to top, #ccff00, #e6ff80)"
                              : "rgba(255,255,255,0.08)",
                          }}
                          className={`flex-1 rounded-t-md ${i === 5 ? "animate-bar-pulse" : ""}`}
                          whileHover={{ scaleX: 1.15, transition: { duration: 0.15 } }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1.5">
                      {["M","T","W","T","F","S","S"].map((d, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 + i * 0.04 }}
                          className={`flex-1 text-center text-[10px] font-medium ${
                            i === 5 ? "text-bond-lime" : "text-slate-600"
                          }`}
                        >{d}</motion.span>
                      ))}
                    </div>
                  </div>

                  {/* 3 stat pills — spring pop */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Google Rating", value: "4.8★", color: "text-bond-lime", bg: "bg-bond-lime/8" },
                      { label: "Ads Active", value: "3", color: "text-sky-400", bg: "bg-sky-400/8" },
                      { label: "New Reviews", value: "+22", color: "text-purple-400", bg: "bg-purple-400/8" },
                    ].map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.6, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 1.5 + i * 0.12, type: "spring", stiffness: 300, damping: 18 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className={`${s.bg} border border-white/8 rounded-xl p-3 text-center cursor-default`}
                      >
                        <p className={`text-base font-black ${s.color}`}>{s.value}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5 font-medium leading-tight">{s.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer with blinking cursor */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 }}
                    className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-bond-lime flex items-center justify-center shrink-0">
                        <span className="text-bond-navy text-[10px] font-black">AI</span>
                      </div>
                      <span className="text-slate-400 text-xs font-medium">Powered by Invictus AI</span>
                    </div>
                    <span className="text-slate-600 text-[10px] flex items-center gap-0.5">
                      Updated just now
                      <span className="animate-blink text-bond-lime font-black">_</span>
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* Subtle Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Section 2: Problem ── */}
      <section id="problems" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        {/* Dot-grid texture — same pattern as WhoWeAre in reference codebase */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section Header — Rotated Sticker */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              viewport={{ once: true }}
              className="relative cursor-default"
            >
              {/* Tape strip */}
              <div className="absolute -top-4 left-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm -translate-x-1/2 rotate-2 shadow-sm border border-white/50 z-20" />
              <div className="bg-bond-lime px-8 py-4 shadow-sticker transform rotate-[-1deg]">
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase text-bond-navy tracking-tight leading-tight">
                  Every Clinic. Same Struggle.
                </h2>
              </div>
            </motion.div>
          </div>

          {/* 3 Pain-Point Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 — No consistent patient flow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bond-card bg-white rounded-3xl p-8 shadow-sticker border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-bond-lime/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-bond-navy" strokeWidth={2.5} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-3">Problem 01</div>
              <h3 className="text-xl font-bold text-bond-navy mb-4 leading-snug">
                Patient flow is unpredictable — some months are full, others are empty.
              </h3>
              <p className="text-bond-gray leading-relaxed">
                Word of mouth is your main source of new patients. It works — until it doesn't. You have no control over when the next patient walks in, which makes it impossible to plan, hire, or grow.
              </p>
            </motion.div>

            {/* Card 2 — Invisible online */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bond-card bg-white rounded-3xl p-8 shadow-sticker border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-bond-lime/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <EyeOff className="w-7 h-7 text-bond-navy" strokeWidth={2.5} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-3">Problem 02</div>
              <h3 className="text-xl font-bold text-bond-navy mb-4 leading-snug">
                You are invisible online while less qualified clinics rank above you.
              </h3>
              <p className="text-bond-gray leading-relaxed">
                When a patient in your area searches "dentist near me," it is not skill that determines who appears first — it is SEO, Google reviews, and online presence. Right now, that advantage belongs to your competitors.
              </p>
            </motion.div>

            {/* Card 3 — No time to manage marketing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bond-card bg-white rounded-3xl p-8 shadow-sticker border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-bond-lime/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-bond-navy" strokeWidth={2.5} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-3">Problem 03</div>
              <h3 className="text-xl font-bold text-bond-navy mb-4 leading-snug">
                You have no time to manage marketing — you are busy treating patients.
              </h3>
              <p className="text-bond-gray leading-relaxed">
                You are already wearing a dozen hats — clinician, manager, accountant. Spending hours on Instagram content, Google ads, and review responses is not realistic. Marketing that depends on your time will never get done consistently.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Subtle Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Section 3: Solution ── */}
      <section id="solution" className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Subtle blobs for depth */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bond-lime/5 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bond-cyan/5 rounded-full blur-[80px] -z-10" />

        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Manifesto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Sticker badge */}
              <motion.div
                whileHover={{ rotate: -2, scale: 1.05 }}
                className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-8 shadow-sticker transform -rotate-2 cursor-pointer"
              >
                The Fix
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-bond-navy leading-tight mb-6 tracking-tight">
                One System. <br />
                Three Services. <br />
                <span className="relative inline-block px-1">
                  <span className="relative z-10">Complete Patient Growth.</span>
                  <span className="absolute bottom-1.5 left-0 w-full h-4 bg-bond-cyan/25 -rotate-1 rounded-sm -z-0" />
                </span>
              </h2>

              <div className="space-y-5 text-lg text-bond-gray leading-relaxed font-medium max-w-lg">
                <p>
                  Most clinics try random things — a freelancer for the website, a student for Instagram, a relative who &quot;knows about Google.&quot; None of it connects. None of it is measured.
                </p>
                <p>
                  We do not sell disconnected services. We install one integrated patient growth system built exclusively for dental clinics — where your website, ads, and reputation work together as a single engine.
                </p>
                <p>
                  <strong className="text-bond-navy border-b-2 border-bond-lime">You focus on dentistry. We fill your schedule.</strong>
                </p>
              </div>
            </motion.div>

            {/* Right — Connected Service System Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Outer container card — the "system" wrapper */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sticker p-8 relative">

                {/* Decorative tape strips — matching reference codebase aesthetic */}
                <div className="absolute -top-3 left-10 w-24 h-6 bg-slate-200/50 -rotate-2 shadow-sm border border-white/40" />
                <div className="absolute -bottom-3 right-10 w-32 h-8 bg-bond-lime/20 rotate-1 shadow-sm border border-white/40" />

                <p className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-6 text-center">Your Patient Growth Engine</p>

                {/* Service Pill 1 — Website */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-bond-lime/10 border border-bond-lime/30 mb-4 group hover:bg-bond-lime/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-bond-lime flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-bond-navy mb-1">Clinic Website</div>
                    <div className="text-sm text-bond-gray">Converts local search traffic into booked appointments — not just a digital brochure.</div>
                  </div>
                </motion.div>

                {/* Connected visual arrow 1 */}
                <div className="flex flex-col items-center justify-center my-1 select-none pointer-events-none">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-bond-lime/40 to-bond-cyan/40 animate-pulse" />
                  <svg className="w-3 h-3 text-bond-cyan/50 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16L6 10H18L12 16Z" />
                  </svg>
                </div>

                {/* Service Pill 2 — Meta Ads */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-bond-navy/5 border border-bond-navy/10 mb-4 group hover:bg-bond-navy/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-bond-navy flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-bond-lime" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-bond-navy mb-1">Meta Ads + Content</div>
                    <div className="text-sm text-bond-gray">Hyper-local Instagram and Facebook campaigns that bring patients from your exact area, not random clicks.</div>
                  </div>
                </motion.div>

                {/* Connected visual arrow 2 */}
                <div className="flex flex-col items-center justify-center my-1 select-none pointer-events-none">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-bond-cyan/40 to-bond-purple/40 animate-pulse" />
                  <svg className="w-3 h-3 text-bond-purple/50 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16L6 10H18L12 16Z" />
                  </svg>
                </div>

                {/* Service Pill 3 — Reputation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-bond-purple/5 border border-bond-purple/20 group hover:bg-bond-purple/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-bond-purple/15 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-bond-purple" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-bond-navy mb-1">Reputation Management</div>
                    <div className="text-sm text-bond-gray">Automated Google review generation after every patient visit — so trust builds on autopilot.</div>
                  </div>
                </motion.div>

                {/* Bottom result label */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-handwriting text-bond-navy text-lg -rotate-1 inline-block">The result?</span>
                  <span className="font-bold text-bond-navy text-sm bg-bond-lime px-3 py-1.5 rounded-lg shadow-sticker">Predictable patient flow</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Subtle Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Section 4: Services + Pricing ── */}
      <section id="services" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section Header */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              viewport={{ once: true }}
              className="relative cursor-default"
            >
              <div className="absolute -top-4 left-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm -translate-x-1/2 rotate-2 shadow-sm border border-white/50 z-20" />
              <div className="bg-bond-lime px-8 py-4 shadow-sticker transform rotate-[-1deg]">
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase text-bond-navy tracking-tight leading-tight">
                  Our Core Services
                </h2>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg text-bond-gray font-medium mb-16 max-w-2xl mx-auto"
          >
            Four core growth systems. Built specifically for dental clinics.
          </motion.p>

          {/* 2-Column Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">

            {/* Card 1 — Website */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white rounded-[2rem] shadow-sticker-lime border border-slate-100 p-10 flex flex-col group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#ccff00] transition-all duration-300 min-h-[480px]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-bond-lime/20 text-bond-navy rounded-2xl flex items-center justify-center border border-bond-lime/30">
                  <Globe className="w-7 h-7" />
                </div>
                <span className="bg-bond-lime/20 text-bond-navy text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shrink-0">From ₹7K</span>
              </div>
              <h3 className="text-3xl font-black text-bond-navy mb-4">Clinic Website</h3>
              <p className="text-bond-gray text-base leading-relaxed mb-8">
                A conversion-focused clinic website designed to turn local visitors into booked appointments — not just a digital brochure, but a patient acquisition engine.
              </p>
              
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Mobile-first, lightning fast design",
                  "Direct appointment booking forms",
                  "Local SEO & Google Maps optimization"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-bond-navy">
                    <svg className="w-5 h-5 text-bond-lime shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/services/clinic-website" className="w-full block mt-auto">
                <Button variant="outline" size="lg" className="w-full border-2 border-bond-lime text-bond-navy hover:bg-bond-lime transition-colors h-14 text-base font-bold">
                  Explore Website Plans <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Card 2 — Meta Ads + Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-bond-navy rounded-[2rem] shadow-2xl border border-bond-navy/50 p-10 flex flex-col group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#0f172a] transition-all duration-300 relative min-h-[480px]"
            >
              <div className="absolute top-6 right-6 text-bond-navy text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sticker animate-shimmer bg-bond-lime">Most Popular</div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                  <Megaphone className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-white mb-4 pr-24">Meta Ads + Content</h3>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Hyper-local Instagram and Facebook ad campaigns paired with monthly content that positions your clinic as the trusted name in your 5km radius.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Monthly targeted ad management",
                  "4-8 posts + reels produced per month",
                  "Transparent lead tracking & reporting"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-white/90">
                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/services/meta-ads" className="w-full block mt-auto">
                <Button variant="lime" size="lg" className="w-full h-14 text-base font-bold shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300">
                  See Advertising Plans <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Card 3 — Chatbot */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-[2rem] shadow-sticker-cyan border border-slate-100 p-10 flex flex-col group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#06b6d4] transition-all duration-300 min-h-[480px]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-bond-purple/20 text-bond-purple rounded-2xl flex items-center justify-center border border-bond-purple/30">
                  <Bot className="w-7 h-7" />
                </div>
                <span className="bg-bond-purple/20 text-bond-purple text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shrink-0">₹3K/mo</span>
              </div>
              <h3 className="text-3xl font-black text-bond-navy mb-4">Website Chatbot</h3>
              <p className="text-bond-gray text-base leading-relaxed mb-8">
                An AI-powered receptionist that lives on your website, answering patient questions instantly, 24/7, and booking appointments directly into your calendar.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Custom trained on your clinic data",
                  "Direct calendar booking integration",
                  "Human handoff for complex questions"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-bond-navy">
                    <svg className="w-5 h-5 text-bond-purple shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/services/ai-chatbot" className="w-full block mt-auto">
                <Button variant="outline" size="lg" className="w-full border-2 border-bond-purple text-bond-purple hover:bg-bond-purple hover:text-white transition-colors h-14 text-base font-bold">
                  Meet the AI Chatbot <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Card 4 — Reputation Management */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-white rounded-[2rem] shadow-sticker-cyan border border-slate-100 p-10 flex flex-col group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#f59e0b] transition-all duration-300 min-h-[480px]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-[#f59e0b]/20 text-[#f59e0b] rounded-2xl flex items-center justify-center border border-[#f59e0b]/30">
                  <Star className="w-7 h-7" />
                </div>
                <span className="bg-[#f59e0b]/20 text-[#f59e0b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shrink-0">₹3K/mo</span>
              </div>
              <h3 className="text-3xl font-black text-bond-navy mb-4 pr-4">Reputation Management</h3>
              <p className="text-bond-gray text-base leading-relaxed mb-8">
                Automated Google review generation system that requests feedback from happy patients immediately after their visit — so your star rating grows effortlessly.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Post-visit automated SMS requests",
                  "Filter out negative 1-3 star reviews",
                  "Google Business Profile optimization"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-bond-navy">
                    <svg className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/services/reputation-management" className="w-full block mt-auto">
                <Button variant="outline" size="lg" className="w-full border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white transition-colors h-14 text-base font-bold">
                  Grow Your Reviews <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Add-ons Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-bond-navy rounded-3xl overflow-hidden shadow-2xl animate-pulse-slow"
          >
            {/* Banner header */}
            <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-white/10">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-bond-lime mb-1">Optional Add-ons</div>
                <p className="text-white font-bold text-lg">Bolt these onto any package. Priced separately.</p>
              </div>
              <div className="hidden sm:block bg-bond-lime/10 border border-bond-lime/20 rounded-xl px-4 py-2">
                <span className="text-bond-lime text-xs font-bold uppercase tracking-wider">Pick What You Need</span>
              </div>
            </div>

            {/* 3 Add-on tiles */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

              {/* Tile 1 — Ad Creative Set */}
              <div className="p-7 group hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-bond-lime/10 border border-bond-lime/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-bond-lime" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-1">Ad Creative Set</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">5 custom ad creatives — static + reel thumbnail — designed for your clinic&apos;s campaign.</p>
                <div className="text-bond-lime font-black text-xl">₹1,500 <span className="text-slate-400 text-sm font-normal">– ₹2,500</span></div>
                <div className="text-slate-500 text-xs mt-0.5">per set</div>
              </div>

              {/* Tile 2 — Campaign Landing Page */}
              <div className="p-7 group hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-bond-lime/10 border border-bond-lime/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-bond-lime" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-1">Campaign Landing Page</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">Dedicated conversion page for a specific treatment — teeth whitening, implants, braces — built to capture leads from ads.</p>
                <div className="text-bond-lime font-black text-xl">₹3,000 <span className="text-slate-400 text-sm font-normal">– ₹5,000</span></div>
                <div className="text-slate-500 text-xs mt-0.5">one-time</div>
              </div>

              {/* Tile 3 — Monthly SEO */}
              <div className="p-7 group hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-bond-lime/10 border border-bond-lime/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-bond-lime" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-1">Monthly SEO Optimisation</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">On-page optimisation, local keyword targeting, and Google Business Profile updates to grow organic rank every month.</p>
                <div className="text-bond-lime font-black text-xl">₹2,000 <span className="text-slate-400 text-sm font-normal">– ₹3,000</span></div>
                <div className="text-slate-500 text-xs mt-0.5">per month</div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Visual Kit Builder Section ── */}
      <PremiumKitBuilder />

      {/* Subtle Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Section 5: How We Work ── */}
      <section id="how-it-works" className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Right-side decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bond-lime/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bond-purple/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section Header */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              viewport={{ once: true }}
              className="relative cursor-default"
            >
              <div className="absolute -top-4 left-1/2 w-32 h-8 bg-slate-100/60 backdrop-blur-sm -translate-x-1/2 rotate-2 shadow-sm border border-white/50 z-20" />
              <div className="bg-bond-lime px-8 py-4 shadow-sticker transform rotate-[-1deg]">
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase text-bond-navy tracking-tight leading-tight">
                  How It Works
                </h2>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg text-bond-gray font-medium mb-20 max-w-2xl mx-auto"
          >
            From first message to first new patient — here is exactly what happens.
          </motion.p>

          {/* Timeline — desktop: 5 steps in a row with connector; mobile: vertical stack */}
          <div className="relative">

            {/* Horizontal connector line — desktop only (dashed/dotted z-0 line) */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] border-t-2 border-dashed border-bond-cyan/30 z-0" />
            
            {/* Vertical connector line — mobile only (dashed/dotted z-0 line) */}
            <div className="lg:hidden absolute top-[52px] bottom-[52px] left-1/2 -translate-x-1/2 border-l-2 border-dashed border-bond-cyan/30 z-0" />

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">

              {[
                {
                  step: "01",
                  color: "lime",
                  icon: (
                    <svg className="w-6 h-6 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  ),
                  title: "We Review Your Online Presence",
                  body: "Before any call, we audit your Google rank, current reviews, website, and competitor visibility — so the first conversation is actually useful.",
                },
                {
                  step: "02",
                  color: "navy",
                  icon: (
                    <svg className="w-6 h-6 text-bond-lime" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  ),
                  title: "Custom Strategy",
                  body: "We send you a tailored growth plan — which services fit your clinic, what to expect in 30, 60, and 90 days, and what it costs.",
                },
                {
                  step: "03",
                  color: "cyan",
                  icon: (
                    <svg className="w-6 h-6 text-bond-cyan" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  ),
                  title: "We Build Your System",
                  body: "Website built, ads set up, reputation automations configured. Full setup in under 2 weeks. You do not touch a thing.",
                },
                {
                  step: "04",
                  color: "purple",
                  icon: (
                    <svg className="w-6 h-6 text-bond-purple" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                    </svg>
                  ),
                  title: "Launch + Run",
                  body: "Everything goes live. Monthly reports keep you informed — impressions, clicks, new leads, review count. Data, not guesswork.",
                },
                {
                  step: "05",
                  color: "lime",
                  icon: (
                    <svg className="w-6 h-6 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  ),
                  title: "Grow Every Month",
                  body: "Results compound. More reviews → higher Google rank → more organic patients → more ad efficiency. One system, growing on its own.",
                },
              ].map(({ step, color, icon, title, body }, idx) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center lg:text-center relative group cursor-pointer transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Step circle */}
                  <div className={`w-[104px] h-[104px] rounded-full flex items-center justify-center mb-6 relative shadow-lg border-4 z-10 shrink-0 group-hover:scale-110 transition-transform duration-200
                    ${color === "lime"    ? "bg-bond-lime border-bond-lime/30" : ""}
                    ${color === "navy"    ? "bg-bond-navy border-bond-navy/30" : ""}
                    ${color === "cyan"    ? "bg-bond-cyan/10 border-bond-cyan/30" : ""}
                    ${color === "purple"  ? "bg-bond-purple/10 border-bond-purple/20" : ""}
                  `}>
                    {icon}
                    {/* Step number badge */}
                    <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-[10px] font-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200
                      ${color === "lime"   ? "bg-bond-navy text-bond-lime"   : ""}
                      ${color === "navy"   ? "bg-bond-lime text-bond-navy"   : ""}
                      ${color === "cyan"   ? "bg-bond-cyan text-white"       : ""}
                      ${color === "purple" ? "bg-bond-purple text-white"     : ""}
                    `}>{step}</span>
                  </div>

                  <h3 className="font-bold text-bond-navy text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-bond-gray text-sm leading-relaxed">{body}</p>
                </motion.div>
              ))}

            </div>
          </div>

          {/* Bottom CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            <p className="text-bond-navy font-bold text-lg">Ready to start?</p>
            <a
              href="https://wa.me/919699577641?text=Hi%20Sahil,%20I'd%20like%20to%20book%20a%20free%20discovery%20call%20for%20my%20dental%20clinic."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="lime" size="lg">
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>

        </div>
      </section>

      {/* Subtle Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Section 6: Social Proof / Testimonials ── */}
      <section id="results" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section Header */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              viewport={{ once: true }}
              className="relative cursor-default"
            >
              <div className="absolute -top-4 left-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm -translate-x-1/2 rotate-2 shadow-sm border border-white/50 z-20" />
              <div className="bg-bond-lime px-8 py-4 shadow-sticker transform rotate-[-1deg]">
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase text-bond-navy tracking-tight leading-tight">
                  What Our Clients Say
                </h2>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg text-bond-gray font-medium mb-16 max-w-2xl mx-auto"
          >
            Dental clinic owners across India who made the shift from random to reliable.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: "100%", label: "Dental-only focus", isNumeric: false, accent: "lime" },
              { value: "4.5+★", label: "Google rating we target", isNumeric: true, from: 4.0, to: 4.9, suffix: "★", accent: "navy" },
              { value: "15+", label: "Avg. new patients/month", isNumeric: false, accent: "cyan" },
              { value: "2 wks", label: "Average setup time", isNumeric: false, accent: "purple" },
            ].map(({ value, label, isNumeric, from, to, suffix, accent }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sticker border border-slate-100"
              >
                <div className={`text-3xl font-black mb-1
                  ${accent === "lime"   ? "text-bond-navy"   : ""}
                  ${accent === "navy"   ? "text-bond-navy"   : ""}
                  ${accent === "cyan"   ? "text-bond-cyan"   : ""}
                  ${accent === "purple" ? "text-bond-purple" : ""}
                `}>
                  {value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-bond-gray">{label}</div>
                <div className={`h-1 w-10 rounded-full mx-auto mt-3
                  ${accent === "lime"   ? "bg-bond-lime"   : ""}
                  ${accent === "navy"   ? "bg-bond-navy"   : ""}
                  ${accent === "cyan"   ? "bg-bond-cyan"   : ""}
                  ${accent === "purple" ? "bg-bond-purple" : ""}
                `} />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Cards - Grid Layout stacking on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map(({ quote, name, clinic, service, rating, initials, accent, stat }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-sticker border border-slate-100 flex flex-col relative"
              >
                {/* Quotation watermark background */}
                <div className="absolute top-6 right-8 text-8xl font-black text-bond-navy opacity-10 select-none pointer-events-none font-serif leading-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Result callout stat */}
                <div className="bg-bond-lime/20 border border-bond-lime/40 rounded-lg px-3 py-1 inline-flex items-center gap-1.5 mb-4">
                  <span className="text-bond-navy text-xs font-black">{stat}</span>
                </div>

                {/* Quote text */}
                <p className="text-bond-gray text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Service tag */}
                <div className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 w-fit bg-bond-lime/20 text-bond-navy">
                  {service}
                </div>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black bg-bond-navy text-white shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="font-bold text-bond-navy text-sm">{name}</div>
                    <div className="text-xs text-bond-gray">{clinic}</div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-bond-navy rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-bond-lime rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <p className="text-white font-medium text-sm">Dental-only agency. We do not work with general businesses.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-white/60 text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bond-lime rounded-full" />
                No lock-in contracts
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bond-lime rounded-full" />
                Results in 30 days or we revisit the plan
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bond-lime rounded-full" />
                Direct WhatsApp access to Sahil
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Subtle Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Section FAQ ── */}
      <section id="faq" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bond-lime/5 rounded-full blur-[80px] -z-10" />
        <div className="container mx-auto max-w-3xl relative z-10">

          {/* Header */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              viewport={{ once: true }}
              className="relative cursor-default"
            >
              <div className="absolute -top-4 left-1/2 w-32 h-8 bg-slate-100/60 backdrop-blur-sm -translate-x-1/2 rotate-2 shadow-sm border border-white/50 z-20" />
              <div className="bg-bond-lime px-8 py-4 shadow-sticker transform rotate-[-1deg]">
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase text-bond-navy tracking-tight leading-tight">
                  Common Questions
                </h2>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-bond-gray font-medium mb-12 max-w-xl mx-auto"
          >
            Everything dental clinic owners ask before getting started.
          </motion.p>

          {/* FAQ Accordion */}
          <FAQAccordion />
        </div>
      </section>

      {/* Subtle Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Section 7: Final CTA ── */}
      <section className="py-24 px-6 bg-bond-navy relative overflow-hidden">
        {/* Background texture — subtle dot grid in lime */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#c8f135 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-bond-lime/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-bond-purple/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">

          {/* Sticker badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ rotate: 2, scale: 1.05 }}
            viewport={{ once: true }}
            className="inline-block bg-bond-lime text-bond-navy px-6 py-2 font-black text-sm uppercase tracking-wider shadow-sticker transform -rotate-2 mb-4 cursor-default"
          >
            Dental Clinics Only
          </motion.div>

          {/* Scarcity signal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/60 text-sm font-medium">Limited clinic spots available</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight"
          >
            Your next patient is already{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-bond-lime">searching for you.</span>
            </span>
            <br />
            Are you easy to find?
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
          >
            We work with a limited number of dental clinics at a time to ensure quality. 
            Book a free 20-minute call — no pressure, no pitch deck. 
            Just an honest conversation about your clinic and what would actually move the needle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="https://wa.me/919699577641?text=Hi%20Sahil,%20I%20want%20to%20book%20a%20free%20discovery%20call%20for%20my%20dental%20clinic."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-bond-lime text-bond-navy px-8 py-4 rounded-xl font-black text-lg shadow-sticker cursor-pointer animate-whatsapp-pulse"
              >
                {/* WhatsApp icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.503 4.94 1.505 5.548 0 10.063-4.515 10.066-10.066.002-2.69-1.047-5.216-2.951-7.121-1.905-1.905-4.43-2.956-7.124-2.959-5.553 0-10.07 4.515-10.074 10.068-.002 1.838.482 3.633 1.403 5.221l-.986 3.6 3.693-.969zm13.125-6.52c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.199 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Book Your Free Call
              </motion.div>
            </a>

            <a href="#services">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base cursor-pointer hover:bg-white/5 transition-colors"
              >
                See Pricing
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </a>
          </motion.div>

          {/* Micro trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-bond-lime rounded-full" />
              Free 20-min call
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-bond-lime rounded-full" />
              No agency jargon
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-bond-lime rounded-full" />
              Dental-only focus
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-bond-lime rounded-full" />
              Setup in 2 weeks
            </span>
          </motion.div>

        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />

      {/* WhatsApp Floating Button is rendered globally in layout.tsx */}

      {/* Scroll to Top Trigger */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-6 left-6 z-[999] bg-white border border-slate-100 text-bond-navy p-3 rounded-xl shadow-sticker hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer font-bold border-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
