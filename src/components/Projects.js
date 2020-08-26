import React, { useState } from 'react';
import '../App.scss';
import ProjectsArray from '../services/Projects.json';

function Projects() {
  const [projects, setProjects] = useState(ProjectsArray);
  const [isShown, setIsShown] = useState(false);

  const projectsList = projects.map((project, index) => {
    const tecnologiesList = project.tecnologies.map((tecnology) => {
      return (
        <li key={project.id} className="tecnology">
          {' '}
          <pre>{tecnology} | </pre>
        </li>
      );
    });

    // const setIsShown = (ev) => {
    //   const target = ev.target;
    //   return (
    //     <div>
    //       <ul>{tecnologiesList}</ul>
    //       <img key={target.id} src={project.img} alt={project.name} />
    //     </div>
    //   );
    // };

    return (
      <p className="projects__name" key={index}>
        <span
          id={project.id}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {' '}
          {project.name}{' '}
          <ul className="tecnologies-list">
            <sup>{tecnologiesList}</sup>
          </ul>{' '}
        </span>
        {isShown && (
          <div>
            <div className="project-img__container">
              <img key={project.id} src={project.img} alt={project.name} />
            </div>
          </div>
        )}
      </p>
    );
  });

  return <div className="projects">{projectsList}</div>;
}

export default Projects;
