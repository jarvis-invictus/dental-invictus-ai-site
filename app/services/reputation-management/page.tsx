import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Automated Reputation Management for Dentists | Invictus AI",
  description: "Generate 5-star Google reviews automatically. Build a dominant online presence for your dental clinic in India.",
};

export default function ReputationManagementService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic Reputation Management",
    "description": "Automated Google review generation and reputation monitoring for dentists.",
    "provider": {
      "@type": "Organization",
      "name": "Invictus AI",
      "url": "https://invictus-ai.in"
    },
    "areaServed": "IN",
    "offers": {
      "@type": "Offer",
      "price": "3000",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <section className="pt-40 pb-20 px-6 bg-bond-navy text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Service 04</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Automated 5-Star<br /><span className="text-[#f59e0b]">Google Reviews</span></h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't rely on patients to remember. Our automated system texts them right after their appointment to collect positive Google reviews and build undeniable trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#kit-builder">
              <Button variant="lime" size="lg" className="w-full sm:w-auto hover:scale-105 transition-all">Build Your Kit</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-bond-navy text-center mb-16">Grow your reputation on autopilot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Post-Visit Texts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We automatically send an SMS review request to patients immediately after they leave your clinic while the experience is fresh.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Filter Negative Feedback</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Unhappy patients are directed to a private feedback form, giving you a chance to resolve the issue before it hits Google.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Profile Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We optimize and manage your Google Business Profile to ensure you rank highly in local map searches.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
