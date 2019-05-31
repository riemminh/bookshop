import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const dataMenu = [
      {
        name: "Dashboard",
        url: "/admin/dashboard"
      },
      {
        name: "Profile",
        url: "/admin/profile",
        sub: [
          {
            name: "Profile_Sub1",
            url: "/admin/profile/sub1"
          },
          {
            name: "Profile_Sub2",
            url: "/admin/profile/sub2"
          },
          {
            name: "Profile_Sub3",
            url: "/admin/profile/sub3"
          }
        ]
      },
      {
        name: "User",
        url: "/admin/user",
        sub: [
          {
            name: "User_Sub1",
            url: "/admin/user/sub1"
          },
          {
            name: "User_Sub2",
            url: "/admin/user/sub2"
          },
          {
            name: "User_Sub3",
            url: "/admin/user/sub3"
          }
        ]
      }
    ];
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
