import type { Metadata } from "next";
import AuditToolContent from "./AuditToolContent";

export const metadata: Metadata = {
  title: "Free Dental Website Audit Tool | Check Your Score",
  description:
    "Get a free, instant audit of your dental clinic website. Check mobile responsiveness, SEO, page speed, and 7 more critical factors. No signup required.",
  keywords: [
    "dental website audit",
    "free website checker",
    "dental clinic website score",
    "dental SEO audit",
    "website analysis tool",
  ],
  alternates: {
    canonical: "/tools/website-audit",
  },
  openGraph: {
    title: "Free Dental Website Audit Tool | Invictus AI",
    description:
      "Instant audit of your dental clinic website — check mobile design, SEO, page speed, and more.",
    url: "https://invictus-ai.in/tools/website-audit",
    type: "website",
  },
};

export default function AuditPage() {
  return <AuditToolContent />;
}
