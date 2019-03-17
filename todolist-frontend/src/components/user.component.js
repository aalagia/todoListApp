import React, { Component } from 'react';
import { registerUser } from "../actions/userFunctions";


export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            redirect : false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = e =>{
        this.setState({[e.target.id]: e.target.value});    
    }
    onSubmit = e =>{
        e.preventDefault();
        this.setState({username:this.state.username, redirect : true});
       
        registerUser(this.state.username).then(res => {
            console.log(res.data);
          });
        this.props.history.push('/home/'+this.state.username);
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                            className="form-control"
                            onChange={this.onChange}
                            id="username"
                            
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}

