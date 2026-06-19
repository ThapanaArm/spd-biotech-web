"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/catalog";

export default function Contact() {
  const [sent, setSent] = useState(false);

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
            <span className="eyebrow">Get in touch</span>
            <h2>Tell us about your process</h2>
            <p>
              Share your application and our engineers will recommend the right
              equipment, sizing and configuration — with a quotation to follow.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="ci-ic">📧</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="contact-item">
                <span className="ci-ic">📞</span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
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
                <label>Full name</label>
                <input type="text" placeholder="Somchai Jaidee" required />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Your company Co., Ltd." />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@company.com" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+66 8x xxx xxxx" />
              </div>
            </div>
            <div className="form-group">
              <label>How can we help?</label>
              <textarea
                rows={4}
                placeholder="Tell us about your application — filtration, single-use, integrity testing, sterilization…"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Send enquiry
            </button>
            <div className={"form-success" + (sent ? " show" : "")}>
              ✅ Thank you — your enquiry has been received. We&apos;ll be in touch within 1 business day.
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
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
