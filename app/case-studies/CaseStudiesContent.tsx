"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Star, Globe, ArrowRight, ArrowUpRight, Megaphone } from "lucide-react";

const caseStudies = [
  {
    id: "meta-ads-pune",
    client: "Dr. P.K.",
    location: "Pune, Maharashtra",
    service: "Meta Ads + Content",
    serviceLink: "/services/meta-ads",
    icon: Megaphone,
    accentColor: "bond-cyan",
    shadowColor: "#06b6d4",
    problem: "The clinic relied entirely on word-of-mouth referrals, averaging 8–10 new patients per month. Zero online presence beyond a basic Google Business listing with 4 reviews.",
    solution: "We launched a hyper-local Instagram + Facebook ad campaign targeting a 5km radius. Created 12 high-quality video reels and carousel posts showcasing real treatments. Ran lead-gen campaigns with WhatsApp-direct CTAs.",
    timeline: "60 days",
    results: [
      { label: "Monthly Inquiries", before: "8–10", after: "30+", change: "+200%" },
      { label: "Cost per Lead", before: "N/A (referral only)", after: "₹120", change: "—" },
      { label: "Monthly Ad Spend", before: "₹0", after: "₹8,000", change: "—" },
      { label: "ROI", before: "—", after: "~15x", change: "—" },
    ],
    quote: "Within 60 days, I was getting 30+ new enquiries a month. The WhatsApp messages were constant. I had to hire a second receptionist.",
  },
  {
    id: "reputation-nashik",
    client: "Dr. A.D.",
    location: "Nashik, Maharashtra",
    service: "Reputation Management",
    serviceLink: "/services/reputation-management",
    icon: Star,
    accentColor: "bond-lime",
    shadowColor: "#ccff00",
    problem: "Google rating stuck at 3.8 stars with only 12 reviews despite being in practice for 8 years. The clinic across the street with 4.7 stars was capturing most new patients from Google Maps.",
    solution: "Deployed our automated WhatsApp review collection system. Every patient received a review request within 2 hours of their appointment. Implemented the 'Happy Patient Filter' to route unsatisfied patients to private feedback.",
    timeline: "4 months",
    results: [
      { label: "Google Rating", before: "3.8★", after: "4.9★", change: "+1.1★" },
      { label: "Total Reviews", before: "12", after: "80+", change: "+567%" },
      { label: "Local Pack Ranking", before: "#7", after: "#1", change: "→ Top 3" },
      { label: "Monthly New Patients (Maps)", before: "~5", after: "~20", change: "+300%" },
    ],
    quote: "I did not do anything — they set up the automated system and patients started leaving reviews on their own. Now I rank above the clinic that has been around for 20 years.",
  },
  {
    id: "website-aurangabad",
    client: "Dr. S.P.",
    location: "Aurangabad, Maharashtra",
    service: "Clinic Website",
    serviceLink: "/services/clinic-website",
    icon: Globe,
    accentColor: "bond-purple",
    shadowColor: "#d946ef",
    problem: "Outdated website built by a relative. Not mobile-responsive, no booking option, no WhatsApp integration. Invisible on Google search. Zero organic traffic.",
    solution: "Built a conversion-optimized, mobile-first website with integrated WhatsApp CTA, Google Maps embed, treatment pages with local SEO, and structured data markup. Launched in 10 days.",
    timeline: "10 days build + 1 week live",
    results: [
      { label: "Appointment Inquiries (Week 1)", before: "0", after: "3", change: "First ever" },
      { label: "Mobile Load Speed", before: "8.2s", after: "1.4s", change: "-83%" },
      { label: "Google PageSpeed Score", before: "23/100", after: "94/100", change: "+309%" },
      { label: "Organic Keywords Ranking", before: "0", after: "12", change: "From zero" },
    ],
    quote: "Within the first week the site was live, I got 3 appointment inquiries from Google search.",
  },
];

export default function CaseStudiesContent() {
  return (
    <div className="bg-white min-h-screen text-bond-navy font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-bond-lime/20 border-2 border-bond-lime text-bond-navy font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(204,255,0,0.5)]">
              Proven Results
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            Real Clinics.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1 bg-bond-lime text-bond-navy border-3 border-bond-navy transform -rotate-1 inline-block shadow-[6px_6px_0px_0px_#0f172a]">
                Real Results.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-bond-gray max-w-2xl mx-auto text-center mb-12 leading-relaxed font-bold"
          >
            We don&apos;t deal in vanity metrics. Here&apos;s exactly what happened
            when dental clinics partnered with Invictus AI — with numbers.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl space-y-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bond-card rounded-3xl border-2 border-bond-gray/10 overflow-hidden hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all"
            >
              {/* Header */}
              <div className="bg-bond-navy p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-${cs.accentColor}/20 flex items-center justify-center border-2 border-${cs.accentColor}`}>
                    <cs.icon className={`w-6 h-6 text-${cs.accentColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{cs.client}</h3>
                    <p className="text-slate-400 text-sm font-bold">{cs.location}</p>
                  </div>
                </div>
                <Link href={cs.serviceLink}>
                  <span className={`bg-${cs.accentColor}/20 text-${cs.accentColor} text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full border border-${cs.accentColor}/40 inline-flex items-center gap-1.5 hover:scale-105 transition-transform`}>
                    {cs.service} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-red-500 mb-3">❌ The Problem</h4>
                    <p className="text-bond-gray font-medium text-sm leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-green-600 mb-3">✅ Our Solution</h4>
                    <p className="text-bond-gray font-medium text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="text-xs font-black uppercase tracking-wider text-bond-gray">
                  ⏱ Timeline: <span className="text-bond-navy">{cs.timeline}</span>
                </div>

                {/* Results Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-bond-navy text-white">
                        <th className="text-left px-4 py-3 font-black text-xs uppercase tracking-wider rounded-tl-xl">Metric</th>
                        <th className="text-center px-4 py-3 font-black text-xs uppercase tracking-wider">Before</th>
                        <th className="text-center px-4 py-3 font-black text-xs uppercase tracking-wider">After</th>
                        <th className="text-center px-4 py-3 font-black text-xs uppercase tracking-wider rounded-tr-xl">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cs.results.map((r, ri) => (
                        <tr key={r.label} className={ri % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-3 font-bold text-bond-navy">{r.label}</td>
                          <td className="px-4 py-3 text-center text-bond-gray font-medium">{r.before}</td>
                          <td className="px-4 py-3 text-center font-black text-bond-navy">{r.after}</td>
                          <td className="px-4 py-3 text-center font-black text-green-600">{r.change}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Quote */}
                <div className="bg-bond-lime/10 border-l-4 border-bond-lime rounded-r-xl p-6">
                  <p className="text-bond-navy font-bold italic leading-relaxed">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <p className="text-bond-gray font-bold text-sm mt-3">
                    — {cs.client}, {cs.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bond-card border-4 border-bond-navy rounded-3xl p-8 md:p-12 bg-slate-50 shadow-[8px_8px_0px_0px_#ccff00]">
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-bond-navy">
              Want Results Like These?
            </h2>
            <p className="text-bond-gray font-bold mb-8 max-w-lg mx-auto">
              Every case study above started with a single WhatsApp message.
              Your growth story starts here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919699577641?text=Hi%20Sahil,%20I%20saw%20your%20case%20studies%20and%20want%20similar%20results%20for%20my%20clinic."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="lime"
                  size="lg"
                  className="border-2 border-bond-navy shadow-[4px_4px_0px_0px_#0f172a] font-black hover:-translate-y-1 transition-transform"
                >
                  Start My Growth Story <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
