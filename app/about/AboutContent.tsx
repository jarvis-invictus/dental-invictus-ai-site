"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Zap, Shield, Users, ArrowRight, Heart, Eye } from "lucide-react";

const stats = [
  { label: "Clinics Served", value: "50+", icon: Users },
  { label: "Avg Client Rating", value: "4.9★", icon: Heart },
  { label: "Patient Leads Generated", value: "2,000+", icon: Target },
  { label: "Months Avg Retention", value: "8+", icon: Shield },
];

const values = [
  {
    icon: Target,
    title: "Dental-Only Focus",
    description: "We don't serve restaurants, gyms, or salons. 100% of our expertise is dedicated to understanding dental patients and clinic operations.",
    color: "bond-lime",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description: "No lock-in contracts. No hidden fees. You see every rupee spent and every result earned. If we don't deliver, you walk away.",
    color: "bond-purple",
  },
  {
    icon: Zap,
    title: "AI-Powered Systems",
    description: "We don't hire 20 interns to do manual work. We use AI for chatbots, content optimization, and ad targeting — passing the cost savings to you.",
    color: "bond-cyan",
  },
  {
    icon: Heart,
    title: "Results Over Vanity",
    description: "We don't chase likes and followers. We track chair-fill rate, appointment bookings, and actual revenue generated. That's what pays your bills.",
    color: "bond-orange",
  },
];

export default function AboutContent() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Invictus AI",
      "description": "AI-powered patient growth systems built exclusively for dental clinics in India.",
      "url": "https://invictus-ai.in",
      "founder": {
        "@type": "Person",
        "name": "Sahil Bagul",
        "jobTitle": "Founder & Growth Strategist",
      },
      "areaServed": "India",
      "serviceType": "Dental Clinic Digital Marketing",
    },
  };

  return (
    <div className="bg-white min-h-screen text-bond-navy font-sans">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-bond-lime/20 border-2 border-bond-lime text-bond-navy font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(204,255,0,0.5)]">
              About Us
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            We Only Work With{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1 bg-bond-lime text-bond-navy border-3 border-bond-navy transform rotate-1 inline-block shadow-[6px_6px_0px_0px_#0f172a]">
                Dental Clinics
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-bond-gray max-w-2xl mx-auto text-center mb-12 leading-relaxed font-bold"
          >
            We&apos;re not a generic digital agency. We are a specialized growth
            partner that builds automated patient acquisition systems
            exclusively for dental clinics across India.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bond-card rounded-2xl p-6 text-center border-2 border-bond-gray/10 hover:border-bond-navy hover:shadow-[6px_6px_0px_0px_#ccff00] transition-all"
              >
                <div className="text-3xl md:text-4xl font-black text-bond-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-bond-gray uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center tracking-tight">
            The{" "}
            <span className="text-bond-purple underline decoration-wavy decoration-bond-lime underline-offset-8">
              Invictus
            </span>{" "}
            Story
          </h2>

          <div className="space-y-6 text-bond-gray font-medium leading-relaxed text-base md:text-lg">
            <p>
              It started with a simple observation: <strong className="text-bond-navy">brilliant dentists were invisible online</strong>.
              They could perform complex root canals and flawless smile makeovers,
              but their outdated websites and zero Google presence meant patients
              were walking into the clinic across the street instead.
            </p>
            <p>
              Generic marketing agencies couldn&apos;t help because they didn&apos;t
              understand the dental business — the regulatory constraints, the
              patient psychology, the hyper-local nature of healthcare decisions.
              They&apos;d run the same cookie-cutter campaigns they ran for
              restaurants and salons.
            </p>
            <p>
              <strong className="text-bond-navy">So we decided to go deep instead of going wide.</strong> We
              stopped taking clients from every industry and went all-in on
              dental clinics. Every system we build, every ad template we create,
              every AI chatbot we train — it&apos;s all designed for one thing:
              <em> getting more patients into dental chairs.</em>
            </p>
            <div className="bond-card border-2 border-bond-navy rounded-2xl p-8 bg-white shadow-[6px_6px_0px_0px_#ccff00] my-8">
              <blockquote className="text-xl md:text-2xl font-black text-bond-navy text-center leading-snug italic">
                &ldquo;We are not trying to be the biggest agency. We are trying
                to be the best agency for dentists.&rdquo;
              </blockquote>
              <p className="text-center text-bond-gray font-bold mt-4">— Sahil Bagul, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bond-card rounded-3xl p-8 md:p-12 border-2 border-bond-gray/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-bond-lime/40 via-bond-purple/20 to-bond-cyan/30 flex items-center justify-center border-3 border-bond-navy shadow-[6px_6px_0px_0px_#0f172a] shrink-0">
                <span className="text-5xl font-black text-bond-navy">SB</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-bond-navy mb-1">Sahil Bagul</h3>
                <p className="text-bond-purple font-bold text-sm uppercase tracking-wider mb-4">
                  Founder & Growth Strategist
                </p>
                <p className="text-bond-gray font-medium leading-relaxed">
                  A growth marketer and AI builder who noticed that dental clinics were
                  massively underserved by the digital marketing industry. After helping
                  50+ clinics double their patient inquiries, he founded Invictus AI to
                  productize these systems and make them accessible to every
                  dentist — from single-chair practices in Tier 2 cities to multi-location
                  clinics in metros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight">
            What Makes Us{" "}
            <span className="bg-bond-lime px-2 pb-1 border-2 border-bond-navy rounded-lg shadow-[4px_4px_0px_0px_#0f172a]">
              Different
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bond-card rounded-2xl p-8 border-2 border-bond-gray/10 hover:border-bond-navy hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all"
              >
                <div className={`bg-${v.color}/20 w-14 h-14 rounded-xl flex items-center justify-center mb-5 border-2 border-${v.color}`}>
                  <v.icon className={`w-7 h-7 text-${v.color}`} />
                </div>
                <h3 className="text-xl font-black text-bond-navy mb-3">
                  {v.title}
                </h3>
                <p className="text-bond-gray font-medium leading-relaxed text-sm">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bond-card border-4 border-bond-navy rounded-3xl p-8 md:p-12 bg-slate-50 shadow-[8px_8px_0px_0px_#ccff00]">
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-bond-navy">
              Ready to Fill More Chairs?
            </h2>
            <p className="text-bond-gray font-bold mb-8 max-w-lg mx-auto">
              Let&apos;s build your custom patient growth system. No lock-in
              contracts. Transparent pricing. Results you can measure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919699577641?text=Hi%20Sahil,%20I'd%20like%20to%20discuss%20growth%20for%20my%20dental%20clinic."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="lime"
                  size="lg"
                  className="border-2 border-bond-navy shadow-[4px_4px_0px_0px_#0f172a] font-black hover:-translate-y-1 transition-transform"
                >
                  WhatsApp Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/#kit-builder">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-bond-navy text-bond-navy font-black hover:bg-slate-100 shadow-[4px_4px_0px_0px_#0f172a]"
                >
                  Build Your Kit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
