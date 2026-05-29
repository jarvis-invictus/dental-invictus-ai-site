import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Invictus AI",
  description: "Terms of Service for Invictus AI — rules and guidelines for using our services.",
};

const sections = [
  {
    title: "1. Services",
    text: "Invictus AI provides digital marketing services exclusively for dental clinics and healthcare businesses, including but not limited to:",
    items: [
      "Clinic Website Design & Development",
      "Meta Ads Management (Instagram & Facebook)",
      "Google Reputation & Review Management",
      "WhatsApp Business Automation",
      "Local SEO & Google Business Profile Optimisation",
      "Ad Creative Design & Content Production",
    ],
    note: "Specific deliverables, timelines, and pricing are defined in individual service agreements or proposals shared with each client.",
  },
  {
    title: "2. Client Responsibilities",
    text: "By engaging our services, you agree to:",
    items: [
      "Provide accurate, complete, and timely information necessary for service delivery",
      "Grant necessary access to accounts, platforms, and tools as required",
      "Review and provide feedback on deliverables within agreed timelines",
      "Make payments as per the agreed schedule",
      "Maintain a minimum ad spend as outlined in your service agreement (where applicable)",
      "Comply with all applicable laws and platform policies",
    ],
  },
  {
    title: "3. Payments & Billing",
    items: [
      "Payment terms are specified in individual service proposals or invoices.",
      "All fees are in Indian Rupees (INR) unless otherwise agreed.",
      "Late payments may result in service suspension or additional charges.",
      "Refunds are handled on a case-by-case basis as outlined in individual agreements.",
      "Applicable taxes (GST, etc.) will be added to quoted prices.",
      "Ad spend paid to Meta or Google is separate from our management fees and is your direct cost.",
    ],
  },
  {
    title: "4. Results Guarantee",
    text: "Where a results guarantee is offered (e.g., new patient enquiries within 60 days), the following conditions apply:",
    items: [
      "A minimum ad spend budget must be maintained throughout the engagement period.",
      "The client must actively participate in the onboarding and setup process.",
      "The free continuation period covers the same agreed service scope for up to 30 additional days.",
      "Guarantee terms are specific to each engagement and will be outlined in your service agreement.",
    ],
  },
  {
    title: "5. Intellectual Property",
    items: [
      "All deliverables created for you become your property upon full payment, unless otherwise agreed.",
      "We retain the right to showcase completed work in our portfolio without disclosing confidential data.",
      "Third-party tools, frameworks, and libraries remain subject to their respective licences.",
      "Our brand, logo, website content, and proprietary methods remain our intellectual property.",
    ],
  },
  {
    title: "6. Confidentiality",
    text: "Both parties agree to keep confidential any proprietary information shared during the engagement. This obligation survives the termination of services. Confidential information does not include publicly available data or information independently developed.",
  },
  {
    title: "7. Limitation of Liability",
    items: [
      "Our services are provided as-is without warranties of any kind, express or implied.",
      "We are not liable for indirect, incidental, or consequential damages arising from our services.",
      "Our total liability shall not exceed the fees paid by you for the specific service in question.",
      "We are not responsible for results dependent on third-party platforms (Meta, Google, WhatsApp, etc.) or their policy changes.",
      "We do not guarantee specific patient numbers, traffic volumes, or revenue figures beyond what is stated in your agreement.",
    ],
  },
  {
    title: "8. Third-Party Platforms",
    text: "Many of our services involve third-party platforms (Meta, Google, WhatsApp, etc.). Your use of these platforms is subject to their own terms of service and privacy policies. We are not responsible for changes, outages, or policy updates by third-party providers that may affect service delivery.",
  },
  {
    title: "9. Termination",
    items: [
      "Either party may terminate services with 15 days written notice.",
      "We reserve the right to terminate services immediately for non-payment, breach of terms, or illegal activities.",
      "Upon termination, outstanding payments become immediately due.",
      "We will provide reasonable assistance in transitioning services and data back to you.",
    ],
  },
  {
    title: "10. Dispute Resolution",
    text: "Any disputes arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.",
  },
  {
    title: "11. Governing Law",
    text: "These Terms are governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000 and the Indian Contract Act, 1872.",
  },
  {
    title: "12. Changes to These Terms",
    text: "We may update these Terms from time to time. Changes will be posted on this page with an updated date. Continued use of our services after modifications constitutes acceptance of the revised Terms.",
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-bond-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#c8f135 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6 shadow-md">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm font-medium">Last updated: May 29, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Intro */}
          <div className="bg-bond-lime/10 border border-bond-lime/30 rounded-2xl p-6 mb-12">
            <p className="text-bond-navy leading-relaxed font-medium">
              Welcome to Invictus AI. These Terms of Service (&quot;Terms&quot;) govern your access to and use of
              our website <strong>invictus-ai.in</strong> and all services provided by Invictus AI. By accessing
              our website or engaging our services, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                  <h2 className="text-lg font-black text-bond-navy">{section.title}</h2>
                </div>
                <div className="px-6 py-6 space-y-4">
                  {section.text && (
                    <p className="text-slate-600 leading-relaxed">{section.text}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                          <span className="w-5 h-5 bg-bond-lime/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-bond-navy" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <p className="text-slate-500 text-sm italic border-l-2 border-bond-lime/40 pl-4">{section.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="mt-12 bg-bond-navy rounded-2xl p-8">
            <p className="text-bond-lime text-xs font-black uppercase tracking-widest mb-3">13. Contact Us</p>
            <p className="text-white font-bold text-xl mb-6">
              Questions about these Terms?
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Company</p>
                <p className="text-white font-bold">Invictus AI</p>
                <p className="text-white/60 text-sm">Pune, Maharashtra, India</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:contact@invictus-ai.in" className="text-bond-lime font-bold hover:underline text-sm">
                  contact@invictus-ai.in
                </a>
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider mt-3 mb-1">Website</p>
                <a href="https://invictus-ai.in" className="text-bond-lime font-bold hover:underline text-sm">
                  invictus-ai.in
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
