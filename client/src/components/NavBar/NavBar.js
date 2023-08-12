import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-xl">Your Logo</div>

          {/* Hamburger Menu */}
          <div className="sm:hidden">
            <button
              className="text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="hidden sm:flex space-x-4">
            <a href="#" className="text-white">Link 1</a>
            <a href="#" className="text-white">Link 2</a>
            <a href="#" className="text-white">Link 3</a>
          </div>
        </div>

        {/* Hamburger menu for small screens */}
        {isOpen && (
          <div className="sm:hidden mt-4 space-y-2">
            <a href="#" className="block text-white">Link 1</a>
            <a href="#" className="block text-white">Link 2</a>
            <a href="#" className="block text-white">Link 3</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
