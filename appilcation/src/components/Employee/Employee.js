import React, { Component } from "react";
import "./Employee.css";

export default class Employee extends Component {
  render() {
    const { employee } = this.props;
    const { name, picture, phone, email, dob } = employee;
    const date = new Date(dob.date).toDateString();
    return (
      <tbody>
        <tr>
          <td>
            <img src={picture.thumbnail} alt="Employee" />
          </td>
          <td>
            <div>{`${name.first} ${name.last}`}</div>
          </td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{date}</td>
        </tr>
      </tbody>
    );
  }
}
