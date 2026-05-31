# Blog Post Creating Skill

## Description
This skill provides the comprehensive rules and format for generating and publishing SEO-optimized, highly-converting blog posts for the Invictus AI Dental Clinic Marketing website.

## 1. Content and Tone Rules
- **Depth & Quality**: Content MUST be deeply researched and highly detailed. Superficial or "thin" content is strictly prohibited. Provide actionable value, real-world examples, and deep insights.
- **Service Positioning**: NEVER attack or harm our own services. For example, do not blindly say "stop buying ads" if we provide Meta Ads services. Instead, frame it as "stop buying *unoptimized* ads" or "shift from generic ads to strategic Meta Ads".
- **Tone**: Professional, authoritative, and persuasive. The audience is dental clinic owners who want to grow their practice and patient base.

## 2. Typography, Layout, and MDX Components
- **MANDATORY LAYOUT COMPONENTS**: The website's blog system relies on custom MDX components for layout. If you just write raw markdown, it will stretch full-width and look completely broken ("zoomed in"). You MUST wrap content inside `<Section className="bg-white">` or `<Section className="bg-slate-50 border-y border-slate-100">`. Use `<div className="text-center max-w-3xl mx-auto mb-16">` to constrain text widths.
- **Component Usage**: Use components like `<Lead>`, `<Grid cols={2}>`, and `<FeatureBlock title="..." description="...">` to arrange content beautifully instead of just writing raw paragraphs.
- **Markdown Headers**: Inside these wrappers, always use standard Markdown headers (`##` for H2, `###` for H3). DO NOT use raw HTML tags like `<h2>` or `<h3>`.
- **Header Aesthetics**: The system automatically applies `font-black`, `text-bond-navy`, tight tracking (`tracking-tight`), and specific margins to ensure headers are bold and catch attention.
- **Bolder Emphasis**: Use bolding (`**text**`) generously for key takeaways and important concepts to make them highly scannable.

## 3. Frontmatter & Metadata
Every blog post MUST start with the following frontmatter block:

```mdx
---
title: "Your Highly Engaging, SEO-Optimized Title"
date: "YYYY-MM-DD"
excerpt: "A compelling 2-3 sentence summary that clearly states the value proposition of reading this post."
coverImage: "/blog/your-image-filename.png"
author:
  name: "Sahil Bagul"
  picture: "/authors/sahil.png"
  role: "Growth Strategist"
category: "SEO / Meta Ads / Clinic Growth"
seo:
  metaTitle: "Your Exact Meta Title | Invictus AI"
  metaDescription: "A keyword-rich meta description under 160 characters."
  keywords: ["keyword 1", "keyword 2", "dental marketing"]
---
```

## 4. Image & Illustration Rules
- **Cover Image**: Must be a high-quality, professional, and visually striking image (e.g., generated via the `generate_image` tool or equivalent) that relates to the topic. Store it in `public/blog/`.
- **Inline Images**: If applicable, use standard Markdown `![Alt Text](/blog/image.png)`. 
- **Design Aesthetic**: Images should align with the brand's premium vibe (dark modes, glassmorphism, or clean minimalist clinical styles with neon/bond-lime accents).

## 5. SEO, AEO, & GEO Integration
- **AEO (Answer Engine Optimization)**: Provide clear, concise, direct answers immediately following an H2 or H3 heading before expanding into detail. This increases the chance of the paragraph being extracted by AI overviews (ChatGPT, Perplexity). Wrap these concise summaries in `<p className="article-summary">` if possible, or just ensure they are the first paragraph.
- **GEO (Generative Engine Optimization)**: Include rich entity connections. Always link back to the Invictus AI homepage, explicitly state the target audience (Indian Dental Clinics), and back up claims with statistics or case studies.
- **Keywords**: Naturally integrate primary and secondary keywords into headers, the first paragraph, and throughout the text.
- **Internal Linking**: Link to our services naturally within the text. (e.g., `[Meta Ads & Content](/services/meta-ads)` or `[Clinic Website](/services/clinic-website)`).
- **Call to Action**: Every blog post must end with a strong, conversion-focused Call to Action (CTA) linking to the booking widget or WhatsApp.

## 6. Workflow Example
When asked to "create a blog post on X", you must:
1. Research the topic using Web tools or SEO knowledge.
2. Generate a relevant, high-quality cover image using `generate_image`.
3. Create the MDX file in `content/blog/your-slug.mdx`.
4. Write the content following the rules above, ensuring Markdown headers (`##`) and deep, valuable content.
5. Review the content to ensure it doesn't harm our service offerings.
