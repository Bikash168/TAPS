import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact Us - TAPS">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          We are here to assist you! Whether you have a query or need further information, don't hesitate to reach out to us.
        </p>

        {/* Contact Information Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            You can contact us through the following methods:
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 11.1V12a9 9 0 11-3.5-7.4" />
              </svg>
              <span>Phone: +91 123 456 7890</span>
            </li>
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4.5a1 1 0 002 0V8h3a1 1 0 110 2h-3v4.5a1 1 0 11-2 0V10H9a1 1 0 110-2h3V3a1 1 0 012 0v5h3a1 1 0 110 2h-3z" />
              </svg>
              <span>Email: info@taps.ac.in</span>
            </li>
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-2h-1V8h1V6h1V8h1v6h-1v2z" />
              </svg>
              <span>Address: Trident Academy of Professional Studies, Bhubaneswar, Odisha, India</span>
            </li>
          </ul>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border border-gray-300 p-3 rounded-lg"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800">
              Submit
            </button>
          </form>
        </section>

        {/* Google Map Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Location</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14906.54897886518!2d85.79821831534856!3d20.342719360869287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1a36b5cfd9e8ef%3A0x7c689115e4d62ebd!2sTrident%20Academy%20of%20Professional%20Studies!5e0!3m2!1sen!2sin!4v1637674378976!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="TAPS Location"
            ></iframe>
          </div>
        </section>
      </div>
    </Layout>
  );
}
