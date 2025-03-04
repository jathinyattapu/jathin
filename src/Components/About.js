import './About.css';

const About = () => {
    return (
      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQEt-W-ilwYryQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729592534742?e=1746662400&v=beta&t=0YjIpqAor5-G9j205J1MO6ECtkjydnIn9LnjjFQwyxc" alt="Jathin" className="profile-pic" />
          <p>
            Hi, I'm Jathin, a full-stack developer with expertise in .NET and MERN stack.
            I love building scalable web applications and solving complex problems.
          </p>
        </div>
      </section>
    );
  };
export default About;