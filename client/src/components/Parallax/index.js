import React from "react";
import image from "../../images/alesnesetril.jpg";

function Parallax() {
  return (
    <>
      <div className="parallax-container">
        <div className="parallax">
          <img src={image} alt="parallax img"></img>
        </div>
      </div>
    </>
    );
}

export default Parallax;