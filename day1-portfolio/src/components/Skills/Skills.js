import React, { useEffect, useState } from "react";
import "./Skills.css";

const hue="183";
const saturation="95";
const SKILLS = [
  {type: "JavaScript", level: 80},
  {type: "React JS", level: 80},
  {type: "Node JS", level: 70},
  {type: "HTML", level: 60},
  {type: "CSS", level: 60},
  {type: "Mongodb", level: 50},
];

function Skills() {
  const [collapsed, changeCollapsed] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      changeCollapsed(false);
    }, 500);
  })

  return (
    <div className={`container ${collapsed ? 'collapsed' : ''}`}>
      <ul className="skills">
          {SKILLS.map((skill, index) => 
            <li
              key={skill.type}
              style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
            >
              <p>{skill.type}<span>{skill.level}</span></p>
            </li>
          )}
        </ul>
    </div>
  )
}

export default Skills;