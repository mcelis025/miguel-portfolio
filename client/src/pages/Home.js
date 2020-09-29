import React, { Component } from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import Parallax from "../components/Parallax";
import Contact from "../components/Contact";
import ContactBtns from "../components/ContactBtns";
import Float from "../components/Float";
import M from "materialize-css";

class Home extends Component {

  componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  }
  
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
        </div>
        <Parallax />
        <div className="container">
          <Contact />
          <ContactBtns />
        </div>
        <Float />
      </>
    );
  }
}

export default Home;
