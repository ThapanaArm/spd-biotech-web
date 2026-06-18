"use client";

import { useEffect } from "react";

/**
 * Reveals landing cards on scroll via IntersectionObserver. Renders nothing.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".solution-card, .value-card, .about-stat, .team-card, .team-featured, .product-card"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
