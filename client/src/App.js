import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return ( 
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/celisPortfolio" component={Home} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
