import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About Us - TAPS">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Welcome to Trident Academy of Professional Studies (TAPS), your destination for world-class education, holistic development, and career readiness. At TAPS, we combine academic excellence with practical learning, empowering students to excel in a competitive global environment.
        </p>

        {/* Vision Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-7">
            To be recognized as a center of academic and professional excellence, nurturing leaders who contribute to societal growth and innovation. We aim to inspire our students to think beyond the ordinary and drive transformative change in their respective fields.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-7">
            Our mission is to impart quality education, foster innovation, and instill ethical values in our students. We strive to bridge the gap between academia and industry by providing hands-on learning experiences, state-of-the-art infrastructure, and dedicated mentorship.
          </p>
        </section>

        {/* Our Approach Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Approach</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Focus on student-centric teaching methodologies.</li>
            <li>Encourage interdisciplinary learning and research.</li>
            <li>Collaborate with industries to provide real-world exposure.</li>
            <li>Promote a culture of inclusivity, diversity, and respect.</li>
          </ul>
        </section>

        {/* Core Values Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
          <p className="text-gray-700 leading-7">
            At TAPS, we are guided by principles of integrity, innovation, and excellence. We believe in creating an ecosystem where students thrive academically, socially, and personally.
          </p>
        </section>

        {/* Why TAPS Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose TAPS?</h2>
          <p className="text-gray-700 leading-7">
            At TAPS, we go beyond traditional education to offer a dynamic learning environment. Our institution boasts:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Highly qualified faculty with industry experience.</li>
            <li>State-of-the-art laboratories and infrastructure.</li>
            <li>Robust placement support and industry collaborations.</li>
            <li>Opportunities for research, innovation, and entrepreneurship.</li>
            <li>Vibrant campus life that promotes holistic development.</li>
          </ul>
        </section>

        {/* Closing Section */}
        <section>
          <p className="text-gray-700 text-lg leading-7">
            Join us at TAPS to embark on a transformative educational journey that equips you with the skills, knowledge, and values needed to excel in today's world. Together, let's shape a brighter future.
          </p>
        </section>
      </div>
    </Layout>
  );
}
