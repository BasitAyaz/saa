import React from "react";
import "../admin.css";

export default class ContactMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="top p-5">
          <div>
            <h2>Contact Message</h2>
            <table className='studentData'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Basit Ahmed</td>
                        <td>example@gmail.com</td>
                        <td>03072199560</td>
                        <td>Your programm is very impressive and very informative</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
