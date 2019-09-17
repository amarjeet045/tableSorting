import React, { Component } from 'react'

import Paginations from './comp/Pagianations';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UserDetail from './comp/UserDetail';
import './App.css'
export default class App extends Component {
  render() {
    return (
      <Router>
     
      <Switch>

      <Route exact path = "/" component = {Paginations} />
      <Route exact path = "/user/:id" component = {UserDetail} />
      
      </Switch>
      
    </Router>
    )
  }
}
