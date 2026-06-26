"use client";

import React, { useState, useRef, useCallback } from 'react';
import * as htmlToImage from 'html-to-image';
import { Download, LayoutTemplate } from 'lucide-react';

type PostType = 'hook' | 'content' | 'cta' | 'stat';

export default function SocialPostGenerator() {
  const [postType, setPostType] = useState<PostType>('hook');
  const [heading, setHeading] = useState("5 Reasons Your Dental Clinic ISN'T Getting Patients");
  const [highlightWord, setHighlightWord] = useState("ISN'T");
  const [body, setBody] = useState('72% of dental clinics have missing hours, wrong phone numbers, or zero photos on their Google profile.');
  const [slideNumber, setSlideNumber] = useState('1');
  const [statValue, setStatValue] = useState('₹5,000');
  
  const previewRef = useRef<HTMLDivElement>(null);

  const downloadImage = useCallback(() => {
    if (previewRef.current === null) return;

    // Use html-to-image to capture the div
    htmlToImage.toPng(previewRef.current, {
      quality: 1.0,
      pixelRatio: 2, // Retina quality
    })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `instagram-${postType}-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
      });
  }, [previewRef, postType]);

  // Helper to split heading and apply highlight
  const renderHighlightedHeading = () => {
    if (!highlightWord) return <>{heading}</>;
    
    const parts = heading.split(new RegExp(`(${highlightWord})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => (
          part.toLowerCase() === highlightWord.toLowerCase() 
            ? <span key={i} className="text-[#ccff00]">{part}</span> 
            : <span key={i}>{part}</span>
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] gap-8 p-6 bg-gray-50">
      
      {/* Sidebar Controls */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-y-auto">
        <div className="flex items-center gap-2 mb-6">
          <LayoutTemplate className="w-5 h-5 text-bond-navy" />
          <h2 className="text-xl font-bold text-bond-navy">Post Generator</h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Post Type</label>
            <select 
              value={postType}
              onChange={(e) => setPostType(e.target.value as PostType)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-bond-lime focus:border-bond-lime"
            >
              <option value="hook">Carousel: Hook Slide</option>
              <option value="content">Carousel: Content Slide</option>
              <option value="cta">Carousel: CTA Slide</option>
              <option value="stat">Single: Big Stat</option>
            </select>
          </div>

          {(postType === 'hook' || postType === 'content' || postType === 'cta' || postType === 'stat') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
              <textarea 
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}

          {postType === 'hook' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Word to Highlight (Lime)</label>
              <input 
                type="text"
                value={highlightWord}
                onChange={(e) => setHighlightWord(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}

          {postType === 'content' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slide Number</label>
              <input 
                type="text"
                value={slideNumber}
                onChange={(e) => setSlideNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}

          {postType === 'stat' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Big Stat Value</label>
              <input 
                type="text"
                value={statValue}
                onChange={(e) => setStatValue(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}

          {(postType === 'content' || postType === 'cta' || postType === 'stat') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Body Text / Subtext</label>
              <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}
        </div>

        <button 
          onClick={downloadImage}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-bond-navy text-white px-4 py-3 rounded-md font-bold hover:bg-bond-navy/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download High-Res PNG
        </button>
      </div>

      {/* Preview Pane - Scaled down visually but raw dimensions for export */}
      <div className="w-full md:w-2/3 flex items-center justify-center bg-gray-200 rounded-xl overflow-hidden p-8">
        
        {/* Transform wrapper to scale it down visually in the UI */}
        <div className="relative origin-center transform scale-[0.35] lg:scale-[0.45] xl:scale-[0.5] shadow-2xl transition-all duration-300">
          
          {/* 
            ACTUAL EXPORT CONTAINER
            This div has the exact dimensions we want in the final PNG.
            Carousel = 1080x1350 (4:5)
            Stat = 1080x1080 (1:1)
          */}
          <div 
            ref={previewRef}
            className={`
              relative overflow-hidden
              ${postType === 'stat' ? 'w-[1080px] h-[1080px]' : 'w-[1080px] h-[1350px]'}
              ${postType === 'cta' ? 'bg-[#ccff00]' : 'bg-[#0f172a]'}
            `}
            style={{ fontFamily: "'Inter', sans-serif" }} // Ensure Inter is used
          >
            {/* AI Logo Badge */}
            {postType !== 'cta' && postType !== 'content' && (
              <div className="absolute top-[80px] left-[80px] w-[120px] h-[120px] bg-[#ccff00] rounded-2xl flex items-center justify-center">
                <span className="text-[#0f172a] font-black text-6xl tracking-tighter">AI</span>
              </div>
            )}
            {postType === 'cta' && (
              <div className="absolute top-[615px] left-[480px] w-[120px] h-[120px] bg-[#0f172a] rounded-2xl flex items-center justify-center">
                <span className="text-[#ccff00] font-black text-6xl tracking-tighter">AI</span>
              </div>
            )}

            {/* SLIDE 1: HOOK */}
            {postType === 'hook' && (
              <div className="absolute inset-0 p-[80px] flex flex-col justify-center">
                <h1 className="text-white font-black text-[100px] leading-[1.05] tracking-tight">
                  {renderHighlightedHeading()}
                </h1>
                {/* Arrow */}
                <div className="absolute bottom-[80px] right-[80px]">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            )}

            {/* SLIDE 2+: CONTENT */}
            {postType === 'content' && (
              <div className="absolute inset-0 p-[80px] pt-[120px] flex flex-col">
                <span className="text-[#ccff00] font-black text-[250px] leading-none tracking-tighter mb-[40px]">
                  {slideNumber}
                </span>
                <h2 className="text-white font-bold text-[85px] leading-[1.1] tracking-tight mb-[60px]">
                  {heading}
                </h2>
                <p className="text-[#94a3b8] font-normal text-[50px] leading-[1.4]">
                  {body}
                </p>
                {/* Small Top Badge */}
                <div className="absolute top-[80px] right-[80px] w-[80px] h-[80px] bg-[#ccff00] rounded-xl flex items-center justify-center">
                  <span className="text-[#0f172a] font-black text-4xl tracking-tighter">AI</span>
                </div>
              </div>
            )}

            {/* CTA SLIDE */}
            {postType === 'cta' && (
              <div className="absolute inset-0 p-[80px] pt-[200px] flex flex-col items-center text-center">
                <h2 className="text-[#0f172a] font-black text-[110px] leading-[1.05] tracking-tight mb-[80px]">
                  {heading}
                </h2>
                <p className="text-[#0f172a] font-medium text-[55px] leading-[1.3] max-w-[800px]">
                  {body}
                </p>
                
                <div className="absolute bottom-[100px] w-full text-center left-0">
                  <span className="text-[#0f172a] font-medium text-[50px]">@invictus__ai</span>
                </div>
              </div>
            )}

            {/* SINGLE STAT POST */}
            {postType === 'stat' && (
              <div className="absolute inset-0 p-[100px] flex flex-col justify-center text-center items-center">
                <div className="text-[#ccff00] font-black text-[220px] leading-none tracking-tighter mb-[40px]">
                  {statValue}
                </div>
                <h2 className="text-white font-bold text-[70px] leading-[1.1] tracking-tight mb-[80px]">
                  {heading}
                </h2>
                <div className="w-[150px] h-[4px] bg-[#ccff00] mb-[80px]"></div>
                <p className="text-[#94a3b8] font-normal text-[40px]">
                  {body}
                </p>
                
                <div className="absolute bottom-[60px] right-[60px]">
                  <span className="text-[#94a3b8] font-medium text-[35px]">@invictus__ai</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
