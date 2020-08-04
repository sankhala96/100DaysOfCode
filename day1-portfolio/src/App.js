import React from "react";
import { Link } from "react-scroll";
import "./App.css";

import Home from './components/Home/Home'

const navbar = () => {
  return (
      <div className="header-navbar">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="Home"
                to="Home"
                spy={true}
                hashSpy={true}
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
                hashSpy={true}
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
                hashSpy={true}
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
                hashSpy={true}
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
      <Home />
    </div>
  )
}

export default App;
