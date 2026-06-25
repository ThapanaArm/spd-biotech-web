"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/catalog";
import { useLang } from "@/app/LangContext";

const phoneHref = (phone: string) =>
  `tel:${phone.replace(/\s|ต่อ\s*\d+/g, "")}`;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLang();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.heading}</h2>
            <p>{t.contact.body}</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="ci-ic">📧</span>
                <div className="contact-list">
                  {CONTACT.emails.map((email) => (
                    <a href={`mailto:${email}`} key={email}>
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="contact-item">
                <span className="ci-ic">📞</span>
                <div className="contact-list">
                  {CONTACT.phones.map((phone) => (
                    <a href={phoneHref(phone)} key={phone}>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="contact-item">
                <span className="ci-ic">📍</span>
                {CONTACT.address}
              </div>
              <div className="contact-item">
                <span className="ci-ic">🌐</span>
                <a href={`https://${CONTACT.website}`} target="_blank" rel="noreferrer">
                  {CONTACT.website}
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t.contact.name}</label>
                <input type="text" placeholder={t.contact.namePh} required />
              </div>
              <div className="form-group">
                <label>{t.contact.company}</label>
                <input type="text" placeholder={t.contact.companyPh} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{t.contact.email}</label>
                <input type="email" placeholder={t.contact.emailPh} required />
              </div>
              <div className="form-group">
                <label>{t.contact.phone}</label>
                <input type="tel" placeholder={t.contact.phonePh} />
              </div>
            </div>
            <div className="form-group">
              <label>{t.contact.help}</label>
              <textarea rows={4} placeholder={t.contact.helpPh} />
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              {t.contact.send}
            </button>
            <div className={"form-success" + (sent ? " show" : "")}>
              ✅ {t.contact.success}
            </div>
          </form>
        </div>
        <div className="map-wrap">
          <iframe
            src="https://maps.google.com/maps?q=SPD+BIOTECH+CO+LTD+79+Srinakarin+40+Nong+Bon+Prawet+Bangkok&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="map-frame"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SPD Biotech location"
          />
          <a
            href="https://maps.app.goo.gl/LZYWXpmkYRNDrspPA"
            target="_blank"
            rel="noreferrer"
            className="map-open-link"
          >
            📍 {t.contact.openMap}
          </a>
        </div>
      </div>
    </section>
  );
}
