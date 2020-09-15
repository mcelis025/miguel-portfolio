import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
// import Nav from "./components/Nav";

function App() {
  return ( 
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/celisPortfolio" component={Home} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
