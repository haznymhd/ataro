import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center relative">
      {/* Header with Logo */}
      <header className="absolute top-4 left-4">
        <img src="valkoware1.png" alt="ValkoWare Logo" className="w-40 ml-5 mt-5" />
      </header>
      
      {/* Left-side Rotated Intro Logo */}
      <div className="absolute right-[-40px] top-1/2 transform -translate-y-[300px] -rotate-90">
        <img 
          src="intro_logo.png" 
          alt="Introducing Logo" 
          className="w-40" 
        />
      </div>
      
      {/* Centered Background Logo with Opacity */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="valkoware.png" 
          alt="ValkoWare Logo" 
          className="w-[200%] opacity-[35%] md:mb-[-300px] mb-[-200px] " 
        />
      </div>
      
      {/* Centered Image Responsive */}
      <div className="flex flex-col items-center justify-center z-10 w-full">
        <img 
          src="Mobile Smartphone Mockup 03.png" 
          alt="Mobile smartphone mockup" 
          className="w-[80%] h-auto max-w-none md:w-[70%] lg:w-[30%]" 
        />
        
        {/* Contact Information */}
{/*         <p className="mt-4 md:mb-[-80px] text-gray-700 text-sm md:text-base font-medium text-center">
          Point of Sale (POS) Systems | Software Development | SEO Optimization | Cloud Deployment | UI/UX Design
        </p> */}
      </div>

      {/* Footer with Services */}
      <footer className="absolute md:bottom-4 bottom-[100px] text-center text-gray-600 text-sm ">
      Point of Sale (POS) Systems | Software Development | SEO Optimization | Cloud Deployment | UI/UX Design <br /><br />info@valkoware.com | +94 71 777 7668 
      </footer>
    </div>
  );
};

export default Home;
