import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'placeholder',
      github: 'https://github.com/gudinabogale-cloud/E-Commerce',
     
    },
    {
      id: 2,
      title: 'Internship  Management System',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'Node.js', 'Express','mongoDB'],
      image: 'placeholder',
      github: 'https://github.com/gudinabogale-cloud/student-internship-management-system',
    },
    {
      id: 3,
      title: 'SEE Our Country',
      description: 'Real-time weather application with location-based forecasts',
      technologies: ['React', ],
      image: 'placeholder',
      github: 'https://github.com/gudinabogale-cloud/SEE-Our-country-with-Gudina',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'AI Based Attendance System',
      description: 'Dashboard for managing social media analytics and content',
      technologies: ['React', 'python', ' Html', ' javascript',],
      image: 'placeholder',
      github: 'https://github.com/gudinabogale-cloud/AI-Attendance-System',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'Student Internship Management System',
      description: 'Full-featured internship management based on python',     technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
      image: 'placeholder',
      github: 'https://github.com/gudinabogale-cloud/student-internship-management-system-using-python-in-template',
      
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                  <FaGithub /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
