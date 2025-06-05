  import React from "react";
  import "./Experience.css";
  import sse from './../images/sse.png';
  import w3soft from './../images/w3soft.png';
  import msnational from './../images/msnational.png';

  const Experience = () => {
    const experienceData = [
      {
        title: "Associate Software Engineer",
        company: "W3Softech India Private Limited",
        employmentType: "Full-time",
        location: "Hyderabad, Telangana, India · Hybrid",
        duration: "Jul 2023 to Present · 1 yr 11 mos",
        description: `💻 .NET Full Stack Developer | 2 Years Experience | Web Development & Testing Enthusiast <br/>I'm a passionate and results-driven Full Stack Developer with 2+ years of experience building scalable web applications using ASP.NET Core, C#, Entity Framework, and SQL Server.<br/>I have strong front-end development skills with ReactJS, JavaScript, Bootstrap, and a keen eye for responsive UI/UX.<br/><br/>In addition to development, I have hands-on experience in software testing, including unit testing, integration testing, and ensuring high-quality deliverables through efficient debugging and validation.<br/>I enjoy writing clean, maintainable code and collaborating in Agile teams to bring projects from concept to deployment.<br/><br/>🔧 Tech Stack:<br/>.NET Core | C# | SQL Server | ReactJS | JavaScript | HTML5 | CSS3 | Bootstrap | Git | Postman | Unit Testing<br/><br/>📫 Let's connect to build reliable and modern software solutions!`,
        logo:sse
      },
      {
        title: "Engineer",
        company: "Shirdi Sai Electricals Ltd",
        employmentType: "Full-time",
        location: "Cuddapah, Andhra Pradesh, India · On-site",
        duration: "Dec 2019 to Jul 2023 · 3 yrs 6 mos",
        description: `🔧 Production Engineer | 3.6 Years Experience | SAP PP | Welding | Team Leadership | Quality & Reporting<br/><br/>Experienced Production Engineer with 3.6 years of hands-on experience in production planning, SAP PP, and leading the DTR fabrication line.<br/>Skilled in supervising welding operations (MIG & ARC), training manpower, and ensuring compliance with safety protocols through daily meets and briefings.<br/><br/>Proficient in submitting production reports, quality reports (especially related to welding defects), tracking sheet inwards, and managing welding consumables.<br/>Adept at optimizing fabrication workflows, maintaining high-quality standards, and ensuring timely execution of production plans.<br/><br/>🛠️ Core Skills:<br/>Production Planning | SAP PP | MIG & ARC Welding | Welding Defect Analysis | Fabrication | Quality Reporting | Sheet & Consumables Tracking | Manpower Training | Safety Compliance | Team Leadership | DTR Line Operations<br/><br/>📈 Passionate about driving efficiency and quality on the shop floor. Let’s connect!`,
        logo:w3soft
      },
      {
        title: "Executive",
        company: "MS National Engineering",
        employmentType: "Full-time",
        location: "Cuddapah, Andhra Pradesh, India · On-site",
        duration: "Mar 2019 to Dec 2019 · 9 mos",
        description: `👷‍♂️ Executive – Manpower Recruitment & Training | Fabrication Industry | MS National Engineering<br/><br/>Worked as an Executive at MS National Engineering, where I led the complete recruitment and onboarding process for over 1000+ skilled and unskilled workers including welders, fitters, and machine operators.<br/>I partnered closely with department heads to align manpower needs with production timelines, while ensuring safety, efficiency, and compliance across operations.<br/><br/>Key contributions included conducting technical screenings and trade tests, coordinating safety-focused onboarding, and developing structured training modules.<br/>I also managed vendor partnerships for certification programs and upskilling, helping to reduce attrition and improve workforce performance.<br/><br/>📌 Key Skills & Contributions:<br/>Recruitment (Skilled/Unskilled) | Technical Screening | Trade Tests | Onboarding Programs | Safety Training | Fabrication Best Practices | Workforce Planning | Vendor Coordination | Labor Law Compliance | Performance Tracking<br/><br/>🏆 Achievements:<br/>✔️ Reduced hiring turnaround time by 30%<br/>✔️ Designed training modules boosting worker efficiency and safety<br/>✔️ Onboarded 1000+ personnel with zero production downtime`,
        logo:msnational
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
                  <p className="company">{exp.company} · {exp.employmentType}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="location">{exp.location}</p>
                </div>
              </div>
              <div className="experience-details">
                <p dangerouslySetInnerHTML={{ __html: exp.description }}></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Experience;
