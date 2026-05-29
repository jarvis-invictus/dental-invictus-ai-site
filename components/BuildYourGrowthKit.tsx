"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp, Check, Info } from "lucide-react";

type WebsiteChoice = "standard" | "premium" | null;
type MonthlyService = "meta-ads" | "chatbot" | "reputation";
type Addon = "landing-page" | "ad-creative";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("en-IN")
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default function BuildYourGrowthKit() {
  const [website, setWebsite] = useState<WebsiteChoice>(null);
  const [services, setServices] = useState<Set<MonthlyService>>(new Set());
  const [addons, setAddons] = useState<Set<Addon>>(new Set());

  const [postsCount, setPostsCount] = useState(8);
  const [reelsCount, setReelsCount] = useState(2);

  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState(false);

  // Constants
  const prices = {
    standard: 7000,
    premium: 13000,
    "landing-page": 4000,
    "ad-creative": 2000,
    chatbot: 3000,
    reputation: 3000,
  };

  const metaAdsBase = 4000;
  const pricePerPost = 300;
  const pricePerReel = 800;

  // Derived Values
  const metaAdsCost = metaAdsBase + postsCount * pricePerPost + reelsCount * pricePerReel;

  const oneTimeTotal =
    (website === "standard" ? prices.standard : website === "premium" ? prices.premium : 0) +
    (addons.has("landing-page") ? prices["landing-page"] : 0) +
    (addons.has("ad-creative") ? prices["ad-creative"] : 0);

  const rawMonthlyTotal =
    (services.has("meta-ads") ? metaAdsCost : 0) +
    (services.has("chatbot") ? prices.chatbot : 0) +
    (services.has("reputation") ? prices.reputation : 0);

  let discountPercentage = 0;
  if (services.size === 3) discountPercentage = 0.15;
  else if (services.size === 2) discountPercentage = 0.10;

  const discountAmount = rawMonthlyTotal * discountPercentage;
  const finalMonthlyTotal = rawMonthlyTotal - discountAmount;

  const hasSelections = website !== null || services.size > 0 || addons.size > 0;

  // Handlers
  const toggleService = (service: MonthlyService) => {
    const next = new Set(services);
    if (next.has(service)) next.delete(service);
    else next.add(service);
    setServices(next);
  };

  const toggleAddon = (addon: Addon) => {
    const next = new Set(addons);
    if (next.has(addon)) next.delete(addon);
    else next.add(addon);
    setAddons(next);
  };

  // WhatsApp Pre-fill Generation
  const generateWhatsAppMessage = () => {
    let msg = "Hi Sahil, I'd like to build a Growth Kit for my dental clinic.\n\nMy selections:\n";

    if (website) {
      msg += `Website: ${website === "standard" ? "Standard Website" : "Premium Website"} — ₹${(
        website === "standard" ? prices.standard : prices.premium
      ).toLocaleString("en-IN")} one-time\n`;
    } else {
      msg += "Website: Not selected\n";
    }

    msg += "Monthly Services:\n";
    if (services.size === 0) msg += "- None\n";
    if (services.has("meta-ads"))
      msg += `- Meta Ads + Content: ${postsCount} Posts, ${reelsCount} Reels — ₹${metaAdsCost.toLocaleString("en-IN")}/mo\n`;
    if (services.has("chatbot"))
      msg += `- Website Chatbot — ₹${prices.chatbot.toLocaleString("en-IN")}/mo\n`;
    if (services.has("reputation"))
      msg += `- Reputation Management — ₹${prices.reputation.toLocaleString("en-IN")}/mo\n`;

    msg += "Add-ons: ";
    const selectedAddons = [];
    if (addons.has("landing-page")) selectedAddons.push(`Campaign Landing Page — ₹${prices["landing-page"].toLocaleString("en-IN")}`);
    if (addons.has("ad-creative")) selectedAddons.push(`Ad Creative Set — ₹${prices["ad-creative"].toLocaleString("en-IN")}`);
    msg += selectedAddons.length > 0 ? selectedAddons.join(", ") + "\n" : "None\n";

    msg += `\nOne-time Total: ₹${oneTimeTotal.toLocaleString("en-IN")}\n`;
    msg += `Monthly Total: ₹${finalMonthlyTotal.toLocaleString("en-IN")}/mo`;
    if (discountPercentage > 0) {
      msg += ` (Includes ${discountPercentage * 100}% bundle discount)`;
    }

    msg += "\n\nCan we discuss this?";
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/919699577641?text=${generateWhatsAppMessage()}`;

  return (
    <section id="services" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            viewport={{ once: true }}
            className="relative cursor-default"
          >
            <div className="absolute -top-4 left-1/2 w-32 h-8 bg-slate-100/60 backdrop-blur-sm -translate-x-1/2 rotate-2 shadow-sm border border-white/50 z-20" />
            <div className="bg-bond-lime px-8 py-4 shadow-sticker transform rotate-[-1deg]">
              <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase text-bond-navy tracking-tight leading-tight">
                Build Your Growth Kit
              </h2>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg text-bond-gray font-medium mb-16 max-w-2xl mx-auto"
        >
          Every clinic is different. Pick exactly what you need — nothing more, nothing less. Your price updates as you choose.
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          {/* LEFT COLUMN — Selections */}
          <div className="space-y-16">
            
            {/* STEP 1: Foundation */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-2 shadow-sm transform -rotate-1">
                  Step 1 — Choose Your Website Foundation
                </div>
                <p className="text-slate-500 font-medium ml-2">Required to get started. One-time build fee.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Standard Website */}
                <div
                  onClick={() => setWebsite("standard")}
                  className={`cursor-pointer bg-white rounded-3xl p-6 transition-all duration-300 relative border-2 ${
                    website === "standard"
                      ? "border-bond-lime shadow-sticker scale-[1.02]"
                      : "border-transparent shadow-sm hover:border-slate-200"
                  }`}
                >
                  {website === "standard" && (
                    <div className="absolute top-4 right-4 text-bond-lime">
                      <CheckCircle2 className="w-7 h-7 fill-bond-navy" />
                    </div>
                  )}
                  <div className="inline-block bg-slate-100 text-bond-navy px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    Essential
                  </div>
                  <h3 className="text-2xl font-black text-bond-navy mb-1">Standard Website</h3>
                  <div className="text-bond-lime font-black text-xl mb-6">₹7,000 <span className="text-slate-400 text-sm font-normal">one-time</span></div>
                  <ul className="space-y-3">
                    {[
                      "5–6 pages — Home, About, Services, Gallery, Contact",
                      "Mobile-first responsive design",
                      "WhatsApp chat button embedded",
                      "Google Maps integration",
                      "Basic doctor profile page",
                      "2 revision rounds included"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-bond-lime shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Premium Website */}
                <div
                  onClick={() => setWebsite("premium")}
                  className={`cursor-pointer bg-white rounded-3xl p-6 transition-all duration-300 relative border-2 ${
                    website === "premium"
                      ? "border-bond-lime shadow-sticker-lime scale-[1.02]"
                      : "border-transparent shadow-sm hover:border-slate-200"
                  }`}
                >
                  {website === "premium" && (
                    <div className="absolute top-4 right-4 text-bond-lime">
                      <CheckCircle2 className="w-7 h-7 fill-bond-navy" />
                    </div>
                  )}
                  <div className="inline-block bg-bond-lime text-bond-navy px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-black text-bond-navy mb-1">Premium Website</h3>
                  <div className="text-bond-lime font-black text-xl mb-6">₹13,000 <span className="text-slate-400 text-sm font-normal">one-time</span></div>
                  <ul className="space-y-3">
                    {[
                      "10–15 pages — all Standard pages plus more",
                      "Individual service pages (implants, whitening, braces, etc.)",
                      "On-page SEO setup (meta tags, schema, keywords)",
                      "Appointment booking integration",
                      "Blog section setup — ready to publish",
                      "Patient gallery + before/after section",
                      "Doctor and team profile pages",
                      "3 revision rounds included"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-bond-lime shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 2: Monthly Services */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-2 shadow-sm transform -rotate-1">
                  Step 2 — Choose Your Monthly Services
                </div>
                <p className="text-slate-500 font-medium ml-2">These run every month. Cancel anytime — no lock-in contracts.</p>
              </div>

              {/* Discount Banner */}
              <div className="bg-bond-navy text-white rounded-2xl p-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-bond-lime/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bond-lime font-black">%</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Stack & Save</h4>
                    <p className="text-white/60 text-sm">Bundle 2 services for <strong className="text-bond-lime">10% off</strong>, or all 3 for <strong className="text-bond-lime">15% off</strong> your monthly total.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Meta Ads */}
                <div
                  className={`bg-white rounded-3xl p-6 transition-all duration-300 relative border-2 flex flex-col ${
                    services.has("meta-ads")
                      ? "border-bond-cyan shadow-sticker-cyan -translate-y-1"
                      : "border-transparent shadow-sm hover:border-slate-200"
                  }`}
                >
                  <div className="flex-1 cursor-pointer" onClick={() => toggleService("meta-ads")}>
                    {services.has("meta-ads") && (
                      <div className="absolute top-4 right-4 text-bond-cyan">
                        <CheckCircle2 className="w-7 h-7 fill-bond-navy" />
                      </div>
                    )}
                    <div className="inline-block bg-slate-100 text-bond-navy px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                      Highest Impact
                    </div>
                    <h3 className="text-xl font-black text-bond-navy mb-1">Meta Ads + Content</h3>
                    <div className="text-bond-cyan font-black text-lg mb-1">From ₹{metaAdsCost.toLocaleString("en-IN")}/mo</div>
                    <p className="text-slate-400 text-xs italic mb-4">Your ad budget is separate — paid directly to Meta</p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Monthly Meta ad campaign management",
                        "Ad creative design included",
                        "Hyper-local targeting (radius adjusted)",
                        "Monthly performance report"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-bond-cyan shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dynamic Sliders (visible when selected) */}
                  <AnimatePresence>
                    {services.has("meta-ads") && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-4 border-t border-slate-100 mt-auto"
                      >
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-bold text-bond-navy">Posts</span>
                            <span className="text-bond-cyan font-bold">{postsCount}</span>
                          </div>
                          <input
                            type="range"
                            min="4"
                            max="20"
                            step="1"
                            value={postsCount}
                            onChange={(e) => setPostsCount(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-bond-cyan"
                          />
                          <p className="text-[10px] text-slate-400 mt-1">₹300 / post</p>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-bold text-bond-navy">Reels</span>
                            <span className="text-bond-cyan font-bold">{reelsCount}</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="6"
                            step="1"
                            value={reelsCount}
                            onChange={(e) => setReelsCount(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-bond-cyan"
                          />
                          <p className="text-[10px] text-slate-400 mt-1">₹800 / reel</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Chatbot */}
                <div
                  onClick={() => toggleService("chatbot")}
                  className={`cursor-pointer bg-white rounded-3xl p-6 transition-all duration-300 relative border-2 ${
                    services.has("chatbot")
                      ? "border-bond-purple shadow-[8px_8px_0px_0px_#a855f7] -translate-y-1"
                      : "border-transparent shadow-sm hover:border-slate-200"
                  }`}
                >
                  {services.has("chatbot") && (
                    <div className="absolute top-4 right-4 text-bond-purple">
                      <CheckCircle2 className="w-7 h-7 fill-bond-navy" />
                    </div>
                  )}
                  <div className="inline-block bg-slate-100 text-bond-navy px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    24/7 Bookings
                  </div>
                  <h3 className="text-xl font-black text-bond-navy mb-1">Website Chatbot</h3>
                  <div className="text-bond-purple font-black text-lg mb-6">₹3,000/mo</div>
                  <ul className="space-y-2">
                    {[
                      "Appointment booking bot — works day and night",
                      "FAQ answering (services, pricing, location, timings)",
                      "Fully customised for your clinic's data",
                      "Installed directly on your website",
                      "Powered by Go High Level"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-bond-purple shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reputation */}
                <div
                  onClick={() => toggleService("reputation")}
                  className={`cursor-pointer bg-white rounded-3xl p-6 transition-all duration-300 relative border-2 ${
                    services.has("reputation")
                      ? "border-bond-orange shadow-[8px_8px_0px_0px_#f97316] -translate-y-1"
                      : "border-transparent shadow-sm hover:border-slate-200"
                  }`}
                >
                  {services.has("reputation") && (
                    <div className="absolute top-4 right-4 text-bond-orange">
                      <CheckCircle2 className="w-7 h-7 fill-bond-navy" />
                    </div>
                  )}
                  <div className="inline-block bg-slate-100 text-bond-navy px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    Auto Reviews
                  </div>
                  <h3 className="text-xl font-black text-bond-navy mb-1">Reputation Management</h3>
                  <div className="text-bond-orange font-black text-lg mb-6">₹3,000/mo</div>
                  <ul className="space-y-2">
                    {[
                      "Automated Google review requests after every patient visit",
                      "Sent via WhatsApp and SMS automatically",
                      "Google Business Profile management",
                      "Response to all incoming reviews (positive and negative)",
                      "Monthly review growth report",
                      "Powered by Go High Level"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-bond-orange shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 3: Add-ons */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-bond-lime text-bond-navy px-4 py-1.5 rounded-lg text-sm font-bold mb-2 shadow-sm transform -rotate-1">
                  Step 3 — Optional Add-ons
                </div>
                <p className="text-slate-500 font-medium ml-2">Bolt these onto any package. One-time costs.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Landing Page */}
                <div
                  onClick={() => toggleAddon("landing-page")}
                  className={`cursor-pointer bg-white rounded-2xl p-5 transition-all duration-300 relative border-2 ${
                    addons.has("landing-page")
                      ? "border-bond-lime shadow-md scale-[1.02]"
                      : "border-transparent shadow-sm hover:border-slate-200"
                  }`}
                >
                  {addons.has("landing-page") && (
                    <div className="absolute top-3 right-3 text-bond-lime">
                      <CheckCircle2 className="w-5 h-5 fill-bond-navy" />
                    </div>
                  )}
                  <div className="text-[10px] font-black uppercase tracking-widest text-bond-lime mb-2">Recommended with Meta Ads</div>
                  <h4 className="text-lg font-bold text-bond-navy mb-1">Campaign Landing Page</h4>
                  <div className="text-bond-navy font-black mb-3">₹4,000 <span className="text-slate-400 text-xs font-normal">one-time</span></div>
                  <p className="text-slate-500 text-sm leading-relaxed">A dedicated conversion page for one specific treatment (teeth whitening, implants, braces) built to capture leads from your Meta ads campaign.</p>
                </div>

                {/* Ad Creative */}
                <div
                  onClick={() => toggleAddon("ad-creative")}
                  className={`cursor-pointer bg-white rounded-2xl p-5 transition-all duration-300 relative border-2 ${
                    addons.has("ad-creative")
                      ? "border-bond-lime shadow-md scale-[1.02]"
                      : "border-transparent shadow-sm hover:border-slate-200"
                  }`}
                >
                  {addons.has("ad-creative") && (
                    <div className="absolute top-3 right-3 text-bond-lime">
                      <CheckCircle2 className="w-5 h-5 fill-bond-navy" />
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-bond-navy mb-1 mt-6">Ad Creative Set</h4>
                  <div className="text-bond-navy font-black mb-3">₹2,000 <span className="text-slate-400 text-xs font-normal">one-time</span></div>
                  <p className="text-slate-500 text-sm leading-relaxed">5 custom ad creatives (static images + reel thumbnails) designed specifically for your clinic's campaign.</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN — Summary Panel (Desktop Sticky) */}
          <div className="hidden lg:block sticky top-24">
            <SummaryPanel
              website={website}
              services={services}
              addons={addons}
              postsCount={postsCount}
              reelsCount={reelsCount}
              metaAdsCost={metaAdsCost}
              prices={prices}
              oneTimeTotal={oneTimeTotal}
              rawMonthlyTotal={rawMonthlyTotal}
              discountAmount={discountAmount}
              discountPercentage={discountPercentage}
              finalMonthlyTotal={finalMonthlyTotal}
              hasSelections={hasSelections}
              whatsappUrl={whatsappUrl}
            />
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <AnimatePresence>
          {isMobileSummaryOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-full w-full max-h-[70vh] overflow-y-auto shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
            >
              <SummaryPanel
                website={website}
                services={services}
                addons={addons}
                postsCount={postsCount}
                reelsCount={reelsCount}
                metaAdsCost={metaAdsCost}
                prices={prices}
                oneTimeTotal={oneTimeTotal}
                rawMonthlyTotal={rawMonthlyTotal}
                discountAmount={discountAmount}
                discountPercentage={discountPercentage}
                finalMonthlyTotal={finalMonthlyTotal}
                hasSelections={hasSelections}
                whatsappUrl={whatsappUrl}
                isMobile
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div 
          className="bg-bond-navy border-t border-white/10 p-4 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.15)] cursor-pointer"
          onClick={() => setIsMobileSummaryOpen(!isMobileSummaryOpen)}
        >
          <div>
            <div className="text-xs font-bold text-bond-lime uppercase tracking-wider flex items-center gap-1">
              Your Kit
              {isMobileSummaryOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
            </div>
            <div className="text-white font-black text-xl">
              ₹<AnimatedNumber value={finalMonthlyTotal} /><span className="text-xs font-normal text-white/50">/mo</span>
              <span className="text-white/30 mx-2">+</span>
              ₹<AnimatedNumber value={oneTimeTotal} /><span className="text-xs font-normal text-white/50"> once</span>
            </div>
          </div>
          
          <a
            href={hasSelections ? whatsappUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!hasSelections) e.preventDefault();
              e.stopPropagation();
            }}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center shadow-md ${
              hasSelections 
                ? "bg-bond-lime text-bond-navy hover:bg-[#d4ff33]" 
                : "bg-white/10 text-white/40 cursor-not-allowed"
            }`}
          >
            {hasSelections ? "Get Started" : "Select Services"}
          </a>
        </div>
      </div>
    </section>
  );
}

