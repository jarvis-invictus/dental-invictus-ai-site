import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Meta Ads & Content for Dental Clinics | Invictus AI",
  description: "Hyper-local Facebook & Instagram ad campaigns for dental clinics. We handle creatives, reels, and lead generation.",
};

export default function MetaAdsService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic Meta Ads Management",
    "description": "Local Instagram and Facebook advertising paired with custom content creation for dentists.",
    "provider": {
      "@type": "Organization",
      "name": "Invictus AI",
      "url": "https://invictus-ai.in"
    },
    "areaServed": "IN",
    "offers": {
      "@type": "Offer",
      "price": "4000",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <section className="pt-40 pb-20 px-6 bg-bond-navy text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block bg-bond-cyan/20 text-bond-cyan text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Service 02</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Hyper-Local<br /><span className="text-bond-cyan">Meta Ads + Content</span></h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dominate the 5km radius around your clinic. We create stunning Instagram reels and run high-converting ad campaigns to keep your chairs full.
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
          <h2 className="text-3xl font-black text-bond-navy text-center mb-16">How we drive foot traffic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Targeted Local Ads</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We don't waste budget. We target ads specifically to people living or working within a 3-5km radius of your clinic.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Reels & Carousels</h3>
              <p className="text-slate-600 text-sm leading-relaxed">High-quality, engaging content that educates patients and builds trust before they even step into your clinic.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Lead Tracking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Transparent reporting so you know exactly how many calls and inquiries your ad budget is generating each month.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
