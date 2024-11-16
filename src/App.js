import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the Footer component
import Home from "./components/Home";

// Placeholder components for routes
const NewsMedia = () => <div>Explore News & Media</div>;
const ProductsServices = () => <div>Discover Products & Services</div>;

function App() {
  return (
    <Router>
      {/* Header */}
      <Header />

      {/* Routes */}
      <div className="flex-grow">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
