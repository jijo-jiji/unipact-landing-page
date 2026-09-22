import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalMarketingForm from "@/components/DigitalMarketingForm";
import Faq from "@/components/Faq";

const TITLE = "Paid Digital Marketing Jobs for Students in Malaysia | UniPact";
const DESCRIPTION =
  "Students in Malaysia: apply for paid digital marketing, social media and video editing work. Get matched to real projects, paid per milestone via escrow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/apply-digital-marketing",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/apply-digital-marketing",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Student Digital Marketing & Video Editor",
  employmentType: "CONTRACTOR",
  hiringOrganization: {
    "@type": "Organization",
    name: "UniPact",
  },
  description: "Apply as a Digital Marketing / Video student. Get matched to real, paid work, milestone by milestone.",
  jobLocationType: "TELECOMMUTE",
};

const faqItems = [
  {
    question: "Can students get paid digital marketing work in Malaysia?",
    answer:
      "Yes. UniPact matches students with companies that need real marketing work delivered — social media content, copywriting, video editing, SEO, paid ads and community management. The work is paid, and you are matched to one scoped project.",
  },
  {
    question: "Do I need a portfolio to apply?",
    answer:
      "A portfolio helps but is not required. Coursework, content you have made for a club or society, or accounts you have run yourself all count. You can share a portfolio or LinkedIn link in the form if you have one.",
  },
  {
    question: "What kind of marketing work would I do?",
    answer:
      "Real client briefs rather than practice exercises — growing and running social accounts, producing and editing video, writing copy, and improving how a business is found online. You select the skills you want to be matched on.",
  },
  {
    question: "How and when do I get paid?",
    answer:
      "Work is split into milestones. Payment is held in escrow up front and released as each milestone is delivered and verified against the original brief, so you are not chasing payment after the work is done.",
  },
  {
    question: "Can I do this while studying full time?",
    answer:
      "Yes. The application asks when you are available — now, next month, or next semester — and that is taken into account when matching, so projects fit around your semester.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Your application goes to the UniPact team for review. UniPact is currently in closed beta, so places are limited, and we will be in touch when there is a project that fits your skills and availability.",
  },
];

export default function ApplyDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="simple" />
      <main>
        <section className="company-section">
          <div className="container">
            <div className="company-grid">
              <div className="company-pitch">
                <p className="eyebrow">
                  <span className="eyebrow-dot"></span>For students &mdash; Digital Marketing / Video
                </p>
                <h1>Apply as a Digital Marketing / Video student.</h1>
                <p>
                  Tell us about your background. Once matched, you&apos;ll work real, paid jobs &mdash; milestone
                  by milestone, escrow-secured.
                </p>

                <ul className="feature-list">
                  <li>Get matched to real, paid work in your scope</li>
                  <li>Paid at each milestone as you deliver, via escrow</li>
                  <li>Every job builds a verified talent record for your portfolio</li>
                </ul>
              </div>

              <div className="company-form">
                <DigitalMarketingForm />
              </div>
            </div>
          </div>
        </section>

        <Faq
          intro="Common questions from students applying for paid digital marketing and video work."
          items={faqItems}
        />
      </main>
      <Footer variant="simple" />
    </>
  );
}
