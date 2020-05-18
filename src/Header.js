import React from 'react';
import './Header.css';
import github_icon from './image/icons8-github-50.png';
import linkedin_icon from './image/icons8-linkedin-circled-50.png';
import profile_photo from './image/profile_photo.jpg';
import python_icon from './image/icons8-python-64.png';
import sql_icon from './image/icons8-sql-64.png';
import react_icon from './image/icons8-react-64.png';
import redux_icon from './image/icons8-redux-64.png';
import javascript_icon from './image/icons8-javascript-64.png';
import css_icon from './image/icons8-css3-64.png';
import html_icon from './image/icons8-html-5-64.png';

// Stateless Functional Component
const Header = () => {
  //return JSX
  return (
    <div className="wrapper">
      <div className="topbar">
          <a href="https://github.com/yukariIm8" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} className="github_icon" alt="go to GitHub" /></a>
          <a href="https://www.linkedin.com/in/yukari-im/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} className="linkedin_icon" alt="go to LinkedIn" /></a>
      </div>
      <div className="greeting"><h1>Hi, I'm Yukari Im.</h1></div>
      <div className="introduction">
        <h2>I'm an enthusiast for designing and building user-oriented beautiful products.</h2></div>
      <div className="profile"><img src={profile_photo} className="profile_photo" alt="yukariim_photo" /></div>
      <div className="experience"><h3>Experience</h3></div>
      <div className="technology">
        <h4>React, Redux, JavaScript ES6, Python, Flask, SQL, SQLAlchemy, RBAC, Kubernetes, Docker, Figma, HTML5, CSS3</h4></div>
      <div className="tech_icon">
        <img src={react_icon} alt="React" />
        <img src={redux_icon} alt="Redux" />
        <img src={javascript_icon} alt="JavaScript" />
        <img src={python_icon} alt="Python" />
        <img src={sql_icon} alt="SQL" />
        <img src={html_icon} alt="HTML" />
        <img src={css_icon} alt="CSS" />
      </div>
    </div>
    );
};

export default Header;
