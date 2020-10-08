import React, { Component } from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Carousel from "../components/Carousel";
import Parallax from "../components/Parallax";
import Contact from "../components/Contact";
import ContactBtns from "../components/ContactBtns";
import Float from "../components/Float";
import M from "materialize-css";
import projects from "../projects.json";

class Home extends Component {
  state = {
    projects
  };

  componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  };
  
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <About />
        </div>
        <Parallax />
        <div className="container">
          <Projects />
          <Carousel
          projects={this.state.projects} />
        </div>
        <Parallax />
        <div className="container">
          <Contact />
          <ContactBtns />
          <Float 
          key={this.state.projects.id}
          />
        </div>
      </>
    );
  }
}

export default Home;
