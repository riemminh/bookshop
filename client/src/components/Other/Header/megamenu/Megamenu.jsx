import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../../../actions/megaActions";

const action = {
  getCategories
};

const mapState = state => ({
  categories: state.mega.categories
});

class Megamenu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { categories } = this.props;
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
                  {categories &&
                    categories.map(category => (
                      <li className="parent dropdown aligned-left ">
                        <a>
                          <span className="menu-title">{category.name}</span>
                          <b className="caret" />
                        </a>
                        {/* dropdown-menu */}
                        <div className="dropdown-menu">
                          <div className="dropdown-menu-inner">
                            {/* row */}
                            <div className="row">
                              {category.childNodes.map(subCate => (
                                <div className="mega-col col-sm-3 ">
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
                                      {subCate.childNodes.map(childSub => (
                                        <li>
                                          <a>{childSub.name}</a>
                                        </li>
                                      ))}
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
