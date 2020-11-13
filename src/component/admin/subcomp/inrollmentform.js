import React from "react";
import "../admin.css";
import firebase from "firebase";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

export default class AdminScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      alertMessage: "",
      alertTitle: "",
      toggle: false,
      course: [],
      city: [],
    };
  }
  componentDidMount(){
    firebase
      .database()
      .ref("/")
      .child(`form/`).on('value',(data)=>{
        console.log()
        let formStatus = data.val()
        this.setState({toggle:formStatus.form})
      })
  }
  myalert(alert, alertTitle, alertMessage) {
    this.setState({
      alert: alert,
      alertTitle: alertTitle,
      alertMessage: alertMessage,
    });
  }
  formOpen() {
    const { course, city } = this.state;
    let obj = {
      course,
      city,
      form: true,
    };
    firebase
      .database()
      .ref("/")
      .child(`form/`)
      .set(obj)
      .then((success) => {
        this.myalert(true, "Inrolment Form", "Inrolment Form has been open");
        this.setState({ toggle: true });
        console.log("Success", success);
      });
  }
  formClose() {
    let obj = {
      form: false,
    };
    firebase
      .database()
      .ref("/")
      .child(`form/`)
      .set(obj)
      .then((success) => {
        this.myalert(true, "Inrolment Form", "Inrolment Form has been closed");
        this.setState({ toggle: false });
        console.log("Success", success);
      });
  }
  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className="top p-5">
          <h2>Registration Form</h2>
          <div className="row">
            <div className="col-md-6 p-5">
              <label className="lab" for="countryList">
                Enter the city where you are offering these If you want to open
                this course in more then one city seprate your Value by (,) like
                this
              </label>
              <input
                onChange={(e) =>
                  this.setState({ city: e.target.value.split(",") })
                }
                id="countryList"
                className="inp"
                placeholder="Karachi, Lahore, Islamabad"
              />
            </div>
            <div className="col-md-6 p-5">
              <label className="lab" for="courseList">
                Enter Your Course If you want to open more then one course
                seprate your Value by (,) like this
              </label>
              <input
                onChange={(e) =>
                  this.setState({ course: e.target.value.split(",") })
                }
                id="courseList"
                className="inp"
                placeholder="Couse 1, Course 2, Course 3"
              />
            </div>

            <div className="col-md-12 text-center">
              <h3>
                {" "}
                Form Trigger:{" "}
                <span style={{ cursor: "pointer", fontSize: "1.5em" }}>
                  {toggle ? (
                    <i
                      onClick={() => this.formClose()}
                      class="fas fa-toggle-on"
                    ></i>
                  ) : (
                    <i
                      onClick={() => this.formOpen()}
                      class="fas fa-toggle-off"
                    ></i>
                  )}
                </span>
              </h3>
            </div>
          </div>
        </div>
        <SweetAlert
          show={this.state.alert}
          title={this.state.alertTitle}
          text={this.state.alertMessage}
          onConfirm={() => this.setState({ alert: false })}
        />
      </div>
    );
  }
}
