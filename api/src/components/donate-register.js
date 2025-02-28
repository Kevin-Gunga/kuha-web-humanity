import "../style.css";
import Navbar from "./navbar";
import Contact from "./contact";
import Media from "./media";
import Error from "../images/error.webp";

function Donate() {
  return (
    <div className="bg-customLightGray min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-4 py-10 text-center">
        <img
          src={Error}
          className="mx-auto max-w-full h-auto"
          alt="Error Page"
        />

        {/* Donation and Registration Buttons */}
        {/* <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/register.html">
            <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
              Register
            </button>
          </a>
          <a href="/donate.html">
            <button className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition">
              Donate
            </button>
          </a>
        </div> */}
      </div>

      {/* Footer */}
      <footer className="bg-customGray mt-10 p-6 text-center text-gray-300">
        <Contact />
        <Media />
        <p className="mt-4 text-sm">&copy;2025 Kisii University Heart Association. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Donate;
