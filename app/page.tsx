"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Dynamic imports to prevent SSR issues and async component conflicts
const Spline = dynamic(() => import("@splinetool/react-spline"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-50/5 animate-pulse rounded-3xl" />
});

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

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ rotate: -2, scale: 1.05 }}
              className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-8 shadow-sticker transform -rotate-2"
            >
              Dental Clinics Only
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-bond-navy leading-[1.1] mb-8 tracking-tight text-balance">
              Word of mouth built your clinic. <br />
              <span className="relative inline-block px-1 mt-1">
                <span className="relative z-10 text-bond-navy">A system</span>
                <span className="absolute bottom-1.5 left-0 w-full h-4 bg-bond-cyan/30 -rotate-1 rounded-sm -z-0"></span>
              </span> <br />
              will scale it.
            </h1>

            <p className="text-xl text-bond-gray mb-10 leading-relaxed max-w-lg font-medium">
              You trained for years to practice dentistry, not chase marketing. We build predictable patient growth engines for BDS clinics in Maharashtra—delivering <strong>30+ new patient appointments</strong> every month, guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start z-10 relative">
              <a href="https://wa.me/919156467641?text=Hi%20Sahil,%20I'd%20like%20to%20book%20a%20free%20patient%20growth%20audit%20for%20my%20dental%20clinic." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-xl shadow-bond-navy/20 flex items-center gap-3 group">
                  WhatsApp Us
                  <div className="bg-bond-lime text-bond-navy rounded-full p-1 group-hover:rotate-45 transition-transform">
                    <ArrowRight size={18} strokeWidth={3} />
                  </div>
                </Button>
              </a>
              <a href="#services">
                <Button variant="secondary" size="lg">
                  See Our Work
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Floating Cards */}
          <div className="relative h-[550px] hidden lg:block w-full">
            {/* Dynamic Abstract Glow in Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-bond-lime/10 via-bond-cyan/5 to-bond-purple/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            <div className="relative w-full h-full">
              {/* Float Card 1: Lime Shadow - New Patients */}
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-12 bg-white p-6 rounded-2xl shadow-sticker-lime border border-slate-100 w-64 z-20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-bond-lime/20 p-2 rounded-xl text-bond-navy">
                    <svg className="w-5 h-5 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-9-4.5h12M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider text-bond-gray">Performance</span>
                </div>
                <div className="text-4xl font-black text-bond-navy mb-1">+34</div>
                <div className="text-xs text-bond-gray font-bold">New Patients This Month</div>
              </motion.div>

              {/* Float Card 2: Navy Background - Google Reviews */}
              <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-48 right-8 bg-bond-navy p-6 rounded-2xl shadow-2xl border border-bond-navy/50 w-72 z-10"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-xs uppercase tracking-wider text-bond-lime">Trust Score</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Live Sync</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl font-black text-white">⭐ 4.9</div>
                </div>
                <div className="text-xs text-slate-300 font-medium">Google Reviews — 150+ Verified Ratings</div>
              </motion.div>

              {/* Float Card 3: Purple Shadow - Appointments Booked */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-16 left-1/4 bg-white p-6 rounded-2xl shadow-sticker-purple border border-slate-100 w-64 z-30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-bond-purple/10 p-2 rounded-xl text-bond-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider text-bond-gray">Capacity</span>
                </div>
                <div className="text-4xl font-black text-bond-navy mb-1">127</div>
                <div className="text-xs text-bond-gray font-bold">Appointments Booked This Month</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Problem ── */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
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
                <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                  Sound Familiar?
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl md:text-3xl font-bold text-bond-navy mb-16 max-w-3xl mx-auto leading-snug"
          >
            Every dental clinic owner in Maharashtra faces these three problems.
          </motion.p>

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
                <svg className="w-7 h-7 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
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
              className="bond-card bg-white rounded-3xl p-8 shadow-sticker-cyan border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-bond-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-bond-cyan" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
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
              className="bond-card bg-white rounded-3xl p-8 shadow-sticker-purple border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-bond-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-bond-purple" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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


      {/* ── Section 3: Solution ── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
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
                className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-8 shadow-sticker transform -rotate-2"
              >
                The Fix
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-bond-navy leading-tight mb-6 tracking-tight">
                One system. <br />
                Three services. <br />
                <span className="relative inline-block px-1">
                  <span className="relative z-10">Complete patient growth.</span>
                  <span className="absolute bottom-1.5 left-0 w-full h-4 bg-bond-cyan/25 -rotate-1 rounded-sm -z-0" />
                </span>
              </h2>

              <div className="space-y-5 text-lg text-bond-gray leading-relaxed font-medium max-w-lg">
                <p>
                  Most clinics try random things — a freelancer for the website, a student for Instagram, a relative who "knows about Google." None of it connects. None of it is measured.
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
                  transition={{ duration: 0.4, delay: 0.3 }}
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

                {/* Connector line */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-bond-lime/40 to-bond-cyan/40" />
                </div>

                {/* Service Pill 2 — Meta Ads */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
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

                {/* Connector line */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-bond-cyan/40 to-bond-purple/40" />
                </div>

                {/* Service Pill 3 — Reputation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
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
                <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                  What We Offer
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
            Exactly three services. Nothing more, nothing less. Every one built specifically for dental clinics.
          </motion.p>

          {/* 3-Column Pricing Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">

            {/* Card 1 — Website */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white rounded-3xl shadow-sticker-lime border border-slate-100 overflow-hidden flex flex-col group"
            >
              {/* Card Header */}
              <div className="bg-bond-lime p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-bond-navy/60 mb-2">Service 01</div>
                <h3 className="text-2xl font-black text-bond-navy">Clinic Website</h3>
                <p className="text-bond-navy/70 text-sm mt-1 font-medium">One-time project fee</p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-bond-gray text-sm leading-relaxed mb-6">
                  A conversion-focused clinic website designed to turn local visitors into booked appointments — not just a digital presence, but a patient acquisition tool.
                </p>

                {/* Deliverables */}
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Mobile-first, fast-loading design",
                    "Appointment booking integration",
                    "Google Maps + local SEO setup",
                    "Services, doctor profile, and gallery pages",
                    "WhatsApp chat button embedded",
                    "3 revision rounds included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-bond-navy">
                      <svg className="w-5 h-5 text-bond-lime shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-slate-100 pt-5 mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-2">Starting from</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-bond-navy">₹8,000</span>
                    <span className="text-bond-gray text-sm font-medium">/ project</span>
                  </div>
                  <div className="text-xs text-bond-gray mt-1">Premium: ₹15,000 – ₹25,000</div>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919156467641?text=Hi%20Sahil,%20I'm%20interested%20in%20a%20clinic%20website%20for%20my%20dental%20practice."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="lime" size="md" className="w-full group-hover:scale-[1.02] transition-transform">
                    WhatsApp to Enquire
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Card 2 — Meta Ads + Content (Featured) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-bond-navy rounded-3xl shadow-2xl border border-bond-navy/50 overflow-hidden flex flex-col relative group"
            >
              {/* Most Popular badge */}
              <div className="absolute top-4 right-4 bg-bond-lime text-bond-navy text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sticker">
                Most Popular
              </div>

              {/* Card Header */}
              <div className="bg-white/5 border-b border-white/10 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-bond-lime/60 mb-2">Service 02</div>
                <h3 className="text-2xl font-black text-white">Meta Ads + Content</h3>
                <p className="text-white/50 text-sm mt-1 font-medium">Monthly retainer</p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Hyper-local Instagram and Facebook ad campaigns paired with monthly content — reels, posts, and creels — that position your clinic as the trusted name in your area.
                </p>

                {/* Deliverables */}
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Monthly Meta ad campaign management",
                    "4–8 posts + reels per month",
                    "Ad creative design included",
                    "Audience targeting — 5km local radius",
                    "Monthly performance report",
                    "Ad spend is your own budget (separate)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                      <svg className="w-5 h-5 text-bond-lime shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-white/10 pt-5 mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Starting from</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">₹8,000</span>
                    <span className="text-white/50 text-sm font-medium">/ month</span>
                  </div>
                  <div className="text-xs text-white/40 mt-1">Growth plan: ₹15,000 – ₹20,000/month</div>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919156467641?text=Hi%20Sahil,%20I'm%20interested%20in%20Meta%20Ads%20and%20content%20management%20for%20my%20dental%20clinic."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="lime" size="md" className="w-full group-hover:scale-[1.02] transition-transform">
                    WhatsApp to Enquire
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Card 3 — Reputation Management */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-sticker-cyan border border-slate-100 overflow-hidden flex flex-col group"
            >
              {/* Card Header */}
              <div className="bg-bond-cyan/10 border-b border-bond-cyan/20 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-2">Service 03</div>
                <h3 className="text-2xl font-black text-bond-navy">Reputation Management</h3>
                <p className="text-bond-gray text-sm mt-1 font-medium">Monthly retainer</p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-bond-gray text-sm leading-relaxed mb-6">
                  Automated Google review generation system that requests feedback from happy patients immediately after their visit — so your star rating grows without you lifting a finger.
                </p>

                {/* Deliverables */}
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Post-visit automated review requests via WhatsApp/SMS",
                    "Google Business Profile management",
                    "Response to all incoming reviews",
                    "Monthly review volume report",
                    "Negative review alert and response",
                    "Online presence monitoring",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-bond-navy">
                      <svg className="w-5 h-5 text-bond-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-slate-100 pt-5 mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-2">Starting from</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-bond-navy">₹3,000</span>
                    <span className="text-bond-gray text-sm font-medium">/ month</span>
                  </div>
                  <div className="text-xs text-bond-gray mt-1">Upto ₹5,000/month depending on volume</div>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919156467641?text=Hi%20Sahil,%20I'm%20interested%20in%20reputation%20management%20for%20my%20dental%20clinic."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="primary" size="md" className="w-full group-hover:scale-[1.02] transition-transform">
                    WhatsApp to Enquire
                  </Button>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Add-ons footnote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl border border-slate-100 p-6 shadow-sticker flex flex-wrap gap-6 items-center justify-between"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-gray mb-1">Optional Add-ons</div>
              <p className="text-bond-navy font-medium text-sm">Extra ad creative set • Campaign landing page • Monthly SEO optimization</p>
            </div>
            <div className="flex gap-6 text-sm text-bond-gray font-medium flex-wrap">
              <span>Ad creative set: <strong className="text-bond-navy">₹1,500 – ₹2,500</strong></span>
              <span>Landing page: <strong className="text-bond-navy">₹3,000 – ₹5,000</strong></span>
              <span>SEO/month: <strong className="text-bond-navy">₹2,000 – ₹3,000</strong></span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Section 5: How We Work ── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
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
                <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
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

            {/* Horizontal connector line — desktop only */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-bond-lime via-bond-cyan to-bond-purple" />

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">

              {[
                {
                  step: "01",
                  color: "lime",
                  icon: (
                    <svg className="w-6 h-6 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  ),
                  title: "Free Discovery Call",
                  body: "We spend 20 minutes understanding your clinic — location, current patient flow, goals, and where you feel stuck.",
                  delay: 0,
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
                  delay: 0.1,
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
                  delay: 0.2,
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
                  delay: 0.3,
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
                  delay: 0.4,
                },
              ].map(({ step, color, icon, title, body, delay }) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay }}
                  className="flex flex-col items-center text-center lg:text-center relative"
                >
                  {/* Step circle */}
                  <div className={`w-[104px] h-[104px] rounded-full flex items-center justify-center mb-6 relative shadow-lg border-4 z-10 shrink-0
                    ${color === "lime"    ? "bg-bond-lime border-bond-lime/30" : ""}
                    ${color === "navy"    ? "bg-bond-navy border-bond-navy/30" : ""}
                    ${color === "cyan"    ? "bg-bond-cyan/10 border-bond-cyan/30" : ""}
                    ${color === "purple"  ? "bg-bond-purple/10 border-bond-purple/20" : ""}
                  `}>
                    {icon}
                    {/* Step number badge */}
                    <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-[10px] font-black flex items-center justify-center shadow-md
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
              href="https://wa.me/919156467641?text=Hi%20Sahil,%20I'd%20like%20to%20book%20a%20free%20discovery%20call%20for%20my%20dental%20clinic."
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

      {/* ── Section 6: Social Proof / Testimonials ── */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
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
                <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                  Real Results
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
            Dental clinic owners across Maharashtra who made the shift from random to reliable.
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
              { value: "12+", label: "Dental clinics", accent: "lime" },
              { value: "4.9★", label: "Average Google rating", accent: "navy" },
              { value: "340+", label: "New patients generated", accent: "cyan" },
              { value: "2 wks", label: "Average setup time", accent: "purple" },
            ].map(({ value, label, accent }, i) => (
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
                `}>{value}</div>
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

          {/* 3 Testimonial Cards */}
          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                quote: "Before Invictus AI, I had maybe 8–10 new patients a month, mostly from referrals. Within 60 days of running their Meta ads campaign, I was getting 30+ new enquiries a month. The WhatsApp messages were constant. I had to hire a second receptionist.",
                name: "Dr. Priya Kulkarni",
                clinic: "SmileFirst Dental Clinic, Pune",
                service: "Meta Ads + Content",
                rating: 5,
                initials: "PK",
                accent: "lime",
                delay: 0,
              },
              {
                quote: "My Google rating went from 3.8 stars with 12 reviews to 4.9 stars with 80+ reviews in 4 months. I did not do anything — they set up the automated system and patients started leaving reviews on their own. Now I rank above the clinic that has been around for 20 years.",
                name: "Dr. Amit Desai",
                clinic: "CarePoint Dental, Nashik",
                service: "Reputation Management",
                rating: 5,
                initials: "AD",
                accent: "navy",
                delay: 0.15,
              },
              {
                quote: "My old website was built by a cousin. It looked terrible on mobile and had no booking option. Sahil rebuilt everything in 10 days — clean design, Google Maps integrated, WhatsApp button. Within the first week the site was live, I got 3 appointment inquiries from Google search.",
                name: "Dr. Snehal Pawar",
                clinic: "Pawar Dental Care, Aurangabad",
                service: "Clinic Website",
                rating: 5,
                initials: "SP",
                accent: "purple",
                delay: 0.3,
              },
            ].map(({ quote, name, clinic, service, rating, initials, accent, delay }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="bg-white rounded-3xl p-8 shadow-sticker border border-slate-100 flex flex-col relative"
              >
                {/* Quote mark */}
                <div className={`text-6xl font-black leading-none mb-4 -mt-2 select-none
                  ${accent === "lime"   ? "text-bond-lime/50"   : ""}
                  ${accent === "navy"   ? "text-bond-navy/20"   : ""}
                  ${accent === "purple" ? "text-bond-purple/20" : ""}
                `}>&ldquo;</div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-bond-gray text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Service tag */}
                <div className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 w-fit
                  ${accent === "lime"   ? "bg-bond-lime/20 text-bond-navy"     : ""}
                  ${accent === "navy"   ? "bg-bond-navy/10 text-bond-navy"     : ""}
                  ${accent === "purple" ? "bg-bond-purple/10 text-bond-purple" : ""}
                `}>{service}</div>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0
                    ${accent === "lime"   ? "bg-bond-lime text-bond-navy"   : ""}
                    ${accent === "navy"   ? "bg-bond-navy text-bond-lime"   : ""}
                    ${accent === "purple" ? "bg-bond-purple text-white"     : ""}
                  `}>{initials}</div>
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
            className="inline-block bg-bond-lime text-bond-navy px-6 py-2 font-black text-sm uppercase tracking-wider shadow-sticker transform -rotate-2 mb-10 cursor-default"
          >
            Dental Clinics Only
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
              href="https://wa.me/919156467641?text=Hi%20Sahil,%20I%20want%20to%20book%20a%20free%20discovery%20call%20for%20my%20dental%20clinic."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.04, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-bond-lime text-bond-navy px-8 py-4 rounded-xl font-black text-lg shadow-sticker cursor-pointer"
              >
                {/* WhatsApp icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
      <footer className="bg-bond-navy border-t border-white/10 py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-bond-lime rounded-lg flex items-center justify-center">
                  <span className="text-bond-navy font-black text-sm">I</span>
                </div>
                <span className="text-white font-black text-lg tracking-tight">Invictus AI</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Digital growth for dental clinics in Maharashtra. Website, Meta Ads, and reputation — one system, one team, predictable results.
              </p>
            </div>

            {/* Services */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-lime mb-4">Services</div>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Clinic Website</li>
                <li className="hover:text-white transition-colors cursor-pointer">Meta Ads + Content</li>
                <li className="hover:text-white transition-colors cursor-pointer">Reputation Management</li>
                <li className="hover:text-white transition-colors cursor-pointer">Free Discovery Call</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-lime mb-4">Contact</div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919156467641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-bond-lime transition-colors text-sm group"
                >
                  <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +91 91564 67641
                </a>
                <a
                  href="mailto:sahil@invictus-ai.in"
                  className="flex items-center gap-3 text-slate-400 hover:text-bond-lime transition-colors text-sm group"
                >
                  <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  sahil@invictus-ai.in
                </a>
                <p className="flex items-center gap-3 text-slate-400 text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
            <p>© 2025 Invictus AI. Built for dental clinics across Maharashtra.</p>
            <div className="flex gap-6">
              <a href="https://invictusai.tech" target="_blank" rel="noopener noreferrer" className="hover:text-bond-lime transition-colors">invictusai.tech</a>
              <a href="https://invictus-ai.in" target="_blank" rel="noopener noreferrer" className="hover:text-bond-lime transition-colors">invictus-ai.in</a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}
