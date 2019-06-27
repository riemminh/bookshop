import React, { Component } from "react";
import CommentItem from "./CommentItem";

class ProductReview extends Component {
  render() {
    return (
      <div className="box-collateral box-reviews">
        <div className="ma-review-col1 span5">
          <h2 className="own-review">Khách Hàng Nhận Xét</h2>
          <dl>
            <CommentItem />
            <CommentItem />
          </dl>
          <div className="order-pager">
            <div className="limiter">
              <label htmlFor="">Hiển thị</label>
              <select>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductReview;
