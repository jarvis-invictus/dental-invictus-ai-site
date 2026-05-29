import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "AI Chatbot for Dental Clinics | Invictus AI",
  description: "24/7 AI-powered receptionists for dental websites. Answer patient FAQs instantly and book appointments automatically.",
};

export default function AIChatbotService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic AI Chatbot",
    "description": "24/7 automated patient support and appointment booking AI chatbot.",
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
          <div className="inline-block bg-bond-purple/20 text-bond-purple text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Service 03</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">24/7 AI<br /><span className="text-bond-purple">Website Chatbot</span></h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Never miss a patient inquiry again. Your AI receptionist lives on your website, answering questions and booking appointments while you sleep.
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
          <h2 className="text-3xl font-black text-bond-navy text-center mb-16">The ultimate digital receptionist</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Instant Answers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Trained on your specific clinic data, it answers questions about working hours, insurance, and procedures in seconds.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Auto Booking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Patients can schedule their own appointments directly through the chat interface without calling the front desk.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-bond-navy mb-3">Human Handoff</h3>
              <p className="text-slate-600 text-sm leading-relaxed">If the AI can't answer a complex medical question, it seamlessly captures the lead info and alerts your real staff.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
