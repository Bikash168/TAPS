import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-White-900 text-blue shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="TAPS Logo" className="h-14 w-22" />
          
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300">
            About Us
          </Link>
          <Link href="/academics" className="hover:text-yellow-300">
            Academics
          </Link>
          <Link href="/admissions" className="hover:text-yellow-300">
            Admissions
          </Link>
          <Link href="/placements" className="hover:text-yellow-300">
            Placements
          </Link>
          <Link href="/contact" className="hover:text-yellow-300">
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-yellow-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 text-white space-y-2 py-3">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-700">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-blue-700">
            About Us
          </Link>
          <Link href="/academics" className="block px-4 py-2 hover:bg-blue-700">
            Academics
          </Link>
          <Link href="/admissions" className="block px-4 py-2 hover:bg-blue-700">
            Admissions
          </Link>
          <Link href="/placements" className="block px-4 py-2 hover:bg-blue-700">
            Placements
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-blue-700">
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
