import React from "react";
import linkedin from "../../images/blackLinkedin.png";
import github from "../../images/blackGitHub.png";
import resume from "../../documents/Resume.pdf";
import "./style.css";


function ContactBtns() {
  return (
    <div className="container row">  
      <div className="col s12 m3 waves-effect center">
        <a href="https://linkedin.com/in/miguel-celis-3x11" target="_blank" rel="noopener noreferrer"> 
          <img src={linkedin} alt="linkedin" className="iconSize"></img> 
        </a>
      </div>
      <div className="col s12 m3 waves-effect center">
        <a href="https://github.com/mcelis025" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="iconSize"></img>
        </a>
      </div>
      <div className="col s12 m3 waves-effect center">
        <a href="mailto:mcelis025@gmail.com?subject=Miguel Celis Portfolio" target="_blank" rel="noopener noreferrer">
          <i class="medium material-icons black-text">email</i>
        </a>
      </div>
      <div className="col s12 m3 waves-effect center">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <i class="medium material-icons black-text">description</i>
        </a>
      </div>
    </div>
  );
}

export default ContactBtns;
