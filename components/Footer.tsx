"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-100 border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <img
                                src="/logo.png"
                                alt="Invictus AI"
                                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-slate-500 max-w-sm mb-6 leading-relaxed font-medium">
                            Patient acquisition and automated growth systems built specifically for dental clinics.
                        </p>

                    </div>

                    {/* Services — now linking to real pages */}
                    <div>
                        <h4 className="text-bond-navy font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Clinic Website", href: "/services/clinic-website" },
                                { name: "Meta Ads + Content", href: "/services/meta-ads" },
                                { name: "Website Chatbot", href: "/services/ai-chatbot" },
                                { name: "Reputation Management", href: "/services/reputation-management" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-500 hover:text-bond-navy transition-colors text-sm font-medium text-left focus:outline-none focus:text-bond-navy focus:underline"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-bond-navy font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-500 text-sm font-medium">
                                <MapPin className="w-5 h-5 text-bond-purple shrink-0" />
                                <span>Available Globally<br />Based in India</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                <Phone className="w-5 h-5 text-bond-purple shrink-0" />
                                <span>{siteConfig.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                <Mail className="w-5 h-5 text-bond-purple shrink-0" />
                                <a href={`mailto:${siteConfig.contact.email}`} className="break-all hover:text-bond-navy transition-colors">{siteConfig.contact.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-wider font-bold">
                    <p>&copy; {new Date().getFullYear()} Invictus AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-bond-navy transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-bond-navy transition-colors">Terms of Service</Link>
                        <Link href="/data-deletion" className="hover:text-bond-navy transition-colors">Data Deletion</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
