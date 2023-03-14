import React from "react";

import ProjectImage from "../sc.png";

const Projects = () => {
  return (
    <div>
      <h1>French Tutoring Website</h1>
      <a href="https://beazach.github.io/french-tutoring-website/business.html">
        Link to deployed
      </a>
      <br></br>
      <a href="https://github.com/annabenari/french-tutoring-website">
        Link to Repo
      </a>
      <img src={ProjectImage} alt="french project"></img>
    </div>
  );
};

export default Projects;
