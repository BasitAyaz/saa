import React from "react";
import Header from '../component/header/mainHeader';
import ContactForm from '../component/contact/contactform'


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        
          <Header />
          <ContactForm />
      </div>
    );
  }
}
