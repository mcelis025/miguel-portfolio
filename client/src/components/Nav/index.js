import React from "react";
import "./style.css";
import video from "../../images/testVid.mp4";
import logo from "../../images/newLogo3.png"

function Nav() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper transparent">
          <a href="#!" className="brand-logo center"><img src={logo} alt="logo" className="logo"></img></a>
          <a href="#!" data-target="mobileNav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#!">about</a></li>
            <li><a href="#!">projects</a></li>
            <li><a href="#!">contact</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobileNav">
        <li><a href="sass.html">about</a></li>
        <li><a href="badges.html">projects</a></li>
        <li><a href="collapsible.html">contact</a></li>
      </ul>

      <video muted loop autoPlay className="responsive-video" id="myVideo">
        <source src={video} type="video/mp4"></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default Nav;
