import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faFacebook, faXTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon={faComment} className="input-icon" />
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} /> Send Message
        </button>
      </form> */}
      <br></br>
      <h3 align="center">Wanna Follow me?</h3>
      <hr/>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/jathin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> 
        </a>
        <a
          href="https://github.com/yattapujathin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
        <a
          href="https://www.facebook.com/jathin.y/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} /> 
        </a>
        <a
          href="https://twitter.com/jathinyattapu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} /> 
        </a>
        <a
          href="https://www.instagram.com/jathin_kumar_reddy_yattapu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} /> 
        </a>
        <a
          href="http://wa.me/917396144314"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> 
        </a>
      </div>
    </section>
  );
};

export default Contact;