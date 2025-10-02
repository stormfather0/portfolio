import React, { useState } from 'react';

const Header = ({ setContactMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="fixed top-4 left-1/2 z-50 transform -translate-x-1/2 w-[95%] bg-transparent backdrop-blur-sm rounded-2xl border border-white/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-gray-300 font-bold text-xl">Ivan Yatskovyna</div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 font-medium text-white">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#letter" className="hover:text-blue-400 transition-colors">Letter</a>
          </nav>

          {/* Contact button */}
          <button
            className="ml-4 inline-block bg-white text-black font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
            onClick={() => setContactMenuOpen(true)}
          >
            Contact Me
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative ml-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-0.5 bg-white transition-transform duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white my-1 transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-transform duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 p-4' : 'max-h-0 p-0'
        } bg-white/20 backdrop-blur-md`}
      >
        <nav className="flex flex-col space-y-3 text-white font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#letter" className="hover:text-blue-400 transition-colors">Letter</a>

          <button
            className="mt-2 inline-block bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
            onClick={() => setContactMenuOpen(true)}
          >
            Contact Me
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;