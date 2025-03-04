import './Project.css';

const Projects = () => {
    const projects = [
      {
        title: "Production Planning",
        description: "A full-stack e-commerce platform built with .NET Core and React.",
        technologies: [".NET Core", "React", "SQL Server"],
        demo: "https://example.com",
        github: "https://github.com/jathinyattapu",
      },
      {
        title: "PG Management",
        description: "A MERN stack application for managing Paying Guests Management Software.",
        technologies: ["MongoDB", "Express", "React", "Node.js"],
        demo: "https://example.com",
        github: "https://github.com/jathinyattapu",
      },
    ];
  
    return (
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Projects;