import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSections from "@/components/HomeSections";

const TITLE = "UniPact | Paid Student Work, Matched and Verified";
const DESCRIPTION =
  "UniPact matches companies with verified students for paid, milestone-based work in Software Development and Digital Marketing. Escrow-secured. Currently in closed beta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "UniPact",
      url: "https://www.unipact.my/",
      logo: "https://www.unipact.my/logo.png",
      description: "UniPact matches companies with verified students for paid, milestone-based work.",
    },
    {
      "@type": "WebSite",
      name: "UniPact",
      url: "https://www.unipact.my/",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="full" />
      <HomeSections />
      <Footer variant="full" />
    </>
  );
}
