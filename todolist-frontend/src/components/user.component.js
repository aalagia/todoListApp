import React, { Component } from 'react';

class User extends Component {
    constructor(){
        super();
        this.state = {
            username:""
        }
    }
    onChange = e =>{
        this.setState({[e.target.id]: e.target.value});    
    }
    onSubmit = e =>{
        e.preventDefault();
        const userData = {
            username:this.state.username
        };
        console.log(userData);
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

export default User;