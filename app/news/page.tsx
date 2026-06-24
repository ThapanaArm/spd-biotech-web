import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import NewsBrowser from "./NewsBrowser";
import { getNews } from "@/lib/data";

export const dynamic = "force-dynamic";
export const metadata = { title: "News & Events — SPD Biotech" };

export default async function NewsPage() {
  const items = await getNews();

  return (
    <>
      <Navbar />
      <main className="newspage">
        <div className="container">
          <h1 className="news-heading" style={{ marginBottom: 24 }}>
            News &amp; Events
          </h1>
          <NewsBrowser items={items} />
        </div>
      </main>
      <Footer />
    </>
  );
}
