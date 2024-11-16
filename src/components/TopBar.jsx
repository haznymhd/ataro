import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar bg-white border-b border-[rgba(0,0,0,0.11)] transition-colors duration-200 h-[40px] hidden lg:flex items-center">
      <div className="container mx-auto flex justify-between items-center text-xs text-gray-600">
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/about-us" className="hover:text-gray-800 transition-colors duration-200">
              About Us
            </Link>
          </li>
          <span className="mx-2 text-gray-400">|</span>
          <li>
            <Link to="/contact-us" className="hover:text-gray-800 transition-colors duration-200">
              Contact Us
            </Link>
          </li>
          <span className="mx-2 text-gray-400">|</span>
          <li>
            <Link to="/delivery" className="hover:text-gray-800 transition-colors duration-200">
              Delivery
            </Link>
          </li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li className="flex items-center">
            <Link to="/store-locations" className="hover:text-gray-800 transition-colors duration-200 flex items-center">
              <img src="/Location.png" alt="Store Locations" className="w-4 h-4 mr-1" />
              Store Locations
            </Link>
          </li>
          <span className="mx-2 text-gray-400">|</span>
          <li className="flex items-center">
            <a href="tel:+94762919090" className="hover:text-gray-800 transition-colors duration-200 flex items-center">
              <img src="/Call.png" alt="Phone" className="w-4 h-4 mr-1" />
              (+94) 71-777-7668
            </a>
          </li>
          <span className="mx-2 text-gray-400">|</span>
          <li>
            <Link to="/wishlist" className="hover:text-gray-800 transition-colors duration-200 flex items-center">
              <img src="/Heart.png" alt="Wishlist" className="w-4 h-4 mr-1" />
              Wishlist
            </Link>
          </li>
          <span className="mx-2 text-gray-400">|</span>
          <li>
            <Link to="/my-account" className="hover:text-gray-800 transition-colors duration-200 flex items-center">
              <img src="/Person.png" alt="Login" className="w-4 h-4 mr-1" />
              Login / Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
