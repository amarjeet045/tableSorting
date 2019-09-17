import React, { Component } from "react";
import Table from "./Tables";
import Navbar from './Navbar';

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false
    };
  }
  componentDidMount() {
    fetch("https://demo9197058.mockable.io/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var newDatas = this.state.items;

    const UserPagi = newDatas.filter(
      account => account.id == this.props.match.params.id
    );

    return (
      <>
      <Navbar />
        {UserPagi.map(function(data, index) {
          return (
            <div className="card" style={{ width: "28rem", margin: "2% auto" }}>
              <div className="card-header">Details</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  First Name{" "}
                  <span style={{ float: "right" }}>{data.first_name}</span>
                </li>
                <li className="list-group-item">
                  Last Name{" "}
                  <span style={{ float: "right" }}>{data.last_name}</span>
                </li>
                <li className="list-group-item">
                  Company Name
                  <span style={{ float: "right" }}>{data.company_name}</span>
                </li>
                <li className="list-group-item">
                  State<span style={{ float: "right" }}>{data.state}</span>
                </li>
                <li className="list-group-item">
                  City<span style={{ float: "right" }}>{data.city}</span>
                </li>
                <li className="list-group-item">
                  Zip<span style={{ float: "right" }}>{data.zip}</span>
                </li>
                <li className="list-group-item">
                  Email<span style={{ float: "right" }}>{data.email}</span>
                </li>
                <li className="list-group-item">
                  Web<span style={{ float: "right" }}>{data.web}</span>
                </li>
                <li className="list-group-item">
                  Age<span style={{ float: "right" }}>{data.age}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}
