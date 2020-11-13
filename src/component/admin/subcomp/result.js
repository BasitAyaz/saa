import React from "react";
import "../admin.css";

export default class UploadResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="top p-5">
          <h2>Upload Result</h2>
          <div className="row">
            <div className="col-md-6 py-3">
              <label className="lab">Select Class</label>
              <select className="inp">
                <option>Select Class</option>
                <option>5 to 10</option>
                <option>10 to 15</option>
                <option>15 above</option>
              </select>
            </div>
            <div className="col-md-6 py-3">
              <label className="lab">Upload Excel</label>
              <input type="file" className="inp" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
