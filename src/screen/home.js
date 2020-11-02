import React from "react";
import Header from '../component/header/mainHeader'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <Header />
      </div>
    );
  }
}
