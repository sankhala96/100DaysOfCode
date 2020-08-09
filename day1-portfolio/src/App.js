import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import "./App.css";

import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Interest from './components/Interest/Interest';

const Navbar = (props) => {
  const [show, toggleMenu] = useState(false);
  return (
      <div className="header-navbar">
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark ${props.scroll ? 'scrolling-navbar' : ''}`}>
        <div className="container">
        <a className="navbar-brand" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={()=>toggleMenu(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarSupportedContent">
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
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 600
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })
  return (
    <div>
      <Navbar scroll={scroll} />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Interest">
        <Interest />
      </Element>
      <Element name="Contact">
        <Footer />
      </Element>
    </div>
  )
}

export default App;
