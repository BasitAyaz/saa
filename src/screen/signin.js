import React from "react";
import Header from "../component/header/mainHeader";
import SigninForm from "../component/signin/signinform";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff5e6",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        {/* <Header /> */}
        <SigninForm />
      </div>
    );
  }
}
