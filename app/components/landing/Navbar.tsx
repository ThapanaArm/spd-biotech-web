"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

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
          <li><a href="/#why">Why SPD</a></li>
          <li><a href="/#solutions">Solutions</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/#team">Team</a></li>
          <li><a href="/#news">News</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a href="/#contact" className="btn btn-primary">Request a quote</a>
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
        <a href="/#why" onClick={closeMenu}>Why SPD</a>
        <a href="/#solutions" onClick={closeMenu}>Solutions</a>
        <a href="/product" onClick={closeMenu}>Products</a>
        <a href="/#team" onClick={closeMenu}>Team</a>
        <a href="/#news" onClick={closeMenu}>News</a>
        <a href="/#contact" onClick={closeMenu}>Contact</a>
        <a href="/#contact" className="btn btn-primary" style={{ marginTop: 8 }} onClick={closeMenu}>
          Request a quote
        </a>
      </div>
    </nav>
  );
}