// Separate component to keep things clean
function SummaryPanel({ 
  website, services, addons, postsCount, reelsCount, metaAdsCost, prices, 
  oneTimeTotal, rawMonthlyTotal, discountAmount, discountPercentage, finalMonthlyTotal, 
  hasSelections, whatsappUrl, isMobile = false 
}: any) {
  return (
    <div className={`bg-bond-navy rounded-3xl p-6 ${isMobile ? "rounded-b-none border-b border-white/10" : "shadow-2xl border border-white/10"}`}>
      <div className="text-center mb-6 border-b border-white/10 pb-4">
        <h3 className="text-white font-black text-xl">Your Custom Growth Kit</h3>
      </div>

      {!hasSelections ? (
        <div className="py-12 text-center border-2 border-dashed border-white/10 rounded-xl mb-6">
          <p className="text-white/40 text-sm">Your selections will appear here</p>
        </div>
      ) : (
        <div className="space-y-6 mb-6">
          
          {/* ONE TIME COSTS */}
          {(website !== null || addons.size > 0) && (
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-lime mb-3">Foundation & Add-ons (One-time)</div>
              <div className="space-y-3">
                {website && (
                  <div className="flex justify-between items-start text-sm">
                    <span className="text-white/80 pr-4">{website === "standard" ? "Standard Website" : "Premium Website"}</span>
                    <span className="text-white font-bold whitespace-nowrap">₹{(website === "standard" ? prices.standard : prices.premium).toLocaleString("en-IN")}</span>
                  </div>
                )}
                {addons.has("landing-page") && (
                  <div className="flex justify-between items-start text-sm">
                    <span className="text-white/80 pr-4">Campaign Landing Page</span>
                    <span className="text-white font-bold whitespace-nowrap">₹{(prices["landing-page"]).toLocaleString("en-IN")}</span>
                  </div>
                )}
                {addons.has("ad-creative") && (
                  <div className="flex justify-between items-start text-sm">
                    <span className="text-white/80 pr-4">Ad Creative Set</span>
                    <span className="text-white font-bold whitespace-nowrap">₹{(prices["ad-creative"]).toLocaleString("en-IN")}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                <span className="text-white font-medium">One-time Total</span>
                <span className="text-white font-black text-lg">₹<AnimatedNumber value={oneTimeTotal} /></span>
              </div>
            </div>
          )}

          {/* MONTHLY COSTS */}
          {services.size > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-bond-cyan mb-3">Monthly Services</div>
              <div className="space-y-3">
                {services.has("meta-ads") && (
                  <div className="flex justify-between items-start text-sm">
                    <div className="text-white/80 pr-4">
                      Meta Ads + Content
                      <div className="text-white/40 text-xs">{postsCount} posts, {reelsCount} reels</div>
                    </div>
                    <span className="text-white font-bold whitespace-nowrap">₹{metaAdsCost.toLocaleString("en-IN")}</span>
                  </div>
                )}
                {services.has("chatbot") && (
                  <div className="flex justify-between items-start text-sm">
                    <span className="text-white/80 pr-4">Website Chatbot</span>
                    <span className="text-white font-bold whitespace-nowrap">₹{prices.chatbot.toLocaleString("en-IN")}</span>
                  </div>
                )}
                {services.has("reputation") && (
                  <div className="flex justify-between items-start text-sm">
                    <span className="text-white/80 pr-4">Reputation Management</span>
                    <span className="text-white font-bold whitespace-nowrap">₹{prices.reputation.toLocaleString("en-IN")}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-3 pt-3 border-t border-white/10">
                {discountPercentage > 0 && (
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="text-bond-lime font-bold">Bundle Discount ({discountPercentage * 100}%)</span>
                    <span className="text-bond-lime font-bold">-₹<AnimatedNumber value={discountAmount} /></span>
                  </div>
                )}
                <div className="flex justify-between items-end mt-1">
                  <span className="text-white font-medium">Monthly Total</span>
                  <div className="text-right">
                    {discountPercentage > 0 && (
                      <div className="line-through text-white/40 text-xs mb-0.5">₹{rawMonthlyTotal.toLocaleString("en-IN")}/mo</div>
                    )}
                    <div className="text-white font-black text-2xl leading-none">
                      ₹<AnimatedNumber value={finalMonthlyTotal} /><span className="text-sm font-medium text-white/60">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {services.size === 3 && (
        <div className="bg-gradient-to-r from-bond-lime/20 to-bond-cyan/20 border border-bond-lime/30 rounded-xl p-3 mb-6 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-bond-lime" />
          <span className="text-white font-bold text-sm">Full Growth Kit Active</span>
        </div>
      )}

      {!isMobile && (
        <a
          href={hasSelections ? whatsappUrl : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!hasSelections) e.preventDefault();
          }}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-lg ${
            hasSelections 
              ? "bg-bond-lime text-bond-navy hover:bg-[#d4ff33] hover:-translate-y-1" 
              : "bg-white/5 text-white/30 cursor-not-allowed"
          }`}
        >
          {hasSelections ? "WhatsApp Your Kit →" : "Select services above →"}
        </a>
      )}
    </div>
  );
}
