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

  return <BlogIndexContent posts={posts} tags={tags} />;
}
