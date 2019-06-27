import React, { Component } from "react";
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
        <div className="product-view kasitoo">
          <div className="row">
            {/* left */}
            <div className="product-essential col-md-9">
              <div className="row">
                <div className="col-md-5">
                  <img
                    className="fhs-p-img"
                    src={process.env.PUBLIC_URL + "/assets/img/vanhoc-1.jpg"}
                    alt=""
                  />
                </div>
                <div className="col-md-7">
                  <h1>Lớp Học Mật Ngữ - Tập 12</h1>
                  {/* price-block */}
                  <div className="row price-block">
                    <div className="col-md-6 price-block-left">
                      <div className="price-box">
                        <p className="special-price">
                          <span className="price">31.500 đ </span>
                        </p>
                        <p className="old-price">
                          <span className="price">35.000 đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 price-block-right">
                      <span className="discount-percent">-10%</span>
                    </div>
                  </div>
                  {/* add-to-box */}
                  <div className="add-to-box add-to-box2">
                    <div className="add-to-cart ">
                      <label htmlFor="qty">Số lượng:</label>
                      <input
                        type="text"
                        name="qty"
                        id="qty"
                        title="SL"
                        className="input-text qty"
                      />
                      <button
                        type="button"
                        title="Chọn mua"
                        className="button btn-cart-view "
                      >
                        <span>
                          <i className="fa fa-shopping-cart" />
                          Chọn mua
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* additional-list */}
                  <div className="additional-list">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="add-to-links">
                          <li>
                            <a href="" title="Yêu thích">
                              <i className="fa fa-heart" />
                              Yêu thích
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-7 add-review-link">
                        <a href="#">
                          <i className="fa fa-edit" />
                          Thêm nhận xét của bạn
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* short-description */}
                  <div className="short-description">
                    <span>
                      LƯU Ý: BÌA CHƯA CHÍNH THỨC. Các fan Lớp Học Mật Ngữ hẳn
                    </span>
                    <p>
                      đã sốt ruột đợi đọc truyện mới lắm rồi phải không? Tập 12
                      này chính xác là một phiên bản mới tịch tình tinh với toàn
                      bộ những truyện tranh chưa bao giờ xuất hiện. Đó là truyện
                      Hiệp Sĩ Tiết Kiệm tặng bạn đọc thông điệp cực cute về việc
                      “gieo thói quen nhỏ, gặt kết quả to”. Và truyện Bầu Trời
                      Mai Cua về ...
                    </p>
                    <a href="" className="xem-chi-tiet">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* left */}
            {/* right */}
            <div className="product-essential-left col-md-3 col-sm-3 col-sms-3">
              <div className="block-note-product">
                {/* product-attribute */}
                <div className="product-attribute">
                  <label htmlFor="">Tên Nhà Cung Cấp:</label>
                  <a className="xem-chi-tiet" href="#">
                    Hoa Học Trò
                  </a>
                </div>
                {/* product-attribute */}
                <div className="product-attribute">
                  <label>Hình thức:</label> Bìa Mềm
                </div>
                {/* product-attribute */}
                <div className="product-attribute">
                  <label>Tình trạng:</label> Còn hàng
                </div>
              </div>
            </div>
            {/* right */}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetail;
