import { NextRequest, NextResponse } from "next/server";

/**
 * Website Audit API
 * 
 * Accepts a URL and returns a quick audit score based on
 * common dental website issues. This is a lead-gen tool —
 * the real value is in the follow-up consultation.
 */

interface AuditResult {
  url: string;
  score: number;
  maxScore: number;
  grade: string;
  checks: {
    name: string;
    passed: boolean;
    impact: "high" | "medium" | "low";
    description: string;
    recommendation: string;
  }[];
}

export async function POST(request: NextRequest) {
  try {
    const { url, name, phone } = await request.json();

    if (!url || !name || !phone) {
      return NextResponse.json(
        { error: "URL, name, and phone are required." },
        { status: 400 }
      );
    }

    // Validate URL
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url.startsWith("http") ? url : `https://${url}`);
    } catch {
      return NextResponse.json(
        { error: "Please enter a valid website URL." },
        { status: 400 }
      );
    }

    // Log the lead
    console.log("🔍 AUDIT LEAD:", JSON.stringify({
      url: parsedUrl.href,
      name,
      phone,
      timestamp: new Date().toISOString(),
      source: "audit-tool",
    }, null, 2));

    // Run checks (client-side simulation for now)
    // In production, you'd use Lighthouse API, PageSpeed API, etc.
    const checks = [
      {
        name: "Mobile Responsive Design",
        passed: Math.random() > 0.4,
        impact: "high" as const,
        description: "78% of dental patients search on mobile. A non-responsive site loses most of its traffic.",
        recommendation: "Ensure your website adapts perfectly to all screen sizes. Test on real phones, not just browser resize.",
      },
      {
        name: "Page Load Speed (< 3 seconds)",
        passed: Math.random() > 0.5,
        impact: "high" as const,
        description: "53% of mobile visitors leave if a page takes longer than 3 seconds to load (Google data).",
        recommendation: "Optimize images (use WebP), enable caching, use a CDN, and minimize JavaScript bundles.",
      },
      {
        name: "WhatsApp Click-to-Chat",
        passed: Math.random() > 0.6,
        impact: "high" as const,
        description: "In India, WhatsApp is the #1 communication channel. Without it, you're losing the easiest conversion path.",
        recommendation: "Add a floating WhatsApp button that's visible on every page of your website.",
      },
      {
        name: "Google Business Profile Linked",
        passed: Math.random() > 0.5,
        impact: "high" as const,
        description: "Your Google Business Profile drives local map pack visibility. It should be linked from your website.",
        recommendation: "Embed Google Maps on your contact page and add your GBP link in the footer.",
      },
      {
        name: "SSL Certificate (HTTPS)",
        passed: parsedUrl.protocol === "https:",
        impact: "high" as const,
        description: "Google penalizes non-HTTPS websites in search rankings. Patients also see 'Not Secure' warnings.",
        recommendation: "Install an SSL certificate. Most hosting providers offer free SSL via Let's Encrypt.",
      },
      {
        name: "Clear Call-to-Action (Book Appointment)",
        passed: Math.random() > 0.5,
        impact: "high" as const,
        description: "Every page should have a clear path to booking an appointment. Without CTAs, visitors browse and leave.",
        recommendation: "Add 'Book Appointment' buttons above the fold on every page, in both header and hero sections.",
      },
      {
        name: "Treatment Pages with SEO",
        passed: Math.random() > 0.6,
        impact: "medium" as const,
        description: "Individual pages for each treatment (implants, braces, RCT) rank independently for local search terms.",
        recommendation: "Create dedicated pages for your top 5 treatments with local keywords like 'dental implants in [your city]'.",
      },
      {
        name: "Google Reviews Widget",
        passed: Math.random() > 0.7,
        impact: "medium" as const,
        description: "Displaying Google reviews on your website builds instant trust with new visitors.",
        recommendation: "Embed a Google Reviews widget showing your latest 5-star reviews on the homepage.",
      },
      {
        name: "Meta Tags & Page Titles",
        passed: Math.random() > 0.5,
        impact: "medium" as const,
        description: "Proper meta titles and descriptions improve click-through rates from Google search results by 20–30%.",
        recommendation: "Write unique, keyword-rich title tags for every page. Include your city name and service.",
      },
      {
        name: "Schema Markup (Structured Data)",
        passed: Math.random() > 0.8,
        impact: "low" as const,
        description: "Schema markup helps Google understand your business. It enables rich snippets like ratings and hours.",
        recommendation: "Add LocalBusiness and MedicalBusiness schema markup to your homepage.",
      },
    ];

    const passedCount = checks.filter((c) => c.passed).length;
    const score = passedCount;
    const maxScore = checks.length;
    const percentage = Math.round((score / maxScore) * 100);

    let grade: string;
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    const result: AuditResult = {
      url: parsedUrl.href,
      score,
      maxScore,
      grade,
      checks,
    };

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("Audit error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
