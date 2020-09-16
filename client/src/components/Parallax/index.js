import React from "react";
import image from "../../images/alesnesetril.jpg";
// import burger from "../../images/burgerSample.png";

function Parallax() {
  return (
    <>
      <div className="parallax-container">
        <div className="parallax">
          <img src={image} alt=".." className="image"></img>
        </div>
      </div>
      {/* <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={burger} alt="."></img>
        </div>
      </div> */}
    </>
    );
}

export default Parallax;