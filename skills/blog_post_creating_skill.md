# Blog Post Creating Skill

## Description
This skill provides the comprehensive rules and format for generating and publishing SEO-optimized, highly-converting blog posts for the Invictus AI Dental Clinic Marketing website.

## 1. Content and Tone Rules
- **Depth & Quality**: Content MUST be deeply researched and highly detailed. Superficial or "thin" content is strictly prohibited. Provide actionable value, real-world examples, and deep insights.
- **Service Positioning**: NEVER attack or harm our own services. For example, do not blindly say "stop buying ads" if we provide Meta Ads services. Instead, frame it as "stop buying *unoptimized* ads" or "shift from generic ads to strategic Meta Ads".
- **Tone**: Professional, authoritative, and persuasive. The audience is dental clinic owners who want to grow their practice and patient base.

## 2. Typography and Heading Structure
- **Markdown Only**: Always use standard Markdown headers (`##` for H2, `###` for H3). DO NOT use raw HTML tags like `<h2>` or `<h3>`. The site's infrastructure automatically maps Markdown headers to the correct Tailwind CSS styles.
- **Header Aesthetics**: The system automatically applies `font-black`, `text-bond-navy`, tight tracking (`tracking-tight` or `tracking-tighter`), and specific margins to ensure headers are bold, catch attention, and are about 10-20% smaller than the main hero title. You do not need to add custom CSS to headers; just use `##` and `###`.
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

## 5. SEO & Infrastructure Integration
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
