import React from "react";
import "./About.css";
import CareerContainer from '../CareerContainer/CareerContainer';

function About() {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-header">
          <div className="about-header-title">
            <h2>
              ABOUT
              <strong>ME</strong>
            </h2>
          </div>
        </div>
        <div className="about-description">
          <div className="about-picture">
            <img
              alt="profile-img"
              src={process.env.PUBLIC_URL + "/profile-img.jpg"}
            />
          </div>
          <div className="about-text">
            <p>
              I am currently working as a Software Engineer at Impetus
              Technologies based in Indore. I work as full-stack developer, working on
              technologies like React JS, Node JS. I pursued my Bachelors Degree
              of Engineering with specialisation in Computer Science.
            </p>
            <p>
              On this site you’ll find out a lot about me, including my skills,
              achievements, interests and hobbies. Hopefully it’ll provide you
              with an insight into my strengths and capabilities, beyond that
              which you would find on my Facebook, LinkedIn, Stackoverflow,
              GitHub, Instagram etc. I grew up in Mandsaur(M.P.), and currently located in Indore(M.P.)
            </p>
            <p>
              There’s not too much use in going into more depth than this…
              everything is covered in lots of depth elsewhere! Take a quick
              look around.
            </p>
          </div>
        </div>
        <div className="about-career">
          <CareerContainer />
        </div>
      </div>
    </section>
  );
}

export default About;
