import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 py-4 flex justify-between items-center sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="font-bold text-white text-lg">
            My App
          </a>
        </div>
        <div className="flex items-center">
          <Link to="/adddata"
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Data
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header ; 