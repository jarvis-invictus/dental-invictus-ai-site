"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, Megaphone, Bot, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

const serviceLinks = [
    { name: "Clinic Website", href: "/services/clinic-website", icon: Globe, color: "text-bond-lime" },
    { name: "Meta Ads + Content", href: "/services/meta-ads", icon: Megaphone, color: "text-bond-cyan" },
    { name: "AI Chatbot", href: "/services/ai-chatbot", icon: Bot, color: "text-bond-purple" },
    { name: "Reputation Management", href: "/services/reputation-management", icon: Star, color: "text-[#f59e0b]" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const sections = ["services", "how-it-works", "results"];
        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -55% 0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const handleScrollTopFallback = () => {
            if (window.scrollY < 200) {
                setActiveSection("");
            }
        };
        window.addEventListener("scroll", handleScrollTopFallback);

        return () => {
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
            window.removeEventListener("scroll", handleScrollTopFallback);
        };
    }, []);

    const navLinks = [
        { name: "How It Works", href: "/#how-it-works", id: "how-it-works" },
        { name: "Results", href: "/case-studies", id: "results" },
        { name: "Blog", href: "/blog", id: "blog" },
        { name: "About", href: "/about", id: "about" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-slate-100 py-3 shadow-sm"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt={siteConfig.name}
                        width={160}
                        height={40}
                        priority
                        className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Services Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className={cn(
                                "text-sm font-bold transition-all relative py-1 px-0.5 flex items-center gap-1",
                                activeSection === "services"
                                    ? "text-bond-navy"
                                    : "text-bond-gray hover:text-bond-navy"
                            )}
                        >
                            Services
                            <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                            {activeSection === "services" && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bond-lime rounded-full" />
                            )}
                        </button>

                        {/* Dropdown Panel */}
                        {isServicesOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50">
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45" />
                                {serviceLinks.map((svc) => (
                                    <Link
                                        key={svc.name}
                                        href={svc.href}
                                        onClick={() => setIsServicesOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                    >
                                        <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 group-hover:scale-110 transition-transform", svc.color)}>
                                            <svc.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-bold text-bond-navy">{svc.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {navLinks.map((link) => {
                        const isActive = 
                          (link.id === "how-it-works" || link.id === "services") 
                            ? (pathname === "/" && activeSection === link.id)
                            : pathname.startsWith(link.href);
                            
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold transition-all relative py-1 px-0.5",
                                    isActive
                                        ? "text-bond-navy"
                                        : "text-bond-gray hover:text-bond-navy"
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bond-lime rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                    <a href="https://wa.me/919699577641?text=Hi%20Sahil,%20I'd%20like%20to%20know%20more%20about%20patient%20growth%20for%20my%20dental%20clinic." target="_blank" rel="noopener noreferrer">
                        <Button variant="lime" size="sm">
                            WhatsApp Us
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-bond-navy p-1 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl transition-all duration-300">
                    {/* Services section in mobile */}
                    <div className="text-xs font-bold text-bond-gray uppercase tracking-wider mb-1">Services</div>
                    {serviceLinks.map((svc) => (
                        <Link
                            key={svc.name}
                            href={svc.href}
                            className="flex items-center gap-3 text-bond-navy font-bold py-1 pl-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svc.icon className={cn("w-5 h-5", svc.color)} />
                            {svc.name}
                        </Link>
                    ))}
                    <div className="border-t border-slate-100 my-2" />
                    {navLinks.map((link) => {
                        const isActive = 
                          (link.id === "how-it-works" || link.id === "services") 
                            ? (pathname === "/" && activeSection === link.id)
                            : pathname.startsWith(link.href);
                            
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-lg font-bold py-1 transition-colors",
                                    isActive ? "text-bond-lime bg-bond-navy/5 px-2 rounded-lg" : "text-bond-navy"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <a href="https://wa.me/919699577641?text=Hi%20Sahil,%20I'd%20like%20to%20know%20more%20about%20patient%20growth%20for%20my%20dental%20clinic." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="lime" className="w-full">WhatsApp Us</Button>
                    </a>
                </div>
            )}
        </nav>
    );
}
