import React from "react";
import "../admin.css";

export default class UploadLecture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="top p-5">
          <h2>Upload Video</h2>
          <div className="row">
            <div className="col-md-6 p-3">
              <select className="inp">
                <option>Select Class</option>
                <option>5 to 10</option>
                <option>10 to 15</option>
                <option>15 above</option>
              </select>
            </div>
            <div className="col-md-6 p-3">
              <input className="inp" placeholder="Title" />
            </div>
            {/* <div className="col-md-6 p-3">
              <p>
                Lecture Number :{" "}
                <input type="text" className='inp' placeholder="Lecture Number" />
              </p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
