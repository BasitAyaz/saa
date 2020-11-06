import React from "react";
import logo from "../../images/logo.png";
import './header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <img width="170px" src={logo} />
        </div>
        <div
          style={{ backgroundColor: "#B57E2C" }}
        >
          <nav class="navbar container navbar-expand-lg navbar-dark">
            <button
            style={{border:'none'}}
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signup">
                    Sign Up
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/student">
                    Student Login
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <button className="donateBtn">Donate</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
