import React from "react";
import logo from "../../images/logo.png";
import "./dashboard.css";

export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <div className='container pt-5 pb-5'>
            <div className='p-5'>
                <h1 className='mainHeading'>Over Popular Courses</h1>
            </div>
            <div className='row'>
                <div className='col-md-4 p-5'>
                    <div className='courseCard p-5'>Darse Nizami</div>
                </div>
                <div className='col-md-4 p-5'>
                    <div className='courseCard p-5'>Tajveed Quran</div>
                </div>
            </div>
        </div>
    </div>;
  }
}
