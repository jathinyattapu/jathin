import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hidden Menu with Icons */}
      <div className={`hidden-menu ${isScrolled ? "visible" : ""}`}>
        <nav>
          <a href="#home">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="#about">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="#experience">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
          <a href="#projects">
            <FontAwesomeIcon icon={faProjectDiagram} />
          </a>
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;