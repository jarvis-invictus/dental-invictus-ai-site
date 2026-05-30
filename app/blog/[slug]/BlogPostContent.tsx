"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost, BlogPostMeta } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPostMeta[];
}

export default function BlogPostContent({ post, relatedPosts }: Props) {
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

          {/* MDX Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-bond-navy
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-bond-lime/50
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-bond-gray prose-p:font-medium prose-p:leading-relaxed
              prose-a:text-bond-purple prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-bond-navy prose-strong:font-black
              prose-li:text-bond-gray prose-li:font-medium
              prose-table:border-2 prose-table:border-bond-gray/20 prose-table:rounded-xl
              prose-th:bg-bond-navy prose-th:text-white prose-th:font-black prose-th:text-sm prose-th:uppercase prose-th:tracking-wider
              prose-td:border prose-td:border-bond-gray/10 prose-td:text-sm
              prose-blockquote:border-l-4 prose-blockquote:border-bond-lime prose-blockquote:bg-bond-lime/5 prose-blockquote:rounded-r-xl prose-blockquote:py-1
              prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-bold
            "
          >
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
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
