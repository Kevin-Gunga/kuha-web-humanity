import "./App.css";
import Navbar from "./components/navbar";
import Media from "./components/media";
import Header from "./components/header";
import About from "./components/about";
import Executives from "./components/executives";
import Contact from "./components/contact";
import Activities from "./components/activities";
import Membership from "./components/membership";

function App() {
  return (
    <div className="bg-customLightGray">
      <Navbar />
      <Header />
      <About />
      <Executives />
      <Membership />
      <Activities />
      <footer className="bg-customGray mt-10">
        <Contact />
        <Media />
        <p className="m-0 pb-2 text-center capitalize text-base text-gray-300">
          &copy;2024 kisii university heart association.All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
