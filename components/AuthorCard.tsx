import Image from "next/image";
import { Linkedin } from "lucide-react";

interface AuthorCardProps {
  name: string;
}

export default function AuthorCard({ name }: AuthorCardProps) {
  // We can customize the bio and image based on the author name if there are multiple authors.
  // For now, we assume Sahil Bagul as the default founder/author.
  const isSahil = name.includes("Sahil") || name.includes("Invictus");

  const authorName = isSahil ? "Sahil Bagul" : name;
  const authorTitle = "Founder, Invictus AI";
  const authorBio = "Sahil helps dental clinic owners across India build predictable, automated patient acquisition systems. He specializes in conversion-focused websites and high-ROI Meta Ads.";
  const linkedinUrl = "https://www.linkedin.com/in/sahil-bagul-"; // Placeholder, can be updated
  
  return (
    <div className="bg-slate-50 border-2 border-bond-navy rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sticker my-12">
      <div className="w-24 h-24 shrink-0 rounded-full border-4 border-bond-lime overflow-hidden bg-white shadow-sm relative flex items-center justify-center">
        {/* Placeholder for actual image: <Image src="/sahil-avatar.jpg" alt={authorName} fill className="object-cover" /> */}
        <span className="text-3xl font-black text-bond-navy">{authorName.charAt(0)}</span>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl font-black text-bond-navy mb-1">{authorName}</h3>
        <p className="text-bond-purple font-bold text-sm mb-3 uppercase tracking-wider">{authorTitle}</p>
        <p className="text-slate-600 font-medium leading-relaxed mb-4 text-sm md:text-base">
          {authorBio}
        </p>
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#0077B5] hover:bg-[#005E93] transition-colors px-4 py-2 rounded-lg"
        >
          <Linkedin className="w-4 h-4" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}
