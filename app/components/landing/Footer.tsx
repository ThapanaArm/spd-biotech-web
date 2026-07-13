"use client";

import { CONTACT } from "@/lib/catalog";
import Logo from "./Logo";
import { useLang } from "@/app/LangContext";

const phoneHref = (phone: string) =>
  `tel:${phone.replace(/\s|ต่อ\s*\d+/g, "")}`;

export default function Footer() {
  const { t } = useLang();
  const year = 2026;
  const contactEmails = [
    { label: "Sales Department", email: CONTACT.emails[0] },
    { label: "Customer Support", email: CONTACT.emails[1] },
    { label: "Product Specialist", email: CONTACT.emails[2] },
  ].filter((item) => item.email);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <span className="logo-mark logo-mark-ondark"><Logo size={40} /></span>
              <span className="logo-text">
                SPD<span className="logo-dot"> Biotech</span>
              </span>
            </div>
            <p className="footer-address">{CONTACT.address}</p>
          </div>
          <div>
            <h4>{t.footer.contact}</h4>
            <ul>
              {CONTACT.phones.map((phone) => (
                <li key={phone}><a href={phoneHref(phone)}>{phone}</a></li>
              ))}
              <li><a href={`https://${CONTACT.website}`}>{CONTACT.website}</a></li>
            </ul>
          </div>
          <div>
            <ul>
              {contactEmails.map(({ label, email }) => (
                <li key={email} className="footer-contact-line">
                  <span>{label}</span>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} SPD Biotech Co., Ltd. {t.footer.rights}</span>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="https://www.bis-group.com/en/terms-and-conditions" target="_blank" rel="noreferrer">
              Terms and Conditions
            </a>
            <a href="https://www.bis-group.com/en/privacy-notice" target="_blank" rel="noreferrer">
              Privacy Notice
            </a>
            <a href="https://www.bis-group.com/en/cookie-policy" target="_blank" rel="noreferrer">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
