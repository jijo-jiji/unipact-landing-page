"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { submitToGoogleForm } from "@/lib/submitToGoogleForm";

const SKILLS = ["React", "Node.js", "Python", "Django", "Flutter", "Java", "PHP", "Vue", "Databases"];

export default function SoftwareDeveloperForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const otherInputRef = useRef<HTMLInputElement>(null);
  const [otherChecked, setOtherChecked] = useState(false);
  const [otherValue, setOtherValue] = useState("");
  const [skillsError, setSkillsError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<{ text: string; color: string } | null>(null);

  useEffect(() => {
    if (otherChecked) otherInputRef.current?.focus();
  }, [otherChecked]);

  function hasAnySkill() {
    const form = formRef.current;
    if (!form) return false;
    return !!form.querySelector('input[name="skills"]:checked') || otherValue.trim() !== "";
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!hasAnySkill()) {
      setSkillsError(true);
      document.getElementById("skillsError")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSkillsError(false);

    setSubmitting(true);
    setStatus(null);

    try {
      await submitToGoogleForm(form);
      setSubmitted(true);
      setStatus({
        text: "Thank you! We've received your application and will be in touch if there's a match.",
        color: "#00AEEF",
      });
      form.reset();
      setOtherChecked(false);
      setOtherValue("");
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
      <h4>Software Developer Application</h4>
      <form id="studentForm" className="custom-form" ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="lead_type" value="Student_SoftwareDev" />

        <div className="input-group">
          <label htmlFor="studentEmail">Email Address</label>
          <input type="email" id="studentEmail" name="student_email" required placeholder="you@example.com" />
        </div>
        <div className="input-group">
          <label htmlFor="studentName">Full Name</label>
          <input type="text" id="studentName" name="student_name" required placeholder="Jane Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="studentPhone">Phone Number (WhatsApp)</label>
          <input type="tel" id="studentPhone" name="student_phone" required placeholder="+60 12-345 6789" />
        </div>
        <div className="input-group">
          <label htmlFor="institution">Where Do You Study?</label>
          <input type="text" id="institution" name="institution" required placeholder="e.g. Universiti Malaya" />
        </div>
        <div className="input-group">
          <label htmlFor="educationStatus">Education Status</label>
          <div className="select-wrapper">
            <select id="educationStatus" name="education_status" required defaultValue="">
              <option value="" disabled>
                Select&hellip;
              </option>
              <option value="Foundation">Foundation</option>
              <option value="Diploma">Diploma</option>
              <option value="Degree">Degree</option>
              <option value="Master">Master</option>
              <option value="PHD">PHD</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="course">What Course Do You Take?</label>
          <input type="text" id="course" name="course" required placeholder="e.g. Computer Science" />
        </div>
        <div className="input-group">
          <label htmlFor="semester">Current Semester</label>
          <div className="select-wrapper">
            <select id="semester" name="semester" required defaultValue="">
              <option value="" disabled>
                Select&hellip;
              </option>
              {["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"].map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="input-group">
          <label id="skillsLabel">What are your skills?</label>
          <div className="checkbox-grid" role="group" aria-labelledby="skillsLabel">
            {SKILLS.map((skill) => (
              <label className="checkbox-item" key={skill}>
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  onChange={() => setSkillsError(false)}
                />
                {skill}
              </label>
            ))}
            <label className="checkbox-item">
              <input
                type="checkbox"
                id="skillsOtherToggle"
                checked={otherChecked}
                onChange={(e) => {
                  setOtherChecked(e.target.checked);
                  if (!e.target.checked) setOtherValue("");
                }}
              />
              Others:
            </label>
          </div>
          <input
            type="text"
            id="skillsOther"
            name="skills_other"
            className="skills-other-input"
            placeholder="Type your other skills"
            hidden={!otherChecked}
            ref={otherInputRef}
            value={otherValue}
            onChange={(e) => {
              setOtherValue(e.target.value);
              if (e.target.value.trim() !== "") setSkillsError(false);
            }}
          />
          <p className="field-error" id="skillsError" style={{ display: skillsError ? "block" : undefined }}>
            Please select at least one skill, or type one under Others.
          </p>
        </div>

        <div className="input-group">
          <label htmlFor="projectType">
            Preferred Project Type <span className="optional-tag">Optional</span>
          </label>
          <div className="select-wrapper">
            <select id="projectType" name="project_type" defaultValue="">
              <option value="" disabled>
                Select&hellip;
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full-stack">Full-stack</option>
              <option value="Mobile">Mobile</option>
              <option value="No preference">No preference</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="portfolioLink">
            GitHub Profile or Portfolio Link <span className="optional-tag">Optional</span>
          </label>
          <input type="url" id="portfolioLink" name="portfolio_link" placeholder="https://github.com/yourname" />
        </div>
        <div className="input-group">
          <label htmlFor="availability">Availability</label>
          <div className="select-wrapper">
            <select id="availability" name="availability" required defaultValue="">
              <option value="" disabled>
                Select&hellip;
              </option>
              <option value="Available now">Available now</option>
              <option value="Available next month">Available next month</option>
              <option value="Available next semester">Available next semester</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="experience">
            Describe a Project or Work You&apos;ve Done <span className="optional-tag">Optional</span>
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={3}
            placeholder="e.g. Built a full-stack todo app with React and Node.js, deployed on Vercel."
          />
        </div>

        <div className="input-group">
          <label className="consent-item">
            <input type="checkbox" name="consent" value="Yes" required />
            <span>
              I agree UniPact may share my profile with verified companies on the platform in accordance with
              the{" "}
              <a href="/privacy-policy" target="_blank" style={{ color: "var(--cyan)", textDecoration: "underline" }}>
                Privacy Policy
              </a>{" "}
              &amp;{" "}
              <a href="/terms" target="_blank" style={{ color: "var(--cyan)", textDecoration: "underline" }}>
                Terms
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          id="submitBtn"
          className="btn btn-primary btn-block"
          disabled={submitting}
          style={submitted ? { background: "#00AEEF" } : undefined}
        >
          {submitted ? "Application Submitted!" : submitting ? "Submitting..." : "Submit Application"}
        </button>
        {status && (
          <p
            id="formStatus"
            style={{
              display: "block",
              marginTop: "1rem",
              textAlign: "center",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: status.color,
            }}
          >
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
}
