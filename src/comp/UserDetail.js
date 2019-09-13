import React, { Component } from 'react'
import Table from './Tables';


import 'bootstrap/dist/css/bootstrap.min.css';

export default class UserDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isloaded:false
        }
    
    }
    componentDidMount(){
        fetch('https://demo9197058.mockable.io/users')
        .then(res=>res.json())
        .then(json => {
       
          this.setState({
            isLoaded:true,
            items:json,
            
          })
          
    
        })
      }
    render() {
        return (
            <div>
                <Table items={this.state.items}/>
                
               
            </div>
        )
    }
}
