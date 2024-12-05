export default function Hero() {
    return (
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TAPS</h1>
          <p className="text-lg mb-6">
            Transforming students into professionals with a focus on excellence.
          </p>
          <a
            href="/courses"
            className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500"
          >
            Explore Courses
          </a>
        </div>
      </section>
    );
  }
  