import SocialPostGenerator from "@/components/admin/SocialPostGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Social Post Generator | Invictus AI",
  description: "Internal tool for generating branded Instagram posts.",
};

export default function AdminSocialPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-4">
        <SocialPostGenerator />
      </div>
    </main>
  );
}
