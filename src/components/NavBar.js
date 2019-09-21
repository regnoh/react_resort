import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
export default class NavBar extends Component {
  state = {
    menuList: [
      { id: 1, title: "home", path: "/" },
      { id: 2, title: "rooms", path: "/rooms" }
    ]
    // isExpanded: false,
    // css: "collapse navbar-collapse"
  };
  // handleToggle = () => {
  //   !this.state.isExpanded
  //     ? this.setState({ isExpanded: true, css: "" })
  //     : this.setState({ isExpanded: false, css: "collapse navbar-collapse" });
  // };
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ width: "50%" }} alt="logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this.state.menuList.map(menu => {
              return (
                <li className="nav-item" key={menu.id}>
                  <Link className="nav-link" to={menu.path}>
                    <span className="text-capitalize">{menu.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
