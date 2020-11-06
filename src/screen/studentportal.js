import React from "react";
import Header from "../component/header/mainHeader";
import MainComp from '../component/student/maincomp'

export default class Student extends React.Component {
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
        <MainComp />
      </div>
    );
  }
}
