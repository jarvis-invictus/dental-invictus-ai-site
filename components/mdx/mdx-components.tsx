"use client";

import React from "react";
import { motion } from "framer-motion";
import { Info, AlertTriangle, Lightbulb, CheckCircle2, Link as LinkIcon, TrendingUp } from "lucide-react";
import Image from "next/image";

export function Callout({ 
  type = "info", 
  title, 
  children 
}: { 
  type?: "info" | "warning" | "tip"; 
  title?: string; 
  children: React.ReactNode; 
}) {
  const styles = {
    info: "border-bond-navy bg-slate-50 shadow-[6px_6px_0px_0px_#0f172a]",
    warning: "border-bond-navy bg-yellow-300 shadow-[6px_6px_0px_0px_#0f172a]",
    tip: "border-bond-navy bg-bond-lime shadow-[6px_6px_0px_0px_#0f172a]",
  };

  const icons = {
    info: <Info className="w-6 h-6 text-bond-navy mt-1 shrink-0" />,
    warning: <AlertTriangle className="w-6 h-6 text-bond-navy mt-1 shrink-0" />,
    tip: <Lightbulb className="w-6 h-6 text-bond-navy mt-1 shrink-0" />,
  };

  return (
    <div className={`my-8 p-6 md:p-8 rounded-xl border-4 flex gap-4 md:gap-6 ${styles[type]}`}>
      <div className="bg-white border-2 border-bond-navy rounded-full p-2 h-fit shrink-0 shadow-[2px_2px_0px_0px_#0f172a]">
        {icons[type]}
      </div>
      <div>
        {title && <h4 className="text-xl font-black text-bond-navy mb-2 mt-0 uppercase tracking-tight">{title}</h4>}
        <div className="text-bond-navy font-bold prose-p:my-0 prose-ul:my-2 prose-li:my-0.5 mdx-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatCard({ 
  value, 
  label, 
  source 
}: { 
  value: string; 
  label: string; 
  source?: string; 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="my-12 relative max-w-sm mx-auto"
    >
      <div className="absolute inset-0 bg-bond-lime transform translate-x-2 translate-y-2 rounded-2xl border-4 border-bond-navy"></div>
      <div className="relative rounded-2xl p-8 md:p-10 border-4 border-bond-navy bg-white text-center">
        <div className="text-6xl md:text-7xl font-black text-bond-navy mb-4 tracking-tighter">{value}</div>
        <div className="text-xl font-bold text-bond-navy uppercase bg-bond-lime inline-block px-3 py-1 border-2 border-bond-navy shadow-[2px_2px_0px_0px_#0f172a] -rotate-2">{label}</div>
        {source && (
          <div className="mt-8 pt-4 border-t-4 border-bond-navy text-xs font-black text-slate-500 uppercase">
            Source: {source}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function StepList({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-14 space-y-8 pl-4 md:pl-8 border-l-4 border-bond-navy relative">
      <div className="absolute top-0 bottom-0 -left-1 w-2 bg-bond-lime -z-10"></div>
      {children}
    </div>
  );
}

export function AnimatedStep({ 
  number, 
  title, 
  children 
}: { 
  number: string; 
  title: string; 
  children: React.ReactNode; 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative"
    >
      <div className="absolute -left-[3.5rem] md:-left-[4.5rem] top-4 shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-bond-navy text-white text-xl md:text-3xl font-black border-4 border-bond-lime z-10 shadow-[4px_4px_0px_0px_#ccff00]">
        {number}
      </div>
      <div className="bg-white p-6 md:p-8 rounded-2xl border-4 border-bond-navy hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#0f172a] transition-all">
        <h3 className="text-2xl md:text-3xl font-black text-bond-navy mt-0 mb-4">{title}</h3>
        <div className="text-slate-700 font-medium prose-p:my-0 prose-ul:my-2 prose-li:my-1 mdx-content text-lg">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function SourceLink({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode; 
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider bg-bond-navy text-white px-3 py-1.5 rounded-lg hover:bg-bond-lime hover:text-bond-navy border-2 border-transparent hover:border-bond-navy transition-colors no-underline shadow-[2px_2px_0px_0px_#ccff00]"
    >
      <LinkIcon className="w-4 h-4" />
      {children}
    </a>
  );
}

export function ComparisonTable({
  headers: rawHeaders,
  rows: rawRows
}: {
  headers?: any;
  rows?: any;
}) {
  let headers: string[] = [];
  let rows: string[][] = [];

  try {
    headers = typeof rawHeaders === 'string' ? JSON.parse(rawHeaders) : (rawHeaders || []);
    rows = typeof rawRows === 'string' ? JSON.parse(rawRows) : (rawRows || []);
  } catch (e) {
    console.error("ComparisonTable parse error", e, { rawHeaders, rawRows });
  }

  if (!headers.length && !rows.length) {
    return <div className="p-4 bg-red-100 text-red-800 font-bold border-2 border-red-500 my-4">Error: ComparisonTable received no headers or rows. (Raw headers: {JSON.stringify(rawHeaders)})</div>;
  }

  const headerColors = [
    "bg-bond-lime text-bond-navy",
    "bg-bond-navy text-white",
    "bg-bond-cyan text-bond-navy",
    "bg-bond-purple text-white"
  ];
  
  return (
    <div className="my-12 overflow-x-auto p-2">
      <table className="w-full border-collapse bg-white border-4 border-bond-navy shadow-[8px_8px_0px_0px_#0f172a]">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className={`p-5 text-left font-black border-b-4 border-bond-navy text-xl uppercase ${i !== headers.length - 1 ? 'border-r-4' : ''} ${headerColors[i % headerColors.length]}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`p-5 text-bond-navy ${j === 0 ? 'font-black' : 'font-bold'} border-b-4 border-bond-navy ${j !== row.length - 1 ? 'border-r-4' : ''} ${j === 1 ? 'bg-slate-50/50' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BlogImage({
  src,
  alt,
  caption
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-12">
      <div className="border-4 border-bond-navy rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_#0f172a] bg-bond-lime/20 group hover:-translate-y-1 transition-transform duration-300">
        <div className="relative w-full aspect-video">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm font-black uppercase text-bond-navy bg-bond-lime inline-block px-4 py-1 border-2 border-bond-navy shadow-[2px_2px_0px_0px_#0f172a] transform rotate-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function BarChart({
  title,
  data: rawData
}: {
  title: string;
  data: any;
}) {
  let data: { label: string; value: number; color?: string }[] = [];
  try {
    data = typeof rawData === 'string' ? JSON.parse(rawData) : (rawData || []);
  } catch(e) {
    console.error("BarChart parse error", e, rawData);
  }

  if (!data.length) return <div className="p-4 bg-red-100 text-red-800">Error: BarChart received no data</div>;

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="my-12 p-8 border-4 border-bond-navy bg-white shadow-[8px_8px_0px_0px_#0f172a] rounded-2xl">
      <h4 className="text-2xl font-black text-bond-navy uppercase tracking-tighter mb-8 bg-bond-lime inline-block px-3 py-1 border-2 border-bond-navy transform -rotate-1">{title}</h4>
      <div className="space-y-6">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-1/4 text-right font-bold text-bond-navy uppercase text-sm">
              {item.label}
            </div>
            <div className="w-3/4 flex items-center gap-4">
              <div className="flex-1 h-8 bg-slate-100 rounded-full border-2 border-bond-navy overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.value / maxValue) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className={`absolute top-0 left-0 h-full ${item.color || 'bg-bond-purple'} border-r-2 border-bond-navy`}
                />
              </div>
              <div className="w-12 font-black text-bond-navy">
                {item.value}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Highlight({ 
  children,
  color = "lime"
}: { 
  children: React.ReactNode;
  color?: "lime" | "cyan" | "purple";
}) {
  const colorMap = {
    lime: "bg-[#ccff00]",
    cyan: "bg-[#00ffff]",
    purple: "bg-[#b052ff]"
  };
  
  return (
    <span className={`${colorMap[color]} px-1.5 py-0.5 rounded-sm font-black text-bond-navy shadow-[2px_2px_0px_0px_#0f172a] transform -rotate-1 inline-block mx-1`}>
      {children}
    </span>
  );
}

export const mdxComponents = {
  Callout,
  StatCard,
  StepList,
  AnimatedStep,
  SourceLink,
  ComparisonTable,
  BlogImage,
  BarChart,
  Highlight
};
