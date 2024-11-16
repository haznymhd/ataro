import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const handleError = (e) => {
    console.error("Failed to load logo:", e.target.src);
    e.target.classList.add("hidden"); // Hide the image if it fails to load
  };

  const handleLoad = () => {
    console.log("Logo loaded successfully.");
  };

  return (
    <Link to="/Home" className="block">
      <img
        src="/newlogo.png" // Path to the logo in the public folder
        alt="Logo"
        className="w[80px] w-[120px]" // Tailwind classes for width
        onError={handleError}
        onLoad={handleLoad}
      />
    </Link>
  );
};

export default Logo;
