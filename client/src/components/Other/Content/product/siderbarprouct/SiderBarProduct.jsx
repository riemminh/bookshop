import React, { Component } from "react";
import ListCategorySider from "./ListCategorySider";
import PriceSider from "./PriceSider";
import FormalitySider from "./FormalitySider";

class SiderBarProduct extends Component {
  render() {
    return (
      <div className="col-left sidebarProduct col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className="block block-layered-nav">
          <div className="block-title">
            <p>MUA THEO</p>
          </div>
          <div className="block-content">
            <ListCategorySider />
            <PriceSider />
            <FormalitySider />
          </div>
        </div>
      </div>
    );
  }
}

export default SiderBarProduct;
