"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
    PhoneCall,
    Search,
    FileText,
    Code2,
    Rocket,
    HeadphonesIcon
} from "lucide-react";

import { siteConfig } from "@/lib/config";

const steps = [
    {
        icon: <PhoneCall />,
        title: "Discovery Call",
        description: "We discuss your goals, pain points, and what success looks like for you.",
        color: "bg-bond-purple",
        iconColor: "text-white",
        dotColor: "bg-bond-purple"
    },
    {
        icon: <Search />,
        title: "AI Audit",
        description: "Deep dive into your current workflows to find high-impact automation opportunities.",
        color: "bg-bond-lime",
        iconColor: "text-bond-navy",
        dotColor: "bg-bond-lime"
    },
    {
        icon: <FileText />,
        title: "Custom Proposal",
        description: "A tailored roadmap with clear milestones, timelines, and expected ROI.",
        color: "bg-white border-2 border-slate-200",
        iconColor: "text-bond-navy",
        dotColor: "bg-slate-300"
    },
    {
        icon: <Code2 />,
        title: "Build & Test",
        description: "Agile development with weekly demos so you see progress in real time.",
        color: "bg-bond-cyan",
        iconColor: "text-white",
        dotColor: "bg-bond-cyan"
    },
    {
        icon: <Rocket />,
        title: "Launch & Training",
        description: "We deploy, onboard your team, and make sure everything runs smoothly.",
        color: "bg-bond-navy",
        iconColor: "text-white",
        dotColor: "bg-bond-navy"
    },
    {
        icon: <HeadphonesIcon />,
        title: "Ongoing Support",
        description: "24/7 monitoring, optimization, and scaling as your business grows.",
        color: "bg-bond-pink",
        iconColor: "text-white",
        dotColor: "bg-bond-pink"
    }
];

export default function ProcessTimeline() {
    return (
        <section id="process" className="py-24 px-6 bg-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-bond-lime/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-bond-purple/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Section Header — Sticker Style (matches the rest of the site) */}
                <div className="flex justify-center mb-6">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="bg-bond-lime px-10 py-4 shadow-sticker transform -rotate-1 cursor-default relative"
                    >
                        <div className="w-3 h-3 bg-bond-navy/20 rounded-full absolute top-3 left-1/2 -ml-1.5"></div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                            How We Work
                        </h2>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-500 text-lg font-medium mb-16 max-w-xl mx-auto"
                >
                    A proven 6-step framework that takes you from first call to full automation.
                </motion.p>

                {/* Timeline Flow */}
                <div className="relative">

                    {/* Connector Line (Desktop) — animated */}
                    <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[3px] bg-slate-100 z-0">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-bond-purple via-bond-cyan to-bond-lime origin-left"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-5">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col items-center text-center group relative"
                            >
                                {/* Icon Box */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -6 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-5 shadow-lg relative z-10 ${step.color}`}
                                >
                                    <div className={`w-7 h-7 ${step.iconColor}`}>
                                        {step.icon}
                                    </div>
                                </motion.div>

                                {/* Dot on connector line (Desktop) */}
                                <div className={`hidden lg:block absolute top-[52px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 ring-4 ring-white ${step.dotColor}`}></div>

                                {/* Step Badge */}
                                <div className="mb-2">
                                    <span className="bg-slate-100 text-slate-400 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest border border-slate-200">
                                        Step 0{idx + 1}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-base text-bond-navy mb-1.5 leading-tight">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[170px]">
                                    {step.description}
                                </p>

                                {/* Arrow connector between steps (Desktop) */}
                                {idx < steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 + 0.3 }}
                                        className="hidden lg:block absolute -right-3 top-[46px] z-20"
                                    >
                                        <ArrowRight className="w-4 h-4 text-slate-300" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>



                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex justify-center mt-16"
                >
                    <a href={siteConfig.urls.booking} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-bond-navy text-white px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wide shadow-xl flex items-center gap-3 group"
                        >
                            Book a Strategy Call
                            <div className="bg-bond-lime text-bond-navy rounded-full p-1.5 group-hover:rotate-45 transition-transform duration-300">
                                <ArrowRight size={18} strokeWidth={3} />
                            </div>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
