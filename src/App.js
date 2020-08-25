import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout" component={Header} />
          <Route exact path="/login" render={() => <h1>Login</h1>} />
          <Route exact path="/" render={() => <Header />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
