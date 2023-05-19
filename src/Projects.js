import React from 'react';
import Navbar from './Navbar';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A robust backend application for a new mobile telecom company, responsible for efficiently managing customer data and phone bills. Implemented features enabling the addition, editing, and removal of customers from the company database, capturing their first and last name, phone number, city, state, and gender. Seamlessly tracked phone bills for each customer, recording essential details such as ID number, billing amount, minutes used, texts sent, data consumed, and outgoing calls made. Verified API functionality through rigorous testing using Postman.',
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
      description: 'The CPR Instructor Application is a web platform built with React, Redux, React Router, and Tailwind CSS. It allows CPR instructors to manage courses and offer online training to clients. Key features include user authentication, course creation and management, client tracking, and secure payment processing through Stripe integration.',
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
              <div className="screenshots">
                {project.screenshots.map((screenshot, idx) => (
                  <img key={idx} src={process.env.PUBLIC_URL + screenshot} alt={`Project ${index + 1} Screenshot ${idx + 1}`} />
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
