"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Megaphone, Bot, Star, Loader2, CheckCircle2 } from "lucide-react";

type WebsiteTier = "Standard" | "Premium";

export default function PremiumKitBuilder() {
  const [isWebsiteActive, setIsWebsiteActive] = useState(false);
  const [websiteTier, setWebsiteTier] = useState<WebsiteTier>("Standard");
  const [isAdsActive, setIsAdsActive] = useState(false);
  const [postsCount, setPostsCount] = useState(4);
  const [reelsCount, setReelsCount] = useState(1);
  const [isBotActive, setIsBotActive] = useState(false);
  const [isRepActive, setIsRepActive] = useState(false);

  // Lead capture
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const hasSelection = isWebsiteActive || isAdsActive || isBotActive || isRepActive;

  const generateWhatsAppLink = () => {
    let msg = `Hi Sahil, I want to request a quote for a custom Growth Kit:\n\n`;
    if (isWebsiteActive) msg += `*Website Package*: ${websiteTier}\n`;
    const activeMonthly = [isAdsActive, isBotActive, isRepActive].filter(Boolean).length;
    if (activeMonthly > 0) {
      msg += `\n*Monthly Services Included*:\n`;
      if (isAdsActive) msg += `- Meta Ads & Content (${postsCount} posts, ${reelsCount} reels)\n`;
      if (isBotActive) msg += `- Website Chatbot\n`;
      if (isRepActive) msg += `- Reputation Management\n`;
    }
    msg += `\nPlease let me know the estimated cost for this kit.`;
    return `https://wa.me/919699577641?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async () => {
    if (!leadName.trim() || !leadPhone.trim() || !hasSelection) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const services: string[] = [];
      if (isWebsiteActive) services.push(`Website (${websiteTier})`);
      if (isAdsActive) services.push(`Meta Ads (${postsCount} posts, ${reelsCount} reels)`);
      if (isBotActive) services.push("AI Chatbot");
      if (isRepActive) services.push("Reputation Management");

      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName.trim(),
          phone: leadPhone.trim(),
          services,
          websiteTier: isWebsiteActive ? websiteTier : undefined,
          postsCount: isAdsActive ? postsCount : undefined,
          reelsCount: isAdsActive ? reelsCount : undefined,
          source: "kit-builder",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      // Fire GTM conversion event
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_captured",
          lead_source: "kit-builder",
          lead_services: services.join(", "),
        });
      }

      setSubmitStatus("success");
      setTimeout(() => { window.open(generateWhatsAppLink(), "_blank"); }, 800);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="kit-builder">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">Build Your Growth Kit</h2>
          <p className="text-bond-gray font-medium mt-3 text-lg max-w-2xl">Select the exact services you need. Request a custom quote instantly.</p>
        </div>

        <AnimatePresence>
          {!hasSelection && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-3 bg-gradient-to-r from-bond-lime to-bond-cyan text-bond-navy px-6 py-3 rounded-full w-fit mb-8 shadow-[0_0_20px_rgba(204,255,0,0.6)] animate-pulse border border-white/50">
              <span className="font-black text-sm tracking-wide uppercase">Click a service below to start</span>
              <svg className="w-5 h-5 text-bond-navy animate-bounce" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {/* Website Tile */}
            <div className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${isWebsiteActive ? "bg-white border-bond-lime shadow-[8px_8px_0px_0px_#ccff00] -translate-y-2" : "bg-bond-lime/5 border-bond-lime/30 hover:bg-bond-lime/10 hover:border-bond-lime/60 hover:-translate-y-1"}`}
              onClick={(e) => { if ((e.target as HTMLElement).closest('.tier-toggle')) return; setIsWebsiteActive(!isWebsiteActive); }}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isWebsiteActive ? 'bg-bond-lime/20 text-bond-navy' : 'bg-slate-200 text-slate-400'}`}><Globe className="w-8 h-8" /></div>
                {isWebsiteActive && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-bond-lime text-bond-navy p-1.5 rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></motion.div>}
              </div>
              <h3 className={`text-2xl font-black ${isWebsiteActive ? 'text-bond-navy' : 'text-slate-500'}`}>Clinic Website</h3>
              <p className={`text-sm mt-1 font-medium ${isWebsiteActive ? 'text-bond-gray' : 'text-slate-400'}`}>One-time project</p>
              <AnimatePresence>
                {isWebsiteActive && (
                  <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: 24 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="overflow-hidden tier-toggle">
                    <div className="bg-slate-100 p-1 rounded-full flex relative">
                      <div className="absolute inset-y-1 bg-white rounded-full shadow-sm transition-all duration-300" style={{ width: 'calc(50% - 4px)', left: websiteTier === 'Standard' ? '4px' : 'calc(50%)' }} />
                      <button onClick={() => setWebsiteTier("Standard")} className={`flex-1 relative z-10 py-2 text-sm font-bold rounded-full transition-colors ${websiteTier === 'Standard' ? 'text-bond-navy' : 'text-slate-500'}`}>Standard</button>
                      <button onClick={() => setWebsiteTier("Premium")} className={`flex-1 relative z-10 py-2 text-sm font-bold rounded-full transition-colors ${websiteTier === 'Premium' ? 'text-bond-navy' : 'text-slate-500'}`}>Premium</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Ads Tile */}
            <div className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${isAdsActive ? "bg-white border-bond-cyan shadow-[8px_8px_0px_0px_#06b6d4] -translate-y-2" : "bg-bond-cyan/5 border-bond-cyan/30 hover:bg-bond-cyan/10 hover:border-bond-cyan/60 hover:-translate-y-1"}`}
              onClick={(e) => { if ((e.target as HTMLElement).closest('.ads-sliders')) return; setIsAdsActive(!isAdsActive); }}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isAdsActive ? 'bg-bond-cyan/20 text-bond-cyan' : 'bg-slate-200 text-slate-400'}`}><Megaphone className="w-8 h-8" /></div>
                {isAdsActive && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-bond-cyan text-white p-1.5 rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></motion.div>}
              </div>
              <h3 className={`text-2xl font-black ${isAdsActive ? 'text-bond-navy' : 'text-slate-500'}`}>Meta Ads</h3>
              <p className={`text-sm mt-1 font-medium ${isAdsActive ? 'text-bond-gray' : 'text-slate-400'}`}>Monthly retainer</p>
              <AnimatePresence>
                {isAdsActive && (
                  <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: 24 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="overflow-hidden ads-sliders">
                    <div className="space-y-4 pt-2">
                      <div>
                        <div className="flex justify-between text-xs font-bold text-bond-navy mb-2"><span>POSTS/MO</span><span>{postsCount}</span></div>
                        <input type="range" min="4" max="20" step="1" value={postsCount} onChange={e => setPostsCount(Number(e.target.value))} className="w-full accent-bond-cyan" />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold text-bond-navy mb-2"><span>REELS/MO</span><span>{reelsCount}</span></div>
                        <input type="range" min="1" max="6" step="1" value={reelsCount} onChange={e => setReelsCount(Number(e.target.value))} className="w-full accent-bond-cyan" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bot Tile */}
            <div className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${isBotActive ? "bg-white border-bond-purple shadow-[8px_8px_0px_0px_#a855f7] -translate-y-2" : "bg-bond-purple/5 border-bond-purple/30 hover:bg-bond-purple/10 hover:border-bond-purple/60 hover:-translate-y-1"}`}
              onClick={() => setIsBotActive(!isBotActive)}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isBotActive ? 'bg-bond-purple/20 text-bond-purple' : 'bg-slate-200 text-slate-400'}`}><Bot className="w-8 h-8" /></div>
                {isBotActive && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-bond-purple text-white p-1.5 rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></motion.div>}
              </div>
              <h3 className={`text-2xl font-black ${isBotActive ? 'text-bond-navy' : 'text-slate-500'}`}>Chatbot</h3>
              <p className={`text-sm mt-1 font-medium ${isBotActive ? 'text-bond-gray' : 'text-slate-400'}`}>Monthly retainer</p>
            </div>

            {/* Rep Tile */}
            <div className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${isRepActive ? "bg-white border-[#f59e0b] shadow-[8px_8px_0px_0px_#f59e0b] -translate-y-2" : "bg-[#f59e0b]/5 border-[#f59e0b]/30 hover:bg-[#f59e0b]/10 hover:border-[#f59e0b]/60 hover:-translate-y-1"}`}
              onClick={() => setIsRepActive(!isRepActive)}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isRepActive ? 'bg-[#f59e0b]/20 text-[#f59e0b]' : 'bg-slate-200 text-slate-400'}`}><Star className="w-8 h-8" /></div>
                {isRepActive && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-[#f59e0b] text-white p-1.5 rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></motion.div>}
              </div>
              <h3 className={`text-2xl font-black ${isRepActive ? 'text-bond-navy' : 'text-slate-500'}`}>Reputation</h3>
              <p className={`text-sm mt-1 font-medium ${isRepActive ? 'text-bond-gray' : 'text-slate-400'}`}>Monthly retainer</p>
            </div>
          </div>

          {/* Right: Summary Panel */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24 bg-bond-navy rounded-3xl shadow-2xl p-8 border border-white/10">
              <div className="text-xs font-bold uppercase tracking-widest text-bond-lime mb-6">Your Selected Services</div>
              <div className="space-y-4 mb-6 min-h-[100px]">
                {!hasSelection && <div className="text-white/40 text-sm font-medium italic">Select services to see your kit build here...</div>}
                <AnimatePresence>
                  {isWebsiteActive && <motion.div key="sw" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white border-b border-white/5 pb-3"><span className="font-bold">Website Package</span><span className="text-bond-lime">{websiteTier}</span></motion.div>}
                  {isAdsActive && <motion.div key="sa" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white border-b border-white/5 pb-3"><span className="font-bold">Meta Ads & Content</span><span className="text-cyan-400">{postsCount} Posts, {reelsCount} Reels</span></motion.div>}
                  {isBotActive && <motion.div key="sb" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white border-b border-white/5 pb-3"><span className="font-bold">AI Chatbot</span><span className="text-bond-purple">Included</span></motion.div>}
                  {isRepActive && <motion.div key="sr" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white border-b border-white/5 pb-3"><span className="font-bold">Reputation Management</span><span className="text-amber-500">Included</span></motion.div>}
                </AnimatePresence>
              </div>

              {/* Lead Capture Fields */}
              <AnimatePresence>
                {hasSelection && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="border-t border-white/10 pt-6 mb-6 space-y-3">
                      <input type="text" placeholder="Your Name *" value={leadName} onChange={(e) => setLeadName(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-medium text-sm focus:outline-none focus:border-bond-lime focus:ring-1 focus:ring-bond-lime transition-colors" />
                      <input type="tel" placeholder="Phone Number * (10 digits)" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} maxLength={10}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-medium text-sm focus:outline-none focus:border-bond-lime focus:ring-1 focus:ring-bond-lime transition-colors" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {submitStatus === "success" ? (
                <div className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-green-500/20 text-green-400 font-bold">
                  <CheckCircle2 className="w-5 h-5" /> Opening WhatsApp...
                </div>
              ) : (
                <button onClick={handleSubmit} disabled={!hasSelection || !leadName.trim() || !leadPhone.trim() || isSubmitting}
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                    hasSelection && leadName.trim() && leadPhone.trim() && !isSubmitting
                      ? "bg-bond-lime text-bond-navy hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer"
                      : "bg-white/10 text-white/40 cursor-not-allowed"
                  }`}>
                  {isSubmitting ? <span className="inline-flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Saving...</span> : "Request a Custom Quote"}
                </button>
              )}

              {submitStatus === "error" && (
                <p className="text-red-400 text-xs font-medium mt-3 text-center">
                  Something went wrong. <a href="https://wa.me/919699577641" target="_blank" rel="noopener noreferrer" className="underline">Try WhatsApp directly.</a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
