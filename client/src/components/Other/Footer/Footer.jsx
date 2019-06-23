import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="ma-footer-static">
          <div className="footer-static">
            <div className="container">
              <div className="container-inner">
                <div className="row">
                  <div className="f-col f-col-1 col-sm-6 col-md-3 col-sms-6 col-smb-12">
                    <div className="footer-static-title">
                      <h3>DỊCH VỤ</h3>
                    </div>
                    <div className="footer-static-content">
                      <ul>
                        <li>
                          <a href="">Điều khoản sử dụng</a>
                        </li>
                        <li>
                          <a href="">Chính sách bảo mật</a>
                        </li>
                        <li>
                          <a href="">Giới thiệu Fahasa</a>
                        </li>
                        <li>
                          <a href="">Hệ thống trung tâm - nhà sách</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="f-col f-col-1 col-sm-6 col-md-3 col-sms-6 col-smb-12">
                    <div className="footer-static-title">
                      <h3>HỖ TRỢ</h3>
                    </div>
                    <div className="footer-static-content">
                      <ul>
                        <li>
                          <a href="">Chính sách đổi - trả - hoàn tiền</a>
                        </li>
                        <li>
                          <a href="">Chính sách khách sỉ</a>
                        </li>
                        <li>
                          <a href="">Phương thức vận chuyển</a>
                        </li>
                        <li>
                          <a href="">Phương thức thanh toán</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="f-col f-col-1 col-sm-6 col-md-3 col-sms-6 col-smb-12">
                    <div className="footer-static-title">
                      <h3>TÀI KHOẢN CỦA TÔI</h3>
                    </div>
                    <div className="footer-static-content">
                      <ul>
                        <li>
                          <a href="">Đăng nhập/Tạo mới tài khoản</a>
                        </li>
                        <li>
                          <a href="">Thay đổi địa chỉ khách hàng</a>
                        </li>
                        <li>
                          <a href="">Chi tiết tài khoản</a>
                        </li>
                        <li>
                          <a href="">Lịch sử mua hàng</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="custom-address f-col f-col-1 col-sm-6 col-md-3 col-sms-6 col-smb-12">
                    <div className="footer-static-title">
                      <h3>LIÊN HỆ</h3>
                    </div>
                    <div className="footer-static-content">
                      <ul>
                        <li class="first">
                          <em className="fa fa-map-marker">&nbsp;</em>
                          <span>Địa Chỉ:</span> 60-62 Lê Lợi, Q.1, TP. HCM{" "}
                        </li>
                        <li>
                          <em className="fa fa-envelope">&nbsp;</em>
                          <span>Email:</span>info@fahasa.com
                        </li>
                        <li className="last">
                          <em class="fa fa-phone">&nbsp;</em>
                          <span>Phone:</span>1900636467
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p className="copy">
                &copy; Copyright {new Date().getFullYear()}, Riem cover Fahasha
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
