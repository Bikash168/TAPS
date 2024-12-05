import Layout from "../components/Layout";

export default function Admissions() {
  return (
    <Layout title="Admissions - TAPS">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          Admissions at TAPS
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Join Trident Academy of Professional Studies (TAPS) to begin your journey towards academic and professional excellence. We offer a wide range of undergraduate, postgraduate, and diploma courses designed to equip you with the skills and knowledge required for a successful career.
        </p>

        {/* Admission Process Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Admission Process</h2>
          <p className="text-gray-700 leading-7 mb-4">
            The admission process at TAPS is designed to be simple and transparent. We aim to provide a seamless experience for all prospective students. Follow the steps below to apply:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Fill out the online application form on the official website.</li>
            <li>Submit the required documents (academic transcripts, ID proof, etc.).</li>
            <li>Attend an entrance exam or interview (if applicable for your course).</li>
            <li>Pay the application fee online or via a demand draft.</li>
            <li>Receive your admission offer letter and confirm your enrollment by paying the admission fee.</li>
          </ol>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Eligibility Criteria</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Students must meet certain eligibility requirements to apply for various courses. Here are the general criteria:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Undergraduate Programs:</strong> Students must have completed their 10+2 (Higher Secondary) with a minimum percentage from a recognized board.</li>
            <li><strong>Postgraduate Programs:</strong> A bachelor’s degree in the relevant field with the required marks from a recognized university.</li>
            <li><strong>Diploma Courses:</strong> Completed 10th grade or equivalent (for certain programs).</li>
          </ul>
        </section>

        {/* Documents Required Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Documents Required</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Please ensure you have the following documents when applying for admission:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Marksheet/Certificate of the qualifying examination (10+2 or Graduation, as applicable).</li>
            <li>Recent passport-size photographs.</li>
            <li>Photo ID proof (Aadhar card, Passport, etc.).</li>
            <li>Category certificate (if applicable).</li>
            <li>Entrance exam scorecard (if applicable).</li>
            <li>Transfer Certificate (if applicable).</li>
          </ul>
        </section>

        {/* Important Dates Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Dates</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Below are the important dates for the upcoming admission cycle:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Application Start Date:</strong> [Insert Start Date]</li>
            <li><strong>Application Deadline:</strong> [Insert Deadline]</li>
            <li><strong>Entrance Exam (if applicable):</strong> [Insert Exam Date]</li>
            <li><strong>Admission Offer Announced:</strong> [Insert Offer Date]</li>
            <li><strong>Commencement of Classes:</strong> [Insert Start Date]</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Admissions</h2>
          <p className="text-gray-700 leading-7 mb-4">
            If you have any questions or need assistance with the admission process, feel free to contact us:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Email:</strong> admissions@taps.ac.in</li>
            <li><strong>Phone:</strong> +91 123 456 7890</li>
            <li><strong>Visit Us:</strong> TAPS Campus, [Insert Address]</li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <section>
          <p className="text-gray-700 text-lg leading-7">
            We look forward to welcoming you to the TAPS family and guiding you towards academic success and professional growth. Start your journey today!
          </p>
        </section>
      </div>
    </Layout>
  );
}
