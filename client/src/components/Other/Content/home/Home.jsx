import React, { Component } from "react";
import { connect } from "react-redux";
import { megaIsHome, megaNotHome } from "../../../../actions/megaActions";
import HomeSlider from "./HomeSlider";
import BannerHome from "./BannerHome";
import TabHome from "./TabHome";
import TabHomeCustom from "./TabHomeCustom";

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
        <HomeSlider />
        <BannerHome />
        <TabHome tabsTitle="NỔI BẬT" />
        <TabHome tabsTitle="DEALS 24H - SÁCH TIẾNG VIỆT" />
        <TabHomeCustom tabsTitle="VĂN HỌC" />
      </div>
    );
  }
}

export default connect(
  mapState,
  action
)(Home);
