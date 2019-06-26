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
                  Bìa Mềm
                </a>
                (10894)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  Bìa Cứng
                </a>
                (412)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  Sách Kèm Đĩa
                </a>
                (16)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  Bộ Hộp
                </a>
                (10)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  Sách Khổ Lớn (7)
                </a>
                (10)
              </li>
            </ol>
          </dd>
        </dl>
      </div>
    );
  }
}

export default FormalitySider;
