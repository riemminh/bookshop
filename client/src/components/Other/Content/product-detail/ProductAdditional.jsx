import React, { Component } from "react";

class ProductAdditional extends Component {
  render() {
    return (
      <div className="product_tabs_additional_contents">
        <h2>Thông Tin Chi Tiết</h2>
        <table className="data-table table-striped">
          <tbody>
            <tr className="">
              <th className="label">Mã hàng</th>
              <td className="data last">8935250702522-qt </td>
            </tr>
            <tr className="">
              <th className="label">Tên Nhà Cung Cấp</th>
              <td className="data last">
                <a href="">IPM</a>
              </td>
            </tr>
            <tr className="">
              <th className="label">Tác giả</th>
              <td className="data last">Tsubaki Izumi</td>
            </tr>
            <tr className="">
              <th className="label">NXB</th>
              <td className="data last">NXB Hồng Đức</td>
            </tr>
            <tr className="">
              <th className="label">Năm XB</th>
              <td className="data last"> 2019</td>
            </tr>
            <tr className="">
              <th className="label">Kích thước</th>
              <td className="data last">13 x 18</td>
            </tr>
            <tr className="">
              <th className="label">Số trang</th>
              <td className="data last">158</td>
            </tr>
            <tr className="">
              <th className="label">Hình thức</th>
              <td className="data last"> Bìa Mềm</td>
            </tr>
            <tr className="">
              <th className="label">Ngôn ngữ</th>
              <td className="data last">Sách tiếng Việt</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ProductAdditional;
