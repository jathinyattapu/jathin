import './About.css';

const About = () => {
    return (
      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocKid7YWKavFZd6uoyY3IOoXXX3Si3EQX_lGot7_eNS_XGHz0VV4vg=s192-c-rg-br100" alt="Jathin" className="profile-pic" />
          <p>
            Hi, I'm Jathin, a full-stack developer with expertise in .NET and MERN stack.
            I love building scalable web applications and solving complex problems.
          </p>
        </div>
      </section>
    );
  };
export default About;