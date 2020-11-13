import React from "react";
import logo from "../images/logo.png";
import AdminScreen from '../component/admin/adminscreen'

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{
        backgroundColor:'#fff5e6',
        margin:'0',
        padding:'0'
      }}>
        <AdminScreen />
      </div>
    );
  }
}
