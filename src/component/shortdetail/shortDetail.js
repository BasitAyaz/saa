import React from "react";
import logo from "../../images/logo.png";
import "./shortdetail.css";
import female from "../../images/female.jpg";

export default class ShortDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6 text-left p-5">
              <h1 className="py-5 color">Female Islamic Education</h1>
              <p>
                We tech Islamic education for female in every age. If you want
                to learn Tajweed Quran and Nazra Quran please sign up your
                account. in this education we will cover Tajweed Quran and
                Qira,at, Radar, and Islamic knowledge which will help you in
                your daily life. Only females are allowed. for over every course
                we deal with only female teachers. your child can also apply in
                this course in their age group. we give quality education in
                very minimal price fee.
              </p>
              <button className='apply'>Apply</button>
            </div>
            <div className="col-md-6 p-5">
              <img className='IMG' src={female} width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
