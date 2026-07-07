import React from "react";
import Image from "next/image";
import { CheckCircle2, Bot, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Invictus AI - Digital Storefronts",
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

export default function CombinedBrochure() {
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
            Upgrade Your Clinic's <br/>
            <span className="text-bond-purple">Digital Presence</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            Choose the perfect foundation for your patient growth system. High-performance websites designed specifically for modern dental practices.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">What You Get With Every Tier:</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-lime" size={28} />
                <span className="text-xl">Custom Dental Website Design</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-lime" size={28} />
                <span className="text-xl">Local SEO Foundation</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-lime" size={28} />
                <span className="text-xl">Lightning Fast Mobile Optimization</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-bond-lime" size={28} />
                <span className="text-xl">High-Speed Cloud Hosting Included</span>
              </div>
            </div>
          </div>
        </div>
      </A4Page>

      {/* ── PREMIUM PREVIEWS ── */}
      <A4Page className="bg-slate-50">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-2">
            <h2 className="text-4xl font-black">Premium Edition</h2>
            <span className="bg-bond-cyan text-bond-navy text-sm font-bold px-4 py-1.5 rounded-full">UPGRADE</span>
          </div>
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

      {/* ── STANDARD PREVIEWS ── */}
      <A4Page className="bg-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black">Standard Edition</h2>
          <p className="text-gray-500 font-medium text-xl mt-2">Clean, Modern, & High-Converting</p>
        </div>

        <div className="flex flex-col gap-6 flex-1 items-center">
          {/* THEME 01 */}
          <div className="w-[85%] flex flex-col">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-2xl font-black text-gray-800">Theme 01</h3>
              <a href="https://dental-standard-site-1.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-blue-600 underline decoration-2 underline-offset-4 hover:text-blue-800 flex items-center gap-1">
                View Standard Edition Theme 1 ↗
              </a>
            </div>
            <a href="https://dental-standard-site-1.vercel.app" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="w-full rounded-xl border-4 border-gray-800 shadow-xl overflow-hidden bg-gray-100 flex flex-col group-hover:border-bond-navy transition-colors">
                <div className="h-4 bg-gray-800 flex items-center px-2 gap-1 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <img src="/templates/standard-1-v2.jpg" alt="Standard 1 Home" className="w-full h-auto block" />
              </div>
            </a>
          </div>

          {/* THEME 02 */}
          <div className="w-[85%] flex flex-col">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-2xl font-black text-gray-800">Theme 02</h3>
              <a href="https://dental-standard-site-2.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-blue-600 underline decoration-2 underline-offset-4 hover:text-blue-800 flex items-center gap-1">
                View Standard Edition Theme 2 ↗
              </a>
            </div>
            <a href="https://dental-standard-site-2.vercel.app" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="w-full rounded-xl border-4 border-gray-800 shadow-xl overflow-hidden bg-gray-100 flex flex-col group-hover:border-bond-navy transition-colors">
                <div className="h-4 bg-gray-800 flex items-center px-2 gap-1 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <img src="/templates/standard-2.jpg" alt="Standard 2 Home" className="w-full h-auto block" />
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

      {/* ── PAGE 6: PRICING & CTA ── */}
      <A4Page className="bg-slate-50">
        <div className="flex-1 flex flex-col pt-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-2 text-bond-navy">Clear Investments. Tangible Returns.</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your clinic's vision.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8 relative">
            {/* Standard Package */}
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-sm relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>
              <h3 className="text-2xl font-bold mb-2 text-gray-600">Standard Package</h3>
              <div className="text-5xl font-black mb-4 text-bond-navy">₹7,000</div>
              <p className="text-gray-500 mb-6 text-sm font-medium">The perfect high-converting foundation.</p>
              
              <ul className="space-y-4 text-sm text-bond-navy font-bold flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-lime shrink-0 mt-0.5" /> 
                  1 High-Converting Landing Page
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-lime shrink-0 mt-0.5" /> 
                  Patient Contact & Booking Forms
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-lime shrink-0 mt-0.5" /> 
                  High-Speed Hosting Included
                </li>
                <li className="flex items-start gap-3 opacity-50 pt-2 border-t border-gray-100">
                  <span className="text-gray-400 font-black shrink-0 w-[20px] text-center mt-0.5">✕</span>
                  <span className="text-gray-500 font-medium line-through">Multi-Page Architecture</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <span className="text-gray-400 font-black shrink-0 w-[20px] text-center mt-0.5">✕</span>
                  <span className="text-gray-500 font-medium line-through">Premium CSS Particle Animations</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <span className="text-gray-400 font-black shrink-0 w-[20px] text-center mt-0.5">✕</span>
                  <span className="text-gray-500 font-medium line-through">Dynamic Service Pages</span>
                </li>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-bond-navy text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col scale-[1.02] transform border-2 border-bond-cyan/30">
              <div className="absolute top-0 right-0 w-48 h-48 bg-bond-purple/30 blur-3xl rounded-full"></div>
              <div className="absolute -right-10 top-8 bg-bond-cyan text-bond-navy text-xs font-black px-12 py-1.5 rotate-45 tracking-widest">VIP</div>
              
              <h3 className="text-2xl font-bold mb-2 text-white">Premium Package</h3>
              <div className="text-5xl font-black mb-4 text-white">₹13,000</div>
              <p className="text-white/80 mb-6 text-sm font-medium">The ultimate flagship experience.</p>
              
              <ul className="space-y-4 text-sm text-white font-bold flex-1 relative z-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-cyan shrink-0 mt-0.5" /> 
                  Multi-Page Architecture
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-cyan shrink-0 mt-0.5" /> 
                  Premium CSS Particle Animations
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-cyan shrink-0 mt-0.5" /> 
                  Dedicated Service Details Pages
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-cyan shrink-0 mt-0.5" /> 
                  Patient Contact & Booking Forms
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-cyan shrink-0 mt-0.5" /> 
                  Advanced SEO & Speed Tuning
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bond-cyan shrink-0 mt-0.5" /> 
                  VIP Priority Support
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-6 mt-4">
            <a href="https://invictus-ai.in" target="_blank" rel="noopener noreferrer" className="block w-full bg-bond-navy text-white text-center py-4 rounded-full font-black text-xl shadow-xl hover:bg-bond-navy/90 cursor-pointer transition-colors">
              Get this for your clinic
            </a>
          </div>

          <div className="bg-gray-900 text-white/90 p-5 rounded-2xl w-full border border-gray-800 text-sm shadow-xl mx-auto">
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
