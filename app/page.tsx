import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Products from "./components/landing/Products";
import About from "./components/landing/About";
import Solutions from "./components/landing/Solutions";
import WhyUs from "./components/landing/WhyUs";
import Team from "./components/landing/Team";
import News from "./components/landing/News";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";
import ScrollReveal from "./components/landing/ScrollReveal";

// Products & news are read from Supabase on each request.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Products />
      <Solutions />
      <Team />
      <News />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}
