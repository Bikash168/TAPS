import Layout from "../components/Layout";

export default function Academics() {
  return (
    <Layout title="Academics - TAPS">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          Academics at TAPS
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          At Trident Academy of Professional Studies (TAPS), we take pride in offering a diverse array of academic programs tailored to meet the evolving demands of industry and society. Our programs are designed to foster critical thinking, innovation, and hands-on learning.
        </p>

        {/* Academic Programs Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Academic Programs</h2>
          <p className="text-gray-700 leading-7">
            TAPS offers a variety of undergraduate, postgraduate, and diploma programs across multiple disciplines. These programs are curated to provide in-depth knowledge and practical experience, preparing students for successful careers.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>
              <span className="font-semibold">Undergraduate Programs:</span> 
              Courses designed to build a strong foundation in various professional fields.
            </li>
            <li>
              <span className="font-semibold">Postgraduate Programs:</span> 
              Advanced studies for specialization and research opportunities.
            </li>
            <li>
              <span className="font-semibold">Diploma and Certification Courses:</span> 
              Short-term courses for skill enhancement and career progression.
            </li>
          </ul>
        </section>

        {/* Pedagogy Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Pedagogy</h2>
          <p className="text-gray-700 leading-7">
            Our teaching methodologies are student-centered and focus on experiential learning. Key highlights include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Interactive lectures and workshops.</li>
            <li>Industry-oriented curriculum designed in collaboration with experts.</li>
            <li>Hands-on training through laboratories, projects, and internships.</li>
            <li>Focus on research, innovation, and entrepreneurship.</li>
          </ul>
        </section>

        {/* Facilities Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">State-of-the-Art Facilities</h2>
          <p className="text-gray-700 leading-7">
            At TAPS, we are equipped with cutting-edge facilities to support our academic endeavors:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Modern classrooms with audio-visual aids.</li>
            <li>Fully equipped laboratories for science, technology, and engineering programs.</li>
            <li>Comprehensive library with a vast collection of academic resources.</li>
            <li>Collaborative spaces for group discussions and projects.</li>
          </ul>
        </section>

        {/* Academic Excellence Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Academic Excellence</h2>
          <p className="text-gray-700 leading-7">
            Our focus on academic excellence is reflected in our commitment to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Maintaining a low student-to-teacher ratio for personalized attention.</li>
            <li>Encouraging participation in national and international academic forums.</li>
            <li>Providing opportunities for research and publication.</li>
          </ul>
        </section>

        {/* Closing Section */}
        <section>
          <p className="text-gray-700 text-lg leading-7">
            At TAPS, we believe in shaping the future by nurturing talent and fostering a love for learning. Join us to embark on a journey of academic excellence and professional success.
          </p>
        </section>
      </div>
    </Layout>
  );
}
