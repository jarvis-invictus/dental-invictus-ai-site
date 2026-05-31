# Instagram Content Generator Skill

## Description
This skill generates Instagram post content (images, captions, hashtags) for the @invictus__ai account. It MUST follow the DESIGN.md file located at the project root. Every generated post must comply with the brand's color palette, typography, layout templates, and content pillar rules.

## Pre-Requisite
Before generating any content, read `/DESIGN.md` in the project root. That file is the single source of truth for all visual and copy decisions.

## 1. Post Generation Workflow

When asked to "create an Instagram post about X", follow these steps:

1. **Identify the Content Pillar**: Determine which pillar the topic falls under (Educate, Prove, Provoke, Showcase, or Humanize).
2. **Choose the Post Format**: Based on the pillar, pick the right format:
   - Educate → Carousel (5-10 slides)
   - Prove → Carousel (with stats/case study data)
   - Provoke → Single Image (bold stat or hot take)
   - Showcase → Reel cover + description OR carousel
   - Humanize → Single image or story
3. **Generate the Visual(s)**: Use `generate_image` to create each slide/image following DESIGN.md rules:
   - Bond Navy (`#0f172a`) background
   - Bond Lime (`#ccff00`) accent on headlines/stats
   - White (`#ffffff`) body text
   - "AI" logo badge in top-left corner
   - Inter-style bold/black sans-serif typography
   - Clean, minimal, premium SaaS aesthetic
4. **Write the Caption**: Follow the Hook → Body → CTA → Hashtags structure from DESIGN.md.
5. **Save Assets**: Save all images to `public/instagram/` using the naming convention: `{date}_{pillar}_{slug}.png`

## 2. Image Generation Prompts

When calling `generate_image`, use these prompt patterns:

### Single Image Post (1080×1080)
```
A premium social media post design with a dark navy (#0f172a) background. 
Large bold white headline text "[YOUR HEADLINE]" with key words highlighted 
in bright lime green (#ccff00). Small "AI" logo badge in lime green square 
in the top-left corner. Clean, minimal, modern SaaS aesthetic. 
Inter font style. No stock photos. 1080x1080 square format.
```

### Carousel Slide — Hook (Slide 1)
```
A premium Instagram carousel cover slide with dark navy (#0f172a) background. 
Bold, attention-grabbing headline "[YOUR HEADLINE]" in bright lime green 
(#ccff00) taking up 50% of the canvas. Small "AI" badge in lime green 
square, top-left. Small right-arrow swipe indicator in bottom-right. 
Clean modern SaaS design. 1080x1080 square.
```

### Carousel Slide — Content (Slides 2-8)
```
A premium Instagram carousel content slide with dark navy (#0f172a) background. 
Number "[N]" in large lime green (#ccff00) text top-left. 
Sub-heading "[YOUR HEADING]" in white bold text. 
2-3 lines of body text in light gray. 
Clean minimal SaaS design. 1080x1080 square.
```

### Carousel Slide — CTA (Last Slide)
```
A premium Instagram CTA slide with INVERTED colors: bright lime green 
(#ccff00) background and dark navy (#0f172a) text. Large bold text 
"[YOUR CTA]" centered. Small logo badge centered below. 
"@invictus__ai" handle at the bottom. Clean modern design. 1080x1080 square.
```

## 3. Caption Template

```markdown
[HOOK — One powerful sentence. A stat, a question, or a bold claim.]

[BODY — 3-5 short paragraphs. One idea per paragraph. Use line breaks.]

[CTA — "Save this 🔖" or "DM 'GROWTH' for a free audit" or "Follow @invictus__ai for daily dental marketing tips"]

---

#InvictusAI #DentalClinicGrowth #PatientGrowthSystem
[+ 8-10 niche hashtags from DESIGN.md Tier 2]
[+ 5-8 broad hashtags from DESIGN.md Tier 3]
[+ city hashtags if applicable from DESIGN.md Tier 4]
```

## 4. Content Quality Rules

1. **No stock photos.** Every visual is generated or designed.
2. **No colors outside the palette.** Bond Navy, Bond Lime, White as defaults. Secondary accents (Purple, Cyan, Orange, Pink) used sparingly.
3. **No more than 50 words per carousel slide.**
4. **Every post must have a CTA.** No exceptions.
5. **Never undermine our own services.** See blog_post_creating_skill.md Rule #1.
6. **Stats must be specific.** "47 patients" not "many patients". "₹2,500 CAC" not "low cost".
7. **Maintain premium aesthetic.** If it looks like a Canva free-tier template, redo it.

## 5. Hashtag Quick Reference

**Always include (brand):**
`#InvictusAI #DentalClinicGrowth #PatientGrowthSystem`

**Rotate from (niche):**
`#DentalMarketing #DentalClinicIndia #DentistMarketing #DentalSEO #DentalWebsite #GoogleMapsDentist #MetaAdsDentist #DentalPracticeGrowth #DentistLife #DentalClinicOwner #DentalBusiness #ClinicMarketing`

**Rotate from (broad):**
`#DigitalMarketingIndia #SmallBusinessGrowth #HealthcareMarketing #LocalSEO #GoogleReviews #LeadGeneration #AIMarketing #MarketingStrategy #BusinessGrowthIndia`
