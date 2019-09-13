import React, { Component } from 'react'
import DetailPage from './comp/DetailPage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <Router>
      <div className = "container">
      <Switch>

      <Route exact path = "/" component = {DetailPage} />
      
      </Switch>
      </div>
    </Router>
    )
  }
}
