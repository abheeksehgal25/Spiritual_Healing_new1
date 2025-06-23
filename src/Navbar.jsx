import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from './assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-4 md:px-16 py-2 flex items-center justify-between bg-transparent md:bg-transparent shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full bg-white p-1 shadow" />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden ml-auto text-white focus:outline-none z-30"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Menu Items */}
      <div
        className={`fixed md:static top-0 right-0 h-full md:h-auto w-2/3 max-w-xs md:max-w-none
          bg-transparent md:bg-transparent
          ${menuOpen ? '' : 'backdrop-blur-md'}
          md:backdrop-blur-0 shadow-lg md:shadow-none flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-10 p-8 md:p-0 transition-transform duration-300 ease-in-out z-20
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`
        }
      >
        {/* Nav Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-white font-semibold text-xl w-full md:w-auto">
          {['home', 'about', 'services', 'events', 'blogs'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className={`cursor-pointer capitalize hover:text-gray-300 transition md:bg-transparent md:rounded-none md:px-0 md:py-0 ${
                menuOpen ? 'bg-[#0655A0] rounded-lg px-4 py-2 !backdrop-blur-0 !bg-opacity-100' : ''
              }`}
            >
              {item}
            </Link>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="https://web.whatsapp.com/">
        <button
          className={`w-full md:w-auto mt-4 md:mt-0 px-6 py-2 rounded-full font-medium transition shadow 
            ${menuOpen ? 'bg-white text-[#0655A0]' : 'bg-[#0655A0] text-white hover:bg-blue-600'}`}
        >
          Join Now
        </button></a>
      </div>

      {/* Backdrop (Mobile only) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-transparent z-10 md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
