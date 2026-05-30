"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPostMeta } from "@/lib/blog";

interface Props {
  posts: BlogPostMeta[];
  tags: string[];
}

export default function BlogIndexContent({ posts, tags }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div className="bg-white min-h-screen text-bond-navy font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-bond-lime/20 border-2 border-bond-lime text-bond-navy font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(204,255,0,0.5)]">
              Insights & Guides
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 leading-[1.1] tracking-tight"
          >
            The Dental Growth{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1 bg-bond-lime text-bond-navy border-3 border-bond-navy transform -rotate-1 inline-block shadow-[6px_6px_0px_0px_#0f172a]">
                Blog
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-bond-gray max-w-2xl mx-auto text-center mb-12 leading-relaxed font-bold"
          >
            Actionable marketing strategies, SEO guides, and growth playbooks
            written specifically for dental clinic owners.
          </motion.p>
        </div>
      </section>

      {/* Tag Filters */}
      {tags.length > 0 && (
        <section className="px-6 pb-8">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all ${
                  activeTag === null
                    ? "bg-bond-navy text-white border-bond-navy shadow-[3px_3px_0px_0px_#ccff00]"
                    : "bg-white text-bond-gray border-bond-gray/20 hover:border-bond-navy hover:text-bond-navy"
                }`}
              >
                All Posts
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all ${
                    activeTag === tag
                      ? "bg-bond-navy text-white border-bond-navy shadow-[3px_3px_0px_0px_#ccff00]"
                      : "bg-white text-bond-gray border-bond-gray/20 hover:border-bond-navy hover:text-bond-navy"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-5xl">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-bond-gray font-bold text-lg py-16">
              No posts found. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article className="bond-card rounded-2xl overflow-hidden border-2 border-bond-gray/10 hover:border-bond-navy hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all h-full flex flex-col">
                      {/* Cover Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-bond-lime/30 via-bond-purple/10 to-bond-cyan/20 flex items-center justify-center border-b-2 border-bond-gray/10">
                        <span className="text-4xl font-black text-bond-navy/20">
                          {post.title.charAt(0)}
                        </span>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-black uppercase tracking-wider text-bond-purple bg-bond-purple/10 px-2 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-black text-bond-navy mb-3 leading-snug group-hover:text-bond-purple transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-bond-gray font-medium leading-relaxed mb-4 flex-1 line-clamp-3">
                          {post.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-bond-gray font-bold pt-4 border-t border-bond-gray/10">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>
                              {new Date(post.date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readingTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
