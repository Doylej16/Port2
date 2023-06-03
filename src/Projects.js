import React from 'react';
import Navbar from './Navbar';

const Projects = () => {
  const projects = [
    {
      title: 'Capstone Project',
      description: 'My capstone project is a web application that...',
      deploymentLink: 'https://your-capstone-app.com', // Replace with your deployment link
    },
    {
      title: 'Project 1',
      description: 'A robust backend application for a new mobile telecom company...',
      githubLink: 'https://github.com/Doylej16/backendProject',
      screenshots: [
        '/be1.png',
        '/be2.png',
        '/be3.png',
        '/be4.png',
        '/be5.png',
      ],
    },
    {
      title: 'Project 2',
      description: 'The CPR Instructor Application is a web platform built with React, Redux...',
      githubLink: 'https://github.com/Doylej16/CPR-Instructor-Application',
      screenshots: [
        '/screenshot1.png',
        '/screenshot2.png',
        '/screenshot3.png',
        '/screenshot4.png',
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <Navbar />
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.deploymentLink && (
                <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">View Deployment</a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              <div className="screenshots">
                {project.screenshots && project.screenshots.map((screenshot, idx) => (
                  <img
                    key={idx}
                    src={process.env.PUBLIC_URL + screenshot}
                    alt={`Project ${index + 1} Screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
