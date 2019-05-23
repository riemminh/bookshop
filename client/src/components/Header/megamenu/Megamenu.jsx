import React, { Component } from "react";

class Megamenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="block-content">
        <div className="navbar navbar-inverse">
          <div
            id="verticalmenu"
            className="verticalmenu offset-canvas-menu-play"
          >
            <div className="navbar">
              <div className="navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav verticalmenu">
                  <li className="parent dropdown aligned-left ">
                    <a>
                      <span className="menu-title">Sách Trong Nước</span>
                      <b className="caret" />
                    </a>
                    {/* dropdown-menu */}
                    <div className="dropdown-menu">
                      <div className="dropdown-menu-inner">
                        {/* row */}
                        <div className="row">
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>VĂN HỌC</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul className="nav-links">
                                <li>
                                  <a>Tiểu Thuyết</a>
                                </li>
                                <li>
                                  <a>Truyện Ngắn - Tản Văn</a>
                                </li>
                                <li>
                                  <a>Light Novel</a>
                                </li>
                                <li>
                                  <a>Ngôn Tình</a>
                                </li>
                                <li>
                                  <span>
                                    <a href="">
                                      <span>Xem thêm…</span>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>KINH TẾ</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul className="nav-links">
                                <li>
                                  <a>Nhân Vật - Bài Học Kinh Doanh</a>
                                </li>
                                <li>
                                  <a>Quản Trị - Lãnh Đạo</a>
                                </li>
                                <li>
                                  <a>Marketing - Bán Hàng</a>
                                </li>
                                <li>
                                  <a>Phân Tích Kinh Tế</a>
                                </li>
                                <li>
                                  <span>
                                    <a href="">
                                      <span>Xem thêm…</span>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>TÂM LÝ - KĨ NĂNG SỐNG</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul className="nav-links">
                                <li>
                                  <a>Kỹ Năng Sống</a>
                                </li>
                                <li>
                                  <a>Rèn Luyện Nhân Cách</a>
                                </li>
                                <li>
                                  <a>Tâm Lý</a>
                                </li>
                                <li>
                                  <a>Sách Cho Tuổi Mới Lớn</a>
                                </li>
                                <li>
                                  <span>
                                    <a href="">
                                      <span>Xem thêm…</span>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>NUÔI DẠY CON</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul className="nav-links">
                                <li>
                                  <a>Cẩm Nang Làm Cha Mẹ</a>
                                </li>
                                <li>
                                  <a>Phương Pháp Giáo Dục Trẻ Các Nước</a>
                                </li>
                                <li>
                                  <a>Phát Triển Trí Tuệ Cho Trẻ</a>
                                </li>
                                <li>
                                  <a>Phát Triển Kỹ Năng Cho Trẻ</a>
                                </li>
                                <li>
                                  <span>
                                    <a href="">
                                      <span>Xem thêm…</span>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>SÁCH THIẾU NHI</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul class="nav-links">
                                <li>
                                  <a>Manga - Comic</a>
                                </li>
                                <li>
                                  <a>Kiến Thức Bách Khoa</a>
                                </li>
                                <li>
                                  <a>Sách Tranh Kỹ Năng Sống Cho Trẻ</a>
                                </li>
                                <li>
                                  <a>Vừa Học - Vừa Học Vừa Chơi Với Trẻ</a>
                                </li>
                                <li>
                                  <span>
                                    <a>
                                      <span>Xem Thêm...</span>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>TIỂU SỬ - HỒI KÝ</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul class="nav-links">
                                <li>
                                  <a>Câu Chuyện Cuộc Đời</a>
                                </li>
                                <li>
                                  <a>Chính Trị</a>
                                </li>
                                <li>
                                  <a>Kinh Tế</a>
                                </li>
                                <li>
                                  <a>Nghệ Thuật - Giải Trí</a>
                                </li>
                                <li>
                                  <span>
                                    <a>
                                      <span>Xem thêm...</span>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>GIÁO KHOA - THAM KHẢO</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul class="nav-links">
                                <li>
                                  <a>Cấp 1</a>
                                </li>
                                <li>
                                  <a>Cấp 2</a>
                                </li>
                                <li>
                                  <a>Cấp 3</a>
                                </li>
                                <li>
                                  <a>Luyện Thi ĐH - CĐ</a>
                                </li>
                                <li>
                                  <span>
                                    <a>
                                      <span>Xem thêm…</span>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>SÁCH HỌC NGOẠI NGỮ</span>
                                    </a>
                                  </strong>
                                </span>
                              </h3>
                              <ul class="nav-links">
                                <li>
                                  <a>Tiếng Anh</a>
                                </li>
                                <li>
                                  <a>Tiếng Nhật</a>
                                </li>
                                <li>
                                  <a>Tiếng Hoa</a>
                                </li>
                                <li>
                                  <a>Tiếng Hàn</a>
                                </li>
                                <li>
                                  <span>
                                    <em>
                                      <a>
                                        <span>Xem Thêm...</span>
                                      </a>
                                    </em>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>SÁCH MỚI</span>
                                    </a>
                                  </strong>
                                </span>
                                <span className="tim">&nbsp;♥</span>
                              </h3>
                            </div>
                          </div>
                          <div className="mega-col col-sm-3 ">
                            <div className="mega-col-inner">
                              <h3>
                                <span>
                                  <strong>
                                    <a>
                                      <span>SÁCH BÁN CHẠY</span>
                                    </a>
                                  </strong>
                                </span>
                                <span className="tim">&nbsp;♥</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="parent dropdown aligned-left ">
                    <a>
                      <span className="menu-title">FOREIGN BOOKS</span>
                      <b className="caret" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Megamenu;
