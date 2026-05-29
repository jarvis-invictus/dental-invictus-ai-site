import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Deletion | Invictus AI",
  description: "How to request deletion of your data from Invictus AI services.",
};

const steps = [
  {
    number: "01",
    title: "Send an Email",
    description: (
      <>
        Email us at{" "}
        <a href="mailto:contact@invictus-ai.in" className="text-bond-lime font-bold hover:underline">
          contact@invictus-ai.in
        </a>{" "}
        with the subject line <strong className="text-white">&quot;Data Deletion Request&quot;</strong>.
      </>
    ),
  },
  {
    number: "02",
    title: "Include Your Details",
    description: "Please include the following in your email:",
    items: [
      "Your full name",
      "Email address associated with your account or enquiry",
      "Facebook User ID (if connected via Facebook / Meta)",
      "Description of the data you want deleted",
    ],
  },
  {
    number: "03",
    title: "We Process Your Request",
    description:
      "We will verify your identity and process your deletion request within 30 days. You will receive a confirmation email once the deletion is complete.",
  },
];

export default function DataDeletion() {
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
            Data Deletion
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
              At Invictus AI, we respect your right to control your personal data. If you wish to
              delete your data associated with our services or applications, follow the steps below.
              We handle all requests promptly and transparently.
            </p>
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-black text-bond-navy mb-6">How to Request Data Deletion</h2>
          <div className="bg-bond-navy rounded-2xl p-8 mb-12 space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-bond-lime rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-bond-navy font-black text-sm">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                  {step.items && (
                    <ul className="mt-3 space-y-2">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                          <span className="w-4 h-4 bg-bond-lime/20 border border-bond-lime/40 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-bond-lime" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* What gets deleted / retained */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-emerald-50 border-b border-slate-100 px-6 py-4">
                <h2 className="text-base font-black text-bond-navy">What Gets Deleted</h2>
              </div>
              <div className="px-6 py-5">
                <ul className="space-y-3">
                  {[
                    "Personal profile information (name, email, phone)",
                    "Account credentials and preferences",
                    "Usage data and activity logs",
                    "Any files, documents, or content you provided",
                    "Communication history with our team",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-amber-50 border-b border-slate-100 px-6 py-4">
                <h2 className="text-base font-black text-bond-navy">What We May Retain</h2>
              </div>
              <div className="px-6 py-5">
                <ul className="space-y-3">
                  {[
                    "Financial records and invoices (as required by tax regulations)",
                    "Data necessary to resolve ongoing disputes",
                    "Anonymised or aggregated data that cannot identify you",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Facebook / Meta */}
          <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm mb-12">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-black text-bond-navy">Facebook / Meta Data</h2>
            </div>
            <div className="px-6 py-6">
              <p className="text-slate-600 leading-relaxed text-sm">
                If you connected to our services via Facebook or Meta, your data deletion request will
                also remove any data we received from Meta platforms. You can also manage your data
                directly through{" "}
                <a
                  href="https://www.facebook.com/settings?tab=applications"
                  className="text-bond-navy font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook App Settings ↗
                </a>.
              </p>
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-bond-navy rounded-2xl p-8">
            <p className="text-bond-lime text-xs font-black uppercase tracking-widest mb-3">Contact Us</p>
            <p className="text-white font-bold text-xl mb-6">
              Questions about data deletion or our data practices?
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
