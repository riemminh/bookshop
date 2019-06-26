import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../../../actions/megaActions";

const action = {
  getCategories
};

const mapState = state => ({
  categories: state.mega.categories,
  isHome: state.mega.isHome
});

class Megamenu extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { categories, isHome } = this.props;
    return (
      <div className={isHome ? "block-content" : "block-content notHome"}>
        <div className="navbar navbar-inverse">
          <div
            id="verticalmenu"
            className="verticalmenu offset-canvas-menu-play"
          >
            <div className="navbar">
              <div className="navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav verticalmenu">
                  {categories &&
                    categories.map((category, index) => (
                      <li key={index} className="parent dropdown aligned-left ">
                        <Link to={`/products`}>
                          <span className="menu-title">{category.name}123</span>
                          <b className="caret" />
                        </Link>
                        {/* dropdown-menu */}
                        <div className="dropdown-menu">
                          <div className="dropdown-menu-inner">
                            {/* row */}
                            <div className="row">
                              {category.childNodes.map((subCate, index1) => (
                                <div
                                  key={index1}
                                  className="mega-col col-sm-3 "
                                >
                                  <div className="mega-col-inner">
                                    <h3>
                                      <span>
                                        <strong>
                                          <a>
                                            <span>{subCate.name}</span>
                                          </a>
                                        </strong>
                                      </span>
                                    </h3>
                                    <ul className="nav-links">
                                      {subCate.childNodes.map(
                                        (childSub, index2) => (
                                          <li key={index2}>
                                            <a>{childSub.name}</a>
                                          </li>
                                        )
                                      )}
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
                              ))}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  action
)(Megamenu);
