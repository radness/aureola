import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Home, About } from "./index";

// const Router = () => (
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        {/* <Route path="/" component={About} /> */}
      </BrowserRouter>
    );
  }
}

export default Router;
