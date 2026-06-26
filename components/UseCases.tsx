"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Briefcase,
    Globe,
    Bot,
    Phone,
    MessageSquare,
    Cpu,
    Megaphone,
    CheckCircle2,
    TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

// 7 Use Cases — names match "What We Offer" services exactly
const useCases = [
    {
        id: "consulting",
        label: "AI Consulting & Strategy",
        icon: <Briefcase className="w-5 h-5" />,
        title: "Know Exactly Where AI Fits In Your Business",
        intro: "Most businesses know AI can help — they just don't know where to start. We cut through the noise and give you a clear, actionable plan.",
        points: [
            "Full operational audit to find automation-ready processes",
            "Each opportunity scored by impact, effort, and ROI",
            "A prioritized roadmap you can execute immediately",
            "No vendor lock-in — we recommend what actually works for you"
        ],
        stats: [
            { value: "3-5x", label: "Higher ROI with clear AI strategy" },
            { value: "70%", label: "AI projects fail without a roadmap" },
            { value: "30%", label: "Faster time-to-value with prioritization" }
        ],
        accent: "border-l-amber-400",
        tagBg: "bg-amber-50",
        tagText: "text-amber-600",
        statBg: "bg-amber-50/50",
        statBorder: "border-amber-100"
    },
    {
        id: "web-dev",
        label: "Web Design & Development",
        icon: <Globe className="w-5 h-5" />,
        title: "Websites That Work As Hard As You Do",
        intro: "Your website shouldn't just look good — it should bring in business. We build sites designed around one goal: turning visitors into customers.",
        points: [
            "Mobile-first design that loads fast on any device",
            "Clear conversion paths — from landing to inquiry in seconds",
            "SEO-optimized pages so the right people find you",
            "Built to scale as your business grows"
        ],
        stats: [
            { value: "200%", label: "Average conversion lift from redesign" },
            { value: "100:1", label: "Return on every ₹1 invested in UX" },
            { value: "70%", label: "More mobile conversions with mobile-first" }
        ],
        accent: "border-l-blue-400",
        tagBg: "bg-blue-50",
        tagText: "text-blue-600",
        statBg: "bg-blue-50/50",
        statBorder: "border-blue-100"
    },
    {
        id: "agents",
        label: "AI Conversational Agents",
        icon: <Bot className="w-5 h-5" />,
        title: "Your Business, Available 24/7",
        intro: "Customers don't wait for business hours. Our AI agents handle inquiries, qualify leads, and book appointments — even when your team is off the clock.",
        points: [
            "Trained on your services, pricing, and brand voice",
            "Handles FAQs, lead qualification, and scheduling instantly",
            "Works across your website, Instagram, and messaging apps",
            "Gets smarter over time from real conversations"
        ],
        stats: [
            { value: "80%", label: "Routine inquiries handled without humans" },
            { value: "391%", label: "More conversions when you respond in under 5 min" },
            { value: "₹40", label: "Per interaction vs. ₹500+ for human agents" }
        ],
        accent: "border-l-violet-400",
        tagBg: "bg-violet-50",
        tagText: "text-violet-600",
        statBg: "bg-violet-50/50",
        statBorder: "border-violet-100"
    },
    {
        id: "voice",
        label: "Voice AI Solutions",
        icon: <Phone className="w-5 h-5" />,
        title: "Never Miss a Call Again",
        intro: "Every missed call is a missed opportunity. Our voice AI picks up, understands what the caller needs, and takes action — around the clock.",
        points: [
            "Natural-sounding AI that handles calls like a trained receptionist",
            "Qualifies callers and books appointments automatically",
            "Routes urgent calls to the right person instantly",
            "Works during peak hours, after hours, and holidays"
        ],
        stats: [
            { value: "30%", label: "Of inbound calls missed by avg. business" },
            { value: "₹80K+", label: "Revenue lost per missed call in high-value industries" },
            { value: "60%", label: "Drop in call abandonment with Voice AI" }
        ],
        accent: "border-l-orange-400",
        tagBg: "bg-orange-50",
        tagText: "text-orange-600",
        statBg: "bg-orange-50/50",
        statBorder: "border-orange-100"
    },
    {
        id: "whatsapp",
        label: "WhatsApp Business Automation",
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Reach Customers Where They Actually Are",
        intro: "People check WhatsApp dozens of times a day. We help you show up there — with broadcasts, automated follow-ups, and a team inbox everyone can use.",
        points: [
            "Official business channel with verified branding",
            "Broadcast campaigns that get 3-4x higher open rates than email",
            "Automated sequences for follow-ups, reminders, and updates",
            "Shared team inbox so your whole staff can respond from one number"
        ],
        stats: [
            { value: "98%", label: "Open rate on WhatsApp vs. 20% for email" },
            { value: "45%", label: "Click-through rate vs. email's 2-5%" },
            { value: "25%", label: "Abandoned cart recovery via WhatsApp" }
        ],
        accent: "border-l-green-400",
        tagBg: "bg-green-50",
        tagText: "text-green-600",
        statBg: "bg-green-50/50",
        statBorder: "border-green-100"
    },
    {
        id: "automation",
        label: "AI Automation Workflows",
        icon: <Cpu className="w-5 h-5" />,
        title: "Stop Doing Manually What Machines Can Handle",
        intro: "If your team is copying data between tools, sending emails one by one, or building reports by hand — there's a better way. We automate the busy work.",
        points: [
            "Connect your existing tools so data flows automatically",
            "Auto-generate reports, invoices, and notifications",
            "Trigger actions based on events — no human needed",
            "Free your team to focus on work that actually matters"
        ],
        stats: [
            { value: "5.4x", label: "Return for every ₹1 spent on automation" },
            { value: "90%", label: "Reduction in manual data entry errors" },
            { value: "50%", label: "Operational cost savings with workflow automation" }
        ],
        accent: "border-l-cyan-400",
        tagBg: "bg-cyan-50",
        tagText: "text-cyan-600",
        statBg: "bg-cyan-50/50",
        statBorder: "border-cyan-100"
    },
    {
        id: "marketing",
        label: "Digital Marketing",
        icon: <Megaphone className="w-5 h-5" />,
        title: "Marketing That Shows You What's Working",
        intro: "Running ads without tracking results is just guessing. We build campaigns you can measure, optimize, and scale with confidence.",
        points: [
            "Targeted campaigns across Google, Meta, and social channels",
            "Clear tracking so you know exactly where leads come from",
            "Ongoing A/B testing to improve performance over time",
            "Budget optimization — cut what doesn't work, double down on what does"
        ],
        stats: [
            { value: "200%", label: "Avg. ROI on Google Ads (₹2 for every ₹1)" },
            { value: "5.3x", label: "ROI from SEO compared to paid ads over 3 years" },
            { value: "6x", label: "More likely to be profitable with data-driven marketing" }
        ],
        accent: "border-l-pink-400",
        tagBg: "bg-pink-50",
        tagText: "text-pink-600",
        statBg: "bg-pink-50/50",
        statBorder: "border-pink-100"
    }
];

