import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Home from "./Home";

class Other extends Component {
  render() {
    return (
      <div className="other">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </div>
      </div>
    );
  }
}

export default Other;
