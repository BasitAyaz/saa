import React from "react";
import "../admin.css";

export default class AdminScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="top p-5">
          <div className="row">
            <div className="col-md-4 p-5">
              <select className='inp'>
                <option>Select City</option>
                <option>Karachi</option>
                <option>Islamabad</option>
                <option>Hyderabad</option>
                <option>Faisalabad</option>
              </select>
            </div>
            <div className="col-md-4 p-5">
              <select className='inp'>
                <option>Select Course</option>
                <option>Tajveed</option>
                <option>Darse Nizami</option>
              </select>
            </div>
            <div className="col-md-4 p-5">
              <select className='inp'>
                <option>Select Age Group</option>
                <option>5 to 10</option>
                <option>10 to 15</option>
                <option>15 above</option>
              </select>
            </div>
          </div>
          <div>
            <table className='studentData'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Father</th>
                  <th>Contact</th>
                  <th>CNIC</th>
                  <th>Course</th>
                  <th>Fee Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basit Ahmed</td>
                  <td>Ayaz Ahmed</td>
                  <td>03072199560</td>
                  <td>4210119738169</td>
                  <td>Darse-e-NIzami</td>
                  <td class="color">Paid</td>
                </tr>
                <tr>
                  <td>Basit Ahmed</td>
                  <td>Ayaz Ahmed</td>
                  <td>03072199560</td>
                  <td>4210119738169</td>
                  <td>Darse-e-NIzami</td>
                  <td class="color">Paid</td>
                </tr>
                <tr>
                  <td>Basit Ahmed</td>
                  <td>Ayaz Ahmed</td>
                  <td>03072199560</td>
                  <td>4210119738169</td>
                  <td>Darse-e-NIzami</td>
                  <td class="color">Paid</td>
                </tr>
                <tr>
                  <td>Basit Ahmed</td>
                  <td>Ayaz Ahmed</td>
                  <td>03072199560</td>
                  <td>4210119738169</td>
                  <td>Darse-e-NIzami</td>
                  <td class="color">Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
