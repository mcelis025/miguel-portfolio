import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects"

class App extends Component {
  render() {
    return (
      <div>
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
