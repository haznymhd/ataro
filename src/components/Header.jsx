import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import CartIcon from "./CartIcon";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* TopBar Section */}
      <TopBar />

      {/* General Bar */}
      <div className="general-bar bg-white py-4 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex items-center relative">
          {/* Menu Button for Mobile */}
          <div className="lg:hidden">
            <button className="mr-4" onClick={toggleMenu}>
              <img src="/Menu.png" alt="Menu" className="w-7 h-7" />
            </button>
          </div>

          {/* Logo Section */}
          <div
            className={`absolute lg:static left-1/2 transform lg:transform-none -translate-x-1/2 ${
              isMenuOpen ? "top-1/2 -translate-y-1/2 lg:top-0" : "top-0"
            } transition-all duration-300`}
          >
            <Link to="/Home">
              <Logo />
            </Link>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden lg:flex space-x-6 items-center text-sm font-light ml-auto">
            <Link to="/home" className="flex items-center">
              Home
            </Link>
            <Link to="/news-media" className="flex items-center">
              New Arrivals
            </Link>
            <Link to="/products-services" className="flex items-center">
              Collections
            </Link>
            <CartIcon />
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={toggleMenu}
        >
          <div
            className="fixed top-0 left-0 w-64 h-full bg-gray-100 z-50 overflow-y-auto"
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
      )}
    </header>
  );
};

export default Header;
