import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Login from "../src/components/Login/Login";
import Checkout from "../src/components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
