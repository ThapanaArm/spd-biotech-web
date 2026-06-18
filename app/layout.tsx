import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPD Biotech — Pharmaceutical & Biopharma Process Equipment",
  description:
    "SPD Biotech is a Thailand-based distributor of pharmaceutical and biopharmaceutical manufacturing equipment — filtration, single-use systems, integrity testing, pumping, disinfection, washing and sterilization.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
