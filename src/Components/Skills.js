import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faMicrosoft, faHtml5, faCss, faJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";

const skillsData = [
  { name: ".NET Core", level: 90, icon: faMicrosoft },
  { name: "React.js", level: 85, icon: faReact },
  { name: "Node.js", level: 80, icon: faNodeJs },
  { name: "GitHub", level: 75, icon: faGithub},
  { name: "MongoDB", level: 75, icon: faDatabase },
  { name: "MS SQL", level: 70, icon: faServer },
  { name: "HTML", level: 80, icon: faHtml5},
  { name: "CSS", level: 80, icon: faCss},
  { name: "JavaScript", level: 80, icon: faJs},
];

const Skills = () => {
  const [animated1, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 500);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="skills-icon" /> Skills
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" /> {skill.name}
            </span>
            <div className="progress_bar">
              <div 
                className="progress1" 
                style={{ width: animated1 ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;