"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-slow">
            PT
          </h1>
        </Link>

        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <li key={link} className="relative group">
              <Link
                href={`#${link.toLowerCase()}`}
                className="transition-all duration-300 hover:text-blue-500"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-200 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4">
          <ul className="flex flex-col space-y-3 text-gray-700 dark:text-gray-200 font-medium">
            {links.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block transition-colors duration-300 hover:text-blue-500"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}