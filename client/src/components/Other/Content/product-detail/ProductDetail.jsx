import React, { Component } from "react";
import TabHome from "../home/TabHome";
import ProducView from "./ProducView";
import ProductAdditional from "./ProductAdditional";
import ProductDescription from "./ProductDescription";
import ProductReview from "./review-products/ProductReview";
import FormComment from "./review-products/FormComment";

import WOW from "wowjs";
class ProductDetail extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <div className="container-inner wow fadeIn">
        <ProducView />
        <TabHome tabsTitle="SẢN PHẨM LIÊN QUAN" />
        <ProductAdditional />
        <ProductDescription />
        <ProductReview />
        <FormComment />
      </div>
    );
  }
}
export default ProductDetail;
