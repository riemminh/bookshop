import React, { Component } from "react";

class CommentItem extends Component {
  render() {
    return (
      <div className="f-review-container">
        <div className="fhs-review-title">
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>
                    <a href="#">Buổi xem phim không thể tưởng </a>
                    <div className="rating-box">
                      <div className="rating" style={{ width: "100%" }} />
                    </div>
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fhs-review-by-block">
          <p>
            Nhận xét bởi{" "}
            <span className="fhs-review-by">Nguyễn Hoàng Thái Phúc </span>
            vào ngày <span className="date">24/06/2019</span>
          </p>
        </div>
        <div className="fhs-review-block-content">
          <p>
            Seo cô nàng được mệnh danh là phù thuỷ trường học bởi tính cách cùng
            cách nói của cô khiến người khác cực kì bực tức . Thiếu lịch sử
            nhưng với cô lại cho đó là phép lịch sự tối thiểu , .... và trong
            môn bóng rổ , cô cứ lầm tưởng hoặc có khái niệm khác về nó đó là ném
            bóng vào người , .. Một sát thủ hay ác mộng của các chàng trai và là
            cái miệng ăn mắm ăn muối với các bạn nữ . Tuy nhiên Seo lại sở hữu
            một nét đẹp đó là giọng hát của cô được ví như là thiên nữ , là nàng
            tiên cá . Cất mãi giọng ca của mình để rồi khiến người khác phải
            thất vọng về nhan sắc lẫn tính cách con người . Cậu chàng trai lớp
            dưới có gặp ác mộng về cô , nhưng cô luôn rủ cậu đi chơi cùng để
            giúp cả hai thân thiết hơn thì thay vào đó cậu lại có một buổi xem
            phim ác liệt hơn , căng thẳng hơn{" "}
          </p>
        </div>
        <div className="fhs-review-title">
          <table>
            <tbody>
              <tr>
                <td>
                  <span
                    id="review-fhs-112620"
                    className="fhs-review-like-abuse"
                  >
                    &nbsp;
                    <span className="fhs_review-count-like">0 lượt thích.</span>
                    <span>
                      <button>Thích </button>
                      hoặc
                      <button>Báo cáo </button>
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default CommentItem;
