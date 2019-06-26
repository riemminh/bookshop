import React, { Component } from "react";

class ItemMain extends Component {
  render() {
    return (
      <li className="col-sm-3 col-xs-6 col-md-3 ">
        <div className="label-pro-sale">
          <div className="p-sale-label">15%</div>
        </div>
        <div className="item-inner">
          <div className="ma-box-content">
            {/* products */}
            <div className="products clearfix">
              <div className="product images-container">
                <a href="">
                  <span className="product-image">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/vanhoc-1.jpg"}
                      alt=""
                    />
                  </span>
                </a>
              </div>
              {/* products */}
              {/* price */}
              <div className="price-label">
                <div className="price-box">
                  <div className="price-box">
                    <div className="special-price">
                      <span className="price">29.750đ</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* price */}
              {/* product-name */}
              <h2 className="product-name p-name-list">
                <a href="">
                  [Bản Đặc Biệt] Nozaki & Truyện Tranh Thiếu Nữ - Tập 4 - Kèm
                  Bọc Sách PVC + Bookmark Chibi (Số Lượng Có Hạn)
                </a>
              </h2>
              {/* product-name */}
              {/* rating-container */}
              <div className="rating-container">
                <div className="ratings fhs-no-mobile-block">
                  <div className="rating-box">
                    <div className="rating" />
                  </div>
                  <div className="amount">(1)</div>
                </div>
                <div className="hethang product-hh">
                  <span>Sắp có hàng</span>
                </div>
              </div>
              {/* rating-container */}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ItemMain;
