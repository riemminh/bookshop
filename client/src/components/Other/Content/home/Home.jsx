import React, { Component } from "react";
import { connect } from "react-redux";
import { megaIsHome, megaNotHome } from "../../../../actions/megaActions";
import HomeSlider from "./HomeSlider";
import BannerHome from "./BannerHome";
import TabHome from "./TabHome";
import TabHomeCustom from "./TabHomeCustom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import WOW from "wowjs";
const action = {
  megaIsHome,
  megaNotHome
};

const mapState = state => ({});

class Home extends Component {
  state = {
    logoIntro: true,
    mounted: false
  };
  componentWillMount() {
    this.props.megaIsHome();
  }
  componentWillUnmount() {
    this.props.megaNotHome();
  }
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  _loadMoreContent = () => {
    console.log("ele");
  };
  render() {
    return (
      <div>
        {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <HomeSlider />
        </ReactCSSTransitionGroup> */}

        <HomeSlider />

        <BannerHome />

        <TabHome tabsTitle="NỔI BẬT" />
        <TabHome tabsTitle="DEALS 24H - SÁCH TIẾNG VIỆT" />
        <TabHomeCustom tabsTitle="VĂN HỌC" />
        <TabHomeCustom tabsTitle="TÂM LÝ - KỸ NĂNGC" />
      </div>
    );
  }
}

export default connect(
  mapState,
  action
)(Home);
