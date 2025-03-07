import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faHtml5, faCss, faJs, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const icons = [faReact, faNodeJs, faHtml5, faCss, faJs, faDatabase, faCode, faMicrosoft];

const getRandomPosition = () => ({
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`,
  animationDuration: `${Math.random() * 5 + 3}s`
});

const Home = () => {
  const [bubbles, setBubbles] = useState(
    icons.map((icon, index) => ({ id: index, icon, ...getRandomPosition() }))
  );
  const [wave, setWave] = useState(null);
  const [isShaking, setIsShaking] = useState(false);

  const popBubble = (id, event) => {
    const { clientX, clientY } = event;
    setWave({ top: clientY, left: clientX });
    setIsShaking(true);

    setBubbles((prevBubbles) => [
      ...prevBubbles.filter((b) => b.id !== id),
      { id: Math.random(), icon: icons[Math.floor(Math.random() * icons.length)], ...getRandomPosition() }
    ]);

    setTimeout(() => {
      setWave(null);
      setIsShaking(false);
    }, 1500);
  };

  return (
    <section id="home" className="hero-section">
      <div className={`hero-content ${isShaking ? "shake" : ""}`}>
        <h1>Hey! <br /> <span className="wave">👋</span></h1>
        <h1>I'm Jathin</h1>
        <p>Full-Stack Developer | .NET & MERN Expert</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>

      <div className="floating-icons">
        {bubbles.map(({ id, icon, top, left, animationDuration }) => (
          <FontAwesomeIcon
            key={id}
            icon={icon}
            className="bubble"
            style={{ top, left, animationDuration }}
            onClick={(e) => popBubble(id, e)}
          />
        ))}
      </div>

      {wave && <div className="wave-effect" style={{ top: wave.top, left: wave.left }} />}
    </section>
  );
};

export default Home;
