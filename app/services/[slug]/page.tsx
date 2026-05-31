
import { services, getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import Link from "next/link";

// Force static generation for these pages
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service Not Found" };
    return {
        title: `${service.title} | Invictus AI`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-bond-lime selection:text-bond-navy">
            <Navbar />

            <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
                {/* Breadcrumb / Back Link */}
                <div className="mb-8">
                    <Link href="/#services" className="inline-flex items-center text-slate-500 hover:text-bond-navy transition-colors text-sm font-bold">
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                        Back to Services
                    </Link>
                </div>

                <div className="bg-white rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_#0f172a] border-4 border-bond-navy flex flex-col md:flex-row min-h-[60vh]">
                    {/* Left Panel - "Project Folder Cover" Style */}
                    <div className="w-full md:w-[45%] bg-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-bond-navy">
                        {/* Decorative "Tape" */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-100/80 -rotate-2 border border-slate-300 shadow-sm z-20"></div>

                        <div className="relative z-10">
                            {/* Sticker Badge */}
                            <div className="mb-6 transform rotate-2 inline-block">
                                <div className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#0f172a] border-2 border-bond-navy ${service.color} ${service.textColor}`}>
                                    Strategic Core
                                </div>
                            </div>

                            {/* Main Title */}
                            <div className="relative mb-6">
                                <h1 className="text-3xl md:text-4xl font-black text-bond-navy leading-[1] tracking-tight uppercase">
                                    {service.title}
                                </h1>
                            </div>

                            <div className="mb-8 p-4 bg-slate-50 border-2 border-bond-navy rounded-xl shadow-[4px_4px_0px_0px_#0f172a] transform -rotate-1">
                                <p className="text-bond-navy text-sm font-bold leading-relaxed">
                                    &quot;{service.description}&quot;
                                </p>
                            </div>

                            <a href="https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB" target="_blank" rel="noopener noreferrer">
                                <button className="bg-bond-navy text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_#ccff00] border-2 border-bond-navy group w-fit">
                                    <span className="uppercase tracking-wide text-xs">Start Project</span>
                                    <div className="bg-bond-lime w-5 h-5 rounded-md flex items-center justify-center text-bond-navy border border-bond-navy">
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right Panel - "Open Document" Style */}
                    <div className="w-full md:w-[55%] p-6 md:p-8 bg-slate-50 relative">
                        {/* Problem / Solution Section */}
                        <div className="space-y-6 mb-10">
                            <div className="relative">
                                <h3 className="font-black text-lg text-bond-navy mb-2 inline-block bg-bond-lime px-2 border-2 border-bond-navy shadow-[2px_2px_0px_0px_#0f172a] -rotate-1">The Challenge</h3>
                                <div className="bg-white p-5 shadow-[4px_4px_0px_0px_#0f172a] border-2 border-bond-navy rounded-xl mt-2">
                                    <p className="text-bond-navy text-sm font-medium leading-relaxed">
                                        {service.useCase.problem}
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <h3 className="font-black text-lg text-bond-navy mb-2 inline-block bg-bond-purple text-white px-2 border-2 border-bond-navy shadow-[2px_2px_0px_0px_#0f172a] rotate-1">The Solution</h3>
                                <div className="bg-bond-cyan/20 p-5 shadow-[4px_4px_0px_0px_#0f172a] border-2 border-bond-navy rounded-xl mt-2">
                                    <p className="text-bond-navy text-sm font-bold leading-relaxed">
                                        {service.useCase.solution}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Execution Framework */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-0.5 bg-bond-navy flex-1"></div>
                                <span className="text-[10px] font-black text-bond-navy uppercase tracking-widest bg-bond-lime px-2 py-0.5 border-2 border-bond-navy shadow-[2px_2px_0px_0px_#0f172a]">Execution Plan</span>
                                <div className="h-0.5 bg-bond-navy flex-1"></div>
                            </div>

                            <div className="space-y-3">
                                {service.howItWorks.steps.map((step, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border-2 border-bond-navy shadow-[2px_2px_0px_0px_#0f172a]">
                                        <div className="w-6 h-6 rounded-md bg-bond-navy flex items-center justify-center text-white font-black text-xs shrink-0">
                                            {idx + 1}
                                        </div>
                                        <p className="text-bond-navy text-sm font-bold pt-0.5">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Impact / Result */}
                        <div className="bg-bond-navy text-white p-5 rounded-xl border-2 border-bond-navy shadow-[6px_6px_0px_0px_#ccff00] transform rotate-1 mt-auto">
                            <div className="flex items-center gap-4">
                                <div className="bg-bond-lime p-2 rounded-lg text-bond-navy border-2 border-bond-navy shadow-[2px_2px_0px_0px_#ffffff]">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-bond-lime uppercase tracking-widest font-black mb-1">Expected Outcome</p>
                                    <p className="font-bold text-sm leading-tight">
                                        {service.useCase.result}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
