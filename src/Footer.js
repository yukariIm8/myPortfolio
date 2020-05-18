import React from 'react';
import './Header.css';
import './Project.css';
import './Footer.css';

// Stateless Functional Component
const Footer = () => {
  //return JSX
  return (
    <footer>
      <div className="copyright"><h5>&copy;2020&nbsp;Yukari Im</h5></div>
      <div className="icons">
        <p>
          Thanks to <br />
          Photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@double_e?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">elias</a> on <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash</a>.,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/react">React icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/redux">Redux icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/javascript">JavaScript icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/html">HTML icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/css">CSS icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;

          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/python">Python icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/sql">SQL icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" rel="noopener noreferrer" href="https://icons8.com/icons/set/github">GitHub icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>,&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/linkedin-circled">LinkedIn Circled icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;