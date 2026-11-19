import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/site";
import JsonLd from "@/components/site/JsonLd";
import { SME_FAQS } from "@/lib/faqs";
import { faqSchema, providerRef } from "@/lib/schema";
import SmeContent from "@/components/landing/SmePage";
import { CLIPS, clipPoster, clipSrc } from "@/lib/clips";

const TITLE = "Viral Short-Form Video & Tech for Malaysian SMEs | UniPact";
const DESCRIPTION =
  "Access verified Malaysian university creators and developers. On-site shoots, 48-72h turnaround, viral TikTok & Reels packages without expensive agency retainers. SSM: 202603205508.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/sme",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/sme",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Short-Form Video Production & Tech Bounties for Malaysian SMEs",
      provider: providerRef,
      serviceType: "Video Production, Social Media Marketing & Software Development",
      areaServed: "Malaysia",
      description: DESCRIPTION,
    },
    faqSchema(SME_FAQS),
    // The example videos, so they can show up in video search results.
    ...Object.values(CLIPS).map(({ name, title, description, added }) => ({
      "@type": "VideoObject",
      name: title,
      description,
      thumbnailUrl: `${SITE_URL}${clipPoster(name)}`,
      contentUrl: `${SITE_URL}${clipSrc(name)}`,
      uploadDate: `${added}T09:00:00+08:00`,
      duration: "PT15S",
      publisher: providerRef,
    })),
  ],
};

export default function SmePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteNav />
      <SmeContent />
      <SiteFooter />
    </>
  );
}
