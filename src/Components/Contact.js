import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faEnvelope,
//   faComment,
//   faPaperPlane,
// } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faFacebook, faXTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import "./Contact.css";

const Contact = () => {
  const socialLinks = [
    { href: "https://linkedin.com/in/jathin", icon: faLinkedin },
    { href: "https://github.com/yattapujathin", icon: faGithub },
    { href: "https://www.facebook.com/jathin.y/", icon: faFacebook },
    { href: "https://twitter.com/jathinyattapu", icon: faXTwitter },
    { href: "https://www.instagram.com/jathin_kumar_reddy_yattapu/", icon: faInstagram },
    { href: "http://wa.me/917396144314", icon: faWhatsapp },
  ];

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
      {socialLinks.map((link, index) => (
        <a id="social-links" key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
    </section>
  );
};

export default Contact;