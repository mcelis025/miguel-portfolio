import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return this.props.projects.map((projects) => (
    <>  
      <div className="carousel carousel-slider">
        <a className="carousel-item" href={projects.href}>
          <img src="" alt={projects.appName}></img>
        </a>
      </div>
    </>
    ));
}
}

export default Carousel;
