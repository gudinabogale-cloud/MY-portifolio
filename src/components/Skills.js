import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'CSS3', 'HTML5', ] },
    { category: 'Backend', items: ['Node.js', 'Express', 'java','Python', 'MongoDB', 'SQL'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'kiro', 'Netlify'] },
    { category: 'Other', items: ['REST APIs', 'UI/UX Design'] },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
