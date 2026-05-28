"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Globe, MessageSquare, Bot, Megaphone, Workflow, Phone, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ElementType> = {
    "Web Design & Development": Globe,
    "AI Consulting & Strategy": BrainCircuit,
    "WhatsApp Business Automation": MessageSquare,
    "Digital Marketing": Megaphone,
    "AI Conversational Agents": Bot,
    "AI Automation Workflows": Workflow,
    "Voice AI Solutions": Phone,
};

const stories = [
    {
        business: "The Rich Royals",
        website: "https://therichroyals.in",
        industry: "Forex Institute",
        challenge: "No digital presence. Students came only through Instagram DMs and word of mouth.",
        services: ["Web Design & Development", "AI Consulting & Strategy", "WhatsApp Business Automation", "Digital Marketing"],
        resultHighlight: "2x",
        resultLabel: "Brand Reach",
        results: ["Structured digital presence established", "Ad performance fully tracked"],
        stickerColor: "bg-red-50",
        borderColor: "border-red-300/70",
        tapeColor: "bg-red-200/60",
        accentColor: "text-red-500",
        accentBg: "bg-red-400",
        accentBgLight: "bg-red-100/80",
        accentBorder: "border-red-200",
    },
    {
        business: "Elite Tours & Travel",
        website: "https://elitetravels.in",
        industry: "Travel & Tourism",
        challenge: "Leads falling through the cracks. Manual bookings and follow-ups overwhelmed the team.",
        services: ["AI Consulting & Strategy", "Web Design & Development", "AI Conversational Agents", "WhatsApp Business Automation", "AI Automation Workflows"],
        resultHighlight: "60%",
        resultLabel: "Less Manual Work",
        results: ["Zero leads lost after hours", "Full journey automated"],
        stickerColor: "bg-amber-50",
        borderColor: "border-amber-400/70",
        tapeColor: "bg-amber-200/60",
        accentColor: "text-amber-600",
        accentBg: "bg-amber-500",
        accentBgLight: "bg-amber-100/80",
        accentBorder: "border-amber-300",
    },
    {
        business: "Smile Dental Clinic",
        website: null,
        industry: "Healthcare",
        challenge: "Missed calls, no-shows, and reception overloaded with phone queries.",
        services: ["Voice AI Solutions", "WhatsApp Business Automation", "AI Conversational Agents"],
        resultHighlight: "45%",
        resultLabel: "Fewer No-Shows",
        results: ["Near-zero missed calls", "Staff freed for patient care"],
        stickerColor: "bg-green-50",
        borderColor: "border-green-300/70",
        tapeColor: "bg-green-200/60",
        accentColor: "text-green-500",
        accentBg: "bg-green-400",
        accentBgLight: "bg-green-100/80",
        accentBorder: "border-green-200",
    },
    {
        business: "Bloom Interio",
        website: "https://bloominterio.in",
        industry: "Interior Design",
        challenge: "No structured online presence. Quality leads were hard to come by.",
        services: ["Web Design & Development", "AI Consulting & Strategy"],
        resultHighlight: "3x",
        resultLabel: "More Leads",
        results: ["Portfolio site driving inquiries", "Lead pipeline fully visible"],
        stickerColor: "bg-gray-50",
        borderColor: "border-gray-400/70",
        tapeColor: "bg-gray-200/60",
        accentColor: "text-gray-700",
        accentBg: "bg-gray-700",
        accentBgLight: "bg-gray-100/80",
        accentBorder: "border-gray-300",
    }
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    const goTo = useCallback((idx: number) => {
        setDirection(idx > current ? 1 : -1);
        setCurrent(idx);
    }, [current]);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % stories.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + stories.length) % stories.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next, isPaused]);

    const story = stories[current];

    const variants = {
        enter: (dir: number) => ({ x: dir * 250, opacity: 0, rotate: dir * 3 }),
        center: { x: 0, opacity: 1, rotate: 0.8 },
        exit: (dir: number) => ({ x: dir * -250, opacity: 0, rotate: dir * -3 })
    };

    return (
        <section id="testimonials" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Dotted background */}
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>

            <div className="container mx-auto max-w-5xl relative z-10">

                {/* Sticker Header */}
                <div className="flex justify-center mb-6">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="bg-bond-purple px-10 py-4 shadow-sticker transform rotate-1 cursor-default relative"
                    >
                        <div className="w-3 h-3 bg-white/30 rounded-full absolute top-3 left-1/2 -ml-1.5"></div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                            Client Stories
                        </h2>
                    </motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-500 text-lg font-medium mb-14 max-w-xl mx-auto"
                >
                    Real businesses. Real results.
                </motion.p>

                {/* Carousel */}
                <div className="relative">
                    {/* Nav Arrows */}
                    <button onClick={prev} aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-30 w-11 h-11 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center hover:border-bond-navy hover:scale-110 transition-all focus:outline-none focus:border-bond-navy">
                        <ChevronLeft className="w-5 h-5 text-bond-navy" />
                    </button>
                    <button onClick={next} aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-30 w-11 h-11 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center hover:border-bond-navy hover:scale-110 transition-all focus:outline-none focus:border-bond-navy">
                        <ChevronRight className="w-5 h-5 text-bond-navy" />
                    </button>

                    {/* Card area — pause on hover/focus */}
                    <div
                        className="overflow-hidden relative"
                        style={{ minHeight: '400px' }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onFocus={() => setIsPaused(true)}
                        onBlur={() => setIsPaused(false)}
                        role="region"
                        aria-label="Testimonial carousel"
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className={cn(
                                    "absolute inset-0 border shadow-sticker",
                                    story.stickerColor,
                                    story.borderColor
                                )}
                            >
                                {/* Tape */}
                                <div className={cn(
                                    "absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 rotate-[0.8deg] border border-white/40 shadow-sm z-20",
                                    story.tapeColor
                                )}></div>

                                <div className="grid md:grid-cols-5 h-full min-h-[400px]">

                                    {/* ===== LEFT: Text Content (3/5) ===== */}
                                    <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                                        {/* Industry */}
                                        <span className={cn(
                                            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3",
                                            story.accentBgLight, story.accentColor
                                        )}>
                                            {story.industry}
                                        </span>

                                        {/* Name */}
                                        <h3 className="text-3xl md:text-4xl font-black text-bond-navy uppercase tracking-tight leading-none mb-1">
                                            {story.business}
                                        </h3>

                                        {/* Website */}
                                        {story.website ? (
                                            <a href={story.website} target="_blank" rel="noopener noreferrer"
                                                className={cn("inline-flex items-center gap-1 text-xs font-bold mb-6 hover:text-bond-navy transition-colors w-fit", story.accentColor)}>
                                                {story.website.replace('https://', '')}
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        ) : <div className="mb-6" />}

                                        {/* What we delivered — just service names */}
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                                            What We Delivered
                                        </div>
                                        <div className="space-y-2.5">
                                            {story.services.map((svc, i) => (
                                                <div key={i} className="flex items-center gap-2.5">
                                                    <div className={cn("w-2 h-2 rounded-full flex-shrink-0", story.accentBg)}></div>
                                                    <span className="text-bond-navy text-sm font-bold">{svc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ===== RIGHT: Visual Side (2/5) ===== */}
                                    <div className="md:col-span-2 relative hidden md:flex flex-col items-center justify-center overflow-hidden">

                                        {/* Decorative blobs */}
                                        <div className={cn("absolute w-64 h-64 rounded-full opacity-[0.08] -right-10 -top-10", story.accentBg)}></div>
                                        <div className={cn("absolute w-44 h-44 rounded-full opacity-[0.06] -left-8 bottom-4", story.accentBg)}></div>

                                        {/* Diagonal accent stripes */}
                                        <div className="absolute inset-0 opacity-[0.04] overflow-hidden">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className={cn("absolute h-[2px] rotate-[35deg]", story.accentBg)}
                                                    style={{ width: '200%', top: `${i * 60 - 40}px`, left: '-50%' }} />
                                            ))}
                                        </div>

                                        {/* Big stat */}
                                        <motion.div
                                            key={`stat-${current}`}
                                            initial={{ scale: 0.3, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.15, duration: 0.5, ease: "backOut" }}
                                            className="text-center mb-8 relative z-10"
                                        >
                                            <div className={cn("text-8xl font-black tracking-tighter leading-none", story.accentColor)}>
                                                {story.resultHighlight}
                                            </div>
                                            <div className="text-bond-navy text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                                                {story.resultLabel}
                                            </div>
                                        </motion.div>

                                        {/* Service icons — staggered */}
                                        <motion.div
                                            key={`svc-${current}`}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.35 }}
                                            className="flex flex-wrap justify-center gap-2.5 relative z-10 px-6"
                                        >
                                            {story.services.map((svc, i) => {
                                                const Icon = serviceIcons[svc] || BrainCircuit;
                                                return (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ scale: 0, rotate: -10 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        transition={{ delay: 0.35 + i * 0.07, type: "spring", stiffness: 350, damping: 18 }}
                                                        className={cn(
                                                            "w-12 h-12 rounded-lg border bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center",
                                                            story.accentBorder
                                                        )}
                                                        title={svc}
                                                    >
                                                        <Icon className={cn("w-5 h-5", story.accentColor)} />
                                                    </motion.div>
                                                );
                                            })}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Corner curl */}
                                <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden">
                                    <div className="absolute bottom-0 right-0 w-14 h-14 bg-white/40 transform rotate-45 translate-x-7 translate-y-7 shadow-inner"></div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {stories.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => goTo(idx)}
                                className={cn(
                                    "transition-all duration-300 rounded-full",
                                    current === idx
                                        ? cn("w-8 h-3", s.accentBg)
                                        : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
