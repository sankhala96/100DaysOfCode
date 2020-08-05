import React from "react";
import { Link, Element } from "react-scroll";
import "./App.css";

import Home from './components/Home/Home';
import About from './components/About/About';

const navbar = () => {
  return (
      <div className="header-navbar">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="Home"
                to="Home"
                spy={true}
                duration={500}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="About"
                to="About"
                spy={true}
                duration={500}
                smooth={true}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="Interest"
                to="Interest"
                spy={true}
                duration={500}
                smooth={true}
              >
                Interest
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="Contact"
                to="Contact"
                spy={true}
                spy={true}
                duration={500}
                smooth={true}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      </div>

  );
};

function App() {
  return (
    <div>
      {navbar()}
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
    </div>
  )
}

export default App;
