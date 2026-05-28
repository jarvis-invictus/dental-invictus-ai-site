
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

            <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Breadcrumb / Back Link */}
                <div className="mb-12">
                    <Link href="/#services" className="inline-flex items-center text-slate-500 hover:text-bond-navy transition-colors font-medium">
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                        Back to Services
                    </Link>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[80vh]">
                    {/* Left Panel - "Project Folder Cover" Style */}
                    <div className="w-full md:w-[40%] bg-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden border-r border-slate-100">
                        {/* Decorative "Tape" */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-100/50 rotate-1 border border-white/40 shadow-sm backdrop-blur-sm z-20"></div>

                        <div className="relative z-10">
                            {/* Sticker Badge */}
                            <div className="mb-8 transform -rotate-2">
                                <div className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm inline-block border border-black/5 ${service.color} ${service.textColor}`}>
                                    Strategic Core
                                </div>
                            </div>

                            {/* Main Title as a Big Sticker */}
                            <div className="relative mb-8">
                                <div className={`absolute inset-0 transform rotate-1 rounded-sm opacity-20 ${service.color}`}></div>
                                <h1 className="relative text-4xl md:text-5xl font-black text-bond-navy leading-[0.9] tracking-tighter uppercase transform -rotate-1">
                                    {service.title}
                                </h1>
                            </div>

                            <div className={`pl-4 border-l-4 mb-10 ${service.color.replace('bg-', 'border-')}`}>
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
                    </div>

                    {/* Right Panel - "Open Document" Style */}
                    <div className="w-full md:w-[60%] p-8 md:p-12 bg-white relative">
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
            </div>
            <Footer />
        </main>
    );
}
