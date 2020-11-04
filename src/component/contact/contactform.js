import React from "react";
import logo from "../../images/logo.png";
import "./contact.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="pt-3 pb-3 col-md-6">
                    <input className="formInp" placeholder="Name" />
                  </div>
                  <div className="pt-3 pb-3 col-md-6">
                    <input className="formInp" placeholder="Contact" />
                  </div>
                  <div className="pt-3 pb-3 col-md-12">
                    <input className="formInp" placeholder="Email Address" />
                  </div>
                  <div className="pt-3 pb-3 col-md-12">
                    <textarea
                      className="formInp"
                      placeholder="Type your Message"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src={logo} width="60%" />
              <div className="font-weight-bold p-3">
                <i class="fas fa-envelope-square ico"></i>
                <p> info@saa.com</p>
              </div>
              <div className="font-weight-bold p-3">
                <i class="fab fa-whatsapp-square ico"></i>
                <p> 03000000</p>
              </div>
              <div className="font-weight-bold p-3">
                <i class="fas fa-phone-square ico"></i>
                <p>030000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
