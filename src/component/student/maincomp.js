import React from "react";
import "./student.css";
import logo from "../../images/logo.png";
import ReactPlayer from "react-player";
import ReactLivestream from "react-livestream";
import qaida from "../../images/qaida.jpg";
import ajaibulQuran from "../../images/ajaibulQuran.jpg";

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
                <div className="video my-3">
                  <p style={{ fontSize: "3em" }}>Video Will Appear Here</p>
                </div>
              ) : null}
              {this.state.notification ? (
                <div className="notification top p-5 my-3">
                  <h2>Notification</h2>
                  <div className="p-4 notifi my-3">
                    <p className="notifiText">
                      Your class will be on time as per scheduale
                    </p>
                    <hr />
                    <p>Date and Time</p>
                  </div>
                  <div className="p-4 notifi my-3">
                    <p className="notifiText">
                      Your class will be on time as per scheduale
                    </p>
                    <hr />
                    <p>Date and Time</p>
                  </div>
                  <div className="p-4 notifi my-3">
                    <p className="notifiText">
                      Your class will be on time as per scheduale
                    </p>
                    <hr />
                    <p>Date and Time</p>
                  </div>
                </div>
              ) : null}
              {this.state.books ? (
                <div className="books top p-5 my-3">
                  <h2>Books</h2>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 p-5">
                        <div>
                          <img src={qaida} width="100%" />
                          <p className='border-top'>Madani Qaida</p>
                        </div>
                      </div>
                      <div className="col-md-3 p-5">
                        <div>
                          <img src={ajaibulQuran} width="100%" />
                          <p className='border-top'>Ajaib-ul-Quran</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {this.state.fees ? (
                <div className="fees top p-5 my-3">
                  <h2>Fees</h2>
                  <div className="paper">
                    <div className="feesCard">
                      <div className="text-center">
                        <img width="120px" src={logo} />
                      </div>
                      <p className="slipName">Bank Slip</p>
                      <div className="details">
                        <div className="py-2 px-3">
                          <p className="FeesDetails">
                            Name: <span className="color">Basit Ahmed</span>
                          </p>
                          <p className="FeesDetails">
                            Father Name:{" "}
                            <span className="color">Ayaz Ahmed</span>
                          </p>
                          <p className="FeesDetails">
                            Contact: <span className="color">03072199560</span>
                          </p>
                          <p className="FeesDetails">
                            CNIC: <span className="color">4210119738169</span>
                          </p>
                          <p className="FeesDetails">
                            Course: <span className="color">Tajweed Quran</span>
                          </p>
                        </div>
                        <div className="p-3">
                          <table className="feesTable">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th>Particular</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>May 2021</td>
                                <td>200/-</td>
                              </tr>
                              <tr>
                                <td>.</td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan="2">Total</td>
                                <td>200/-</td>
                              </tr>
                            </tfoot>
                          </table>

                          <div className="signatureBox p-3">
                            <p className="sign">Candidate Sign</p>
                            <p className="sign">Authorized Sign</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feesCard">
                      <div className="text-center">
                        <img width="120px" src={logo} />
                      </div>
                      <p className="slipName">Student Slip</p>
                      <div className="details">
                        <div className="py-2 px-3">
                          <p className="FeesDetails">
                            Name: <span className="color">Basit Ahmed</span>
                          </p>
                          <p className="FeesDetails">
                            Father Name:{" "}
                            <span className="color">Ayaz Ahmed</span>
                          </p>
                          <p className="FeesDetails">
                            Contact: <span className="color">03072199560</span>
                          </p>
                          <p className="FeesDetails">
                            CNIC: <span className="color">4210119738169</span>
                          </p>
                          <p className="FeesDetails">
                            Course: <span className="color">Tajweed Quran</span>
                          </p>
                        </div>
                        <div className="p-3">
                          <table className="feesTable">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th>Particular</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>May 2021</td>
                                <td>200/-</td>
                              </tr>
                              <tr>
                                <td>.</td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan="2">Total</td>
                                <td>200/-</td>
                              </tr>
                            </tfoot>
                          </table>

                          <div className="signatureBox p-3">
                            <p className="sign">Candidate Sign</p>
                            <p className="sign">Authorized Sign</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
