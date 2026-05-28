"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { X, ArrowRight, CheckCircle2, AlertCircle, Lightbulb, Highlighter } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDetail {
    id: string;
    title: string;
    description: string;
    howItWorks: {
        title: string;
        steps: string[];
    };
    useCase: {
        title: string;
        problem: string;
        solution: string;
        result: string;
    };
}

interface ServiceExpansionProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceDetail | null;
    color: string;
}

export default function ServiceExpansion({ isOpen, onClose, service, color }: ServiceExpansionProps) {
    // Handle Escape key
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
            // Focus close button on open
            setTimeout(() => closeBtnRef.current?.focus(), 100);
        }
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-bond-navy/90 backdrop-blur-md z-50"
                        aria-hidden="true"
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row pointer-events-auto relative">

                            {/* Close Button */}
                            <button
                                ref={closeBtnRef}
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 bg-white hover:bg-slate-50 p-2 rounded-full transition-colors shadow-sm border border-slate-100 focus:outline-none focus:ring-2 focus:ring-bond-navy"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-bond-navy" />
                            </button>

                            {/* Left Panel - "Project Folder Cover" Style */}
                            <div className="w-full md:w-[40%] bg-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden border-r border-slate-100">
                                {/* Decorative "Tape" */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-100/50 rotate-1 border border-white/40 shadow-sm backdrop-blur-sm z-20"></div>

                                <div className="relative z-10">
                                    {/* Sticker Badge */}
                                    <div className="mb-8 transform -rotate-2">
                                        <div className="bg-bond-lime text-bond-navy px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm inline-block border border-bond-lime">
                                            Strategic Core
                                        </div>
                                    </div>

                                    {/* Main Title as a Big Sticker */}
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-bond-lime transform rotate-1 rounded-sm opacity-20"></div>
                                        <h2 className="relative text-4xl md:text-5xl font-black text-bond-navy leading-[0.9] tracking-tighter uppercase transform -rotate-1">
                                            {service.title}
                                        </h2>
                                    </div>

                                    <div className="pl-4 border-l-4 border-bond-lime mb-10">
                                        <p className="text-bond-navy text-lg font-medium leading-relaxed font-handwriting">
                                            "{service.description}"
                                        </p>
                                    </div>

                                    <a href="https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-bond-navy text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl group w-fit">
                                            <span className="uppercase tracking-wide text-sm">Start Project</span>
                                            <div className="bg-bond-lime w-6 h-6 rounded-full flex items-center justify-center text-bond-navy">
                                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </button>
                                    </a>
                                </div>

                                {/* Background Pattern / Branding */}
                                <div className="absolute bottom-6 left-8 opacity-20 pointer-events-none select-none">
                                    <img
                                        src="/logo.png"
                                        alt="Invictus AI"
                                        className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Right Panel - "Open Document" Style */}
                            <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto bg-white relative">
                                {/* Paper Texture Effect */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 opacity-50"></div>

                                {/* Problem / Solution Section */}
                                <div className="space-y-8 mb-12">
                                    <div className="relative">
                                        <h3 className="font-handwriting text-2xl text-bond-navy mb-4 rotate-1 inline-block bg-yellow-100 px-2">The Challenge</h3>
                                        <div className="bg-slate-50 p-6 rotate-1 shadow-sm border border-slate-100">
                                            <p className="text-slate-700 leading-relaxed font-medium">
                                                {service.useCase.problem}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <h3 className="font-handwriting text-2xl text-bond-navy mb-4 -rotate-1 inline-block bg-bond-lime/30 px-2">The Solution</h3>
                                        <div className="bg-white p-6 -rotate-1 shadow-md border border-slate-100 relative">
                                            {/* Highlighter Mark */}
                                            <div className="absolute top-0 left-0 w-1 h-full bg-bond-lime"></div>
                                            <p className="text-bond-navy leading-relaxed font-bold">
                                                {service.useCase.solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Execution Framework */}
                                <div className="mb-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-px bg-slate-200 flex-1"></div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Execution Plan</span>
                                        <div className="h-px bg-slate-200 flex-1"></div>
                                    </div>

                                    <div className="space-y-4">
                                        {service.howItWorks.steps.map((step, idx) => (
                                            <div key={idx} className="flex items-start gap-4 group">
                                                <div className="w-8 h-8 rounded-full bg-bond-lime flex items-center justify-center text-bond-navy font-bold text-sm shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-slate-700 font-medium pt-1 border-b border-slate-100 pb-4 w-full group-hover:border-bond-lime/50 transition-colors">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact / Result */}
                                <div className="bg-bond-navy text-white p-6 rounded-xl shadow-lg transform rotate-1">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-bond-lime p-2 rounded-full text-bond-navy">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Expected Outcome</p>
                                            <p className="font-bold text-lg leading-tight">
                                                {service.useCase.result}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
