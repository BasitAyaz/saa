import React from "react";
import logo from "../../images/logo.png";
import "./dashboard.css";

export default class Timing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <div className='timingparent pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-6 py-5'>
                    <div className='sideRibbon'>Of the Female</div>
                    <div className='sideRibbon'>By the Female</div>
                    <div className='sideRibbon'>For the Female</div>
                </div>
                <div className='col-md-6 py-5'>
                    <div className='row text-white'>

                    <div className='col-md-4 py-4'>
                        <h3>Age 5 to 10</h3>
                        <p>7 to 9</p>
                        <p>Monday</p>
                        <p>Wednesday</p>
                        <p>Friday</p>
                    </div>
                    <div className='col-md-4 py-4'>
                        <h3>Age 10 to 15</h3>
                        <p>7 to 9</p>
                        <p>Tuesday</p>
                        <p>Thursday</p>
                        <p>Saturday</p>
                    </div>
                    <div className='col-md-4 py-4'>
                        <h3>Age 15 above</h3>
                        <p>3 to 5</p>
                        <p>Tuesday</p>
                        <p>Thursday</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
  }
}
