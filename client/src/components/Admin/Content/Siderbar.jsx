import React, { Component } from "react";

class Siderbar extends Component {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav ps ps--active-y">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="main.html">
                <i className="nav-icon icon-speedometer" /> Dashboard
                <span className="badge badge-info">NEW</span>
              </a>
            </li>
            <li className="nav-title">Theme</li>
            <li className="nav-item">
              <a className="nav-link" href="colors.html">
                <i className="nav-icon icon-drop" /> Colors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="typography.html">
                <i className="nav-icon icon-pencil" /> Typography
              </a>
            </li>
            <li className="nav-title">Components</li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-puzzle" /> Base
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="base/breadcrumb.html">
                    <i className="nav-icon icon-puzzle" /> Breadcrumb
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/cards.html">
                    <i className="nav-icon icon-puzzle" /> Cards
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/carousel.html">
                    <i className="nav-icon icon-puzzle" /> Carousel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/collapse.html">
                    <i className="nav-icon icon-puzzle" /> Collapse
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/jumbotron.html">
                    <i className="nav-icon icon-puzzle" /> Jumbotron
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/list-group.html">
                    <i className="nav-icon icon-puzzle" /> List group
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/navs.html">
                    <i className="nav-icon icon-puzzle" /> Navs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/pagination.html">
                    <i className="nav-icon icon-puzzle" /> Pagination
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/popovers.html">
                    <i className="nav-icon icon-puzzle" /> Popovers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/progress.html">
                    <i className="nav-icon icon-puzzle" /> Progress
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/scrollspy.html">
                    <i className="nav-icon icon-puzzle" /> Scrollspy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/switches.html">
                    <i className="nav-icon icon-puzzle" /> Switches
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tabs.html">
                    <i className="nav-icon icon-puzzle" /> Tabs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tooltips.html">
                    <i className="nav-icon icon-puzzle" /> Tooltips
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-cursor" /> Buttons
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="buttons/buttons.html">
                    <i className="nav-icon icon-cursor" /> Buttons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/brand-buttons.html">
                    <i className="nav-icon icon-cursor" /> Brand Buttons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/button-group.html">
                    <i className="nav-icon icon-cursor" /> Buttons Group
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/dropdowns.html">
                    <i className="nav-icon icon-cursor" /> Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/loading-buttons.html">
                    <i className="nav-icon icon-cursor" /> Loading Buttons
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="nav-icon icon-pie-chart" /> Charts
              </a>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon fa fa-code" /> Editors
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="editors/code-editor.html">
                    <i className="nav-icon icon-note" /> Code Editor
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="editors/markdown-editor.html">
                    <i className="nav-icon fa fa-code" /> Markdown
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="editors/text-editor.html">
                    <i className="nav-icon icon-note" /> Rich Text Editor
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-note" /> Forms
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="forms/basic-forms.html">
                    <i className="nav-icon icon-note" /> Basic Forms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="forms/advanced-forms.html">
                    <i className="nav-icon icon-note" /> Advanced
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="forms/validation.html">
                    <i className="nav-icon icon-note" /> Validation
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="google-maps.html">
                <i className="nav-icon icon-map" /> Google Maps
                <span className="badge badge-danger">PRO</span>
              </a>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star" /> Icons
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="icons/coreui-icons.html">
                    <i className="nav-icon icon-star" /> CoreUI Icons
                    <span className="badge badge-success">NEW</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/flags.html">
                    <i className="nav-icon icon-star" /> Flags
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/font-awesome.html">
                    <i className="nav-icon icon-star" /> Font Awesome
                    <span className="badge badge-secondary">4.7</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/simple-line-icons.html">
                    <i className="nav-icon icon-star" /> Simple Line Icons
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-bell" /> Notifications
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="notifications/alerts.html">
                    <i className="nav-icon icon-bell" /> Alerts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/badge.html">
                    <i className="nav-icon icon-bell" /> Badge
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/modals.html">
                    <i className="nav-icon icon-bell" /> Modals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/toastr.html">
                    <i className="nav-icon icon-bell" /> Toastr
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-energy" /> Plugins
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="plugins/calendar.html">
                    <i className="nav-icon icon-calendar" /> Calendar
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="plugins/draggable-cards.html">
                    <i className="nav-icon icon-cursor-move" /> Draggable
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="plugins/sliders.html">
                    <i className="nav-icon icon-equalizer" /> Sliders
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="plugins/spinners.html">
                    <i className="nav-icon fa fa-spinner" /> Spinners
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-list" /> Tables
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="tables/tables.html">
                    <i className="nav-icon icon-list" /> Standard Tables
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="tables/datatables.html">
                    <i className="nav-icon icon-list" /> DataTables
                    <span className="badge badge-danger">PRO</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="widgets.html">
                <i className="nav-icon icon-calculator" /> Widgets
                <span className="badge badge-info">NEW</span>
              </a>
            </li>
            <li className="nav-divider" />
            <li className="nav-title">Extras</li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star" /> Pages
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="login.html" target="_top">
                    <i className="nav-icon icon-star" /> Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="register.html" target="_top">
                    <i className="nav-icon icon-star" /> Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="404.html" target="_top">
                    <i className="nav-icon icon-star" /> Error 404
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="500.html" target="_top">
                    <i className="nav-icon icon-star" /> Error 500
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle open" href="#">
                <i className="nav-icon icon-layers" /> Apps
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item nav-dropdown">
                  <a className="nav-link nav-dropdown-toggle" href="#">
                    <i className="nav-icon icon-speech" /> Invoicing
                  </a>
                  <ul className="nav-dropdown-items">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="apps/invoicing/invoice.html"
                      >
                        <i className="nav-icon icon-speech" /> Invoice
                        <span className="badge badge-danger">PRO</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-dropdown">
                  <a className="nav-link nav-dropdown-toggle" href="#">
                    <i className="nav-icon icon-speech" /> Email
                  </a>
                  <ul className="nav-dropdown-items">
                    <li className="nav-item">
                      <a className="nav-link" href="apps/email/inbox.html">
                        <i className="nav-icon icon-speech" /> Inbox
                        <span className="badge badge-danger">PRO</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="apps/email/message.html">
                        <i className="nav-icon icon-speech" /> Message
                        <span className="badge badge-danger">PRO</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="apps/email/compose.html">
                        <i className="nav-icon icon-speech" /> Compose
                        <span className="badge badge-danger">PRO</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-divider" />
            <li className="nav-title">Labels</li>
            <li className="nav-item d-compact-none d-minimized-none">
              <a className="nav-label" href="#">
                <i className="fa fa-circle text-danger" /> Label danger
              </a>
            </li>
            <li className="nav-item d-compact-none d-minimized-none">
              <a className="nav-label" href="#">
                <i className="fa fa-circle text-info" /> Label info
              </a>
            </li>
            <li className="nav-item d-compact-none d-minimized-none">
              <a className="nav-label" href="#">
                <i className="fa fa-circle text-warning" /> Label warning
              </a>
            </li>
            <li className="nav-divider" />
            <li className="nav-title">System Utilization</li>
            <li className="nav-item px-3 d-compact-none d-minimized-none">
              <div className="text-uppercase mb-1">
                <small>
                  <b>CPU Usage</b>
                </small>
              </div>
              <div className="progress progress-xs">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <small className="text-muted">348 Processes. 1/4 Cores.</small>
            </li>
            <li className="nav-item px-3 d-compact-none d-minimized-none">
              <div className="text-uppercase mb-1">
                <small>
                  <b>Memory Usage</b>
                </small>
              </div>
              <div className="progress progress-xs">
                <div className="progress-bar bg-warning" role="progressbar" />
              </div>
              <small className="text-muted">11444GB/16384MB</small>
            </li>
            <li className="nav-item px-3 mb-3 d-compact-none d-minimized-none">
              <div className="text-uppercase mb-1">
                <small>
                  <b>SSD 1 Usage</b>
                </small>
              </div>
              <div className="progress progress-xs">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <small className="text-muted">243GB/256GB</small>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Siderbar;
