"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, MapPin, Star, Globe, Phone } from "lucide-react";

export default function GoogleMapSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-150px", once: true });
  
  const [sequenceState, setSequenceState] = useState<'home' | 'opening' | 'typing' | 'results'>('home');
  const [searchValue, setSearchValue] = useState("");
  const targetSearch = "best dentist near me";

  useEffect(() => {
    if (!isInView) return;

    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let typeInterval: NodeJS.Timeout;
    let timeout3: NodeJS.Timeout;

    // Start sequence
    timeout1 = setTimeout(() => {
      setSequenceState('opening');
      
      timeout2 = setTimeout(() => {
        setSequenceState('typing');
        
        let i = 0;
        typeInterval = setInterval(() => {
          if (i <= targetSearch.length) {
            setSearchValue(targetSearch.slice(0, i));
            i++;
          } else {
            clearInterval(typeInterval);
            timeout3 = setTimeout(() => {
              setSequenceState('results');
            }, 600);
          }
        }, 50); // Typing speed

      }, 800); // Time for app to expand

    }, 800); // Initial pause on home screen

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearInterval(typeInterval);
    };
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-black rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden flex flex-col ring-1 ring-slate-200"
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50 flex items-center justify-between px-2">
        <div className="w-2 h-2 rounded-full bg-slate-800" />
        <div className="w-2 h-2 rounded-full bg-slate-800" />
      </div>

      <AnimatePresence>
        
        {/* PHASE 1: HOME SCREEN */}
        {sequenceState === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-slate-800 flex flex-col pt-16 px-4 z-10"
          >
            {/* Wallpaper */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-indigo-900 opacity-60" />
            
            {/* App Grid */}
            <div className="relative z-10 grid grid-cols-4 gap-4 mt-4">
              {Array.from({ length: 20 }).map((_, i) => {
                // The 7th icon is our Map app
                if (i === 6) {
                  return (
                    <motion.div 
                      key="map-icon"
                      initial={{ scale: 1 }}
                      animate={sequenceState !== 'home' ? { scale: 2, opacity: 0 } : { scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="aspect-square bg-white rounded-2xl shadow-sm flex items-center justify-center relative overflow-hidden"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 367" className="relative z-10">
                        <path d="M0 0h256v367H0z" fill="none" />
                        <path fill="#34a853" d="M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z" />
                        <path fill="#fbbc04" d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z" />
                        <path fill="#4285f4" d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z" />
                        <path fill="#1a73e8" d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z" />
                        <path fill="#ea4335" d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z" />
                      </svg>
                    </motion.div>
                  );
                }
                // Glassmorphism generic app icons
                return (
                  <div key={i} className="aspect-square bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                  </div>
                );
              })}
            </div>

            {/* Bottom Dock */}
            <div className="absolute bottom-4 left-4 right-4 h-20 bg-white/20 backdrop-blur-xl rounded-3xl grid grid-cols-4 gap-4 p-4 z-10">
               {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`dock-${i}`} className="w-full h-full bg-white/40 rounded-2xl" />
               ))}
            </div>
          </motion.div>
        )}

        {/* PHASE 2, 3, 4: APP OPEN */}
        {sequenceState !== 'home' && (
          <motion.div 
            key="app"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute inset-0 bg-white flex flex-col z-20 origin-center"
          >
            {/* The App Contents */}
            <div className="flex flex-col h-full">
              {/* Search Header */}
              <div className="pt-14 px-4 pb-2 shadow-sm relative z-30 bg-white">
              <div className="bg-slate-100 rounded-full h-12 flex items-center px-4 gap-3">
                <Search className="w-5 h-5 text-slate-400" />
                <div className="flex text-slate-800 font-medium text-sm">
                  {searchValue}
                  {sequenceState === 'typing' && (
                    <motion.div 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-0.5 h-4 bg-blue-500 ml-1"
                    />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {sequenceState === 'results' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="flex gap-2 mt-3 overflow-hidden"
                  >
                    <div className="px-4 py-1.5 border border-slate-200 rounded-full text-xs font-medium text-slate-600 bg-white shadow-sm whitespace-nowrap">Sort by rating</div>
                    <div className="px-4 py-1.5 border border-slate-200 rounded-full text-xs font-medium text-slate-600 bg-white shadow-sm whitespace-nowrap">Open now</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* The Map */}
            <div className="flex-1 relative bg-[#e5e3df]">
              <AnimatePresence>
                {sequenceState === 'results' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-auto"
                  >
                    <iframe 
                      src="https://maps.google.com/maps?q=Koregaon%20Park,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      className="absolute inset-0 w-full h-full border-0 grayscale-[20%]" 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Authentic Google Maps Custom Marker */}
                    <motion.div 
                      initial={{ y: -30, opacity: 0, scale: 0.5 }}
                      animate={{ y: -20, opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: 'spring', bounce: 0.5 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex flex-col items-center"
                    >
                      {/* The Label */}
                      <div className="bg-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)] mb-1 flex items-center gap-1.5 whitespace-nowrap relative">
                        <div className="font-semibold text-[#1a73e8] text-xs">Invictus Dental</div>
                        <div className="flex items-center text-[#fbbc04]">
                          <span className="text-[10px] font-bold text-slate-600 mr-0.5">5.0</span>
                          <Star className="w-3 h-3 fill-current" />
                        </div>
                        {/* Down arrow for label */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-[6px] border-l-transparent border-r-transparent border-t-white" />
                      </div>
                      {/* The Pin */}
                      <MapPin className="w-8 h-8 text-[#EA4335] fill-[#EA4335] stroke-white drop-shadow-md" strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* The Results Card */}
            <AnimatePresence>
              {sequenceState === 'results' && (
                <motion.div 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.6 }}
                  className="absolute bottom-0 w-full bg-slate-100 p-2 z-40"
                >
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                    <h4 className="text-lg font-medium text-slate-900 leading-tight">Invictus Advanced Dental</h4>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm font-medium text-slate-700">5.0</span>
                      <div className="flex text-[#fbbc04]">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                      <span className="text-xs text-slate-500 ml-1">(428)</span>
                    </div>
                    <div className="text-sm text-slate-600 mt-1">Cosmetic Dentist · 1.2 mi</div>
                    <div className="text-sm text-green-700 font-medium mt-1">Open ⋅ Closes 6 PM</div>
                    
                    <div className="flex gap-2 mt-4">
                      <div className="flex-1 flex flex-col items-center gap-1 text-blue-600">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600"><Globe className="w-5 h-5" /></div>
                        <span className="text-[10px] font-medium">Website</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1 text-blue-600">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600"><MapPin className="w-5 h-5" /></div>
                        <span className="text-[10px] font-medium">Directions</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1 text-blue-600">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600"><Phone className="w-5 h-5" /></div>
                        <span className="text-[10px] font-medium">Call</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
