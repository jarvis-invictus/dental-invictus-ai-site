import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Premium Dental Clinic Website Design | Invictus AI",
  description: "Conversion-focused websites designed exclusively for dental clinics in India. Built for speed, local SEO, and patient acquisition.",
};

export default function ClinicWebsiteService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic Website Design",
    "description": "High-converting, SEO-optimized website design specifically for dental clinics.",
    "provider": {
      "@type": "Organization",
      "name": "Invictus AI",
      "url": "https://invictus-ai.in"
    },
    "areaServed": "IN",
    "offers": {
      "@type": "Offer",
      "price": "7000",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-bond-navy text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block bg-bond-lime/20 text-bond-lime text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Service 01</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Patient-Acquiring<br /><span className="text-bond-lime">Dental Websites</span></h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing patients to clinics with better websites. We build lightning-fast, highly-optimized websites engineered to turn local Google searches into booked appointments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#kit-builder">
              <Button variant="lime" size="lg" className="w-full sm:w-auto hover:scale-105 transition-all">Build Your Kit</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-bond-navy text-center mb-16">Why our websites convert better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Built for Speed</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Your patients won't wait. Our websites load in milliseconds, drastically reducing bounce rates and keeping patients engaged.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Local SEO Ready</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Optimized perfectly for Google Maps and local search so you show up when patients search for "dentist near me".</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Direct Booking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Integrated WhatsApp and appointment forms mean friction-free booking straight from the homepage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
