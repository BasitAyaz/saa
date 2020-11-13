import React from "react";
import logo from "../../images/logo.png";
import "./signup.css";
import firebase from "firebase";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      alertMessage: "",
      alertTitle: "",
      formStatus: false,
      dbcourse: [],
      dbcity: [],
      name: "",
      fatherName: "",
      contactNumber: "",
      cnic: "",
      email: "",
      password: "",
      password2: "",
      course: "",
      ageGroup: "",
      city: "",
      country: "",
      gender: "",
      address: "",
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .child(`form/`)
      .on("value", (data) => {
        console.log();
        let formStatus = data.val();
        this.setState({
          formStatus: formStatus.form,
          dbcity: formStatus.city,
          dbcourse: formStatus.course,
        });
      });
  }
  myalert(alert, alertTitle, alertMessage) {
    this.setState({
      alert: alert,
      alertTitle: alertTitle,
      alertMessage: alertMessage,
    });
  }
  signup(e) {
    e.preventDefault();
    let {
      name,
      fatherName,
      contactNumber,
      cnic,
      email,
      course,
      ageGroup,
      city,
      country,
      gender,
      address,
      password,
      password2,
    } = this.state;
    let obj = {
      name,
      fatherName,
      contactNumber,
      cnic,
      email,
      course,
      ageGroup,
      city,
      country,
      gender,
      address,
      password,
      password2,
    };
    if (password === password2) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(obj.email, obj.password)
        .then((success) => {
          let id = success.user.uid;
          obj.uid = id;
          firebase
            .database()
            .ref("/")
            .child(`students/${obj.city}/${obj.course}/${obj.uid}`)
            .set(obj)
            .then((dataSend) => {
              this.myalert(true, "Registration", "Form Submited Successfully");
              console.log("Data Send Success");
              this.setState({
                name: "",
                fatherName: "",
                contactNumber: "",
                cnic: "",
                email: "",
                password: "",
                password2: "",
                course: "",
                ageGroup: "",
                city: "",
                country: "",
                gender: "",
                address: "",
              });
            });
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(obj);
  }
  render() {
    const { dbcourse, dbcity } = this.state;
    return (
      <div>
        <div className="container p-5">
          {this.state.formStatus ? (
            <form>
              <div className="row">
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Name</label>
                  <input
                    onChange={(e) => this.setState({ name: e.target.value })}
                    value={this.state.name}
                    placeholder="Name"
                    className="inp"
                  />
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Father Name</label>
                  <input
                    onChange={(e) =>
                      this.setState({ fatherName: e.target.value })
                    }
                    value={this.state.fatherName}
                    placeholder="Father Name"
                    className="inp"
                  />
                </div>

                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Contact Number</label>
                  <input
                    onChange={(e) =>
                      this.setState({ contactNumber: e.target.value })
                    }
                    value={this.state.contactNumber}
                    placeholder="+923XXXXXXXXX"
                    className="inp"
                  />
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">CNIC Number (without - )</label>
                  <input
                    onChange={(e) => this.setState({ cnic: e.target.value })}
                    value={this.state.cnic}
                    placeholder="4210100000000"
                    className="inp"
                  />
                </div>
                <div className="col-md-12 pt-5 pb-3">
                  <label className="lab">Email Address</label>
                  <input
                    onChange={(e) => this.setState({ email: e.target.value })}
                    value={this.state.email}
                    type="email"
                    placeholder="example@gmail.com"
                    className="inp"
                  />
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Password</label>
                  <input
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    value={this.state.password}
                    type="password"
                    placeholder="Password"
                    className="inp"
                  />
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Confirm Password</label>
                  <input
                    onChange={(e) =>
                      this.setState({ password2: e.target.value })
                    }
                    value={this.state.password2}
                    type="password"
                    placeholder="Password"
                    className="inp"
                  />
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Select Course</label>
                  <select
                    onChange={(e) => this.setState({ course: e.target.value })}
                    value={this.state.course}
                    className="inp"
                  >
                    <option>Select Course</option>
                    {dbcourse.map((item, i) => {
                      return <option key={i}>{item}</option>;
                    })}
                  </select>
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Select Your Age Group</label>
                  <select
                    onChange={(e) =>
                      this.setState({ ageGroup: e.target.value })
                    }
                    value={this.state.ageGroup}
                    className="inp"
                  >
                    <option>Select Your Age Group</option>
                    <option>5 to 10</option>
                    <option>10 to 15</option>
                    <option>15 above</option>
                  </select>
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Select Your Sity</label>
                  <select
                    onChange={(e) => this.setState({ city: e.target.value })}
                    value={this.state.city}
                    className="inp"
                  >
                    <option>Select Your City</option>
                    {dbcity.map((item, i) => {
                      return <option key={i}>{item}</option>;
                    })}
                  </select>
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Select Your Country</label>
                  <select
                    onChange={(e) => this.setState({ country: e.target.value })}
                    value={this.state.country}
                    className="inp"
                  >
                    <option>Select Your Country</option>
                    <option>Pakistan</option>
                  </select>
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <label className="lab">Gender</label>
                  <input
                    placeholder="Female"
                    disabled="disabled"
                    className="inp"
                  />
                </div>
                <div className="col-md-12 pt-5 pb-3">
                  <label className="lab">Address</label>
                  <input
                    onChange={(e) => this.setState({ address: e.target.value })}
                    value={this.state.address}
                    placeholder="Address"
                    className="inp"
                  />
                </div>
                <div className="col-md-6 pt-5 pb-3">
                  <button
                    onClick={(e) => this.signup(e)}
                    className="btn-block submitBtn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="p-5">
              <p style={{ fontSize: "2em", color: "lightgrey" }}>
                Form is Currently not Available for more details <br />{" "}
                <a href="#">SAA Madarsa Lilbanat</a>
              </p>
            </div>
          )}
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
