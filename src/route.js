import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Donate from "./screen/donate";
import Home from "./screen/home";
import Admin from "./screen/admin";
import Signup from "./screen/signup";
import Signin from "./screen/signin";
import Contact from "./screen/contact";
import Student from './screen/studentportal'
export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/donate" component={Donate} />
      <Route path="/student" component={Student} />
      <Route path="/admin" component={Admin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}
