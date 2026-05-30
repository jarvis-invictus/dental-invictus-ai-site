import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Invictus AI | Dental Marketing Agency India",
  description:
    "We exclusively help dental clinics grow with AI-powered marketing systems. Learn about our mission, our founder, and why we only work with dentists.",
  keywords: [
    "about invictus ai",
    "dental marketing agency India",
    "dental marketing specialist",
    "dental clinic growth partner",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Invictus AI | Dental Marketing Agency India",
    description:
      "We exclusively help dental clinics grow with AI-powered marketing systems.",
    url: "https://invictus-ai.in/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
