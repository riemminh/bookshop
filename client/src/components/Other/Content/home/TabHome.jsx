import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
const OwlCarousel = require("react-owl-carousel");

class TabHome extends Component {
  state = {
    key: "1"
  };

  render() {
    const { tabsTitle } = this.props;
    return (
      <div className="customTab tabHome wow fadeIn" data-wow-offset="30">
        <div className="tabslider-title">{tabsTitle}</div>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="1" title="Văn Học">
            <OwlCarousel
              className="owl-theme custom-owl"
              loop
              items={6}
              dots={false}
              margin={27}
            >
              <div className="item">
                <div className="item-inner">
                  <div className="label-pro-sale">
                    <span className="p-sale-label discount-l-fs">31%</span>
                  </div>
                  <div className="ma-box-content">
                    <div className="products">
                      <a href="">
                        <span className="product-image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/vanhoc-1.jpg"
                            }
                            alt=""
                          />
                        </span>
                      </a>
                    </div>
                    <h2 className="product-name">
                      <a href="">Name Product</a>
                    </h2>
                    <div className="price-label">
                      <p className="special-price">
                        <span className="price m-price-font">49.500đ</span>
                      </p>
                      <p className="old-price bg-white">
                        <span className="price m-price-font">90.000đ</span>
                      </p>
                    </div>
                    {/* ranting */}
                    <div className="fhs-rating-container">
                      <div className="ratings fhs-no-mobile-block">
                        <div className="rating-box">
                          <div className="rating" style={{ width: `${80}%` }} />
                        </div>
                        <div className="amount">(8)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <div className="tabs-xem-them">
              <a href="">Xem Thêm</a>
            </div>
          </Tab>
          <Tab eventKey="2" title="Tâm Lý - Kỹ Năng">
            <OwlCarousel
              className="owl-theme custom-owl"
              loop
              items={6}
              dots={false}
              margin={27}
            >
              <div className="item">
                <div className="item-inner">
                  <div className="label-pro-sale">
                    <span className="p-sale-label discount-l-fs">40%</span>
                  </div>
                  <div className="ma-box-content">
                    <div className="products">
                      <a href="">
                        <span className="product-image">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/img/tamly-1.jpg"
                            }
                            alt=""
                          />
                        </span>
                      </a>
                    </div>
                    <h2 className="product-name">
                      <a href="">Name Product</a>
                    </h2>
                    <div className="price-label">
                      <p className="special-price">
                        <span className="price m-price-font">49.500đ</span>
                      </p>
                      <p className="old-price bg-white">
                        <span className="price m-price-font">90.000đ</span>
                      </p>
                    </div>
                    {/* ranting */}
                    <div className="fhs-rating-container">
                      <div className="ratings fhs-no-mobile-block">
                        <div className="rating-box">
                          <div className="rating" style={{ width: `${80}%` }} />
                        </div>
                        <div className="amount">(8)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <div className="tabs-xem-them">
              <a href="">Xem Thêm</a>
            </div>
          </Tab>
          <Tab eventKey="3" title="Nuôi Dạy Con">
            <OwlCarousel
              className="owl-theme custom-owl"
              loop
              items={6}
              dots={false}
              margin={27}
            >
              <div className="item">
                <div className="item-inner">
                  <div className="label-pro-sale">
                    <span className="p-sale-label discount-l-fs">60%</span>
                  </div>
                  <div className="ma-box-content">
                    <div className="products">
                      <a href="">
                        <span className="product-image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/nuoidaytre-1.jpg"
                            }
                            alt=""
                          />
                        </span>
                      </a>
                    </div>
                    <h2 className="product-name">
                      <a href="">Name Product</a>
                    </h2>
                    <div className="price-label">
                      <p className="special-price">
                        <span className="price m-price-font">49.500đ</span>
                      </p>
                      <p className="old-price bg-white">
                        <span className="price m-price-font">90.000đ</span>
                      </p>
                    </div>
                    {/* ranting */}
                    <div className="fhs-rating-container">
                      <div className="ratings fhs-no-mobile-block">
                        <div className="rating-box">
                          <div className="rating" style={{ width: `${80}%` }} />
                        </div>
                        <div className="amount">(8)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <div className="tabs-xem-them">
              <a href="">Xem Thêm</a>
            </div>
          </Tab>
          <Tab eventKey="4" title="Kinh Tế">
            <OwlCarousel
              className="owl-theme custom-owl"
              loop
              items={6}
              dots={false}
              margin={27}
            >
              <div className="item">
                <div className="item-inner">
                  <div className="label-pro-sale">
                    <span className="p-sale-label discount-l-fs">65%</span>
                  </div>
                  <div className="ma-box-content">
                    <div className="products">
                      <a href="">
                        <span className="product-image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/kinhte-1.jpg"
                            }
                            alt=""
                          />
                        </span>
                      </a>
                    </div>
                    <h2 className="product-name">
                      <a href="">Name Product</a>
                    </h2>
                    <div className="price-label">
                      <p className="special-price">
                        <span className="price m-price-font">49.500đ</span>
                      </p>
                      <p className="old-price bg-white">
                        <span className="price m-price-font">90.000đ</span>
                      </p>
                    </div>
                    {/* ranting */}
                    <div className="fhs-rating-container">
                      <div className="ratings fhs-no-mobile-block">
                        <div className="rating-box">
                          <div className="rating" style={{ width: `${80}%` }} />
                        </div>
                        <div className="amount">(8)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <div className="tabs-xem-them">
              <a href="">Xem Thêm</a>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default TabHome;
