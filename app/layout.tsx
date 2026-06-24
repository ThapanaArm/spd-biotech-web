import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { DEFAULT_LANG, type Lang } from "@/lib/i18n";
import { LangProvider } from "./LangContext";
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieLang = (await cookies()).get("lang")?.value;
  const lang: Lang = cookieLang === "th" || cookieLang === "en" ? cookieLang : DEFAULT_LANG;
  return (
    <html lang={lang} data-scroll-behavior="smooth" className={inter.variable}>
      <body>
        <LangProvider initialLang={lang}>{children}</LangProvider>
      </body>
    </html>
  );
}
