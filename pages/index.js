import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Welcome to TAPS">
      {/* Hero Section */}
      <section
        className="bg-blue-900 text-white bg-cover bg-center min-h-[700px] flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></section>

      <div className="container mx-auto px-4 text-center bg-blue-900 text-white py-8 mt-8 rounded-md">
        <h1 className="text-4xl font-bold">Welcome to TAPS</h1>
        <p className="mt-4 text-lg">
          Your Gateway to Excellence in Education and Careers.
        </p>
      </div>








      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-center">
            TAPS is committed to providing top-notch education, cutting-edge facilities,
            and fostering a culture of innovation. Join us to achieve academic and career excellence.
          </p>
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            Academics
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Explore our wide range of programs in various disciplines designed to equip students with
            the skills and knowledge for success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-blue-900">Engineering</h3>
              <p className="text-gray-700 mt-2">
                Cutting-edge programs in Computer Science, Mechanical, Civil, and more.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-blue-900">Management</h3>
              <p className="text-gray-700 mt-2">
                MBA and BBA programs designed to shape future business leaders.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-blue-900">Biotechnology</h3>
              <p className="text-gray-700 mt-2">
                Specialized courses in biotechnology and life sciences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            Placements
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Our placement cell connects students with leading companies for internships and full-time roles.
          </p>
          <div className="flex justify-center">
            <img
              src="/placements.webp"
              alt="Placements"
              className="rounded-lg shadow-md w-full max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Admissions</h2>
          <p className="text-gray-700 mb-6">
            Join TAPS and embark on a journey of academic excellence and career growth.
            Applications for the upcoming semester are now open!
          </p>
          <a
            href="/admissions"
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-6">
            Have questions or need assistance? We're here to help.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md hover:bg-yellow-400"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
