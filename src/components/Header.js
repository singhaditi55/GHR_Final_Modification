import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/assets/logo.png";

const Header = () => {
  // Add state to track if dropdowns are open
  const [productsOpen, setProductsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header>
      {/* Top Contact Bar */}
      <div
        className="text-white text-sm px-4 py-2 flex justify-between items-center"
        style={{ backgroundColor: "#008080" }}
      >
        <div className="flex gap-4 items-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="flex gap-6 items-center text-sm">
          <span>
            <i className="far fa-envelope mr-2"></i> gopighrindustries@gmail.com
          </span>
          <span>
            <i className="fas fa-phone-alt mr-2"></i> +91 9003217075
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gradient-to-r from-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="GHR Industries Logo" className="h-10 w-10" />
              <Link to="/" className="text-xl font-bold">
                GHR Industries
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-teal-400 font-medium">
                Home
              </Link>
              <Link to="/about" className="hover:text-teal-400 font-medium">
                About
              </Link>
              
              <Link to="/product" className="hover:text-teal-400 font-medium">
             Products
              </Link>
              <Link to="/Contact" className="hover:text-teal-400 font-medium">
                Contact
              </Link>
              {/* Products Dropdown - Using onClick instead of hover */}
             
            
            </nav>

            {/* Mobile Menu (placeholder) */}
            <div className="md:hidden">
              <button className="text-gray-200 hover:text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
