import React, { Component } from "react";
import MainProduct from "./mainproduct/MainProduct";
import SiderBarProduct from "./siderbarprouct/SiderBarProduct";
import WOW from "wowjs";

class Products extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <div className="container-inner wow fadeIn">
        <div className="row">
          <SiderBarProduct />
          <MainProduct />
        </div>
      </div>
    );
  }
}
export default Products;
