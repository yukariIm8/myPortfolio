import React from 'react';
import github_icon from './icons8-github-50.png';
import linkedin_icon from './icons8-linkedin-circled-50.png';
import profile_photo from './profile_photo.jpg';
import python_icon from './icons8-python-64.png';
import sql_icon from './icons8-sql-64.png';
import react_icon from './icons8-react-64.png';
import javascript_icon from './icons8-javascript-64.png';
import css_icon from './icons8-css3-64.png';
import html_icon from './icons8-html-5-64.png';
import project_capstone from './project_capstone.JPG';
import project_fyyur from './project_fyyur.JPG';
import project_trivia from './project_trivia.JPG';
import project_coffeeshop from './project_coffeeshop.JPG';
import docker from './icons8-docker-80.png';
import test from './icons8-test-80.png';
import kubernetes from './icons8-kubernetes-80.png';
import deploy from './icons8-deployment-80.png';
import project_gameyay from './project_gameyay.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="link">
        <div className="tooltip">
          <a href="https://github.com/yukariIm8" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} className="github" alt="link to GitHub" />
          </a>
          <span className="tooltiptext">GitHub</span>
        </div>
        <div className="tooltip">
          <a href="https://www.linkedin.com/in/yukari-im/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} className="linkedin" alt="link to LinkedIn" />
          </a>
          <span className="tooltiptext">LinkedIn</span>
        </div>
      </div>

      <header className="App-header">
          <div className="holder">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
          <div className="txt">
            <h1>Hi, I'm Yukari Im.</h1>
            <h2>I'm an enthusiast for designing and building <br />user-oriented beautiful products.</h2>
            <img src={profile_photo} className="profile" alt="yukariim_photo" />
            <h3>Skills</h3>
                <img src={python_icon} className="" alt="Python" />
                <img src={sql_icon} className="" alt="SQL" />
                <img src={react_icon} className="" alt="React" />
                <img src={javascript_icon} className="" alt="JavaScript" />
                <img src={css_icon} className="" alt="CSS" />
                <img src={html_icon} className="" alt="HTML" />
          </div>
        </div>
      </header>

      <div className="project">
        <h1>Projects</h1>
      </div>
      <div className="container">
          <div className="f_item1">
              <h3>Backend<br />Development</h3>
              <p>Developed Flask APIs to access database, implemented Role-Based Access Control by authentication with Auth0, wrote unit tests, and deployed the app on Heroku. </p>
              <div className="right_container">
                <a href="https://github.com/yukariIm8/Udacity_FSND_05_capstone" target="_blank" rel="noopener noreferrer"><img src={project_capstone} className="project_icon" alt="Flask API Project" /></a>
              </div>
          </div>
          <div className="f_item3">
            <h3>Database<br />Modeling</h3>
            <p>Implemented data models in relational, normalized form. Wrote SQLAlchemy code, which is the equivalent PostgresSQL commands for manipulating records from the database.</p>
            <div className="right_container">
                <a href="https://github.com/yukariIm8/Udacity_FSND_01_fyyur" target="_blank" rel="noopener noreferrer"><img src={project_fyyur} className="project_icon" alt="Database Modeling Project" /></a>
            </div>
          </div>
          <div className="f_item2">
            <h3>Authentication<br />Authorization</h3>
            <p>Implemented authentication and authorization in Flask. Implemented role-based control design patterns with applying software system risk and compliance principles.</p>
            <div className="right_container">
                <a href="https://github.com/yukariIm8/Udacity_FSND_03_coffee_shop_full_stack" target="_blank" rel="noopener noreferrer"><img src={project_coffeeshop} className="project_icon" alt="Authentication and Authorization Project" /></a>
            </div>
          </div>
          <div className="f_item4">
            <h3>Containerization<br />Deployment</h3>
            <p>Wrote a Dockerfile for a Flask API as well as built and tested the container. Created EKS cluster, CodePipeline, and CodeBuild which will build, test, and deploy my code.</p>
            <div className="right_container_item4">
                <a href="https://github.com/yukariIm8/Udacity-FSND_04_Deploy-Flask-App-to-Kubernetes-Using-EKS" target="_blank" rel="noopener noreferrer"><img src={docker} className="project_icon_item4" alt="docker" /></a>
                <a href="https://github.com/yukariIm8/Udacity-FSND_04_Deploy-Flask-App-to-Kubernetes-Using-EKS" target="_blank" rel="noopener noreferrer"><img src={test} className="project_icon_item4" alt="test" /></a>
                <a href="https://github.com/yukariIm8/Udacity-FSND_04_Deploy-Flask-App-to-Kubernetes-Using-EKS" target="_blank" rel="noopener noreferrer"><img src={kubernetes} className="project_icon_item4" alt="kubernetes" /></a>
                <a href="https://github.com/yukariIm8/Udacity-FSND_04_Deploy-Flask-App-to-Kubernetes-Using-EKS" target="_blank" rel="noopener noreferrer"><img src={deploy} className="project_icon_item4" alt="deploy" /></a>
            </div>
          </div>
          <div className="f_item3">
            <h3>Rest&nbsp;API<br />Development</h3>
            <p>Developed REST APIs to access database, and developed corresponding unit tests. Each endpoint can handle GET, POST, and DELETE requests, as well as a quiz functionality.</p>
            <div className="right_container">
                <a href="https://github.com/yukariIm8/Udacity_FSND_02_trivia_api" target="_blank" rel="noopener noreferrer"><img src={project_trivia} className="project_icon" alt="Authentication Project" /></a>
            </div>
          </div>
          <div className="f_item1">
            <h3>Mockup Design</h3>
            <p>Created application mockup for my original app, "GameYay!" that connects people for playing board games.</p>
            <div className="right_container">
                <a href="https://www.figma.com/file/Z7EoThTHYpH2KZtf1NYnIv/Game-Yay?node-id=0%3A1" target="_blank" rel="noopener noreferrer"><img src={project_gameyay} className="project_icon" alt="Game Yay! Project" /></a>
            </div>
          </div>
      </div>
      <div>
        <h1>Get in touch</h1>
        <h2>Say Hi or find me on other platforms: <a href="https://github.com/yukariIm8" target="_blank">GitHub</a>&nbsp;&amp;&nbsp;
        <a href="https://www.linkedin.com/in/yukari-im/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h2>
        <br />
      </div>

      <footer>
        <h6>&copy;2020&nbsp;Yukari Im</h6><br />
        <div className="icons">
        <p>
          <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/python">Python icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/react">React icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/sql">SQL icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/javascript">JavaScript icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a><br/>
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/css">CSS icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/html">HTML icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" rel="noopener noreferrer" href="https://icons8.com/icons/set/github">GitHub icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/linkedin-circled">LinkedIn Circled icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;<br/>
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/docker">Docker icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/deployment">Deployment icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/kubernetes">Kubernetes icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/test">Test icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
