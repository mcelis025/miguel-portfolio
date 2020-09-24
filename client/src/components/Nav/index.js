import React from "react";
import "./style.css";
import video from "../../images/testVid.mp4";
import logo from "../../images/newLogo3.png";
import {Link} from "react-scroll";

function Nav() {
  return (
    <div id="navLink">
      <nav className="transparent navigation z-depth-0">
        <div className="nav-wrapper">
          <Link to="/Home/testLink" className="brand-logo center"><img src={logo} alt="logo" className="logo"></img></Link>
          <Link to="#" data-target="mobileNav" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent hide-on-med-and-down">
            <li className="tab center-align"><Link to="aboutLink">about</Link></li>
            <li className="tab center-align"><Link to="projectsLink">projects</Link></li>
            <li className="tab center-align"><Link to="contactLink">contact</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobileNav">
        <li><Link to="aboutLink">about</Link></li>
        <li><Link to="projectsLink">projects</Link></li>
        <li><Link to="contactLink">contact</Link></li>
        <p className="center name">Miguel Celis</p>
      </ul>

      <div className="videoContents">
        <video muted loop autoPlay className="responsive-video myVideo">
          <source src={video} type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className="arrow center-align">
        <Link to="aboutLink">
          <i class="medium material-icons white-text">keyboard_arrow_down</i>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
