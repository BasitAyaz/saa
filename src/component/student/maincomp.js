import React from "react";
import "./student.css";
import logo from "../../images/logo.png";

export default class MainComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 sideBar">
            <div className="p-5">
              <img src={logo} width="100%" />
            </div>
            <div className='p-5'>
                <ul classNames='sideList'>
                    <li>Messages</li>
                    <li>Fees</li>
                    <li>Videos</li>
                    <li>Logout</li>
                </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          ></div>
        </div>
      </div>
    );
  }
}
