import React, { Component } from "react";
import MainProduct from "./mainproduct/MainProduct";
import SiderBarProduct from "./siderbarprouct/SiderBarProduct";

class Products extends Component {
  render() {
    return (
      <div className="container-inner">
        <div className="row">
          <SiderBarProduct />
        </div>
      </div>
    );
  }
}
export default Products;
