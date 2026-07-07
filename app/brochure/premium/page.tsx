import React from "react";
import Image from "next/image";
import { CheckCircle2, Bot, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Invictus AI - Premium Edition",
  robots: { index: false, follow: false },
};

const A4Page = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-[210mm] h-[297mm] mx-auto bg-white overflow-hidden relative shadow-2xl mb-8 print:shadow-none print:border print:border-gray-200 print:m-0 print:break-after-page last:print:break-after-auto ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
    <div className="relative z-10 h-full p-[15mm] flex flex-col">
      {children}
    </div>
  </div>
);
const DynamicPage = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-[210mm] mx-auto bg-white relative shadow-2xl mb-8 print:shadow-none print:border print:border-gray-200 print:m-0 ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
    <div className="relative z-10 h-full p-[15mm] flex flex-col">
      {children}
    </div>
  </div>
);

export default function PremiumBrochure() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 print:py-0 print:bg-white text-bond-navy font-sans">
      <style>{`
        @media print {
          @page { margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
      
      {/* ── PAGE 1: HOOK & DELIVERABLES ── */}
      <A4Page>
        <div className="flex justify-between items-center mb-16">
          <a href="https://invictus-ai.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Invictus AI" width={160} height={40} className="object-contain" />
          </a>
          <div className="text-right">
            <p className="text-sm font-bold text-bond-navy">Patient Growth System for Modern Clinics</p>
            <a href="https://invictus-ai.in" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:underline hover:text-bond-navy transition-colors">
              invictus-ai.in
            </a>
          </div>
        </div>

        <div className="my-auto">
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-6">
            The Ultimate <br/>
            <span className="text-bond-cyan">Digital Flagship</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            Immersive, high-end web design that turns website visitors into booked patients.
          </p>

          <div className="bg-bond-navy text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bond-purple/30 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
            <h2 className="text-2xl font-bold mb-6">What We Deliver (Premium Edition):</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-cyan" size={28} />
                <span className="text-xl">Advanced Premium Design (Custom flows)</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-cyan" size={28} />
                <span className="text-xl">Advanced SEO & Speed Tuning</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-cyan" size={28} />
                <span className="text-xl">High-Speed Hosting Included</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-cyan" size={28} />
                <span className="text-xl">VIP Priority Support</span>
              </div>
            </div>
          </div>
        </div>

      </A4Page>

      {/* ── PREVIEWS (COMBINED) ── */}
      <A4Page className="bg-slate-50">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black">Premium Themes</h2>
          <p className="text-gray-500 font-medium text-xl mt-2">The Ultimate VIP Patient Experience</p>
        </div>

        <div className="flex flex-col gap-6 flex-1 items-center">
          {/* THEME 01 */}
          <div className="w-[85%] flex flex-col">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-2xl font-black text-gray-800">Theme 01</h3>
              <a href="https://dental-premium-site-1.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-blue-600 underline decoration-2 underline-offset-4 hover:text-blue-800 flex items-center gap-1">
                View Premium Edition Theme 1 ↗
              </a>
            </div>
            <a href="https://dental-premium-site-1.vercel.app" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="w-full rounded-xl border-4 border-gray-800 shadow-xl overflow-hidden bg-gray-100 flex flex-col group-hover:border-bond-cyan transition-colors">
                <div className="h-4 bg-gray-800 flex items-center px-2 gap-1 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <img src="/templates/premium-1.jpg" alt="Premium 1 Home" className="w-full h-auto block" />
              </div>
            </a>
          </div>

          {/* THEME 02 */}
          <div className="w-[85%] flex flex-col">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-2xl font-black text-gray-800">Theme 02</h3>
              <a href="https://dental-premium-site-2.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-blue-600 underline decoration-2 underline-offset-4 hover:text-blue-800 flex items-center gap-1">
                View Premium Edition Theme 2 ↗
              </a>
            </div>
            <a href="https://dental-premium-site-2.vercel.app" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="w-full rounded-xl border-4 border-gray-800 shadow-xl overflow-hidden bg-gray-100 flex flex-col group-hover:border-bond-cyan transition-colors">
                <div className="h-4 bg-gray-800 flex items-center px-2 gap-1 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <img src="/templates/premium-2.jpg" alt="Premium 2 Home" className="w-full h-auto block" />
              </div>
            </a>
          </div>
        </div>
      </A4Page>

      {/* ── ADD-ON SERVICES ── */}
      <A4Page className="bg-white">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-black text-center mb-4 text-bond-navy">Complete Patient Growth Solution</h2>
          <p className="text-xl text-center text-gray-600 mb-12">More than just a website. Bolt these onto any package to accelerate growth.</p>
          
          <div className="space-y-6">
            {/* Reputation Management */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-6 shadow-sm">
              <div className="w-16 h-16 bg-[#f59e0b]/10 text-[#f59e0b] rounded-xl flex items-center justify-center shrink-0 border border-[#f59e0b]/20">
                <span className="text-3xl">⭐</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-bond-navy mb-2">Reputation Management</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Automated Google review generation system that requests feedback from happy patients immediately after their visit.</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-[#f59e0b]">₹3K<span className="text-base font-bold text-gray-500">/mo</span></div>
              </div>
            </div>

            {/* AI Chatbot */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-6 shadow-sm">
              <div className="w-16 h-16 bg-bond-purple/10 text-bond-purple rounded-xl flex items-center justify-center shrink-0 border border-bond-purple/20">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-bond-navy mb-2">Website AI Chatbot</h3>
                <p className="text-gray-600 text-lg leading-relaxed">An AI-powered receptionist that lives on your website, answering patient questions instantly and booking appointments 24/7.</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-bond-purple">₹3K<span className="text-base font-bold text-gray-500">/mo</span></div>
              </div>
            </div>

            {/* Meta Ads */}
            <div className="bg-bond-navy p-6 rounded-2xl border border-bond-navy/80 flex items-start gap-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full"></div>
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center shrink-0 border border-cyan-500/30">
                <span className="text-3xl">📢</span>
              </div>
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">Meta Ads + Content</h3>
                  <span className="bg-bond-lime text-bond-navy text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Most Popular</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">Hyper-local Instagram and Facebook ad campaigns paired with monthly content production to dominate your 5km radius.</p>
              </div>
              <div className="text-right relative z-10 flex items-center justify-end">
                <div className="text-xl font-black text-bond-lime px-4 py-2 bg-bond-lime/10 rounded-lg border border-bond-lime/20">Custom Plan</div>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* ── PAGE 4: PRICING & CTA ── */}
      {/* ── PAGE 4: PRICING & CTA ── */}
      <A4Page>
        <div className="flex-1 flex flex-col items-center pt-8">
          <h2 className="text-4xl font-black mb-10 text-bond-navy text-center">Ready to Dominate Your Market?</h2>
          
          <div className="bg-bond-navy p-10 rounded-3xl shadow-2xl w-full max-w-2xl mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-bond-purple/30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-bond-cyan/20 blur-2xl rounded-full"></div>
            
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Premium Package</h3>
                <p className="text-white/70 font-medium">The ultimate flagship experience.</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-black text-white">₹13,000</div>
              </div>
            </div>

            <div className="space-y-4 mb-10 relative z-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-bond-cyan shrink-0 mt-0.5" size={20} />
                <span className="text-lg font-bold text-white">Multi-Page Architecture (Dynamic Routes)</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-bond-cyan shrink-0 mt-0.5" size={20} />
                <span className="text-lg font-bold text-white">Premium CSS Particle Animations</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-bond-cyan shrink-0 mt-0.5" size={20} />
                <span className="text-lg font-bold text-white">Dedicated Service Details Pages</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-bond-cyan shrink-0 mt-0.5" size={20} />
                <span className="text-lg font-bold text-white">Advanced SEO & Speed Tuning</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-bond-cyan shrink-0 mt-0.5" size={20} />
                <span className="text-lg font-bold text-white">Patient Contact & Booking Forms</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-bond-cyan shrink-0 mt-0.5" size={20} />
                <span className="text-lg font-bold text-white">VIP Priority Support</span>
              </div>
            </div>

            <a href="https://invictus-ai.in" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-bond-navy text-center py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-100 cursor-pointer relative z-10">
              Get this for your clinic
            </a>
          </div>

          <div className="bg-gray-900 text-white/90 p-6 rounded-2xl w-full max-w-2xl border border-gray-800 text-sm shadow-xl">
            <p><strong>Note on Transparency:</strong> To ensure you retain full ownership of your brand, you will need to purchase your own domain name (e.g., yourclinic.com). We seamlessly connect it to our high-speed hosting infrastructure at no extra cost.</p>
          </div>

          <div className="mt-auto text-gray-500 text-sm text-center pt-6">
            <p className="font-bold text-bond-navy mb-1">Invictus AI – Engineering Digital Excellence.</p>
            <p>
              <a href="mailto:contact@invictus-ai.in" className="hover:underline">contact@invictus-ai.in</a> | 
              <a href="tel:+919699577641" className="hover:underline"> +91 9699577641</a> | 
              <a href="https://invictus-ai.in" target="_blank" rel="noopener noreferrer" className="hover:underline"> invictus-ai.in</a>
            </p>
          </div>
        </div>
      </A4Page>

    </div>
  );
}
