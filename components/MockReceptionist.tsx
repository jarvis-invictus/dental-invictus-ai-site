"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, X, MoreHorizontal } from "lucide-react";

const conversation = [
  { id: 1, text: "Hi, I chipped my tooth and need to see someone ASAP.", sender: "user", delay: 500 },
  { id: 2, text: "I'm sorry to hear that! I can help you book an emergency appointment.", sender: "ai", delay: 1500 },
  { id: 3, text: "Dr. Desai has an opening today at 2:30 PM. Does that work for you?", sender: "ai", delay: 2800 },
  { id: 4, text: "Yes! That would be perfect.", sender: "user", delay: 4200 },
  { id: 5, text: "Great. You are confirmed for 2:30 PM today.", sender: "ai", delay: 5400 },
] as const;

export default function MockReceptionist() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  const [messages, setMessages] = useState<{ id: number; text: string; sender: "user" | "ai"; delay: number }[]>([]);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
  }, []);

  useEffect(() => {
    if (!isInView) {
      setMessages([]);
      return;
    }

    const timeouts: NodeJS.Timeout[] = [];

    conversation.forEach((msg) => {
      const timeout = setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
      }, msg.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[320px]">
      {/* Widget Frame */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 h-[450px] flex flex-col overflow-hidden ring-1 ring-slate-200">


        {/* Chat Header */}
        <div className="bg-bond-navy pt-6 pb-4 px-4 flex items-center justify-between border-b border-slate-100 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-bond-lime flex items-center justify-center shadow-sm">
              <Bot className="w-5 h-5 text-bond-navy" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Invictus AI</p>
              <p className="text-[10px] text-bond-lime font-medium">Virtual Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <MoreHorizontal className="w-5 h-5" />
            <X className="w-5 h-5" />
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 bg-slate-50 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-hide relative">
          
          <div className="text-center my-4">
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
              Today {currentTime || "10:14 AM"}
            </span>
          </div>

          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95, originY: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" && (
                <div className="w-6 h-6 rounded-full bg-bond-lime flex items-center justify-center shrink-0 mr-2 mt-auto">
                  <span className="text-[8px] font-black text-bond-navy">AI</span>
                </div>
              )}
              
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.sender === "user"
                    ? "bg-slate-800 text-white rounded-br-sm"
                    : "bg-white text-slate-700 border border-slate-100 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {isInView && messages.length > 0 && messages.length < conversation.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start items-end"
            >
              <div className="w-6 h-6 rounded-full bg-slate-200 shrink-0 mr-2" />
              <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 shadow-sm">
                <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
              </div>
            </motion.div>
          )}
          
          {/* Scroll anchor */}
          <div className="h-2" />
        </div>

        {/* Input Bar */}
        <div className="bg-white p-3 border-t border-slate-100 relative z-10 flex items-center gap-2">
          <div className="flex-1 h-9 bg-slate-50 rounded-full border border-slate-200 flex items-center px-4">
            <span className="text-slate-400 text-xs font-medium">Type a message...</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-bond-navy flex items-center justify-center shrink-0 shadow-sm">
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
          </div>
        </div>

      </div>
      
      {/* Decorative background glow behind the phone */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-bond-lime/20 via-bond-cyan/10 to-transparent blur-3xl rounded-full -z-10" />
    </div>
  );
}
