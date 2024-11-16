import React from "react";
import Lottie from "react-lottie";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: "/Animation - 1731771313486.json", // Path to the JSON file in the public folder
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen bg-black p-4 flex flex-col items-center justify-center text-center text-white">

      {/* Main Heading */}
      <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold">COMING SOON</h1>

      {/* Subheading */}
      <p className="mb-4 text-lg md:text-xl text-white">
        We’re currently working on creating something fantastic. <br />
        We’ll be here soon.
      </p>
      {/* Lottie Animation */}
      <div className="w-64 md:w-96 mb-[-40px]">
        <Lottie options={defaultOptions} />
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-white">
        You can connect with us for more details.
      </p>

      {/* Social Links */}
      <div className="mt-12 flex items-center justify-center space-x-8">
        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <i className="fab fa-facebook-f text-4xl"></i>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <i className="fab fa-instagram text-4xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
