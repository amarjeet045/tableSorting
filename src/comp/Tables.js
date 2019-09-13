import React from 'react';
import {Link} from 'react-router-dom';
const Table = ({ items }) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company Name</th>
            <th>City</th>
            <th>State</th>
            <th>ZIP</th>
            <th>Email</th>
            <th>Web</th>
            <th>Age</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          { (items.length > 0) ? items.map( (items, index) => {
             return (
              <tr key={ index }>
                <td>{ items.first_name }</td>
                <td>{ items.last_name }</td>
                <td>{ items.company_name}</td>
                <td>{ items.city }</td>
                <td>{ items.state }</td>
                <td>{ items.zip }</td>
                <td>{ items.email }</td>
                <td>{ items.web }</td>
                <td>{ items.age }</td>
                <td> <Link to = {`user/${items.id}`} className="btn btn-dark btn-block">
                        view Details
                    </Link></td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading…</td></tr> }
        </tbody>
      </table>
    );
  }
export default Table