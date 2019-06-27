import React, { Component } from "react";

class FormComment extends Component {
  render() {
    return (
      <div className="ma-review-col2">
        <div className="form-add">
          <h2 className="own-review">Nhận xét của bạn cho sản phẩm này</h2>
          <form id="review-form">
            <fieldset>
              <div>
                <p>
                  Bạn đang nhận xét cho:
                  <span className="color-black font-bold">
                    Nozaki & Truyện Tranh Thiếu Nữ - Tập 3
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Bạn đánh giá sản phẩm này thế nào?{" "}
                  <span className="required">*</span>
                </p>
              </div>
              <table className="data-table" id="product-review-table">
                <thead>
                  <tr>
                    <th />
                    <th>
                      <span className="nobr">1 sao</span>
                    </th>
                    <th>
                      <span className="nobr">2 sao</span>
                    </th>
                    <th>
                      <span className="nobr">3 sao</span>
                    </th>
                    <th>
                      <span className="nobr">4 sao</span>
                    </th>
                    <th>
                      <span className="nobr">5 sao</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="first last odd">
                    <th className="rating_label">
                      <div className="rating_label_inner">Đánh giá</div>
                    </th>
                    <td>
                      <input type="radio" name="ranting[3]" className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ranting[3]" className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ranting[3]" className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ranting[3]" className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ranting[3]" className="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul className="form-list">
                <li>
                  <label htmlFor="" className="require">
                    <em>*</em>
                    Tên của bạn
                  </label>
                  <div className="input-box full-width">
                    <input
                      type="text"
                      name="nickname"
                      id="nickname_field"
                      className="input-text required-entry full-width"
                      placeholder="riem"
                    />
                  </div>
                </li>
                <li>
                  <label htmlFor="" className="require">
                    <em>*</em>
                    Tiêu đề
                  </label>
                  <div className="input-box full-width">
                    <input
                      type="text"
                      name="nickname"
                      id="nickname_field"
                      className="input-text required-entry full-width"
                      placeholder="riem"
                    />
                  </div>
                </li>
                <li>
                  <label htmlFor="" className="required">
                    <em>*</em>Nhận xét
                  </label>
                  <div className="input-box full-width">
                    <textarea
                      name="detail"
                      id="review_field"
                      className="required-entry full-width validate-length-minimum-100"
                    />
                    <h6 className="pull-right" id="count-message">
                      0 ký tự
                    </h6>
                  </div>
                </li>
              </ul>
            </fieldset>
            <div className="buttons-set">
              <button type="submit" title="Gởi nhận xét" className="button">
                <span>
                  <span>Gởi nhận xét</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormComment;
