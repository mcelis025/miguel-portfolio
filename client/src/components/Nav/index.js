import React from "react";
import "./style.css";
import video from "../../images/testVidCold.mp4";
import logo from "../../images/newLogo3.png";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div id="navLink">
      <nav className="transparent navigation z-depth-0">
        <div className="nav-wrapper">
          <Link to="navLink" className="brand-logo center"><img src={logo} alt="logo" className="logo"></img></Link>
          <Link to="#" data-target="mobileNav" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent hide-on-med-and-down">
            <li className="tab"><Link to="aboutLink" smooth={true} duration={1000}>about</Link></li>
            <li className="tab"><Link to="projectsLink" smooth={true} duration={1000}>projects</Link></li>
            <li className="tab"><Link to="contactLink" smooth={true} duration={1000}>contact</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobileNav">
        <li key={""}><Link to="aboutLink" smooth={true} duration={1000}>about</Link></li>
        <li key={""}><Link to="projectsLink" smooth={true} duration={1000}>projects</Link></li>
        <li key={""}><Link to="contactLink" smooth={true} duration={1000}>contact</Link></li>
        <p className="center name">Miguel Celis</p>
      </ul>

      <div className="videoContents">
        <video muted loop autoPlay className="responsive-video myVideo">
          <source src={video} type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className="arrow center-align hide-on-med-and-down">
        <Link to="aboutLink" smooth={true} duration={1000}>
          <i className="medium material-icons white-text">keyboard_arrow_down</i>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
