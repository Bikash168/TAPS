import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";

export default function Courses() {
  const courses = [
    { name: "BBA", duration: "3 Years", details: "Bachelor of Business Administration" },
    { name: "MBA", duration: "2 Years", details: "Master of Business Administration" },
    { name: "BCA", duration: "3 Years", details: "Bachelor of Computer Applications" },
  ];

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Courses Offered</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-4 border rounded shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p>{course.details}</p>
                <p className="mt-1 text-gray-600">Duration: {course.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
