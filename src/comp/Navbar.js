import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-dark bg-primary mb-5" >
             <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go back
          </Link>
            </nav>
           
        )
    }
}
