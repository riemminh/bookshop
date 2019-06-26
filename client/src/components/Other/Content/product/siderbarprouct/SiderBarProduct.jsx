import React, { Component } from "react";
import ListCategorySider from "./ListCategorySider";
import PriceSider from "./PriceSider";
import FormalitySider from "./FormalitySider";
import SupplierSider from "./SupplierSider";
import AgeSider from "./AgeSider";

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
            <SupplierSider />
            <AgeSider />
          </div>
        </div>
      </div>
    );
  }
}

export default SiderBarProduct;
