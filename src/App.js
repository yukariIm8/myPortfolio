import React, { Component } from 'react';
import Header from './Header';
import Project from './Project';
import Footer from './Footer';

const projects = [
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Developed Flask APIs to access database, implemented Role-Based Access Control by authentication with Auth0, wrote unit tests, and deployed the app on Heroku.',
    image_URL: 'https://yukariim8.github.io/image_repo/image/project_capstone.JPG',
    link: 'https://github.com/yukariIm8/Udacity_FSND_05_capstone',
  },
  {
    id: 'database',
    title: 'Database Modeling',
    description: 'Implemented data models in relational, normalized form. Wrote SQLAlchemy code, which is the equivalent PostgresSQL commands for manipulating records from the database.',
    image_URL: 'https://yukariim8.github.io/image_repo/image/project_fyyur.JPG',
    link: 'https://github.com/yukariIm8/Udacity_FSND_01_fyyur',
  },
  {
    id: 'restapi',
    title: 'Rest API Development',
    description: 'Developed REST APIs to access database, and developed corresponding unit tests. Each endpoint can handle GET, POST, and DELETE requests, as well as a quiz functionality.',
    image_URL: 'https://yukariim8.github.io/image_repo/image/project_trivia.JPG',
    link: 'https://github.com/yukariIm8/Udacity_FSND_02_trivia_api',
  },
  {
    id: 'rbac',
    title: 'Authentication Authorization',
    description: 'Implemented authentication and authorization in Flask. Implemented role-based control design patterns with applying software system risk and compliance principles.',
    image_URL: 'https://yukariim8.github.io/image_repo/image/project_coffeeshop.JPG',
    link: 'https://github.com/yukariIm8/Udacity_FSND_03_coffee_shop_full_stack',
  },
  {
    id: 'deploy',
    title: 'Containerization Deployment',
    description: 'Wrote a Dockerfile for a Flask API as well as built and tested the container. Created EKS cluster, CodePipeline, and CodeBuild which will build, test, and deploy my code.',
    image_URL: 'https://yukariim8.github.io/image_repo/image/project_deployment.jpg',
    link: 'https://github.com/yukariIm8/Udacity-FSND_04_Deploy-Flask-App-to-Kubernetes-Using-EKS',
  },
  {
    id: 'mockup',
    title: 'Mockup Design',
    description: 'Created application mockup for my original app, "Board Game Buddy!" that connects people for playing board games.',
    image_URL: 'https://yukariim8.github.io/image_repo/image/project_boardgame.JPG',
    link: 'https://www.figma.com/file/Z7EoThTHYpH2KZtf1NYnIv/Board-Game-Buddy?node-id=0%3A1',
  },
];

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Project projects={projects} />
          <Footer />
      </div>
    );
  }
}

export default App;
