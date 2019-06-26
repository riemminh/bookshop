import React, { Component } from "react";
import ToolBarMain from "./ToolBarMain";
import ItemMain from "./ItemMain";

class MainProduct extends Component {
  render() {
    return (
      <div className="col-main col-lg-9 col-md-9 col-sm-12 col-xs-12 col-fhs-main-body">
        <div className="mb-category-products">
          <div className="category-products">
            <ToolBarMain />
            <ul className="products-grid row fhs-top">
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
              <ItemMain />
            </ul>
            <ToolBarMain />
          </div>
        </div>
      </div>
    );
  }
}
export default MainProduct;
