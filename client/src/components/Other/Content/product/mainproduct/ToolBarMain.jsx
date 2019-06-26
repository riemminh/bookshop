import React, { Component } from "react";

class ToolBarMain extends Component {
  render() {
    return (
      <div className="toolbar row">
        {/* 3 */}
        <div className="sorter col-sm-3 col-xs-7 col-md-2 ">
          <div className="sort-by dropdownfhs">
            <select>
              <option>Sắp xếp </option>
              <option>Bán Chạy Tuần </option>
            </select>
          </div>
        </div>
        {/* 3 */}
        <div className="pager col-sm-8 col-xs-5  col-md-10">
          <div className="row">
            <div className="hidden-sm  col-md-3 hidden-xs">
              <div className="limiter hidden1-xs">
                <div className="select-sort-by dropdownfhs">
                  <select>
                    <option>12 sản phẩm </option>
                    <option>24 sản phẩm </option>
                    <option>48 sản phẩm </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-sm-3 col-xs-12 col-md-3" />
            <div className="col-sm-9 hidden-xs col-md-6">
              <div className="pages">
                <ol>
                  <li className="current">
                    <a>1</a>
                  </li>
                  <li>
                    <a href="">2</a>
                  </li>
                  <li>
                    <a href="">3</a>
                  </li>
                  <li>
                    <a href="">4</a>
                  </li>
                  <li>
                    <a href="">5</a>
                  </li>

                  <li>
                    <a className="next i-next">
                      <i className="fa fa-chevron-right " />
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBarMain;
