import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects"
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <About />
        </div>
        <div className="container">
          <Projects />
        </div>
        <div className="container">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
