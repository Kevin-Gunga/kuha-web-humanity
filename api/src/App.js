import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Navbar from "./components/navbar";
import Media from "./components/media";
import Header from "./components/header";
import About from "./components/about";
import Executives from "./components/executives";
import Contact from "./components/contact";
import Activities from "./components/activities";
import Membership from "./components/membership";
import Donate from "./components/donate-register"; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="bg-customLightGray">
            <Header />
            <About />
            <Executives />
            <Membership />
            <Activities />
            <footer className="bg-customGray mt-10">
              <Contact />
              <Media />
              <p className="m-0 pb-2 text-center capitalize text-base text-gray-300">
                &copy;2025 Kisii University Heart Association. All rights reserved.
              </p>
            </footer>
          </div>
        } />
        <Route path="/donate" element={<Donate />} /> 
      </Routes>
    </div>
  );
}

export default App;



