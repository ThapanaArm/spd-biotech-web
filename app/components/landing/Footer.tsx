"use client";

import { SOLUTIONS, CONTACT } from "@/lib/catalog";
import Logo from "./Logo";
import { useLang } from "@/app/LangContext";

const phoneHref = (phone: string) =>
  `tel:${phone.replace(/\s|ต่อ\s*\d+/g, "")}`;

export default function Footer() {
  const { t } = useLang();
  const year = 2026;
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
            <p className="footer-about">{t.footer.about}</p>
          </div>
          <div>
            <h4>{t.footer.solutions}</h4>
            <ul>
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <a href="#solutions">{t.solutions.items[s.slug]?.title ?? s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.products}</h4>
            <ul>
              <li><a href="/product">Peristaltic pump</a></li>
              <li><a href="/product">Filter integrity tester</a></li>
              <li><a href="/product">Glove integrity tester</a></li>
              <li><a href="/product">Surface disinfection</a></li>
              <li><a href="/product">Tubing / Gasket</a></li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.contact}</h4>
            <ul>
              {CONTACT.emails.map((email) => (
                <li key={email}><a href={`mailto:${email}`}>{email}</a></li>
              ))}
              {CONTACT.phones.map((phone) => (
                <li key={phone}><a href={phoneHref(phone)}>{phone}</a></li>
              ))}
              <li>{CONTACT.address}</li>
              <li><a href={`https://${CONTACT.website}`}>{CONTACT.website}</a></li>
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
          <span>{t.footer.proto}</span>
        </div>
      </div>
    </footer>
  );
}
