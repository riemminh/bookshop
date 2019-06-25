import React, { Component } from "react";

class FormalitySider extends Component {
  render() {
    return (
      <div>
        <dl className="narrow-by-list">
          <dt className="odd">HÌNH THỨC</dt>
          <dd className="odd">
            <ol className="m-filter-css-checkboxes ">
              <li>
                <a className="m-checkbox-unchecked " href="">
                  Kim Đồng
                </a>
                (1288)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  Kim Đồng
                </a>
                (1288)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  Kim Đồng
                </a>
                (1288)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  Kim Đồng
                </a>
                (1288)
              </li>
            </ol>
          </dd>
        </dl>
      </div>
    );
  }
}

export default FormalitySider;
