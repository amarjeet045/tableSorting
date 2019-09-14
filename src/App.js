import React, { Component } from 'react'
import DetailPage from './comp/DetailPage'
import Paginations from './comp/Pagianations';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UserDetail from './comp/UserDetail';
import './App.css'
export default class App extends Component {
  render() {
    return (
      <Router>
      <div className = "container">
      <Switch>

      <Route exact path = "/" component = {Paginations} />
      <Route exact path = "/user/:id" component = {UserDetail} />
      
      </Switch>
      </div>
    </Router>
    )
  }
}
