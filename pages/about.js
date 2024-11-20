import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p>
            Trident Academy of Professional Studies (TAPS) is a leading
            institute focused on providing quality education in professional
            fields. We believe in holistic development, ensuring our students
            are ready to face the challenges of the modern world.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
