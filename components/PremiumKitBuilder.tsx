"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Megaphone, Bot, Star } from "lucide-react";

type WebsiteTier = "Standard" | "Premium";

export default function PremiumKitBuilder() {
  // Selections
  const [isWebsiteActive, setIsWebsiteActive] = useState(false);
  const [websiteTier, setWebsiteTier] = useState<WebsiteTier>("Standard");
  
  const [isAdsActive, setIsAdsActive] = useState(false);
  const [postsCount, setPostsCount] = useState(4);
  const [reelsCount, setReelsCount] = useState(1);
  
  const [isBotActive, setIsBotActive] = useState(false);
  const [isRepActive, setIsRepActive] = useState(false);

  // Pricing Logic
  const websitePrice = isWebsiteActive ? (websiteTier === "Standard" ? 7000 : 13000) : 0;
  const adsPrice = isAdsActive ? (4000 + (postsCount * 300) + (reelsCount * 800)) : 0;
  const botPrice = isBotActive ? 3000 : 0;
  const repPrice = isRepActive ? 3000 : 0;

  const monthlySubtotal = adsPrice + botPrice + repPrice;
  const activeMonthlyCount = [isAdsActive, isBotActive, isRepActive].filter(Boolean).length;
  
  let discountPercent = 0;
  if (activeMonthlyCount === 2) discountPercent = 0.10;
  if (activeMonthlyCount === 3) discountPercent = 0.15;
  
  const discountAmount = monthlySubtotal * discountPercent;
  const finalMonthly = monthlySubtotal - discountAmount;

  // WhatsApp Message Generator
  const generateWhatsAppLink = () => {
    let msg = `Hi Sahil, I've built my Growth Kit:\n\n`;
    
    if (isWebsiteActive) {
      msg += `*Website*: ${websiteTier} (₹${websitePrice.toLocaleString()})\n`;
    }
    
    if (activeMonthlyCount > 0) {
      msg += `\n*Monthly Services*:\n`;
      if (isAdsActive) msg += `- Meta Ads & Content (${postsCount} posts, ${reelsCount} reels)\n`;
      if (isBotActive) msg += `- Website Chatbot\n`;
      if (isRepActive) msg += `- Reputation Management\n`;
    }
    
    msg += `\n*Summary*:\n`;
    msg += `One-time Setup: ₹${websitePrice.toLocaleString()}\n`;
    msg += `Monthly Total: ₹${finalMonthly.toLocaleString()}/mo\n`;
    
    if (discountPercent > 0) {
      msg += `(Includes ${discountPercent * 100}% Bundle Discount!)\n`;
    }
    
    const encoded = encodeURIComponent(msg);
    return `https://wa.me/919699577641?text=${encoded}`;
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="kit-builder">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-bond-navy tracking-tight">
            Build Your Growth Kit
          </h2>
          <p className="text-bond-gray font-medium mt-3 text-lg max-w-2xl">
            Select the exact services you need. Your price updates instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: The Builder Tiles */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Tile: Website */}
            <div 
              className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${
                isWebsiteActive 
                  ? "bg-white border-bond-lime shadow-[8px_8px_0px_0px_#ccff00] -translate-y-2" 
                  : "bg-bond-lime/5 border-bond-lime/30 hover:bg-bond-lime/10 hover:border-bond-lime/60 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] hover:-translate-y-1"
              }`}
              onClick={(e) => {
                // Prevent clicking toggle from toggling the whole card
                if ((e.target as HTMLElement).closest('.tier-toggle')) return;
                setIsWebsiteActive(!isWebsiteActive);
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isWebsiteActive ? 'bg-bond-lime/20 text-bond-navy' : 'bg-slate-200 text-slate-400'}`}>
                  <Globe className="w-8 h-8" />
                </div>
                {isWebsiteActive && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-bond-lime text-bond-navy p-1.5 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </motion.div>
                )}
              </div>
              
              <h3 className={`text-2xl font-black ${isWebsiteActive ? 'text-bond-navy' : 'text-slate-500'}`}>Clinic Website</h3>
              <p className={`text-sm mt-1 font-medium ${isWebsiteActive ? 'text-bond-gray' : 'text-slate-400'}`}>One-time project</p>

              <AnimatePresence>
                {isWebsiteActive && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }} 
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden tier-toggle"
                  >
                    <div className="bg-slate-100 p-1 rounded-full flex relative">
                      <div 
                        className="absolute inset-y-1 bg-white rounded-full shadow-sm transition-all duration-300" 
                        style={{ width: 'calc(50% - 4px)', left: websiteTier === 'Standard' ? '4px' : 'calc(50%)' }}
                      />
                      <button 
                        onClick={() => setWebsiteTier("Standard")}
                        className={`flex-1 relative z-10 py-2 text-sm font-bold rounded-full transition-colors ${websiteTier === 'Standard' ? 'text-bond-navy' : 'text-slate-500 hover:text-bond-navy'}`}
                      >
                        Standard (₹7K)
                      </button>
                      <button 
                        onClick={() => setWebsiteTier("Premium")}
                        className={`flex-1 relative z-10 py-2 text-sm font-bold rounded-full transition-colors ${websiteTier === 'Premium' ? 'text-bond-navy' : 'text-slate-500 hover:text-bond-navy'}`}
                      >
                        Premium (₹13K)
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tile: Ads */}
            <div 
              className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${
                isAdsActive 
                  ? "bg-white border-bond-cyan shadow-[8px_8px_0px_0px_#06b6d4] -translate-y-2" 
                  : "bg-bond-cyan/5 border-bond-cyan/30 hover:bg-bond-cyan/10 hover:border-bond-cyan/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1"
              }`}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('.ads-sliders')) return;
                setIsAdsActive(!isAdsActive);
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isAdsActive ? 'bg-bond-cyan/20 text-bond-cyan' : 'bg-slate-200 text-slate-400'}`}>
                  <Megaphone className="w-8 h-8" />
                </div>
                {isAdsActive && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-bond-cyan text-white p-1.5 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </motion.div>
                )}
              </div>
              
              <h3 className={`text-2xl font-black ${isAdsActive ? 'text-bond-navy' : 'text-slate-500'}`}>Meta Ads</h3>
              <p className={`text-sm mt-1 font-medium ${isAdsActive ? 'text-bond-gray' : 'text-slate-400'}`}>Monthly retainer</p>

              <AnimatePresence>
                {isAdsActive && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }} 
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden ads-sliders"
                  >
                    <div className="space-y-4 pt-2">
                      <div>
                        <div className="flex justify-between text-xs font-bold text-bond-navy mb-2">
                          <span>POSTS/MO (₹300 ea)</span>
                          <span>{postsCount}</span>
                        </div>
                        <input 
                          type="range" min="4" max="20" step="1" 
                          value={postsCount} onChange={e => setPostsCount(Number(e.target.value))}
                          className="w-full accent-bond-cyan"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold text-bond-navy mb-2">
                          <span>REELS/MO (₹800 ea)</span>
                          <span>{reelsCount}</span>
                        </div>
                        <input 
                          type="range" min="1" max="6" step="1" 
                          value={reelsCount} onChange={e => setReelsCount(Number(e.target.value))}
                          className="w-full accent-bond-cyan"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tile: Bot */}
            <div 
              className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${
                isBotActive 
                  ? "bg-white border-bond-purple shadow-[8px_8px_0px_0px_#a855f7] -translate-y-2" 
                  : "bg-bond-purple/5 border-bond-purple/30 hover:bg-bond-purple/10 hover:border-bond-purple/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1"
              }`}
              onClick={() => setIsBotActive(!isBotActive)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isBotActive ? 'bg-bond-purple/20 text-bond-purple' : 'bg-slate-200 text-slate-400'}`}>
                  <Bot className="w-8 h-8" />
                </div>
                {isBotActive && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-bond-purple text-white p-1.5 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </motion.div>
                )}
              </div>
              <h3 className={`text-2xl font-black ${isBotActive ? 'text-bond-navy' : 'text-slate-500'}`}>Chatbot</h3>
              <p className={`text-sm mt-1 font-medium ${isBotActive ? 'text-bond-gray' : 'text-slate-400'}`}>₹3,000 / month</p>
            </div>

            {/* Tile: Rep */}
            <div 
              className={`relative rounded-3xl transition-all duration-300 p-6 cursor-pointer border-2 ${
                isRepActive 
                  ? "bg-white border-[#f59e0b] shadow-[8px_8px_0px_0px_#f59e0b] -translate-y-2" 
                  : "bg-[#f59e0b]/5 border-[#f59e0b]/30 hover:bg-[#f59e0b]/10 hover:border-[#f59e0b]/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:-translate-y-1"
              }`}
              onClick={() => setIsRepActive(!isRepActive)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${isRepActive ? 'bg-[#f59e0b]/20 text-[#f59e0b]' : 'bg-slate-200 text-slate-400'}`}>
                  <Star className="w-8 h-8" />
                </div>
                {isRepActive && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-[#f59e0b] text-white p-1.5 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </motion.div>
                )}
              </div>
              <h3 className={`text-2xl font-black ${isRepActive ? 'text-bond-navy' : 'text-slate-500'}`}>Reputation</h3>
              <p className={`text-sm mt-1 font-medium ${isRepActive ? 'text-bond-gray' : 'text-slate-400'}`}>₹3,000 / month</p>
            </div>

          </div>

          {/* Right: Live Summary Panel */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24 bg-bond-navy rounded-3xl shadow-2xl p-8 border border-white/10">
              <div className="text-xs font-bold uppercase tracking-widest text-bond-lime mb-6">Your Kit</div>

              <div className="space-y-4 mb-8 min-h-[120px]">
                {!isWebsiteActive && !isAdsActive && !isBotActive && !isRepActive && (
                  <div className="text-white/40 text-sm font-medium italic">Select services to see your kit build here...</div>
                )}
                
                <AnimatePresence>
                  {isWebsiteActive && (
                    <motion.div key="summary-website" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white">
                      <span>Website ({websiteTier})</span>
                      <span className="font-bold">₹{websitePrice.toLocaleString()}</span>
                    </motion.div>
                  )}
                  {isAdsActive && (
                    <motion.div key="summary-ads" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white">
                      <span>Meta Ads ({postsCount}p, {reelsCount}r)</span>
                      <span className="font-bold">₹{adsPrice.toLocaleString()}/mo</span>
                    </motion.div>
                  )}
                  {isBotActive && (
                    <motion.div key="summary-bot" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white">
                      <span>Chatbot</span>
                      <span className="font-bold">₹{botPrice.toLocaleString()}/mo</span>
                    </motion.div>
                  )}
                  {isRepActive && (
                    <motion.div key="summary-rep" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between text-white">
                      <span>Reputation</span>
                      <span className="font-bold">₹{repPrice.toLocaleString()}/mo</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {discountPercent > 0 && (
                <div className="bg-bond-lime/10 border border-bond-lime/20 rounded-xl p-4 mb-6 flex justify-between items-center text-bond-lime">
                  <span className="text-sm font-bold">{discountPercent * 100}% Bundle Savings</span>
                  <span className="font-black">-₹{discountAmount.toLocaleString()}/mo</span>
                </div>
              )}

              <div className="border-t border-white/10 pt-6 space-y-2 mb-8">
                <div className="flex justify-between text-white/70">
                  <span>One-time Setup</span>
                  <span className="font-bold text-white">₹{websitePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/70 items-end">
                  <span>Monthly Total</span>
                  <span className="font-black text-3xl text-bond-lime">₹{finalMonthly.toLocaleString()}</span>
                </div>
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                  (isWebsiteActive || isAdsActive || isBotActive || isRepActive)
                    ? "bg-bond-lime text-bond-navy hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!isWebsiteActive && !isAdsActive && !isBotActive && !isRepActive) {
                    e.preventDefault();
                  }
                }}
              >
                Get This Kit on WhatsApp
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
