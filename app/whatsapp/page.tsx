"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppBridge() {
  const [showFallback, setShowFallback] = useState(false);
  
  const whatsappUrl = `https://wa.me/919699577641?text=${encodeURIComponent(
    "Hey, I filled the form for a dental clinic website. Please send me the demos ."
  )}`;

  useEffect(() => {
    // 1. Fire the Meta Pixel 'Lead' Event if it exists
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // 2. Redirect to WhatsApp at 1200ms — fast enough to feel instant,
    //    just enough time to show brand + fire pixel
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1200);
    
    // 3. Show fallback button at 1800ms in case device blocks the redirect
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [whatsappUrl]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      
      {/* Mobile-Sized Card Container */}
      <div className="w-full max-w-[360px] bg-[#efe7dd] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col h-[650px] max-h-[90vh]">
        
        {/* Background Dot Pattern — CSS only, no external request */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #075e54 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} 
        />

        {/* Header */}
        <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
            <img src="/logo.png" alt="Invictus AI" className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-[15px] leading-tight text-white">Invictus AI</h1>
            <p className="text-[11px] text-white/80 leading-tight">Premium Patient Growth</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center px-4 pt-10 pb-6 relative z-10">
          
          {/* Pulsing WhatsApp Logo */}
          <div className="relative mb-10">
            <motion.div 
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute inset-0 bg-[#25D366] rounded-full blur-md"
            />
            <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg">
              <svg className="w-8 h-8 ml-0.5 mt-0.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
          </div>

          {/* Chat Bubbles — all 3 fully visible within 600ms */}
          <div className="w-full flex flex-col gap-3">
            {/* Bubble 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.2 }}
                className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-[13px] text-[#303030] text-left relative max-w-[85%]"
            >
                <span className="absolute top-0 -left-2 w-0 h-0 border-[6px] border-transparent border-t-white border-r-white"></span>
                Opening secure connection...
            </motion.div>

            {/* Bubble 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.2 }}
                className="bg-[#dcf8c6] px-3 py-2 rounded-2xl rounded-tr-sm shadow-sm text-[13px] text-[#303030] text-right self-end ml-auto relative max-w-[85%]"
            >
                <span className="absolute top-0 -right-2 w-0 h-0 border-[6px] border-transparent border-t-[#dcf8c6] border-l-[#dcf8c6]"></span>
                Preparing your link...
            </motion.div>

            {/* Bubble 3 with typing dots */}
            <motion.div 
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.2 }}
                className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-[13px] text-[#303030] text-left relative flex items-center gap-3 self-start"
            >
                <span className="absolute top-0 -left-2 w-0 h-0 border-[6px] border-transparent border-t-white border-r-white"></span>
                <span>Opening WhatsApp</span>
                <div className="flex gap-1 mt-0.5">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-[#075e54] rounded-full opacity-60" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }} className="w-1.5 h-1.5 bg-[#075e54] rounded-full opacity-60" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }} className="w-1.5 h-1.5 bg-[#075e54] rounded-full opacity-60" />
                </div>
            </motion.div>
          </div>

          {/* Fallback Button — shows at 1800ms if redirect is blocked by device */}
          <div className="mt-auto mb-8 w-full flex flex-col items-center">
            {showFallback && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
                className="flex flex-col items-center w-full"
              >
                <p className="text-[#8e8e8e] text-[11px] mb-3 text-center">Tap below if WhatsApp didn&apos;t open:</p>
                <a 
                  href={whatsappUrl}
                  className="bg-[#25D366] text-white font-bold py-3 px-6 rounded-full shadow-md text-sm hover:bg-[#128C7E] transition-colors w-[80%] text-center"
                >
                  Open WhatsApp Chat
                </a>
              </motion.div>
            )}
          </div>

        </div>

        {/* Footer Encryption Notice */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1 text-[#8e8e8e] text-[10px] font-medium z-10 pb-2">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>
          End-to-end encrypted
        </div>
      </div>
    </div>
  );
}
