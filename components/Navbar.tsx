"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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

        // Fallback for top of page (hero section)
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
        { name: "Services", href: "#services" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Results", href: "#results" },
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
                    <img
                        src="/logo.png"
                        alt={siteConfig.name}
                        className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
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
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
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
