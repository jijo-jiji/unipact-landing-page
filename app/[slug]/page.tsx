import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSections from "@/components/HomeSections";
import { getPseoEntry, pseoPages } from "@/lib/pseo-data";

export function generateStaticParams() {
  return pseoPages.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPseoEntry(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: `https://www.unipact.my/${entry.slug}`,
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      type: "website",
      url: `https://www.unipact.my/${entry.slug}`,
      images: ["https://www.unipact.my/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function PseoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getPseoEntry(slug);
  if (!entry) notFound();

  const headline = (
    <>
      {entry.headline} <span className="text-cyan">{entry.city}</span>
    </>
  );

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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.unipact.my/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: entry.title.replace(" | UniPact", ""),
            item: `https://www.unipact.my/${entry.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="full" />
      <HomeSections headlineDesktop={headline} headlineMobile={headline} />
      <Footer variant="full" />
    </>
  );
}
