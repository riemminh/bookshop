import React, { Component } from "react";
import { connect } from "react-redux";
import { megaIsHome, megaNotHome } from "../../../../actions/megaActions";

const action = {
  megaIsHome,
  megaNotHome
};

const mapState = state => ({});

class Home extends Component {
  componentWillMount() {
    this.props.megaIsHome();
  }
  componentWillUnmount() {
    this.props.megaNotHome();
  }
  render() {
    return (
      <div>
        <h1>Home Page1</h1>
      </div>
    );
  }
}

export default connect(
  mapState,
  action
)(Home);
