import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "../App.css";
import logo from "../images/kuha-logo.jpeg";
import constitution from "../files/kuha constitution.pdf";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-customGray">
      <nav className="w-full">
        <div className="w-full">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-10 w-6 ${
                    isMenuOpen ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`block h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="title-motto flex items-center bg-white">
                <img
                  className="logo h-40 p-4 bg-white"
                  src={logo}
                  alt="kuha-logo"
                />
                <div className="title-motto px-5">
                  <h2 className="title uppercase text-customGray font-bold">
                    Kisii University Heart Association
                  </h2>
                  <p className="motto text-customGray">
                    All for one, one for all
                  </p>
                </div>
              </div>
              <div className="navbar hidden m-auto p-10 sm:ml-0 sm:block max-w-full">
                <div className="navbar-div flex  my-auto space-x-4 uppercase">
                  <Link
                    to="/"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                  <a
                    href="#about-kuha"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#membership"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Membership
                  </a>
                  <a
                    href="#team"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </a>
                  <a
                    href="#contact"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </a>
                  <a
                    href="#activities"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Activities
                  </a>
                  <Link
                    to="/donate"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Donate
                  </Link>
                  <a
                    href="https://flickr.com/photos/198508982@N04/"
                    rel="noopener noreferrer"
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Gallery
                  </a>
                  <a
                    href={constitution}
                    className="navbar-list rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Constitution
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-customGray p-4 `}
        >
          <Link to="/" className="block text-gray-300 hover:text-white py-2">
            Home
          </Link>
          <a
            href="#about-kuha"
            className="block text-gray-300 hover:text-white py-2"
          >
            About
          </a>
          <a
            href="#membership"
            className="block text-gray-300 hover:text-white py-2"
          >
            Membership
          </a>
          <a href="#team" className="block text-gray-300 hover:text-white py-2">
            Team
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-white py-2"
          >
            Contact
          </a>
          <a
            href="#activities"
            className="block text-gray-300 hover:text-white py-2"
          >
            Activities
          </a>
          <Link
            to="/donate"
            className="block text-gray-300 hover:text-white py-2"
          >
            Donate
          </Link>
          <a
            href="https://flickr.com/photos/198508982@N04/"
            rel="noopener noreferrer"
            className="block text-gray-300 hover:text-white py-2"
          >
            Gallery
          </a>
          <a
            href={constitution}
            className="block text-gray-300 hover:text-white py-2"
          >
            Constitution
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
