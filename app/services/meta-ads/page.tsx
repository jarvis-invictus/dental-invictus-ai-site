import type { Metadata } from "next";
import MetaAdsContent from "./MetaAdsContent";

export const metadata: Metadata = {
  title: "Meta Ads & Social Media Marketing for Dental Clinics",
  description:
    "Hyper-local Instagram & Facebook ad campaigns that fill dental chairs. Targeted within 5km of your clinic. Content creation, ad management & monthly reporting. Starts at ₹8,000/mo.",
  keywords: [
    "meta ads dental clinic",
    "Instagram ads dentist",
    "Facebook ads dental clinic India",
    "social media marketing dentist",
    "dental clinic advertising",
    "local dental marketing",
  ],
  alternates: {
    canonical: "/services/meta-ads",
  },
  openGraph: {
    title: "Meta Ads & Social Media Marketing for Dental Clinics | Invictus AI",
    description:
      "Hyper-local Instagram & Facebook campaigns that fill dental chairs within a 5km radius of your clinic.",
    url: "https://invictus-ai.in/services/meta-ads",
    type: "website",
  },
};

export default function MetaAdsPage() {
  return <MetaAdsContent />;
}
