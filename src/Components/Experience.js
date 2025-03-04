import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      title: "Full-Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      description:
        "Developed and maintained web applications using .NET and MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEAOMY1IT0VIg/company-logo_200_200/company-logo_200_200/0/1630648700947/perfex_technologies_logo?e=1749081600&v=beta&t=LhrdhkJHxHoGqWpqNNIPxC7KQp41URvi11bvGOE8EaQ", 
    },
    {
      title: "Software Engineer",
      company: "CodeCrafters",
      duration: "Jun 2019 - Dec 2021",
      description:
        "Built scalable backend systems using .NET Core and integrated front-end applications with React.js. Optimized database queries and improved application performance by 30%.",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHs471rMnnh1w/company-logo_200_200/company-logo_200_200/0/1630647941955/sseltd_logo?e=1749081600&v=beta&t=RnWe7NGuzobeeXUhOHuiNqkskAgBCwK267IiCiuKnBY", 
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <div>
                <h2>{exp.title}</h2>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
              </div>
            </div>
            <div className="experience-details">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;