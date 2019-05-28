import React, { Component } from "react";
import Siderbar from "./Siderbar";
import Main from "./Main";
class Content extends Component {
  render() {
    return (
      <div className="app-body">
        <Siderbar />
        <Main />
      </div>
    );
  }
}

export default Content;
