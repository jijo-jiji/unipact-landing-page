import Link from "next/link";

export default function Footer({ variant = "full" }: { variant?: "full" | "simple" }) {
  return (
    <footer>
      <div className="container">
        {variant === "full" && (
          <div className="footer-contacts">
            <p className="eyebrow">
              <span className="eyebrow-dot"></span>Contact us
            </p>
            <div className="footer-contacts-grid">
              <div className="footer-contact">
                <p className="footer-contact-name">Azizi bin Sahari</p>
                <p className="footer-contact-title">Project Lead &amp; Chief Developer</p>
                <a className="footer-contact-email" href="mailto:azizi.sahari@unipact.com.my">
                  azizi.sahari@unipact.com.my
                </a>
              </div>
              <div className="footer-contact">
                <p className="footer-contact-name">Naqib</p>
                <p className="footer-contact-title">Head of Business Strategy</p>
                <a className="footer-contact-email" href="mailto:naqiib@unipact.com.my">
                  naqiib@unipact.com.my
                </a>
              </div>
              <div className="footer-contact">
                <p className="footer-contact-name">Akif Najmi</p>
                <p className="footer-contact-title">Head of Marketing &amp; Growth</p>
                <a className="footer-contact-email" href="mailto:akif.najmi@unipact.com.my">
                  akif.najmi@unipact.com.my
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-tag">Impact Ledgers.</p>
            <a className="footer-email" href="mailto:unipact.my@gmail.com">
              unipact.my@gmail.com
            </a>
            <p className="footer-credibility">UniPact &bull; No. Pendaftaran SSM: 202603205508</p>
          </div>
          <div className="footer-legal">
            <p className="footer-copy">&copy; 2026 UniPact. All rights reserved.</p>
            <div className="footer-links">
              <Link href="/privacy-policy">Privacy Policy</Link> &bull; <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
