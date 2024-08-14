import { useState } from 'react';

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-teal-700">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-300 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-teal-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-6.627 0-12 5.373-12 12h24c0-6.627-5.373-12-12-12z"
            />
          </svg>
        </div>
        <div className="hidden md:flex space-x-4 border-teal-700 border-2 rounded-lg px-4 py-3 ">
          <a href="/" className="hover:text-gray-200 ">Home</a>
          <a href="/contact" className="hover:text-gray-200 ">Contact</a>
          <a href="/about" className="hover:text-gray-200">About</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <button onClick={onLoginClick} className="bg-teal-600 text-white px-4 py-2 rounded">
        Login
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white p-4 md:hidden">
          <a href="/" className="block py-2">Home</a>
          <a href="/contact" className="block py-2">Contact</a>
          <a href="/about" className="block py-2">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;