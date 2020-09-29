import React, { useState } from 'react';
import '../App.scss';
import Marquee from './Marquee';
import ProjectsArray from '../services/Projects.json';

function Projects() {
  const [projects] = useState(ProjectsArray);

  const [isShown, setIsShown] = useState(0);

  const projectsList = projects.map((project, index) => {
    return (
      <li
        className="projects__name wrapper"
        key={index}
        onMouseEnter={() => setIsShown(project.id)}
        onMouseLeave={() => setIsShown(0)}
      >
        <a
          className="link"
          id={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{project.name}</span> <i className="fas fa-arrow-right"></i>
        </a>

        {isShown === project.id && (
          <div className="img-container">
            <img className="project-img" src={project.img} alt={project.name} />
          </div>
        )}
      </li>
    );
  });

  return (
    <>
      <div className="marquee-border">
        <Marquee content="projects"/>
      </div>
      <ul className="projects">{projectsList}</ul>
    </>
  );
}

export default Projects;
