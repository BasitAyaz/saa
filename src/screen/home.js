import React from "react";
import Header from "../component/header/mainHeader";
import Courses from "../component/dashboard/courses";
import ShortDetail from "../component/shortdetail/shortDetail";
import Timing from "../component/dashboard/timing";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <ShortDetail />
        <Timing />
        <Courses />
      </div>
    );
  }
}
