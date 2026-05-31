"use client";

import { motion } from "framer-motion";
import {
    Bot,
    Cpu,
    Globe,
    MessageSquare,
    Phone,
    Megaphone,
    Briefcase,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";

// Map string icon names to components
const iconMap: Record<string, any> = {
    Globe,
    BrainCircuit: Briefcase, // Mapping BrainCircuit to Briefcase as per original design or keep it literal if desired. Original used Briefcase for Consulting.
    MessageSquare,
    Megaphone,
    Bot,
    Workflow: Cpu, // Mapping Workflow to Cpu as per original design
    Phone
};

export default function ServiceGrid() {

    return (
        <section id="services" className="py-24 px-6 bg-slate-50/50 relative">
            <div className="container mx-auto">
                {/* Sticker Title */}
                <div className="flex justify-center mb-20 relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-bond-lime px-12 py-6 rounded-lg shadow-sticker transform -rotate-2 relative cursor-default curl-lime"
                    >
                        <div className="w-3 h-3 bg-bond-navy/20 rounded-full absolute top-3 left-1/2 -ml-1.5"></div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
                            What We Offer
                        </h2>
                        <div className="absolute -bottom-6 right-0 font-medium text-slate-400 text-sm transform rotate-6">
                            click to learn more...
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => {
                        const Icon = iconMap[service.iconName] || Globe;
                        const isConsulting = service.id === '02'; // Consulting ID

                        // Map colors if not explicitly defined (or use a lookup)
                        // Using the color from the service object directly or mapping it for sticker text
                        const stickerColor = service.color;

                        const stickerTextColor =
                            ['web-design-development', 'ai-conversational-agents'].includes(service.slug) ? 'text-white' : 'text-bond-navy';

                        return (
                            <Link
                                href={`/services/${service.slug}`}
                                key={service.id}
                                className={cn(
                                    "block h-full",
                                    isConsulting ? "md:col-span-2" : "md:col-span-1"
                                )}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className={cn(
                                        "rounded-3xl shadow-sticker relative overflow-hidden group transition-all cursor-pointer h-full flex flex-col bg-white border-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-4 focus:ring-bond-lime/50"
                                    )}
                                >
                                    {/* Decorative Tape/Sticker Elements (Unified) */}
                                    <div className="absolute -top-3 left-1/2 w-24 h-6 bg-white/30 backdrop-blur-sm transform -translate-x-1/2 rotate-1 shadow-sm border border-white/40 z-30"></div>

                                    {/* Invictus Logo Overlay */}
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <Image
                                            src="/logo.png"
                                            alt="Invictus AI"
                                            width={160}
                                            height={16}
                                            className="h-4 w-auto object-contain opacity-50 grayscale mix-blend-multiply"
                                        />
                                    </div>

                                    <div className="relative z-10 flex-1 flex flex-col items-start h-full">

                                        {/* Sticker Header (Unified) */}
                                        <div className="absolute top-6 -left-2 z-20 transform -rotate-2">
                                            <div className={cn(
                                                stickerColor,
                                                stickerTextColor,
                                                "inline-block px-4 py-2 shadow-sm transform skew-x-[-5deg]",
                                                isConsulting ? "px-6 py-3" : "px-4 py-2"
                                            )}>
                                                <h3 className={cn(
                                                    "font-black uppercase tracking-tighter skew-x-[5deg]",
                                                    isConsulting ? "text-2xl md:text-3xl" : "text-lg leading-tight"
                                                )}>
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Main Content Area */}
                                        <div className={cn(
                                            "px-6 relative z-10 flex flex-col flex-1 w-full",
                                            isConsulting ? "mt-28" : "mt-24" // Adjust margin for header space
                                        )}>

                                            {/* Description Note */}
                                            <div className={cn(
                                                "p-6 rounded-xl border transform mb-6 shadow-sm flex-1",
                                                isConsulting ? "bg-yellow-50/50 border-yellow-100/50 rotate-1" : "bg-slate-50 border-slate-100 -rotate-1 group-hover:rotate-0 transition-transform"
                                            )}>
                                                <p className={cn(
                                                    "font-medium text-slate-700 leading-relaxed",
                                                    isConsulting ? "text-xl md:text-2xl" : "text-lg"
                                                )}>
                                                    &quot;{service.description}&quot;
                                                </p>

                                                {/* Micro-Label */}
                                                <div className="mt-4 flex items-center gap-2">
                                                    <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                        {isConsulting ? "Strategy Note" : "Service Note"}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Footer / Action */}
                                            <div className="mt-auto flex justify-end pb-8">
                                                <div className="group/btn relative inline-block">
                                                    {isConsulting && (
                                                        <div className="absolute inset-0 bg-bond-navy rounded-full transform translate-y-1 translate-x-1 transition-transform group-hover/btn:translate-y-2 group-hover/btn:translate-x-2"></div>
                                                    )}
                                                    <div className={cn(
                                                        "relative border-2 border-bond-navy text-bond-navy rounded-full font-bold uppercase tracking-wide flex items-center gap-2 hover:-translate-y-1 hover:-translate-x-1 transition-transform bg-white",
                                                        isConsulting ? "px-6 py-2 text-sm" : "px-4 py-1.5 text-xs"
                                                    )}>
                                                        View <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
