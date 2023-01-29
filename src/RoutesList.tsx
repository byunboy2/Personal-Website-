import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Personal from "./Personal";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const RoutesList: React.FC = () => {
  return (
    <div className="RoutesList col-md-8 offset-md-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<p>Hmmm. I can't seem to find what you want.</p>} />
      </Routes>
    </div>
  );
};

export default RoutesList;