export default function UseCases() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="use-cases" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Section Header - Sticker Style */}
                <div className="flex justify-center mb-16">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="bg-bond-cyan px-10 py-4 shadow-sticker transform rotate-1 cursor-default relative"
                    >
                        <div className="w-3 h-3 bg-bond-navy/20 rounded-full absolute top-3 left-1/2 -ml-1.5"></div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                            Use Cases
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Service Tabs — ALL always colored */}
                    <div className="lg:col-span-4 flex flex-col space-y-2">
                        {useCases.map((useCase, idx) => (
                            <button
                                key={useCase.id}
                                onClick={() => setActiveTab(idx)}
                                className={cn(
                                    "group w-full text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-bond-cyan focus:ring-offset-2",
                                    activeTab === idx
                                        ? "bg-white border-bond-navy shadow-sticker transform -translate-y-0.5"
                                        : "bg-white/80 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm"
                                )}
                            >
                                <div className="flex items-center gap-3 relative z-10">
                                    {/* Icon — ALWAYS uses its service color */}
                                    <div className={cn(
                                        "w-9 h-9 rounded-lg flex items-center justify-center shadow-sm transition-colors",
                                        useCase.tagBg
                                    )}>
                                        <div className={useCase.tagText}>
                                            {useCase.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        {/* Label — ALWAYS uses its service color */}
                                        <div className={cn(
                                            "font-bold text-xs uppercase tracking-wide leading-tight",
                                            activeTab === idx ? "text-bond-navy" : useCase.tagText
                                        )}>
                                            {useCase.label}
                                        </div>
                                        {activeTab === idx && (
                                            <div className="text-[9px] font-bold text-bond-navy/50 mt-0.5 uppercase tracking-widest">
                                                Currently Viewing
                                            </div>
                                        )}
                                    </div>
                                    {activeTab === idx && (
                                        <div className="ml-auto">
                                            <div className="w-2 h-2 rounded-full bg-bond-navy animate-pulse"></div>
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Use Case Content */}
                    <div className="lg:col-span-8 relative min-h-[420px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, rotate: 1.5, y: 15 }}
                                animate={{ opacity: 1, rotate: 0.5, y: 0 }}
                                exit={{ opacity: 0, rotate: -1.5, y: -15 }}
                                transition={{ duration: 0.25 }}
                                className="bg-white p-8 md:p-10 rounded-sm shadow-sticker border border-slate-200 relative"
                            >
                                {/* Paper tape decoration */}
                                <div className="absolute -top-3 left-1/2 w-28 h-7 bg-yellow-100/60 backdrop-blur-sm -translate-x-1/2 rotate-1 border border-yellow-200/50 shadow-sm z-20"></div>

                                {/* Service Tag */}
                                <div className="mb-4">
                                    <span className={cn(
                                        "text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-widest",
                                        useCases[activeTab].tagBg,
                                        useCases[activeTab].tagText
                                    )}>
                                        {useCases[activeTab].label}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-black text-bond-navy leading-tight tracking-tight mb-4">
                                    {useCases[activeTab].title}
                                </h3>

                                {/* Intro */}
                                <p className="text-slate-600 text-base font-medium leading-relaxed mb-5">
                                    {useCases[activeTab].intro}
                                </p>

                                {/* Bullet Points */}
                                <div className={cn(
                                    "border-l-4 pl-5 space-y-2.5 mb-6",
                                    useCases[activeTab].accent
                                )}>
                                    {useCases[activeTab].points.map((point, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <CheckCircle2 className={cn("w-4 h-4 mt-0.5 flex-shrink-0", useCases[activeTab].tagText)} />
                                            <span className="text-bond-navy text-sm font-medium leading-snug">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* ROI Stats Row */}
                                <div className="grid grid-cols-3 gap-3">
                                    {useCases[activeTab].stats.map((stat, i) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "rounded-xl p-3 border text-center",
                                                useCases[activeTab].statBg,
                                                useCases[activeTab].statBorder
                                            )}
                                        >
                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                <TrendingUp className={cn("w-3.5 h-3.5", useCases[activeTab].tagText)} />
                                                <span className={cn("text-xl md:text-2xl font-black tracking-tight", useCases[activeTab].tagText)}>
                                                    {stat.value}
                                                </span>
                                            </div>
                                            <span className="text-[10px] md:text-[11px] font-semibold text-slate-500 leading-tight block">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorations */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-slate-100 rounded-full blur-2xl -z-10"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
