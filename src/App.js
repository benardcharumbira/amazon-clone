import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout" render={() => <h1>Checkout</h1>} />
          <Route exact path="/login" render={() => <h1>Login</h1>} />
          <Route exact path="/">
            <Header />
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
