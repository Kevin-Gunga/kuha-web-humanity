import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase"; // Import Firebase functions

import "../style.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "subscribers"), { email });
      setMessage("Subscription successful!");
      setEmail(""); // Clear input after success
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Failed to subscribe. Try again.");
    }
  };

  return (
    <div id="contact">
      <h2 className="flex justify-center  uppercase pt-4 text-slate-500 font-medium md:text-lg lg:text-xl">
        get in touch
      </h2>
      <h4 className="flex justify-center text-gray-300 font-semibold">Contact Us</h4>
      <div className="bg-customgray rounded-lg flex flex-col md:flex-row justify-center md:space-x-20 space-y-6 md:space-y-0 p-6 mt-10 mb-10 mx-4 md:mx-10">
        {/* Contact Information */}
        <div className="flex flex-col  md:items-start">
          <h2 className="text-xl font-semibold mb-3 block   text-gray-300">
            Let's discuss
          </h2>
          <ul>
            <li className="mb-4">
              <div className="flex items-center gap-2">
                <p className="text-customGray bg-customLightGray rounded-full w-8 h-8 flex items-center justify-center">
                  <i className="fa-solid fa-phone"></i>
                </p>
                <a href="tel:+254707168253" className="text-gray-300">
                  +254707168253
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center gap-2">
                <p className="text-customGray bg-customLightGray rounded-full w-8 h-8 flex items-center justify-center">
                  <i className="fa-solid fa-envelope"></i>
                </p>
                <a
                  href="mailto:kisiiheartassociation@gmail.com"
                  className="text-gray-300"
                >
                  kisiiheartassociation@gmail.com
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center gap-2">
                <p className="text-customGray bg-customLightGray rounded-full w-8 h-8 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot"></i>
                </p>
                <span className="text-gray-300">Kisii, Kenya</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center md:items-start">
          <div className="space-y-5 w-full max-w-sm">
            <div className="sm:col-span-3">
              <h2 className="text-xl font-semibold mb-3 block   text-gray-300">
                Subscribe
              </h2>
              {message && <p className="text-green-400">{message}</p>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b-2 border-white bg-transparent text-white py-1 focus:outline-none placeholder-white"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 text-lg font-semibold rounded-md hover:bg-blue-400 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
