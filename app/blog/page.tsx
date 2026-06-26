import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogIndexContent from "./BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog | Dental Marketing Tips & Growth Strategies",
  description:
    "Expert dental marketing insights, patient growth strategies, and actionable guides for dental clinic owners in India. SEO, Google reviews, Meta ads, and more.",
  keywords: [
    "dental marketing blog",
    "dental clinic tips",
    "dental SEO guide",
    "dental patient growth",
    "dental marketing India",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Dental Marketing Tips & Growth Strategies | Invictus AI",
    description:
      "Expert dental marketing insights and actionable growth guides for dental clinic owners.",
    url: "https://invictus-ai.in/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Invictus AI Dental Marketing Blog",
    "description": "Expert dental marketing insights, patient growth strategies, and actionable guides for dental clinic owners in India.",
    "url": "https://invictus-ai.in/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Invictus AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://invictus-ai.in/icon.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "url": `https://invictus-ai.in/blog/${post.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogIndexContent posts={posts} tags={tags} />
    </>
  );
}
