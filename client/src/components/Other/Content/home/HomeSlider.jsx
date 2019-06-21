import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
const OwlCarousel = require("react-owl-carousel");

class HomeSlider extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sms12 col-md-3 col-sm-12" />
        <div className="col-sms12 col-md-9 col-sm-12">
          <OwlCarousel
            className="owl-theme HomeSlider"
            loop
            items={1}
            dots={false}
            nav={true}
          >
            <div className="item">
              <a href="">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/slider-home-1.jpg"}
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/slider-home-2.jpg"}
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a href="">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/slider-home-3.jpg"}
                  alt=""
                />
              </a>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default HomeSlider;
