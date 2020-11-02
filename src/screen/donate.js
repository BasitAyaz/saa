import React from "react";
import Header from '../component/header/mainHeader'

export default class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div >
          <Header />
          <h1>Donate</h1>
      </div>
    );
  }
}
