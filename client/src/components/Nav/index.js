import React from "react";
import "./style.css";
import video from "../../images/testVid.mp4"

function Nav() {
  return (
    <div>
      <video muted loop autoplay="autoplay" className="responsive-video" id="myVideo">
        <source src={video} type="video/mp4"></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default Nav;
