import React from "react";
import logo from "../../images/logo.png";
import "./signup.css";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container p-5">
          <form>
            <div className="row">
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Name</label>
                <input placeholder="Name" className="inp" />
              </div>
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Father Name</label>
                <input placeholder="Father Name" className="inp" />
              </div>
             
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Contact Number</label>
                <input placeholder="+923XXXXXXXXX" className="inp" />
              </div>
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">CNIC Number (without - )</label>
                <input placeholder="4210100000000" className="inp" />
              </div>
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Email Address</label>
                <input placeholder="example@gmail.com" className="inp" />
              </div>
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Select Course</label>
                <select className='inp'>
                    <option>Select Course</option>
                    <option>Tajweed</option>
                    <option>Darse Nizami</option>
                </select>
              </div>
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Select Your Age Group</label>
                <select className='inp'>
                    <option>Select Your Age Group</option>
                    <option>5 to 10</option>
                    <option>10 to 15</option>
                    <option>15 above</option>
                </select>
              </div>
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Select Your Sity</label>
                <select className='inp'>
                    <option>Select Your City</option>
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Pishawar</option>
                    <option>Quetta</option>
                    <option>Faisalabad</option>
                </select>
              </div> 
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Select Your Country</label>
                <select className='inp'>
                    <option>Select Your Country</option>
                    <option>Pakistan</option>
                </select>
              </div> 
              <div className="col-md-6 pt-5 pb-3">
                <label className="lab">Gender</label>
                <input placeholder="Female" disabled='disabled' className="inp" />
              </div>
              <div className="col-md-12 pt-5 pb-3">
                <label className="lab">Address</label>
                <input placeholder="Address" className="inp" />
              </div>
              <div className="col-md-6 pt-5 pb-3">
                <button className='btn-block submitBtn'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
