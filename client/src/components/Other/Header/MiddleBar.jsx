import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MiddleBar extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-top">
          <div className="row no-margin">
            {/* logo */}
            <div className="col-lg-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 no-padding">
              <div className="logo-theme">
                <NavLink to="/" className="logo">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
            {/* search */}
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 no-padding">
              <div className="ves-autosearch">
                <div className="box search_box ">
                  <form id="search_mini_form">
                    <div className="search pull-left">
                      <div className="form-search">
                        <input
                          id="search"
                          placeholder="Tìm kiếm sản phẩm mong muốn..."
                          type="text"
                          className="input-search"
                        />
                        <span className="button-search fa fa-search" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* shopping */}
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 no-padding">
              <div className="cart-top pull-left top-cart-wrapper">
                <div className="top-cart-contain">
                  <div className="cart-top pull-left" id="mini_cart_block">
                    <div className="clearfix" className="cart">
                      <a>
                        <div className="heading">
                          <div className="cart-inner">
                            <div className="shopping-cart-icon">
                              <div className="hidden" />
                            </div>
                            <div className="cart-total">
                              <h3>Giỏ Hàng</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* hiden-cart */}
                      <div className="top-cart-content">
                        <div className="emty">
                          Chưa có sản phẩm trong giỏ hàng của bạn.
                        </div>
                        <div className="top-subtotal">
                          Thành tiền:
                          <span className="price">0&nbsp;đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleBar;
