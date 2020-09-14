import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
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

export default Home;
