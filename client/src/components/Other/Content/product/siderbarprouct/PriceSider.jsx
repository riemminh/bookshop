import React, { Component } from "react";

class PriceSider extends Component {
  state = {
    from: "",
    to: "811523"
  };
  handleOnchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <dl className="narrow-by-list">
          <dt className="even">Giá </dt>
          <dd>
            <div className="m-slider-values left-aligned">
              <span className="m-slider-selected-value" id="left_price-applied">
                Từ
                <input
                  name="from"
                  type="text"
                  className="m-slider m-from"
                  size="2"
                  value={this.state.from}
                  onChange={this.handleOnchange}
                />
                to
                <input
                  name="to"
                  type="text"
                  className="m-slider m-to"
                  size="2"
                  value={this.state.to}
                  onChange={this.handleOnchange}
                />
              </span>
            </div>
          </dd>
        </dl>
      </div>
    );
  }
}

export default PriceSider;
