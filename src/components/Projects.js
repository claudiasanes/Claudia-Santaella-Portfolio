import React, { useState } from 'react';
import '../App.scss';
import ProjectsArray from '../services/Projects.json';

function Projects() {
  const [projects, setProjects] = useState(ProjectsArray);

  const projectsList = projects.map((project, index) => {
    return (
      <li className="projects__name wrapper" key={index}>
        <a
          className="link"
          id={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <div className="marquee-border">
        {' '}
        <h2 className="marquee-title wrapper">projects projects projects</h2>
      </div>
      <ul className="projects">{projectsList}</ul>
    </>
  );
}

export default Projects;
