"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import AuthorCard from "@/components/AuthorCard";
import type { BlogPost, BlogPostMeta } from "@/lib/blog";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPostMeta[];
  children: React.ReactNode;
}



export default function BlogPostContent({ post, relatedPosts, children }: Props) {
  return (
    <div className="bg-white min-h-screen text-bond-navy font-sans">
      <Navbar />

      {/* Back navigation */}
      <div className="pt-24 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog">
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-bond-gray/20 hover:bg-slate-50 text-bond-navy rounded-full shadow-sm font-bold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> All Posts
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-black uppercase tracking-widest text-bond-purple bg-bond-purple/10 px-5 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter mb-8 text-bond-navy"
          >
            {post.title}
          </motion.h1>

          {/* Subtitle / Description */}
          {post.description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-12"
            >
              {post.description}
            </motion.p>
          )}

          {/* Author Meta Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-bold mb-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <span className="font-bold text-slate-800 text-base">{post.author}</span>
            </div>
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </motion.div>

          {/* Hero Cover Image (If exists, make it massive and premium) */}
          {post.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Full-Width MDX Content Area */}
      <article className="w-full flex flex-col pb-24 relative">
        {/* We remove the 'prose' class entirely so the MDX can act as full-width layout components */}
        <div className="w-full">
          {children}
        </div>
      </article>

      {/* CTA Banner */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bond-card border-4 border-bond-navy rounded-3xl p-8 md:p-12 text-center bg-slate-50 shadow-[8px_8px_0px_0px_#ccff00]">
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-bond-navy">
              Ready to Grow Your Clinic?
            </h2>
            <p className="text-bond-gray font-bold mb-8 max-w-lg mx-auto">
              Stop losing patients to clinics with better marketing. Let&apos;s
              build your custom growth system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919699577641?text=Hi%20Sahil,%20I%20read%20your%20blog%20and%20want%20to%20know%20more%20about%20patient%20growth%20for%20my%20dental%20clinic."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="lime"
                  size="lg"
                  className="border-2 border-bond-navy shadow-[4px_4px_0px_0px_#0f172a] font-black hover:-translate-y-1 transition-transform"
                >
                  WhatsApp Us Now
                </Button>
              </a>
              <Link href="/#kit-builder">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-bond-navy text-bond-navy font-black hover:bg-slate-100 shadow-[4px_4px_0px_0px_#0f172a]"
                >
                  Build Your Kit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 pb-24">
          <div className="container mx-auto max-w-3xl">
            <h3 className="text-2xl font-black mb-8 text-bond-navy">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                  <div className="bond-card rounded-2xl p-6 border-2 border-bond-gray/10 hover:border-bond-navy hover:shadow-[6px_6px_0px_0px_#ccff00] transition-all">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {rp.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-black uppercase tracking-wider text-bond-purple bg-bond-purple/10 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-base font-black text-bond-navy group-hover:text-bond-purple transition-colors leading-snug mb-2">
                      {rp.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-bond-gray font-bold">
                      <Clock className="w-3 h-3" />
                      <span>{rp.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
