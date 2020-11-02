import React from "react";
import logo from "../../images/logo.png";
import "./signin.css";

export default class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 p-5 mt-5">
                <div className='pt-5 pb-5 text-left'>
                <h1 style={{color:'#B57E2C'}}>Student Login</h1>
                </div>
              <form>
                <div className="pt-3 pb-3">
                  <input style={{backgroundColor:'transparent'}} className="inp" placeholder="Email" />
                </div>
                <div className="pt-3 pb-3">
                  <input style={{backgroundColor:'transparent'}} className="inp" placeholder="Password" />
                </div>
                <button className='submitBtn btn-block mt-5'>Login</button>
              </form>
            </div>
            <div className="col-md-6 p-5">
              <img src={logo} width="100%" />
              <div>
                  <a href='#' className='socialIcon'><i class="fab fa-facebook-square"></i></a>
                  <a href='#' className='socialIcon'><i class="fab fa-whatsapp-square"></i></a>
                  <a href='#' className='socialIcon'><i class="fas fa-envelope-square"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
