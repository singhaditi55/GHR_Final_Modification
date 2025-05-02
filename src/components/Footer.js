import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GHR Industries</h3>
            <p className="text-gray-400 mb-4">
              Quality rubber and plastic products by GHR Industries. Committed to excellence and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About</Link></li>
              <li><Link to="/product" className="text-gray-400 hover:text-white transition duration-300">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-gray-400 hover:text-white transition duration-300">Rubber Products</Link></li>
              <li><Link to="/product" className="text-gray-400 hover:text-white transition duration-300">Zinc Casting</Link></li>
              <li><Link to="/product" className="text-gray-400 hover:text-white transition duration-300">Plastic Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              123 Manufacturing Way<br />
              Industrial District<br />
              City, State 12345
            </address>
            <p className="text-gray-400 mt-2">
              Phone: (123) 456-7890<br />
              Email: info@ghrindustries.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} GHR Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
