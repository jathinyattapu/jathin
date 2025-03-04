import './Skills.css';

const Skills = () => {
    const skills = [
      { name: ".NET Core", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
    ];
  
    return (
      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;