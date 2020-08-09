import React from "react";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Home.css';

function Home() {
    return (
      <section className="home">
        <div className="jumbotron home-banner" style={{ background: `url(${process.env.PUBLIC_URL}/banner-img.JPG` }}>
          <div className="home-banner-content">
          <h3>Hi! I am</h3>
          <h1>
            <Typewriter
              options={{
                strings: ["Yash Sankhala", "FullStack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <ul className="home-banner-social-list">
            <li><a href="https://www.linkedin.com/in/yash-sankhala-5a26b113a/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/sankhala96"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.instagram.com/sankhala__/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;