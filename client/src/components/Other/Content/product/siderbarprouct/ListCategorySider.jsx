import React, { Component } from "react";

class ListCategorySider extends Component {
  render() {
    return (
      <div>
        <dl className="narrow-by-list">
          <dt className="odd">Nhóm sản phẩm</dt>
          <dd className="odd">
            <ol className="m-parent-category-list">
              <li>
                <a href="">parent category 1</a>
              </li>
              <li>
                <a href="">parent category 2</a>
              </li>
            </ol>
            <div className="m-current-category">
              <span className="m-selected-filter-item">
                Sách tiếng Việt(CURRENT CATEGORY)
              </span>
            </div>
            <ol className="m-child-category-list m-filter-item-list  m-expandable-filter">
              <li>
                <a href="" title="Thiếu nhi">
                  Thiếu nhi
                </a>
                (11424)
              </li>
              <li>
                <a href="" title="Thiếu nhi">
                  Thiếu nhi
                </a>
                (11424)
              </li>
            </ol>
          </dd>
        </dl>
      </div>
    );
  }
}
export default ListCategorySider;
