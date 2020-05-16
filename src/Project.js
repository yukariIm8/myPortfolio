import React from 'react';
import './Header.css';
import './Project.css';

// Stateless Functional Component
function Project(props) {
  //return JSX
  return(
    <div className="project_wrapper">
      <div className="projects"><h1>Projects</h1></div>
      <div className="project_container">
        <ul className="project_list">
          {props.projects.map((project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <li key={project.id} className='project_list_item'>
              <div className='project_details'>
                <h2>{project.title}</h2>
                <h3>{project.description}</h3>
              </div>
              <div>
                <img src={project.image_URL} className="project_image" alt={project.id} />
              </div>
            </li></a>
          ))}
        </ul>
      </div>
      <div className="get_in_touch">
        <h1>Get in touch</h1>
        <h4>Say Hi or find me on other platforms: <a className="link" href="https://github.com/yukariIm8" target="_blank">GitHub</a>&nbsp;&amp;&nbsp;
        <a className="link" href="https://www.linkedin.com/in/yukari-im/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h4>
      </div>
    </div>
  );
}

export default Project;