import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareDeveloperForm from "@/components/SoftwareDeveloperForm";
import Faq from "@/components/Faq";

const TITLE = "Paid Web Development Jobs for Students in Malaysia | UniPact";
const DESCRIPTION =
  "Students in Malaysia: apply for paid web, mobile and backend development work. Get matched to real projects and paid per milestone through escrow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/apply-software-developer",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/apply-software-developer",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Student Software Developer",
  employmentType: "CONTRACTOR",
  hiringOrganization: {
    "@type": "Organization",
    name: "UniPact",
  },
  description: "Apply as a Software Development student. Get matched to real, paid work, milestone by milestone.",
  jobLocationType: "TELECOMMUTE",
};

const faqItems = [
  {
    question: "Can university students in Malaysia get paid web development work?",
    answer:
      "Yes. UniPact matches students with companies that need real software built — web apps, mobile apps, backend and internal tools. The work is paid, and you are matched to one scoped project rather than competing in an open applicant pile.",
  },
  {
    question: "Do I need work experience to apply?",
    answer:
      "No formal work experience is required. What matters is what you can actually build, so course projects, personal side projects and anything on your GitHub all count. Tell us your skills in the form and share a link if you have one.",
  },
  {
    question: "What kind of projects would I work on?",
    answer:
      "Real client briefs rather than practice exercises. Recent and in-progress work includes a sales CRM dashboard, an operations system for a tuition centre, and an interior visualization app. You can also state whether you prefer frontend, backend, full-stack or mobile.",
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

export default function ApplySoftwareDeveloperPage() {
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
                  <span className="eyebrow-dot"></span>For students &mdash; Software Development
                </p>
                <h1>Apply as a Software Development student.</h1>
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
                <SoftwareDeveloperForm />
              </div>
            </div>
          </div>
        </section>

        <Faq
          intro="Common questions from students applying for paid software development work."
          items={faqItems}
        />
      </main>
      <Footer variant="simple" />
    </>
  );
}
