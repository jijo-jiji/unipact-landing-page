"use client";

import { FormEvent, useState } from "react";
import { submitToGoogleForm } from "@/lib/submitToGoogleForm";

export default function CompanyApplicationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<{ text: string; color: string } | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setSubmitting(true);
    setStatus(null);

    try {
      await submitToGoogleForm(form);
      setSubmitted(true);
      setStatus({
        text: "Thank you! We received your application and will match your project soon.",
        color: "#00AEEF",
      });
      form.reset();
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitting(false);
      setStatus({
        text: "Submission issue. Please email us directly at unipact.my@gmail.com",
        color: "#ff6b6b",
      });
    }
  }

  return (
    <div className="form-container">
      <h4>Company Application</h4>
      <form id="companyForm" className="custom-form" onSubmit={handleSubmit}>
        <input type="hidden" name="lead_type" value="Company_Leads" />
        <div className="input-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="company_name" required placeholder="Acme Corp" />
        </div>
        <div className="input-group">
          <label htmlFor="contactPerson">Contact Person</label>
          <input type="text" id="contactPerson" name="contact_person" required placeholder="Jane Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="corpEmail">Email Address</label>
          <input type="email" id="corpEmail" name="corp_email" required placeholder="jane@acmecorp.com" />
        </div>
        <div className="input-group">
          <label htmlFor="scopeNeeded">Scope Needed</label>
          <div className="select-wrapper">
            <select id="scopeNeeded" name="scope_needed" required defaultValue="">
              <option value="" disabled>
                Select a scope&hellip;
              </option>
              <option value="Software Development">Software Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          id="submitBtn"
          className="btn btn-primary btn-block"
          disabled={submitting}
          style={submitted ? { background: "#00AEEF" } : undefined}
        >
          {submitted ? "Application Submitted!" : submitting ? "Submitting..." : "Post a Job"}
        </button>
        {status && (
          <p
            id="formStatus"
            style={{ display: "block", marginTop: "1rem", textAlign: "center", fontSize: "0.9rem", fontWeight: 600, color: status.color }}
          >
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
}
