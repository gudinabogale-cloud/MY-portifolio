import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with 2+ years of experience in building web applications.
              I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites work.
              Over the years, I've honed my skills in front-end and back-end development,
              working with various technologies and frameworks.
            </p>
            <p>
              When I'm not coding, you can find me reading tech blogs, contributing to open-source projects,
              or exploring new technologies. I'm always eager to learn and take on new challenges.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <p>Your Photo Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
