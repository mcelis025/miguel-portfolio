import React from "react";
import { Player, ControlBar, LoadingSpinner } from "video-react";
import "./style.css";

function Nav() {
  return (
    <div> 
      <div> 
        <Player
          autoPlay
          loop
          muted
          playsInline
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
          <ControlBar disabled />
          <LoadingSpinner disabled />
        </Player>
      </div>
    </div>
  );
}

export default Nav;
