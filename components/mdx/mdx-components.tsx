"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, AlertTriangle, Lightbulb, CheckCircle2, Link as LinkIcon, TrendingUp, ChevronDown } from "lucide-react";
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
    info: "border-l-4 border-bond-navy bg-slate-50",
    warning: "border-l-4 border-yellow-400 bg-yellow-50",
    tip: "border-l-4 border-bond-lime bg-slate-50",
  };

  const icons = {
    info: <Info className="w-6 h-6 text-bond-navy mt-1 shrink-0" />,
    warning: <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 shrink-0" />,
    tip: <Lightbulb className="w-6 h-6 text-bond-navy mt-1 shrink-0" />,
  };

  return (
    <div className={`my-12 p-6 md:p-8 rounded-r-xl flex gap-4 md:gap-6 ${styles[type]}`}>
      <div className="shrink-0">
        {icons[type]}
      </div>
      <div>
        {title && <h4 className="text-lg font-bold text-slate-800 mb-2 mt-0">{title}</h4>}
        <div className="text-slate-600 font-medium prose-p:my-0 prose-ul:my-2 prose-li:my-0.5 mdx-content">
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
      <div className="relative rounded-2xl p-8 md:p-10 border border-slate-200 bg-white shadow-lg text-center">
        <div className="text-5xl md:text-6xl font-black text-bond-navy mb-4 tracking-tight">{value}</div>
        <div className="text-sm font-bold text-bond-navy uppercase tracking-wider">{label}</div>
        {source && (
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase">
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
      <div className="absolute -left-[3rem] md:-left-[4rem] top-4 shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-bond-lime text-bond-navy text-lg md:text-xl font-bold z-10">
        {number}
      </div>
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mt-0 mb-4">{title}</h3>
        <div className="text-slate-600 font-medium prose-p:my-0 prose-ul:my-2 prose-li:my-1 mdx-content text-lg">
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
      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors no-underline"
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
  
  return (
    <div className="my-12 overflow-x-auto">
      <table className="w-full border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className={`p-4 text-left font-bold text-slate-700 uppercase tracking-wider text-sm ${i !== headers.length - 1 ? 'border-r border-slate-200' : ''}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`p-4 text-slate-600 ${j === 0 ? 'font-semibold text-slate-800' : ''} ${j !== row.length - 1 ? 'border-r border-slate-100' : ''}`}>
                  <span className="md:hidden font-bold text-xs uppercase text-slate-400 block mb-1">
                    {headers[j]}
                  </span>
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
      <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
        <div className="relative w-full aspect-video">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm font-medium text-slate-500">
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
    <div className="my-12 p-8 border border-slate-200 bg-white shadow-sm rounded-2xl">
      <h4 className="text-xl font-bold text-slate-800 mb-8">{title}</h4>
      <div className="space-y-6">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-1/4 text-right font-medium text-slate-600 text-sm">
              {item.label}
            </div>
            <div className="w-3/4 flex items-center gap-4">
              <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.value / maxValue) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className={`absolute top-0 left-0 h-full ${item.color || 'bg-bond-navy'}`}
                />
              </div>
              <div className="w-12 font-bold text-slate-700 text-sm">
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
  color
}: { 
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="bg-bond-lime text-bond-navy px-2 py-0.5 rounded-sm font-bold shadow-sm inline-block mx-0.5">
      {children}
    </span>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-10">
      {children}
    </div>
  );
}

export function FAQAccordion({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 space-y-4">
      {children}
    </div>
  );
}

export function FAQItem({ question, children }: { question: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 focus:outline-none"
      >
        <h4 className="text-lg font-bold text-slate-800 m-0">{question}</h4>
        <ChevronDown 
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-slate-600 prose-p:my-2 prose-p:last:mb-0 mdx-content">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Section({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`py-12 md:py-20 px-5 md:px-8 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        {children}
      </div>
    </section>
  );
}

export function Grid({ children, cols = 2, className = "" }: { children: React.ReactNode, cols?: number, className?: string }) {
  const colClass = cols === 3 ? "md:grid-cols-3" : cols === 4 ? "md:grid-cols-4" : "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-8 my-12 ${className}`}>
      {children}
    </div>
  );
}

export function FeatureBlock({ title, description, icon }: { title: string, description: React.ReactNode, icon?: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      {icon && <div className="mb-4 text-bond-purple">{icon}</div>}
      <h3 className="text-2xl font-bold text-bond-navy mb-4">{title}</h3>
      <div className="text-slate-600 font-medium leading-relaxed">{description}</div>
    </div>
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
  Highlight,
  FAQAccordion,
  FAQItem,
  Section,
  Grid,
  FeatureBlock
};
