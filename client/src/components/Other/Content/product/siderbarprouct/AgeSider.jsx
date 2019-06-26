import React, { Component } from "react";

class AgeSider extends Component {
  render() {
    return (
      <div>
        <dl className="narrow-by-list">
          <dt className="odd">ĐỘ TUỔI</dt>
          <dd className="odd">
            <ol className="m-filter-css-checkboxes ">
              <li>
                <a className="m-checkbox-unchecked " href="">
                  5 - 15
                </a>
                (18)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  0 - 6
                </a>
                (8)
              </li>
              <li>
                <a className="m-checkbox-unchecked " href="">
                  6+
                </a>
                (5)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  6 - 15+
                </a>
                (513)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  8 - 15+
                </a>
                (345)
              </li>
              <li>
                <a className="m-checkbox-unchecked m-checkbox-checked" href="">
                  0 - 3+
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

export default AgeSider;
