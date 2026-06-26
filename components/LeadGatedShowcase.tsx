"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, CheckCircle2, X } from "lucide-react";
import Image from "next/image";

interface LeadGatedShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadGatedShowcase({ isOpen, onClose }: LeadGatedShowcaseProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const templates = [
    { id: "std-1", type: "Standard", title: "Essential Clean", image: "/templates/standard-1.jpg" },
    { id: "std-2", type: "Standard", title: "Modern Trust", image: "/templates/standard-2.jpg" },
    { id: "prm-1", type: "Premium", title: "Elite Practice", image: "/templates/premium-1.jpg" },
    { id: "prm-2", type: "Premium", title: "Implant Focus", image: "/templates/premium-2.jpg" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, whatsapp, email, source: "template-showcase" })
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      // Success! Trigger dopamine unlock animation
      setTimeout(() => {
        setIsUnlocked(true);
        setIsSubmitting(false);
      }, 500);
      
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bond-navy/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10 relative">
              <div>
                <h2 className="text-2xl font-black text-bond-navy tracking-tight">Premium Design Gallery</h2>
                <p className="text-slate-500 text-sm font-medium">Preview our high-converting dental templates</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 relative bg-slate-50">
              
              {/* Form Overlay (when locked) */}
              <AnimatePresence>
                {!isUnlocked && (
                  <motion.div
                    exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-20 flex items-center justify-center p-4"
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full border border-slate-100 relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-bond-lime/20 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-bond-cyan/20 rounded-full blur-[40px] -ml-16 -mb-16 pointer-events-none" />
                      
                      <div className="text-center mb-6 relative z-10">
                        <div className="w-16 h-16 bg-bond-navy rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-sticker rotate-3">
                          <Lock className="w-8 h-8 text-bond-lime" />
                        </div>
                        <h3 className="text-2xl font-black text-bond-navy mb-2 tracking-tight">Unlock the Gallery</h3>
                        <p className="text-slate-500 text-sm">Enter your details to view live previews of our top-performing clinic websites.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        {error && <div className="text-red-500 text-sm text-center font-bold bg-red-50 p-2 rounded-lg">{error}</div>}
                        
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Full Name</label>
                          <input
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-bond-lime focus:ring-2 focus:ring-bond-lime/20 outline-none transition-all font-medium text-bond-navy"
                            placeholder="Dr. Rajesh Kumar"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">WhatsApp Number</label>
                          <input
                            required
                            type="tel"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-bond-lime focus:ring-2 focus:ring-bond-lime/20 outline-none transition-all font-medium text-bond-navy"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Email Address (Optional)</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-bond-lime focus:ring-2 focus:ring-bond-lime/20 outline-none transition-all font-medium text-bond-navy"
                            placeholder="clinic@example.com"
                          />
                        </div>

                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full h-14 bg-bond-lime text-bond-navy font-black text-lg rounded-xl shadow-sticker hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="w-6 h-6 border-4 border-bond-navy/30 border-t-bond-navy rounded-full animate-spin" />
                          ) : (
                            <>
                              Unlock Previews <Unlock className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Template Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {templates.map((template, idx) => (
                  <motion.div
                    key={template.id}
                    animate={{ filter: isUnlocked ? "blur(0px)" : "blur(12px)", scale: isUnlocked ? 1 : 0.98 }}
                    transition={{ duration: 0.8, delay: isUnlocked ? idx * 0.1 : 0 }}
                    className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-sm overflow-hidden group"
                  >
                    <div className="absolute top-6 left-6 z-10 flex gap-2">
                      <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${template.type === 'Premium' ? 'bg-bond-lime text-bond-navy' : 'bg-bond-navy text-white'}`}>
                        {template.type}
                      </div>
                    </div>

                    <div className="h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden relative">
                      {/* CSS Scrolling image wrapper */}
                      <div className={`absolute top-0 left-0 w-full transition-transform duration-[8000ms] ease-linear ${isUnlocked ? 'group-hover:-translate-y-[calc(100%-400px)]' : ''}`}>
                        {/* We will load the actual screenshot here. For now we use a placeholder color block if image fails to load */}
                        <div className="w-full min-h-[1200px] bg-slate-200 relative">
                           {/* Add image later */}
                           <Image 
                             src={template.image} 
                             alt={template.title} 
                             fill 
                             className="object-cover" 
                             unoptimized // Because it's a local static screenshot placeholder
                           />
                           {!isUnlocked && (
                             <div className="absolute inset-0 flex items-center justify-center">
                               <Lock className="w-16 h-16 text-slate-400 opacity-50" />
                             </div>
                           )}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-black text-bond-navy">{template.title}</h4>
                      </div>
                      <button 
                        disabled={!isUnlocked}
                        onClick={() => {
                          // Select this tier logic (to be hooked up later)
                          onClose();
                        }}
                        className="bg-slate-100 text-bond-navy px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors disabled:opacity-0"
                      >
                        Select Tier
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Unlock Success overlay (plays once and disappears) */}
              <AnimatePresence>
                {isUnlocked && (
                  <motion.div
                    initial={{ opacity: 1, scale: 0.5 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                  >
                    <CheckCircle2 className="w-48 h-48 text-bond-lime filter drop-shadow-[0_0_40px_rgba(204,255,0,0.5)]" />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
