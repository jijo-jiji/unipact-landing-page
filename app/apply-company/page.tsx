import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyApplicationForm from "@/components/CompanyApplicationForm";

const TITLE = "Hire Student Developers & Marketers in Malaysia | UniPact";
const DESCRIPTION =
  "Post a paid job and get matched with one verified student for software development or digital marketing work in Malaysia. Pay per milestone via escrow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/apply-company",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/apply-company",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Student Freelance Hiring",
  provider: {
    "@type": "Organization",
    name: "UniPact",
  },
  description: "Post a paid job and get matched with a verified, best-fit student.",
};

export default function ApplyCompanyPage() {
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
                  <span className="eyebrow-dot"></span>For companies
                </p>
                <h1>Post the job. We match the talent.</h1>
                <p>
                  Skip the applicant pile. Tell us the scope and the payout &mdash; UniPact matches one verified
                  student who fits, and escrow handles the rest.
                </p>

                <ul className="feature-list">
                  <li>Post a fixed-scope job with a fixed payout</li>
                  <li>Get matched with one verified, best-fit student</li>
                  <li>Pay per milestone, held in escrow until work is verified</li>
                  <li>Walk away with a delivery report</li>
                </ul>
              </div>

              <div className="company-form">
                <CompanyApplicationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="simple" />
    </>
  );
}
