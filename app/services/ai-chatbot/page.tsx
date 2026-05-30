import type { Metadata } from "next";
import AIChatbotContent from "./AIChatbotContent";

export const metadata: Metadata = {
  title: "AI Website Chatbot for Dental Clinics | 24/7 Patient Support",
  description:
    "Never miss a patient inquiry. Our AI chatbot answers questions, books appointments, and captures leads 24/7 on your dental clinic website. Custom-trained on your clinic data. ₹3,000/mo.",
  keywords: [
    "dental chatbot",
    "AI chatbot dental clinic",
    "dental website chatbot",
    "automated patient support dentist",
    "appointment booking chatbot",
    "dental clinic AI assistant",
  ],
  alternates: {
    canonical: "/services/ai-chatbot",
  },
  openGraph: {
    title: "AI Website Chatbot for Dental Clinics | Invictus AI",
    description:
      "24/7 AI receptionist for your dental clinic website — answers patient questions and books appointments while you sleep.",
    url: "https://invictus-ai.in/services/ai-chatbot",
    type: "website",
  },
};

export default function AIChatbotPage() {
  return <AIChatbotContent />;
}
