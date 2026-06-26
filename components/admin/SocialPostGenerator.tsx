"use client";

import React, { useState, useRef, useCallback } from 'react';
import * as htmlToImage from 'html-to-image';
import { Download, LayoutTemplate, Image as ImageIcon } from 'lucide-react';

export default function SocialPostGenerator() {
  const [heading, setHeading] = useState('AUTOMATE CLIENT COMMUNICATION');
  const [subheading, setSubheading] = useState('ON WHATSAPP FOR INCREASED ENGAGEMENT');
  const [topBadge, setTopBadge] = useState('INVICTUS');
  const [buttonText, setButtonText] = useState('DISCOVER SOLUTIONS');
  const [graphicUrl, setGraphicUrl] = useState('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'); // Placeholder 3D image
  
  const previewRef = useRef<HTMLDivElement>(null);

  const downloadImage = useCallback(() => {
    if (previewRef.current === null) return;
    htmlToImage.toPng(previewRef.current, { quality: 1.0, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `invictus-post-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error('Error generating image', err));
  }, [previewRef]);

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] gap-8 p-6 bg-gray-50">
      
      {/* Sidebar Controls */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-y-auto">
        <div className="flex items-center gap-2 mb-6">
          <LayoutTemplate className="w-5 h-5 text-bond-navy" />
          <h2 className="text-xl font-bold text-bond-navy">3D Glassmorphism Generator</h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Top Left Badge</label>
            <input 
              type="text" value={topBadge} onChange={(e) => setTopBadge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Main Heading</label>
            <textarea 
              value={heading} onChange={(e) => setHeading(e.target.value)} rows={2}
              className="w-full p-2 border border-gray-300 rounded-md font-bold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subheading</label>
            <input 
              type="text" value={subheading} onChange={(e) => setSubheading(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Center 3D Graphic (Image URL)</label>
            <div className="flex gap-2">
              <input 
                type="text" value={graphicUrl} onChange={(e) => setGraphicUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Paste AI generated image URL here..."
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Use an image with a transparent background for best results.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bottom Button Text</label>
            <input 
              type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button 
          onClick={downloadImage}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-[#ccff00] text-[#0f172a] px-4 py-3 rounded-md font-bold hover:bg-[#b3e600] transition-colors shadow-lg"
        >
          <Download className="w-5 h-5" />
          Download High-Res PNG
        </button>
      </div>

      {/* Preview Pane */}
      <div className="w-full md:w-2/3 flex items-center justify-center bg-gray-200 rounded-xl overflow-hidden p-4 md:p-8">
        <div className="relative origin-center transform scale-[0.4] lg:scale-[0.5] xl:scale-[0.6] shadow-2xl transition-all duration-300">
          
          {/* EXACT 1080x1350 EXPORT CONTAINER */}
          <div 
            ref={previewRef}
            className="relative w-[1080px] h-[1350px] overflow-hidden flex flex-col items-center"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              // Soft mesh gradient matching the reference
              background: 'radial-gradient(circle at 10% 20%, rgba(240, 255, 200, 0.8) 0%, transparent 40%), radial-gradient(circle at 90% 30%, rgba(230, 200, 255, 0.8) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(200, 240, 255, 0.8) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(255, 255, 150, 0.6) 0%, transparent 40%), #f8f9fa'
            }} 
          >
            {/* Top Left Badge */}
            <div className="absolute top-[60px] left-[60px]">
              <span className="text-[#1a1f2c] font-black text-[55px] tracking-tight uppercase">
                {topBadge}
              </span>
            </div>

            {/* Typography Section */}
            <div className="w-full px-[80px] pt-[200px] text-center z-10">
              <h1 className="text-[#0f172a] font-black text-[100px] leading-[1.05] tracking-tight uppercase mb-6 drop-shadow-sm">
                {heading}
              </h1>
              <p className="text-[#0f172a] font-semibold text-[45px] tracking-wide uppercase opacity-90">
                {subheading}
              </p>
            </div>

            {/* Center Glassmorphism Graphic Card */}
            <div className="relative mt-[80px] flex-1 w-[880px] mb-[150px]">
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[50px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"></div>
              
              {/* Image Container */}
              <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
                {/* Optional glow behind image */}
                <div className="absolute inset-20 bg-[#ccff00] blur-[100px] opacity-30 rounded-full"></div>
                
                {graphicUrl ? (
                  <img src={graphicUrl} alt="3D Graphic" className="w-full h-full object-contain drop-shadow-2xl z-20" crossOrigin="anonymous" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <ImageIcon className="w-32 h-32 opacity-20" />
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-20">
              <div className="bg-[#ccff00] text-[#0f172a] font-black text-[45px] px-[80px] py-[30px] rounded-3xl shadow-[0_20px_40px_-10px_rgba(204,255,0,0.5)] border-[3px] border-[#b3e600]/30 uppercase tracking-wide">
                {buttonText}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
