"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
    return (
        <footer id="contact" className="bg-bond-navy text-white border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
                    {/* Column 1: Brand & Contact */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="w-10 h-10 bg-bond-lime rounded-lg flex items-center justify-center">
                                <span className="text-bond-navy font-black text-xl">I</span>
                            </div>
                            <span className="text-white font-black text-xl tracking-tight">Invictus AI</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
                            Patient acquisition and automated growth systems built specifically for dental clinics across India.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400 text-sm font-medium">
                                <MapPin className="w-5 h-5 text-bond-lime shrink-0" />
                                <span>Available Globally<br />Based in Pune, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm font-medium hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-bond-lime shrink-0" />
                                <a href={`https://wa.me/919699577641`} target="_blank" rel="noopener noreferrer">+91 96995 77641</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm font-medium hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-bond-lime shrink-0" />
                                <a href={`mailto:contact@invictus-ai.in`} className="break-all">contact@invictus-ai.in</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-bond-lime font-bold mb-6 uppercase tracking-wider text-xs">Our Services</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Dental Clinic Website", href: "/services/clinic-website" },
                                { name: "Meta Ads & Lead Gen", href: "/services/meta-ads" },
                                { name: "AI Website Chatbot", href: "/services/ai-chatbot" },
                                { name: "Google Review Automation", href: "/services/reputation-management" },
                                { name: "Patient Reactivation", href: "/services/patient-reactivation" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-white hover:underline transition-colors text-sm font-medium inline-flex items-center gap-1 group"
                                    >
                                        {item.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company & Resources */}
                    <div>
                        <h4 className="text-bond-lime font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Case Studies", href: "/case-studies" },
                                { name: "Blog & Insights", href: "/blog" },
                                { name: "Growth Kit", href: "/growth-kit" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Social & Newsletter */}
                    <div>
                        <h4 className="text-bond-lime font-bold mb-6 uppercase tracking-wider text-xs">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-bond-lime hover:text-bond-navy transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-bond-lime hover:text-bond-navy transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <h5 className="text-white font-bold text-sm mb-2">Free Clinic Audit</h5>
                            <p className="text-slate-400 text-xs mb-4">Find out exactly why your website isn't converting patients.</p>
                            <a href="https://wa.me/919699577641" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-bond-navy font-bold py-2 px-4 rounded-lg text-sm hover:bg-bond-lime transition-colors">
                                Get Free Audit
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} Invictus AI. All rights reserved. Built for dentists.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/data-deletion" className="hover:text-white transition-colors">Data Deletion</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
