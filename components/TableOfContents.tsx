"use client";

import { useEffect, useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Wait for MDX to render
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll(".prose h2, .prose h3"));
      const tocItems: TOCItem[] = elements.map((elem, index) => {
        if (!elem.id) {
          elem.id = (elem.textContent || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "") || `heading-${index}`;
        }
        return {
          id: elem.id,
          text: elem.textContent || "",
          level: elem.tagName === "H2" ? 2 : 3,
        };
      });
      setItems(tocItems);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Accordion */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between p-4 bg-slate-50 border-2 border-bond-navy rounded-xl shadow-sticker"
        >
          <span className="font-black text-bond-navy flex items-center gap-2">
            <List className="w-5 h-5" /> On this page
          </span>
          <ChevronDown
            className={clsx("w-5 h-5 transition-transform", {
              "rotate-180": isMobileOpen,
            })}
          />
        </button>
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <nav className="p-4 bg-slate-50 border-2 border-t-0 border-bond-navy rounded-b-xl shadow-sticker">
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className={clsx("text-sm", item.level === 3 ? "ml-4" : "")}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                        className={clsx(
                          "block hover:text-bond-purple transition-colors",
                          activeId === item.id
                            ? "font-bold text-bond-purple"
                            : "text-slate-600 font-medium"
                        )}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Sticky */}
      <div className="hidden lg:block sticky top-28 w-full max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-slate-50 border-2 border-bond-navy rounded-xl shadow-[4px_4px_0px_0px_#ccff00] p-6">
          <h4 className="font-black text-bond-navy uppercase tracking-wider mb-4 text-sm flex items-center gap-2">
            <List className="w-4 h-4" /> Contents
          </h4>
          <nav>
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={clsx(
                    "text-sm transition-all",
                    item.level === 3 ? "ml-4" : "",
                    activeId === item.id ? "border-l-2 border-bond-purple pl-3 -ml-[14px]" : "pl-0"
                  )}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    className={clsx(
                      "block hover:text-bond-purple transition-colors",
                      activeId === item.id
                        ? "font-bold text-bond-navy"
                        : "text-slate-500 font-medium"
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
