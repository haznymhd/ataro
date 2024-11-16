import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start mb-8">
          {/* Logo */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0 flex justify-center sm:justify-start">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </div>

          {/* Navigation Sections */}
          <div className="w-full sm:w-3/4 flex flex-wrap justify-around">
            {/* Style-X Section */}
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2 border-b border-gray-500 pb-1">
                EROKX
              </h4>
              <ul className="space-y-1 text-sm">
                <li>Home</li>
                <li>About Us</li>
                <li>Events</li>
              </ul>
            </div>

            {/* Clothing Section */}
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2 border-b border-gray-500 pb-1">
                CLOTHING
              </h4>
              <ul className="space-y-1 text-sm">
                <li>New Arrivals</li>
                <li>Dresses</li>
                <li>Accessories</li>
                <li>Event</li>
                <li>Tee</li>
                <li>Mens</li>
              </ul>
            </div>

            {/* Collections Section */}
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2 border-b border-gray-500 pb-1">
                COLLECTIONS
              </h4>
              <ul className="space-y-1 text-sm">
                <li>Black & White</li>
                <li>Summer Side</li>
                <li>Vintage</li>
                <li>All Night</li>
                <li>Adventurer</li>
                <li>Winter</li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2 border-b border-gray-500 pb-1">
                SOCIAL MEDIA
              </h4>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>

                {/* Twitter */}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>

                {/* Google+ */}
                <a
                  href="https://plus.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <i className="fab fa-google text-xl"></i>
                </a>

                {/* Pinterest */}
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-400">
            Copyright © 2024 by EROKX. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">Tel: +94 71 777 7668  |  +94 72 034 2444</p>
          <div className="text-[250px]">
                <h1 className="text-[65px] md:text-[155px] lg:text-[200px] font-bold">E R O K X</h1>
              </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
