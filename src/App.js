import React from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header/>
            <h1>Homee</h1>
          </Route>
        </Switch>
        <h3>Firezon</h3>
      </div>
    </Router>
  );
};

export default App;
