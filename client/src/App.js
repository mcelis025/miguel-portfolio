import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Footer from "./components/Footer/index";
import Contact from "./components/Contact/index";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <About />
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
