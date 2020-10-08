import React from "react";
import { Link } from "react-scroll";

function Float() {
  return (
    <>    
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red darken-4" href="#!">
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li><Link className="btn-floating red" to="navLink" smooth={true} duration={1000}><i className="material-icons">home</i></Link></li>
          <li><Link className="btn-floating purple darken-2" to="aboutLink" smooth={true} duration={1000}><i className="material-icons">person</i></Link></li>
          <li><Link className="btn-floating yellow darken-1" to="projectsLink" smooth={true} duration={1000}><i className="material-icons">edit</i></Link></li>
          <li><Link className="btn-floating green" to="contactLink" smooth={true} duration={1000}><i className="material-icons">local_phone</i></Link></li>
          <li><a className="btn-floating blue" href="https://www.linkedin.com/in/miguel-celis-3x11/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a className="btn-floating black" href="https://github.com/mcelis025" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
        </ul>
      </div>
    </>
    );
}

export default Float;