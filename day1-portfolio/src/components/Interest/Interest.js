import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPizzaSlice,
  faCode,
  faBookReader,
} from "@fortawesome/free-solid-svg-icons";
import "./Interest.css";

const cardData = [
  {
    id: 1,
    name: "Travelling",
    icon: faGlobe,
    text:
      "Travelling is something that gave me escape from the world and allow me go into a differnet zone. Travelling allows me to explore different cultures, meet new people, visit new places and above all this, it gives me some quality time with my loved ones! Advice to people 'Travel More'",
  },
  {
    id: 2,
    name: "Cooking",
    icon: faPizzaSlice,
    text:
      "Cooking has always been a good hobby for people and part of relaxing and fun entertainment for some category of people. There is always something new to be learnt about cooking and its all about creativity and making a better taste of bland materials.",
  },
  {
    id: 3,
    name: "Coding",
    icon: faCode,
    text:
      "Obviously, I love it. That's why I opted for this profession😉. I was introduced to programming in the early days of my college. Since then I've been switching and hopping between different frameworks and languages be it Android, C#, Java and what not; but now It's all around Javascript.",
  },
  {
    id: 4,
    name: "Reading",
    icon: faBookReader,
    text: "If I am allowed to give one advice to everyone it will be 'Read More'. Its hard for me explain but reading has chnaged my life in a very differnt way. Reading opens a diiferent world for me. i can look into the world with eyes of different people and learn something different everytime.",
  },
];

function Card(props) {
  const data = props.data;
  return (
    <div className="card-wrap">
      <div className="card-icon">
        <FontAwesomeIcon icon={data.icon} />
      </div>
      <div className="card-contenet">
        <h3>{data.name}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
}

function Interest() {
  const cards = cardData.map((data) => {
    return <Card key={data.id} data={data} />;
  });
  return (
    <section className="Interest">
      <div className="jumbotron interest-container">
        <div className="interest-header-title">
          <h2>
            MY
            <strong> INTEREST</strong>
          </h2>
        </div>
        <div className="interest-header-text">
          <p>
            A hobby is, of course, an abomination, as are all consuming
            interests and passions that do not lead directly to large, personal
            gain.
          </p>
        </div>
        <div className="card-wrap-box">{cards}</div>
      </div>
    </section>
  );
}

export default Interest;
