import type { Metadata } from "next";
import ClinicWebsiteContent from "./ClinicWebsiteContent";

export const metadata: Metadata = {
  title: "Dental Clinic Website Design | High-Converting & SEO-Optimized",
  description:
    "Get a custom, high-converting dental clinic website that turns Google searches into booked appointments. Mobile-first design, local SEO, WhatsApp integration. Starts at ₹7,000.",
  keywords: [
    "dental clinic website design",
    "dental website India",
    "dentist website cost",
    "dental clinic website builder",
    "dental website SEO",
    "dental clinic landing page",
  ],
  alternates: {
    canonical: "/services/clinic-website",
  },
  openGraph: {
    title: "Dental Clinic Website Design | Invictus AI",
    description:
      "Custom, high-converting dental clinic websites engineered to turn local searches into booked appointments.",
    url: "https://invictus-ai.in/services/clinic-website",
    type: "website",
  },
};

export default function ClinicWebsitePage() {
  return <ClinicWebsiteContent />;
}
