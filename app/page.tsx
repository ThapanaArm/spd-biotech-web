import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Solutions from "./components/landing/Solutions";
import WhyUs from "./components/landing/WhyUs";
import News from "./components/landing/News";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";
import ScrollReveal from "./components/landing/ScrollReveal";

// News is read from Supabase on each request.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Solutions />
      <News />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}
