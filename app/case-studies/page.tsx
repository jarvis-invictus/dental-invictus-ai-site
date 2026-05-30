import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | Real Results for Dental Clinics",
  description:
    "See how dental clinics across India doubled their patient inquiries, skyrocketed Google ratings, and filled chairs using Invictus AI growth systems.",
  keywords: [
    "dental marketing results",
    "dental clinic case study",
    "dental marketing ROI",
    "dental patient growth results",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Real Results for Dental Clinics | Invictus AI",
    description:
      "See how dental clinics doubled their patient inquiries using Invictus AI growth systems.",
    url: "https://invictus-ai.in/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
