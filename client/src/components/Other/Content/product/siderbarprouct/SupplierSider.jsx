import React, { Component } from "react";

class SupplierSider extends Component {
  render() {
    return (
      <div>
        <dl className="narrow-by-list">
          <dt className="odd">NHÀ CUNG CẤP</dt>
          <dd className="odd">
            <ol className="m-filter-css-checkboxes ">
              <li>
                <a className="m-checkbox-unchecked " href="">
                  Kim Đồng
                </a>
                (4190)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  Đinh Tị
                </a>
                (1061)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  NXB Trẻ
                </a>
                (852)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  Tân Việt
                </a>
                (513)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  Huy Hoàng
                </a>
                (345)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  Phuc Minh Books
                </a>
                (288)
              </li>
            </ol>
          </dd>
        </dl>
      </div>
    );
  }
}

export default SupplierSider;
