"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Network, Zap, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function WhoWeAre() {
    return (
        <section id="who-we-are" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Header: Rotated Sticker */}
                <div className="flex justify-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20, rotate: -5 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        viewport={{ once: true }}
                        className="relative cursor-default"
                    >
                        {/* Tape Strip */}
                        <div className="absolute -top-4 left-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm -translate-x-1/2 rotate-2 shadow-sm border border-white/50 z-20"></div>

                        <div className="bg-bond-lime px-8 py-4 shadow-sticker transform rotate-[-1deg] transition-transform">
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                                Who We Are
                            </h2>
                        </div>
                    </motion.div>
                </div>

                {/* Main Content: The "Dossier" / Project Folder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-sticker p-8 md:p-12 relative max-w-6xl mx-auto"
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-3 left-12 w-24 h-6 bg-slate-200/50 -rotate-2 backdrop-blur-sm shadow-sm border border-white/40"></div>
                    <div className="absolute -bottom-3 right-12 w-32 h-8 bg-bond-lime/20 rotate-1 backdrop-blur-sm shadow-sm border border-white/40"></div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: The Manifesto */}
                        <div>
                            <div className="mb-8 relative">
                                <h3 className="text-3xl md:text-5xl font-bold text-bond-navy mb-6 leading-tight">
                                    We build <span className="relative inline-block px-2 transform -rotate-1"><span className="absolute inset-0 bg-bond-lime -z-10 transform skew-x-[-10deg]"></span>systems</span>,<br />
                                    not just software.
                                </h3>

                                <div className="space-y-6 text-lg text-bond-gray leading-relaxed font-medium">
                                    <p>
                                        We are not a traditional dev shop. We are your <strong className="text-bond-navy bg-yellow-100 px-1">AI Strategy Partner</strong>.
                                    </p>
                                    <p>
                                        Invictus AI builds custom intelligence that integrates deeply with your existing stack,
                                        turning manual chaos into <strong className="text-bond-navy border-b-2 border-bond-lime">automated precision</strong>.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-bond-purple text-white flex items-center justify-center shrink-0 shadow-sm font-bold group-hover:scale-110 transition-transform">
                                        01
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-bond-navy mb-1">Custom AI Agents</h3>
                                        <p className="text-slate-600">Trained on your data to handle support, sales, and operations 24/7.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-bond-cyan text-bond-navy flex items-center justify-center shrink-0 shadow-sm font-bold group-hover:scale-110 transition-transform">
                                        02
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-bond-navy mb-1">Enterprise Integration</h3>
                                        <p className="text-slate-600">Seamlessly connecting your CRM, Database, and APIs into one unified workflow.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-bond-orange text-white flex items-center justify-center shrink-0 shadow-sm font-bold group-hover:scale-110 transition-transform">
                                        03
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-bond-navy mb-1">ROI-First Engineering</h3>
                                        <p className="text-slate-600">We only build what drives revenue or saves significant time.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Button Removed */}
                        </div>

                        {/* Right: The "Evidence" / Visual */}
                        <div className="relative">
                            {/* "Polaroid" / Attached Photo style — gentle float */}
                            <motion.div
                                animate={{ y: [0, -8, 0], rotate: [2, 1.5, 2] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-white p-4 pb-16 rounded shadow-xl transform border border-slate-200 relative"
                            >
                                {/* Paperclip */}
                                <div className="absolute -top-4 right-1/2 translate-x-1/2 text-slate-400 z-20">
                                    <Paperclip className="w-12 h-12 rotate-[-5deg]" />
                                </div>

                                <div className="bg-bond-navy rounded overflow-hidden aspect-square relative group">
                                    {/* Fake Code / Dashboard Visual */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-bond-navy via-slate-900 to-bond-navy opacity-50"></div>

                                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-6 opacity-70">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3, duration: 0.5 }}
                                                className="font-mono text-xs sm:text-sm text-green-400 mb-2"
                                            >$ invictus init system_wait</motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.7, duration: 0.5 }}
                                                className="font-mono text-xs sm:text-sm text-slate-300 mb-2"
                                            >&gt; Analyzing workflows... <span className="text-green-400">Done</span></motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 1.1, duration: 0.5 }}
                                                className="font-mono text-xs sm:text-sm text-slate-300 mb-2"
                                            >&gt; Optimizing core... <span className="text-bond-lime">100%</span></motion.div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 1.4, duration: 0.4, type: "spring" }}
                                                className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10"
                                            >
                                                <div className="text-2xl font-bold text-bond-lime mb-1">99.9%</div>
                                                <div className="text-[10px] text-slate-300 uppercase tracking-wider">Uptime</div>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 1.6, duration: 0.4, type: "spring" }}
                                                className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10"
                                            >
                                                <div className="text-2xl font-bold text-bond-cyan mb-1">&lt;50ms</div>
                                                <div className="text-[10px] text-slate-300 uppercase tracking-wider">Latency</div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 left-0 w-full text-center">
                                    <span className="font-handwriting text-bond-navy text-xl transform -rotate-1 inline-block">
                                        System Architecture v2.0
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
