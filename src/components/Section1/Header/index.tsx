"use client";

import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex bg-[#1E1E1E] justify-between items-center p-8 sticky w-full top-0 left-0 z-50">
        <div className="text-white font-bold">Jottadev</div>

        <nav className="hidden md:block">
          <ul className="flex flex-row gap-8 text-white">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Projetos</li>
            <li className="hover:text-gray-300 cursor-pointer">Experiência</li>
            <li className="hover:text-gray-300 cursor-pointer">Contato</li>
          </ul>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#1E1E1E] md:hidden z-40">
            <ul className="flex flex-col text-white">
              <li className="p-4 hover:bg-gray-700 cursor-pointer border-b border-gray-600">
                Home
              </li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer border-b border-gray-600">
                Projetos
              </li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer border-b border-gray-600">
                Experiência
              </li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer">Contato</li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
