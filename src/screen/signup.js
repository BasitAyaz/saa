import React from "react";
import Header from '../component/header/mainHeader';
import SignupForm from '../component/signup/signupForm'


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <Header />
          <SignupForm />
      </div>
    );
  }
}
