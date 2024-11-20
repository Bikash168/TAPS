import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">TAPS</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link href="/courses" className="hover:text-yellow-300">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
