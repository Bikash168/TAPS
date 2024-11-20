import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import Hero from "../pages/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Why Choose TAPS?</h2>
          <p>
            At TAPS, we offer a wide range of professional courses designed to
            prepare students for the modern workforce. Our focus is on academic
            excellence and hands-on learning.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
