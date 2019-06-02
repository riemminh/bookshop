import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { dataMenu } from "./Nav";

class Sidebar extends Component {
  componentDidMount() {
    $(".btnToggle").click(function(e) {
      e.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".sidebar").animate(
          {
            marginLeft: "0"
          },
          400
        );
      } else {
        $(this).addClass("active");
        $(".sidebar").animate(
          {
            marginLeft: "-200px"
          },
          400
        );
      }
    });
    $(".parent > a").click(function(e) {
      e.preventDefault();
      $(this)
        .next()
        .slideToggle();
      $(this)
        .parent()
        .toggleClass("active");
    });
  }
  render() {
    return (
      <div className="sidebar">
        <nav>
          <ul>
            {dataMenu.map((menu, index) => (
              <li key={index} className={menu.sub ? "parent" : ""}>
                <NavLink to={menu.url}>{menu.name}</NavLink>
                {menu.sub && (
                  <ul className="nav-dropdown-items">
                    {menu.sub.map((menusub, index1) => (
                      <li key={index1}>
                        <NavLink to={menusub.url}>{menusub.name}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Sidebar;
