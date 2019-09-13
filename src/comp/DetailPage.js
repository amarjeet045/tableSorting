import React, { Component } from "react";
import Table from "./Tables";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.onSort = this.onSort.bind(this);
    this.numberSort= this.numberSort.bind(this);
  }
  componentDidMount() {
    fetch("https://demo9197058.mockable.io/users")
      .then(res => res.json())
      .then(json => {
          console.log(json);
        this.setState({
          data: json
        });
      });
  }
  onSort(event, sortKey) {
    const data = this.state.data;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ data });
  }
  numberSort(event,sortkey1){
      const data = this.state.data;
      data.sort((a,b)=> a[sortkey1]-b[sortkey1]);
      this.setState({data});
    }
  render() {
    var newdata = this.state.data;
    return (
        
      <table className="table">
        <thead>
          <tr>
            <th onClick={e => this.onSort(e, "first_name")}>First Name</th>
            <th onClick={e => this.onSort(e, "last_name")}>Last value</th>
            <th onClick={e => this.onSort(e, "company_name")}>Company Name</th>
            <th onClick={e => this.onSort(e, "state")}>State</th>
            <th onClick={e => this.onSort(e, "city")}>City</th>
            <th onClick={e => this.numberSort(e, "zip")}>ZIP</th>
            <th onClick={e => this.onSort(e, "email")}>Email</th>
            <th onClick={e => this.onSort(e, "web")}>Web</th>
            <th onClick={e => this.numberSort(e, "age")}>Age</th>
            <th>Details</th>
          
            
          </tr>
        </thead>
        <tbody>
          {newdata.map(function(account, index) {
            return (
              <tr key={index} data-item={account}>
                <td data-title="First NAme">{account.first_name}</td>
                <td data-title="Last name">{account.last_name}</td>
                <td data-title="company NAme">{account.company_name}</td>
                <td data-title="state">{account.state}</td>
                <td data-title="city">{account.city}</td>
                <td data-title="zip">{account.zip}</td>
                <td data-title="email">{account.email}</td>
                <td data-title="web">{account.web}</td>
                <td data-title="age">{account.age}</td>
                <td> <Link to = {`user/${account.id}`} className="btn btn-dark btn-block">
                        view Details
                    </Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
