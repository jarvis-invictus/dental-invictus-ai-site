import type { Metadata } from "next";
import { Inter, Nothing_You_Could_Do } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { clsx } from "clsx";
import PageProgressBar from "@/components/PageProgressBar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const handwriting = Nothing_You_Could_Do({ weight: "400", subsets: ["latin"], variable: "--font-handwriting" });

// ← Update this to your actual domain
const SITE_URL = "https://invictus-ai.in";

export const metadata: Metadata = {
  // ── Core SEO ──
  title: {
    default: "Invictus AI | Patient Growth System for Dental Clinics",
    template: "%s | Invictus AI",
  },
  description:
    "We help dental clinics get more patients through websites, Meta ads, and reputation management. WhatsApp us for a free clinic audit.",
  keywords: [
    "dental clinic marketing India",
    "dental clinic website",
    "Google reviews dental clinic",
    "Meta ads dental clinic",
    "patient growth dental",
    "dental clinic SEO India",
    "reputation management dental",
    "dental marketing agency India",
    "new patients dental clinic",
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
    title: "Invictus AI | Patient Growth System for Dental Clinics",
    description:
      "We help dental clinics get more patients through websites, Meta ads, and reputation management. WhatsApp us for a free clinic audit.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Invictus AI - Patient Growth for Dental Clinics",
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: "Invictus AI | Patient Growth System for Dental Clinics",
    description:
      "We help dental clinics get more patients through websites, Meta ads, and reputation management. WhatsApp us for a free clinic audit.",
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
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Invictus AI",
  "description": "Patient growth system for dental clinics across India. Website, Meta Ads, and reputation management.",
  "url": "https://invictus-ai.in",
  "logo": "https://invictus-ai.in/icon.png",
  "image": "https://invictus-ai.in/og-image.png",
  "telephone": "+919699577641",
  "email": "contact@invictus-ai.in",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": "India",
  "serviceType": "Dental Clinic Digital Marketing",
  "foundingDate": "2023",
  "founder": {
    "@type": "Person",
    "name": "Sahil Bagul",
    "jobTitle": "Founder & CEO"
  },
  "sameAs": [
    "https://www.linkedin.com/company/invictus-ai",
    "https://www.instagram.com/invictusai",
    "https://twitter.com/invictusai",
    "https://www.youtube.com/@invictusai"
  ],
  "knowsAbout": [
    "Dental Clinic Marketing",
    "Patient Acquisition",
    "Local SEO for Dentists",
    "Meta Ads for Dentists",
    "Healthcare Reputation Management"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Invictus AI",
  "url": "https://invictus-ai.in",
  "description": "Patient growth system for dental clinics across India."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get more patients for my dental clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most effective way to get more patients is by installing a complete patient growth system that integrates a high-converting clinic website, targeted hyper-local Meta Ads (Instagram and Facebook), and automated Google review generation to rank at the top of local search results near you."
      }
    },
    {
      "@type": "Question",
      "name": "How much does dental clinic marketing cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Invictus AI, dental clinic digital marketing services start from ₹8,000 for a custom, conversion-focused clinic website, ₹8,000/month for hyper-local Meta ads, and ₹3,000/month for automated Google reputation management. Custom plans are fully transparent with no lock-in contracts."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get Google reviews for my dental clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our automated reputation management system requests feedback directly from happy patients via WhatsApp or SMS immediately after their visit. This ensures a steady flow of genuine, 5-star Google Business Profile reviews without any manual work from your staff."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best way to advertise a dental clinic on Instagram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best way is running hyper-local Instagram and Facebook campaigns targeting a 5km radius around your clinic. These campaigns should feature real, high-credibility patient results, case studies, and treatment-specific offers to attract highly qualified local inquiries."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from dental clinic marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our complete digital growth system is fully configured and goes live in under 2 weeks. Most clinics begin seeing inquiries in their first month, and we back our results with a 60-day risk-free guarantee: double your inquiries or we work for free until we do."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://dental-premium-site-1.vercel.app" crossOrigin="anonymous" />
      </head>
      {/* LocalBusiness Structured Data */}
      <Script
        id="local-business-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* WebSite Structured Data */}
      <Script
        id="website-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* FAQ Page Structured Data */}
      <Script
        id="faq-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Google Tag Manager - Head Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-TB9SQLN2');`}
      </Script>
      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CH59NRB8ZZ" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CH59NRB8ZZ');
        `}
      </Script>
      {/* Microsoft Clarity Tracking */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xczzb11mqw");
        `}
      </Script>
      <body className={clsx(inter.variable, handwriting.variable, "bg-white text-bond-navy antialiased font-sans min-h-screen flex flex-col")}>
        {/* Permanent 3px bond-lime top accent bar */}
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-bond-lime z-[9999] pointer-events-none" />
        <PageProgressBar />
        <WhatsAppFloatingButton />
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

