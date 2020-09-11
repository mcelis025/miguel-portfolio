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

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
// import Saved from "./pages/SavedBooks";
// import Search from "./pages/Books";
// import NoMatch from "./pages/NoMatch";

// function App() {
//   return ( 
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Search} />
//           <Route exact path="/SavedBooks" component={Saved} />
//           <Route exact path="/SearchBooks" component={Search} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
