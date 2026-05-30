import type { Metadata } from "next";
import ReputationContent from "./ReputationContent";

export const metadata: Metadata = {
  title: "Automated Google Review Management for Dental Clinics",
  description:
    "Automate your 5-star Google review collection. Our system requests reviews via WhatsApp after each visit, filters negative feedback privately, and skyrockets your local ranking. ₹3,000/mo.",
  keywords: [
    "google reviews dental clinic",
    "dental reputation management",
    "automated google reviews",
    "dental clinic google rating",
    "online reputation management dentist",
    "review generation dental",
  ],
  alternates: {
    canonical: "/services/reputation-management",
  },
  openGraph: {
    title: "Automated Google Review Management for Dental Clinics | Invictus AI",
    description:
      "Automate your 5-star Google review collection and dominate the local search map pack.",
    url: "https://invictus-ai.in/services/reputation-management",
    type: "website",
  },
};

export default function ReputationManagementPage() {
  return <ReputationContent />;
}
