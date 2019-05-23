import React, { Component } from "react";

class BannerTop extends Component {
  render() {
    return (
      <div className="top-link top-banner">
        <div className="text-center">
          <div className="top-banner-block">
            <p>
              <a href="#">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/DaiTiecFPoint-1263x80.png"
                  }
                  alt="banner"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerTop;
