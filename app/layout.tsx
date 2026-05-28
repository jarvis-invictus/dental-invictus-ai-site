import type { Metadata } from "next";
import { Inter, Nothing_You_Could_Do } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const handwriting = Nothing_You_Could_Do({ weight: "400", subsets: ["latin"], variable: "--font-handwriting" });

// ← Update this to your actual domain
const SITE_URL = "https://invictus-ai.in";

export const metadata: Metadata = {
  // ── Core SEO ──
  title: {
    default: "Invictus AI | Enterprise-Grade AI. Startup Speed.",
    template: "%s | Invictus AI",
  },
  description:
    "Custom AI automation, intelligent agents, and digital infrastructure for modern businesses. We build AI chatbots, workflow automation, and enterprise systems that deliver 300% ROI.",
  keywords: [
    "AI automation",
    "AI agency",
    "intelligent agents",
    "AI chatbots",
    "business automation",
    "enterprise AI",
    "custom AI solutions",
    "AI consulting",
    "workflow automation",
    "digital transformation",
    "AI development India",
    "Invictus AI",
  ],
  authors: [{ name: "Invictus AI" }],
  creator: "Invictus AI",

  // ── Canonical & Indexing ──
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp) ──
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Invictus AI",
    title: "Invictus AI | Enterprise-Grade AI. Startup Speed.",
    description:
      "Custom AI automation, intelligent agents, and digital infrastructure for modern businesses.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`, // ← Create a 1200×630 OG image
        width: 1200,
        height: 630,
        alt: "Invictus AI - Enterprise-Grade AI Solutions",
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: "Invictus AI | Enterprise-Grade AI. Startup Speed.",
    description:
      "Custom AI automation, intelligent agents, and digital infrastructure for modern businesses.",
    images: [`${SITE_URL}/og-image.png`],
    // creator: "@invictusai", // ← Add your Twitter handle when ready
  },

  // ── Google Search Console Verification ──
  // After setting up GSC, paste your verification code below:
  verification: {
    google: "uu66vEG0KcB4ccL_VjdFxKZZmUnQBRPsyQv5Up7hpNQ",
    // yandex: "YOUR_YANDEX_CODE",
    // bing: "YOUR_BING_CODE",
  },

  // ── Other ──
  category: "technology",
};

// ── JSON-LD Structured Data for Rich Results ──
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Invictus AI",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Custom AI automation, intelligent agents, and digital infrastructure for modern businesses.",
  foundingDate: "2024",
  sameAs: [
    // "https://www.linkedin.com/company/invictusai",  // ← Add your socials
    // "https://twitter.com/invictusai",
    // "https://www.instagram.com/invictusai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  offers: {
    "@type": "AggregateOffer",
    description: "AI Automation & Digital Infrastructure Services",
    offers: [
      {
        "@type": "Offer",
        name: "AI Chatbots & Virtual Agents",
        description: "24/7 intelligent customer engagement",
      },
      {
        "@type": "Offer",
        name: "Workflow Automation",
        description: "End-to-end business process automation",
      },
      {
        "@type": "Offer",
        name: "Custom AI Solutions",
        description: "Enterprise-grade AI systems tailored to your business",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Google Tag Manager - Head Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TB9SQLN2');`}
      </Script>
      <body className={clsx(inter.variable, handwriting.variable, "bg-white text-bond-navy antialiased font-sans min-h-screen flex flex-col")}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TB9SQLN2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

