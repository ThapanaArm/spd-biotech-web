"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang } from "@/app/LangContext";
import { LANGS } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const langToggle = (extra = "") => (
    <div className={"lang-toggle" + extra} role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={"lang-btn" + (lang === l ? " active" : "")}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")} id="navbar">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark"><Logo size={40} /></span>
          <span className="logo-text">
            SPD<span className="logo-dot"> Biotech</span>
          </span>
        </Link>
        <ul className="nav-links">
          <li><a href="/#why">{t.nav.why}</a></li>
          <li><a href="/#solutions">{t.nav.solutions}</a></li>
          <li><a href="/product">{t.nav.products}</a></li>
          <li><a href="/#news">{t.nav.news}</a></li>
          <li><a href="/#contact">{t.nav.contact}</a></li>
        </ul>
        <div className="nav-cta">
          {langToggle()}
          <a href="/#contact" className="btn btn-primary">{t.nav.quote}</a>
        </div>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      <div className={"mobile-menu" + (menuOpen ? " open" : "")} id="mobileMenu">
        <a href="/#why" onClick={closeMenu}>{t.nav.why}</a>
        <a href="/#solutions" onClick={closeMenu}>{t.nav.solutions}</a>
        <a href="/product" onClick={closeMenu}>{t.nav.products}</a>
        <a href="/#news" onClick={closeMenu}>{t.nav.news}</a>
        <a href="/#contact" onClick={closeMenu}>{t.nav.contact}</a>
        <a href="/#contact" className="btn btn-primary" style={{ marginTop: 8 }} onClick={closeMenu}>
          {t.nav.quote}
        </a>
        {langToggle(" lang-toggle-mobile")}
      </div>
    </nav>
  );
}
