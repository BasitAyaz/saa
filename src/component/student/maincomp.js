import React from "react";
import "./student.css";
import logo from "../../images/logo.png";
import ReactPlayer from "react-player";
import ReactLivestream from "react-livestream";

export default class MainComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBoard: true,
      notification: false,
      lectures: false,
      books: false,
      fees: false,
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 sideBar">
            <div className="p-5">
              <img src={logo} width="100%" />
            </div>
            <div className="p-5">
              <ul className="list">
                <li
                  onClick={() =>
                    this.setState({
                      notification: false,
                      books: false,
                      fees: false,
                      lectures: false,
                      mainBoard: true,
                    })
                  }
                >
                  Main Menu
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      notification: true,
                      books: false,
                      fees: false,
                      lectures: false,
                      mainBoard: false,
                    })
                  }
                >
                  Notification
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      notification: false,
                      books: false,
                      fees: true,
                      lectures: false,
                      mainBoard: false,
                    })
                  }
                >
                  Fees
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      notification: false,
                      books: false,
                      fees: false,
                      lectures: true,
                      mainBoard: false,
                    })
                  }
                >
                  Videos
                </li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="container">
              <div className="top">
                <p className="topText">
                  <i class="fas fa-user-circle"></i> <span>Abdul Basit</span>
                </p>
              </div>
              {this.state.mainBoard ? (
                <div className="row">
                  <div className="col-md-4">
                    <div
                      onClick={() =>
                        this.setState({
                          notification: true,
                          books: false,
                          fees: false,
                          lectures: false,
                          mainBoard: false,
                        })
                      }
                      className="smallCard p-5 my-3"
                    >
                      <h1 className="color">
                        <i class="fas fa-bell"></i>
                      </h1>
                      <h2>Notification</h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      onClick={() =>
                        this.setState({
                          notification: false,
                          books: false,
                          fees: true,
                          lectures: false,
                          mainBoard: false,
                        })
                      }
                      className="smallCard p-5 my-3"
                    >
                      <h1 className="color">
                        <i class="fas fa-money-check-alt"></i>
                      </h1>
                      <h2>Fees</h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      onClick={() =>
                        this.setState({
                          notification: false,
                          books: false,
                          fees: false,
                          lectures: true,
                          mainBoard: false,
                        })
                      }
                      className="smallCard p-5 my-3"
                    >
                      <h1 className="color">
                        <i class="fas fa-play-circle"></i>
                      </h1>
                      <h2>Lectures</h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      onClick={() =>
                        this.setState({
                          notification: false,
                          books: true,
                          fees: false,
                          lectures: false,
                          mainBoard: false,
                        })
                      }
                      className="smallCard p-5 my-3"
                    >
                      <h1 className="color">
                        <i class="fas fa-book"></i>
                      </h1>
                      <h2>Books</h2>
                    </div>
                  </div>
                </div>
              ) : null}
              {this.state.lectures ? (
                <div className="video">
                  <p style={{ fontSize: "3em" }}>Video Will Appear Here</p>
                </div>
              ) : null}
              {this.state.notification ? (
                <div className="notification top p-5">
                  <h2>Notification</h2>
                </div>
              ) : null}
              {this.state.books ? (
                <div className="books top p-5">
                  <h2>Books</h2>
                </div>
              ) : null}
              {this.state.fees ? (
                <div className="fees top p-5">
                  <h2>Fees</h2>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
