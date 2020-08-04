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
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faGithub} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;