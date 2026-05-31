import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import BlogPostContent from "./BlogPostContent";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { 
  Callout, 
  StatCard, 
  StepList, 
  AnimatedStep, 
  SourceLink, 
  ComparisonTable, 
  BlogImage, 
  BarChart,
  Highlight
} from "@/components/mdx/mdx-components";

const mdxComponents = {
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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Invictus AI`,
      description: post.description,
      url: `https://invictus-ai.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same tags, exclude current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 2);

  // Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Invictus AI",
      url: "https://invictus-ai.in",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://invictus-ai.in/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  // Extract FAQ schema from MDX content (### question + paragraph answer pattern)
  const faqRegex = /###\s+(.+?)\n\n([\s\S]*?)(?=\n###|\n##|\n$)/g;
  const faqSection = post.content.match(/## (?:FAQ|Frequently Asked Questions)[\s\S]*/i);
  const faqItems: { question: string; answer: string }[] = [];

  if (faqSection) {
    let match;
    while ((match = faqRegex.exec(faqSection[0])) !== null) {
      const question = match[1].trim();
      const answer = match[2].trim().replace(/\n/g, " ").replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
      if (question && answer) {
        faqItems.push({ question, answer });
      }
    }
  }

  const faqSchema = faqItems.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPostContent post={post} relatedPosts={relatedPosts}>
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </BlogPostContent>
    </>
  );
}
