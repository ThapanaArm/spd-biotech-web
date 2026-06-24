import { SOLUTIONS, CONTACT } from "@/lib/catalog";
import Logo from "./Logo";

export default function Footer() {
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
            <p className="footer-about">
              Thailand-based distributor of pharmaceutical and biopharmaceutical
              manufacturing equipment — filtration, single-use systems, integrity
              testing, pumping, disinfection, washing and sterilization.
            </p>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <a href="#solutions">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="/product">Peristaltic pump</a></li>
              <li><a href="/product">Filter integrity tester</a></li>
              <li><a href="/product">Glove integrity tester</a></li>
              <li><a href="/product">Surface disinfection</a></li>
              <li><a href="/product">Tubing / Gasket</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a></li>
              <li>{CONTACT.address}</li>
              <li><a href={`https://${CONTACT.website}`}>{CONTACT.website}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} SPD Biotech Co., Ltd. All rights reserved.</span>
          <span>Prototype landing page</span>
        </div>
      </div>
    </footer>
  );
}
