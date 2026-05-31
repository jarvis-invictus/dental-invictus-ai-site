"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

      {/* Article Header */}
      <article className="pt-8 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-black uppercase tracking-wider text-bond-purple bg-bond-purple/10 px-3 py-1 rounded-full border border-bond-purple/20"
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
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-8"
          >
            {post.title}
          </motion.h1>

          {/* Meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-sm text-bond-gray font-bold mb-12 pb-8 border-b-2 border-bond-gray/10"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </motion.div>

          {/* Hero Cover Image */}
          {post.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-12 rounded-3xl overflow-hidden border-4 border-bond-navy shadow-[8px_8px_0px_0px_#ccff00] relative aspect-[16/9] md:aspect-[21/9]"
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

          {/* MDX Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg mx-auto max-w-none
              prose-headings:font-black prose-headings:tracking-tight
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:bg-bond-navy prose-h2:text-white prose-h2:px-4 prose-h2:py-2 prose-h2:inline-block prose-h2:shadow-[4px_4px_0px_0px_#ccff00] prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-bond-navy prose-h3:mt-12 prose-h3:mb-6 prose-h3:border-b-4 prose-h3:border-bond-navy prose-h3:pb-2
              prose-p:text-lg md:prose-p:text-xl prose-p:font-bold prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-slate-800
              prose-a:text-white prose-a:bg-bond-navy prose-a:px-1 prose-a:no-underline hover:prose-a:bg-bond-purple hover:prose-a:text-white prose-a:transition-colors
              prose-strong:bg-[#ccff00] prose-strong:px-1 prose-strong:text-bond-navy prose-strong:font-black prose-strong:rounded-sm
              prose-blockquote:border-l-8 prose-blockquote:border-bond-navy prose-blockquote:bg-slate-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:font-black prose-blockquote:text-bond-navy prose-blockquote:not-italic prose-blockquote:shadow-[6px_6px_0px_0px_#ccff00] prose-blockquote:my-10
              prose-ul:text-lg md:prose-ul:text-xl prose-ul:font-bold prose-ul:space-y-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
              prose-li:marker:text-bond-navy prose-li:pl-2"
          >
            {children}
          </motion.div>
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
