import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const educationData = [
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "Annamacharya Institute of Technology & Sciences, Rajampet",
    year: "2015 - 2019",
    description: "Focused on design, analyze, and develop mechanical systems and components, utilizing principles of mechanics, thermodynamics, and materials science to create efficient and functional solutions across various industries, including product design, manufacturing, and automation"
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Bhavana Junior College",
    year: "2013 - 2015",
    description: "Specializing in Maths, Physics and Chemistry."
  }
  ,
  {
    degree: "Board Of Secondary Education",
    institution: "Gautam High School",
    year: "2005 - 2013",
    description: "Specializing in All Subjects of curriculum."
  }
];

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h2 className="education-title">
        <FontAwesomeIcon icon={faGraduationCap} className="education-icon" /> Education History
      </h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <span className="education-year">{edu.year}</span>
            <p className="education-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
