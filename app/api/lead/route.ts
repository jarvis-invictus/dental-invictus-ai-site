import { NextRequest, NextResponse } from "next/server";

/**
 * Lead Capture API
 * 
 * Stores lead data and can be connected to:
 * - Email notifications (Resend, SendGrid, etc.)
 * - CRM webhooks (HubSpot, Notion, Google Sheets)
 * - WhatsApp Business API
 * 
 * For now, logs to console and returns success.
 * TODO: Connect to email service or CRM when ready.
 */

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  clinicName?: string;
  city?: string;
  services?: string[];
  websiteTier?: string;
  postsCount?: number;
  reelsCount?: number;
  source: string; // "kit-builder" | "contact-form" | "audit-tool" | "blog-cta"
  pageUrl?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // Validate phone format (Indian mobile)
    const phoneClean = body.phone.replace(/[\s\-+]/g, "");
    if (!/^(\d{10}|91\d{10})$/.test(phoneClean)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian phone number." },
        { status: 400 }
      );
    }

    // Log the lead (replace with database/CRM integration)
    const lead = {
      ...body,
      phone: phoneClean,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    console.log("📩 NEW LEAD CAPTURED:", JSON.stringify(lead, null, 2));

    // --- WEBHOOK INTEGRATION POINT ---
    // Uncomment and configure when ready:
    //
    // // Option 1: Google Sheets via Apps Script
    // await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(lead),
    // });
    //
    // // Option 2: Notion Database
    // await fetch("https://api.notion.com/v1/pages", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
    //     "Content-Type": "application/json",
    //     "Notion-Version": "2022-06-28",
    //   },
    //   body: JSON.stringify({ ... }),
    // });
    //
    // // Option 3: Email notification via Resend
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "leads@invictus-ai.in",
    //     to: "contact@invictus-ai.in",
    //     subject: `New Lead: ${lead.name} (${lead.source})`,
    //     html: `<h2>New Lead</h2><pre>${JSON.stringify(lead, null, 2)}</pre>`,
    //   }),
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll contact you within 2 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
