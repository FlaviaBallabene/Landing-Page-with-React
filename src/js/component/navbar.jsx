import React from "react";
import PropTypes from "prop-types";

//create your first component
const Navbar = (props) => {
  return (
    <div className="text-center">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="row w-100 justify-content-between">
            <div className="col-auto">
              <a className="navbar-brand" href="#">
                Start Bootstrap
              </a>
            </div>
            <div className="col-auto">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  {props.nav1}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {props.nav2}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {props.nav3}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {props.nav4}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.PropTypes = {
  nav1: PropTypes.string.isRequired,
  nav2: PropTypes.string.isRequired,
  nav3: PropTypes.string.isRequired,
  nav4: PropTypes.string.isRequired,
};

export default Navbar;
