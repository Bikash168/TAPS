import Layout from "../components/Layout";

export default function Placements() {
  return (
    <Layout title="Placements - TAPS">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          Placements at TAPS
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          TAPS offers robust placement support to its students, ensuring they are well-prepared to enter the professional world. Our dedicated placement cell works tirelessly to connect students with top-tier companies and provides them with career guidance to ensure successful employment.
        </p>

        {/* Placement Process Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Placement Process</h2>
          <p className="text-gray-700 leading-7 mb-4">
            The placement process at TAPS is designed to provide students with opportunities for employment in various industries. Here's a look at the process:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Registration: Students must register with the placement cell at the beginning of their final year.</li>
            <li>Pre-Placement Training: Workshops and training programs are conducted to enhance skills like resume building, communication, group discussions, and mock interviews.</li>
            <li>Company Interactions: Companies visit the campus for recruitment, conducting tests, interviews, and group discussions.</li>
            <li>Offer Letter: Students who are selected by companies will receive offer letters and sign their employment contracts.</li>
            <li>Final Placement: After securing offers, students complete the formalities and join their respective companies.</li>
          </ol>
        </section>

        {/* Top Recruiters Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Top Recruiters</h2>
          <p className="text-gray-700 leading-7 mb-4">
            TAPS has a strong industry network, and many prestigious companies recruit our students. Here are some of our top recruiters:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <img src="/images/recruiter-1.png" alt="Recruiter 1" className="w-full h-auto" />
            <img src="/images/recruiter-2.png" alt="Recruiter 2" className="w-full h-auto" />
            <img src="/images/recruiter-3.png" alt="Recruiter 3" className="w-full h-auto" />
            <img src="/images/recruiter-4.png" alt="Recruiter 4" className="w-full h-auto" />
            <img src="/images/recruiter-5.png" alt="Recruiter 5" className="w-full h-auto" />
            <img src="/images/recruiter-6.png" alt="Recruiter 6" className="w-full h-auto" />
            <img src="/images/recruiter-7.png" alt="Recruiter 7" className="w-full h-auto" />
            <img src="/images/recruiter-8.png" alt="Recruiter 8" className="w-full h-auto" />
          </div>
        </section>

        {/* Placement Statistics Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Placement Statistics</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Our placement statistics speak for themselves. TAPS ensures high placement rates, with students successfully securing positions in various sectors. Here are the placement highlights from the recent batch:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Overall Placement Rate:</strong> 90%</li>
            <li><strong>Highest Package:</strong> ₹20 LPA (Lakhs Per Annum)</li>
            <li><strong>Average Package:</strong> ₹7 LPA</li>
            <li><strong>Top Hiring Sectors:</strong> IT, Manufacturing, Finance, Consulting, and Research & Development.</li>
            <li><strong>Number of Companies Visited:</strong> 150+</li>
          </ul>
        </section>

        {/* Career Services Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Career Services</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Our dedicated career services team provides comprehensive support to students throughout their placement journey. This includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Resume Building:</strong> Professional assistance in creating a standout resume.</li>
            <li><strong>Interview Preparation:</strong> Mock interviews and guidance on handling real-world interview scenarios.</li>
            <li><strong>Soft Skills Development:</strong> Workshops on communication, leadership, and teamwork.</li>
            <li><strong>Job Fairs and Networking Events:</strong> Opportunities for students to meet recruiters and network with professionals.</li>
          </ul>
        </section>

        {/* Alumni Success Stories Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Alumni Success Stories</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Our alumni have gone on to achieve great success in their respective fields. Here are some stories of how TAPS alumni are making a difference in the world:
          </p>
          <blockquote className="italic text-gray-700 border-l-4 pl-4 mb-4">
            "TAPS provided me with the academic foundation and industry connections I needed to launch my career in the tech industry. I’m proud to be an alumnus of this esteemed institution." — [Alumnus Name], Software Engineer at [Company]
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 pl-4 mb-4">
            "The support from TAPS' placement cell was invaluable. They not only helped me secure a job but also equipped me with the skills to excel in my professional journey." — [Alumnus Name], Business Analyst at [Company]
          </blockquote>
        </section>
      </div>
    </Layout>
  );
}
