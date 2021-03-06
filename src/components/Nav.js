import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
              {/* <img src="logo.svg" className="Nav__logo" /> */}
            </Link>

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path1">
                    Link 1
                  </Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path2">
                    Link 2
                  </Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path3">
                    Link 3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Nav;
