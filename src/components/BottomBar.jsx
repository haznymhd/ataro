import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* General Bar */}
      <div className="general-bar border bg-white py-4 shadow-lg sticky top-0 z-50 transition-transform duration-300 ease-in-out">
        <div className="container mx-auto flex justify-between items-center">
          {/* Menu Button for Mobile */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button onClick={toggleMenu}>
              <img src="/Menu.png" alt="Menu" className="w-7 h-10 ml-2" />
            </button>
          </div>


          {/* Profile Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <img src="/Person.png" alt="Profile" className="w-6 h-6 mr-2" />
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/home" className="flex items-center">
              <img src="/Home.png" alt="Home" className="w-4 h-4 mr-2" />
              Home
            </Link>
            <Link to="/news-media" className="flex items-center">
              <img src="/news-report.png" alt="News" className="w-4 h-4 mr-2" />
              News & Media
            </Link>
            <Link to="/products-services" className="flex items-center">
              <img src="/service.png" alt="Services" className="w-4 h-4 mr-2" />
              Products & Services
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-100 z-50 overflow-y-auto box-border transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-center bg-[#E8E8E8] text-lg font-semibold text-black mt-0 py-3 mb-6">
            Menu
          </h2>
          <ul className="space-y-4 text-gray-700 text-xs">
            <li className="border-b border-gray-200 py-2 pl-5">
              <Link to="/home" className="hover:text-[#8CBC67]">
                Home
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 pl-5">
              <Link to="/news-media" className="hover:text-[#8CBC67]">
                News & Media
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 pl-5">
              <Link to="/products-services" className="hover:text-[#8CBC67]">
                Products & Services
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 pl-5">
              <Link to="/about-us" className="hover:text-[#8CBC67]">
                About Us
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 pl-5">
              <Link to="/contact-us" className="hover:text-[#8CBC67]">
                Contact Us
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 pl-5">
              <Link to="/delivery" className="hover:text-[#8CBC67]">
                Delivery
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 pl-5">
              <Link to="/store-locations" className="hover:text-[#8CBC67]">
                Store Locations
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 flex items-center pl-5">
              <img src="/Heart.png" alt="Wishlist" className="w-4 h-4 mr-2" />
              <Link to="/wishlist" className="hover:text-[#8CBC67]">
                Wishlist
              </Link>
            </li>
            <li className="border-b border-gray-200 py-2 flex items-center pl-5">
              <img src="/Person.png" alt="Login" className="w-4 h-4 mr-2" />
              <Link to="/my-account" className="hover:text-[#8CBC67]">
                Login / Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default BottomBar;
