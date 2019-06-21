import React, { Component } from "react";

class BannerHome extends Component {
  render() {
    return (
      <div className="banner-home">
        <div className="row">
          {/* 6 */}
          <div className="col-sm-6 col-md-6 col-xs-12">
            <div className="banner-home-inner ">
              <a href="">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/banner-home-1.png"}
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="col-sm-3 col-md-3 col-xs-6">
            <div className="banner-home-inner ">
              <a href="">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/banner-home-2.png"}
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="col-sm-3 col-md-3 col-xs-6">
            <div className="banner-home-inner ">
              <a href="">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/banner-home-3.png"}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerHome;
