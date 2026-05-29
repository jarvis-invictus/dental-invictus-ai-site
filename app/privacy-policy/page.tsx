import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Invictus AI",
  description: "Privacy Policy for Invictus AI — how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: null,
    subsections: [
      {
        title: "Personal Information",
        items: [
          "Full name and dental clinic / business name",
          "Email address and phone number",
          "Clinic address and location",
          "Payment and billing information",
          "Social media profiles and Meta Business page information",
          "Any information you provide via contact forms, WhatsApp, or consultations",
        ],
      },
      {
        title: "Automatically Collected Information",
        items: [
          "IP address and browser type",
          "Device information and operating system",
          "Pages visited, time spent, and navigation patterns",
          "Referring website or source",
          "Cookies and similar tracking technologies",
        ],
      },
      {
        title: "Third-Party Platform Data",
        text: "When you authorise us to manage your accounts (Meta Ads, WhatsApp Business, Google Business Profile, etc.), we may access data from those platforms solely to deliver our services, in accordance with their respective terms.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    items: [
      "Provide, maintain, and improve our services",
      "Communicate with you about projects, updates, and support",
      "Process payments and manage billing",
      "Run and optimise advertising campaigns on your behalf",
      "Analyse website usage to improve user experience",
      "Comply with legal obligations and enforce our terms",
      "Send marketing communications (only with your consent)",
    ],
  },
  {
    title: "3. Data Sharing & Disclosure",
    text: "We do not sell, rent, or trade your personal information. We may share data only with:",
    items: [
      "Service Providers — Third-party tools we use to deliver services (hosting, analytics, payment processors), bound by confidentiality agreements.",
      "Advertising Platforms — Meta, Google, and similar platforms when managing campaigns on your behalf.",
      "Legal Requirements — When required by law, court order, or governmental authority.",
      "Business Transfers — In the event of a merger, acquisition, or asset sale.",
    ],
  },
  {
    title: "4. Cookies & Tracking",
    text: "Our website uses cookies and similar technologies to enhance your browsing experience, analyse traffic, and serve relevant content. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionalities.",
  },
  {
    title: "5. Data Security",
    text: "We implement industry-standard security measures including encryption, access controls, and secure hosting to protect your information from unauthorised access, alteration, disclosure, or destruction. No method of transmission over the internet is 100% secure.",
  },
  {
    title: "6. Data Retention",
    text: "We retain your personal information only as long as necessary to fulfil the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymise it.",
  },
  {
    title: "7. Your Rights",
    text: "Depending on your jurisdiction, you may have the right to:",
    items: [
      "Access the personal data we hold about you",
      "Request correction of inaccurate or incomplete data",
      "Request deletion of your personal data",
      "Object to or restrict processing of your data",
      "Request data portability",
      "Withdraw consent at any time (where applicable)",
    ],
  },
  {
    title: "8. Children's Privacy",
    text: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware we have collected data from a minor, we will delete it promptly.",
  },
  {
    title: "9. International Data Transfers",
    text: "If you are accessing our services from outside India, your information may be transferred to and processed in India or other jurisdictions where our service providers operate. We ensure appropriate safeguards are in place in compliance with the Information Technology Act, 2000 and GDPR (where applicable).",
  },
  {
    title: "10. Changes to This Policy",
    text: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
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
              Invictus AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit <strong>invictus-ai.in</strong>, use our services, or interact with us through any digital channel.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                {/* Section header */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                  <h2 className="text-lg font-black text-bond-navy">{section.title}</h2>
                </div>
                <div className="px-6 py-6 space-y-5">
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
                  {section.subsections && section.subsections.map((sub, k) => (
                    <div key={k} className="space-y-3">
                      <h3 className="font-bold text-bond-navy text-sm uppercase tracking-wider">{sub.title}</h3>
                      {sub.text && <p className="text-slate-600 text-sm leading-relaxed">{sub.text}</p>}
                      {sub.items && (
                        <ul className="space-y-2">
                          {sub.items.map((item, l) => (
                            <li key={l} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
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
                    </div>
                  ))}
                  {/* Rights section — contact link */}
                  {section.title.startsWith("7.") && (
                    <p className="text-slate-600 text-sm">
                      To exercise any of these rights, contact us at{" "}
                      <a href="mailto:contact@invictus-ai.in" className="text-bond-navy font-bold hover:underline">
                        contact@invictus-ai.in
                      </a>.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="mt-12 bg-bond-navy rounded-2xl p-8">
            <p className="text-bond-lime text-xs font-black uppercase tracking-widest mb-3">11. Contact Us</p>
            <p className="text-white font-bold text-xl mb-6">
              Questions about this Privacy Policy or your data?
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
