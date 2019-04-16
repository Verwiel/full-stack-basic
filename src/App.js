import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from "./components/ForgotPassword"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>   
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
        </Switch>
      </Router> 
    );
  }
}

export default App