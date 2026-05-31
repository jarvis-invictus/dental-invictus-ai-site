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
  Highlight,
  FAQAccordion,
  FAQItem,
  Lead,
  Section,
  Grid,
  FeatureBlock
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
  Highlight,
  FAQAccordion,
  FAQItem,
  Lead,
  Section,
  Grid,
  FeatureBlock,
  h2: (props: any) => <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tighter text-bond-navy mt-16 mb-8" {...props} />,
  h3: (props: any) => <h3 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.15] tracking-tighter text-bond-navy mt-12 mb-6" {...props} />,
  h4: (props: any) => <h4 className="text-xl md:text-2xl lg:text-3xl font-black leading-[1.2] tracking-tight text-bond-purple mt-10 mb-4" {...props} />,
  h5: (props: any) => <h5 className="text-lg md:text-xl font-bold text-slate-800 mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-base md:text-lg font-medium text-slate-600 leading-[1.8] mb-8 max-w-4xl" {...props} />,
  ul: (props: any) => <ul className="text-base md:text-lg font-medium text-slate-600 space-y-4 list-disc pl-8 mb-10 marker:text-bond-purple" {...props} />,
  ol: (props: any) => <ol className="text-base md:text-lg font-medium text-slate-600 space-y-4 list-decimal pl-8 mb-10 marker:text-bond-purple" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  a: (props: any) => <a className="text-bond-purple font-black hover:underline" {...props} />,
  strong: (props: any) => <strong className="font-black text-bond-navy" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-8 border-bond-purple bg-bond-purple/5 px-8 py-6 font-bold text-bond-navy text-lg italic rounded-r-2xl my-12" {...props} />
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
    image: post.coverImage ? `https://invictus-ai.in${post.coverImage}` : "https://invictus-ai.in/og-image.png",
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Founder & CEO",
      worksFor: {
        "@type": "Organization",
        name: "Invictus AI"
      },
      sameAs: [
        "https://www.linkedin.com/in/sahilbagul",
        "https://twitter.com/sahilbagul"
      ]
    },
    publisher: {
      "@type": "Organization",
      name: "Invictus AI",
      url: "https://invictus-ai.in",
      logo: {
        "@type": "ImageObject",
        url: "https://invictus-ai.in/icon.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://invictus-ai.in/blog/${post.slug}`
    },
    speakable: {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-summary", ".key-takeaway", "h2", "h3"]
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
