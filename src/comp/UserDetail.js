import React, { Component } from 'react'
import Table from './Tables';

import {Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
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
        var newDatas = this.state.items
        
        const UserPagi = newDatas.filter((account)=>account.id==this.props.match.params.id)
        
        return (
            <>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
               
                </Navbar>
            </Container>
             {UserPagi.map(function(data,index){
                 return(
                    <div className="card">
                    <h5>First Name <span style={{float:"right"}}>{data.first_name}</span></h5>
                    <h5>Last Name  <span style={{float:"right"}}>{data.last_name}</span></h5>
                    <h5>Company Name <span style={{float:"right"}}>{data.company_name}</span></h5>
                    <h5>State <span style={{float:"right"}}>{data.state}</span></h5>
                    <h5>City <span style={{float:"right"}}>{data.city}</span></h5>
                    <h5>Zip <span style={{float:"right"}}>{data.zip}</span> </h5>
                    <h5>Email <span style={{float:"right"}}>{data.email}</span></h5>
                    <h5>Web <span style={{float:"right"}}>{data.web} </span></h5>
                    <h5>Age <span style={{float:"right"}}>{data.age}</span></h5>
                </div>
                 );
             })}
            
               
            </>
        )
    }
}
