import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faProjectDiagram,
  faEnvelope,
  faGraduationCap,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const menuItems = [
  { id: "home", icon: faHome, text: "Home" },
  { id: "about", icon: faUser, text: "About" },
  { id: "experience", icon: faBriefcase, text: "Experience" },
  { id: "education", icon: faGraduationCap, text: "Education" },
  { id: "skills", icon: faBook, text: "Skills" },
  { id: "projects", icon: faProjectDiagram, text: "Projects" },
  { id: "contact", icon: faEnvelope, text: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`hidden-menu ${isScrolled ? "visible" : ""}`}>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href={`#${item.id}`}>
              <FontAwesomeIcon icon={item.icon} />
            </a>
            {hoveredItem === item.id && (
              <span className="tooltip">{item.text}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Header;
