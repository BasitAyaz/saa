import React from "react";
import logo from "../../images/logo.png";
import "./admin.css";
import RegistrationForm from "./subcomp/inrollmentform";
import StudentData from "./subcomp/studentdata";
import QuestionANswer from "./subcomp/questionanswer";
import UploadLecture from "./subcomp/uploadlecture";
import UploadResult from "./subcomp/result";
import ContactMessage from "./subcomp/contactmessage";

export default class AdminScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationForm: true,
      studentData: false,
      questionAnswer: false,
      uploadLecture: false,
      uploadResult: false,
      contactMessage: false,
    };
  }
  render() {
    const {
      registrationForm,
      studentData,
      questionAnswer,
      uploadLecture,
      uploadResult,
      contactMessage,
    } = this.state;
    return (
      <div>
        <div className="row">
          <div
            style={{
              height: "100%",
              minHeight: "100vh",
            }}
            className="col-md-3 sideBar"
          >
            <div className="p-5">
              <h1>Admin Panel</h1>
            </div>
            <div className="p-5">
              <ul className="list">
                <li
                  onClick={()=>this.setState({
                    registrationForm: true,
                    studentData: false,
                    questionAnswer: false,
                    uploadLecture: false,
                    uploadResult: false,
                    contactMessage: false,
                  })}
                >
                  Signup Form
                </li>
                <li
                  onClick={()=>this.setState({
                    registrationForm: false,
                    studentData: true,
                    questionAnswer: false,
                    uploadLecture: false,
                    uploadResult: false,
                    contactMessage: false,
                  })}
                >
                  Students
                </li>
                <li
                  onClick={()=>this.setState({
                    registrationForm: false,
                    studentData: false,
                    questionAnswer: false,
                    uploadLecture: true,
                    uploadResult: false,
                    contactMessage: false,
                  })}
                >
                  Upload Video
                </li>
                <li
                  onClick={()=>this.setState({
                    registrationForm: false,
                    studentData: false,
                    questionAnswer: true,
                    uploadLecture: false,
                    uploadResult: false,
                    contactMessage: false,
                  })}
                >
                  Question Answer
                </li>
                <li
                  onClick={()=>this.setState({
                    registrationForm: false,
                    studentData: false,
                    questionAnswer: false,
                    uploadLecture: false,
                    uploadResult: true,
                    contactMessage: false,
                  })}
                >
                  Result
                </li>
                <li
                  onClick={()=>this.setState({
                    registrationForm: false,
                    studentData: false,
                    questionAnswer: false,
                    uploadLecture: false,
                    uploadResult: false,
                    contactMessage: true,
                  })}
                >
                  Contact Messages
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
            <div className="container py-5">
              {registrationForm ? <RegistrationForm /> : false}
              {studentData ? <StudentData /> : false}
              {questionAnswer ? <QuestionANswer /> : false}
              {uploadLecture ? <UploadLecture /> : false}
              {uploadResult ? <UploadResult /> : false}
              {contactMessage ? <ContactMessage /> : false}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
